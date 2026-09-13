export type ContactInput = { name: string; company: string; email: string; message: string; lang: 'tr' | 'en'; website: string };
export type ContactEnvironment = {
    RESEND_API_KEY?: string;
    CONTACT_FROM_EMAIL?: string;
    CONTACT_TO_EMAIL?: string;
    CONTACT_RATE_LIMITER?: { limit(options: { key: string }): Promise<{ success: boolean }> };
};

export function parseContact(value: unknown): ContactInput | null {
    if (!value || typeof value !== 'object') return null;
    const data = value as Record<string, unknown>;
    const text = (key: string) => typeof data[key] === 'string' ? data[key].trim() : '';
    const input: ContactInput = { name: text('name'), company: text('company'), email: text('email'), message: text('message'), lang: data.lang === 'en' ? 'en' : 'tr', website: text('website') };
    if (input.name.length < 2 || input.name.length > 100 || !input.company || input.company.length > 160 ||
        input.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email) ||
        input.message.length < 10 || input.message.length > 4000 || input.website || /[\r\n]/.test(input.name + input.email + input.company)) return null;
    return input;
}

export async function handleContact(request: Request, env: ContactEnvironment, send: typeof fetch = fetch): Promise<Response> {
    const fail = (error: string, status: number) => Response.json({ error }, { status, headers: { 'Cache-Control': 'no-store', ...(status === 429 ? { 'Retry-After': '60' } : {}) } });
    if (request.headers.get('origin') !== new URL(request.url).origin) return fail('invalid_origin', 403);
    if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) return fail('invalid_content_type', 415);
    // Bound actual streamed bytes too; Content-Length may be missing or untrusted.
    const reader = request.body?.getReader();
    if (!reader) return fail('invalid_input', 400);
    let size = 0;
    let body = '';
    const decoder = new TextDecoder();
    try {
        while (true) {
            const chunk = await reader.read();
            if (chunk.done) break;
            size += chunk.value.byteLength;
            if (size > 20000) { await reader.cancel(); return fail('payload_too_large', 413); }
            body += decoder.decode(chunk.value, { stream: true });
        }
        body += decoder.decode();
    } catch { return fail('invalid_input', 400); }
    let data: ContactInput | null;
    try { data = parseContact(JSON.parse(body)); } catch { return fail('invalid_input', 400); }
    if (!data) return fail('invalid_input', 400);
    if (!env.RESEND_API_KEY || !env.CONTACT_FROM_EMAIL || !env.CONTACT_RATE_LIMITER) return fail('service_unavailable', 503);
    try {
        const ip = request.headers.get('cf-connecting-ip') ?? 'local';
        const { success } = await env.CONTACT_RATE_LIMITER.limit({ key: `site-contact:${ip}` });
        if (!success) return fail('rate_limited', 429);
        const id = request.headers.get('idempotency-key');
        if (!id || !/^[a-zA-Z0-9-]{16,64}$/.test(id)) return fail('invalid_request_id', 400);
        const response = await send('https://api.resend.com/emails', {
            method: 'POST',
            headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json', 'Idempotency-Key': `site-contact/${id}` },
            body: JSON.stringify({
                from: env.CONTACT_FROM_EMAIL,
                to: [env.CONTACT_TO_EMAIL || 'info@btpsolution.com'],
                reply_to: data.email,
                subject: `BTP Solution — ${data.lang === 'en' ? 'Contact / demo request' : 'İletişim / demo talebi'}`,
                text: `Name: ${data.name}\nCompany: ${data.company}\nEmail: ${data.email}\nLanguage: ${data.lang}\n\n${data.message}`,
            }),
            signal: AbortSignal.timeout(10000),
        });
        if (!response.ok) return fail('delivery_failed', 502);
        const result: unknown = await response.json();
        if (!result || typeof result !== 'object' || !('id' in result) || typeof result.id !== 'string' || !result.id) return fail('delivery_failed', 502);
        return Response.json({ ok: true }, { headers: { 'Cache-Control': 'no-store' } });
    } catch { return fail('delivery_failed', 502); }
}
