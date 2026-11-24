'use client';
import { useRef, useState, type FormEvent } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm({ lang, purpose = 'general', tone = 'dark' }: { lang: string; purpose?: 'general' | 'apd'; tone?: 'dark' | 'light' }) {
    const en = lang === 'en';
    const t = en ? {
        title: 'Contact our team', name: 'Full name', company: 'Company', email: 'Corporate email', message: 'Message',
        submit: 'Send request', submitting: 'Sending…', success: 'Request submitted',
        successMessage: 'Your request has been accepted for email delivery. Our team will get back to you.',
        error: 'We could not send your request. Please try again or email info@btpsolution.com.',
        rate: 'Too many requests. Please wait a minute and try again.', note: 'We use these details to respond to your request.',
    } : {
        title: 'Ekibimizle iletişime geçin', name: 'Ad soyad', company: 'Şirket', email: 'Kurumsal e-posta', message: 'Mesaj',
        submit: 'Talebi gönder', submitting: 'Gönderiliyor…', success: 'Talebiniz gönderildi',
        successMessage: 'Talebiniz e-posta ile iletilmek üzere kabul edildi. Ekibimiz sizinle iletişime geçecek.',
        error: 'Talebinizi gönderemedik. Tekrar deneyin veya info@btpsolution.com adresine yazın.',
        rate: 'Çok fazla istek gönderdiniz. Bir dakika bekleyip tekrar deneyin.', note: 'Bu bilgileri talebinize yanıt vermek için kullanırız.',
    };
    if (purpose === 'apd') {
        t.title = en ? 'Request an APD scope discussion' : 'APD için kapsam görüşmesi talep edin';
        t.submit = en ? 'Discuss APD with our team' : 'APD için görüşelim';
    }
    const light = tone === 'light';
    const [state, setState] = useState<'idle' | 'sending' | 'success'>('idle');
    const [error, setError] = useState('');
    const attempt = useRef<{ body: string; id: string } | null>(null);
    async function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (state === 'sending') return;
        const values = new FormData(event.currentTarget);
        const body = JSON.stringify({ ...Object.fromEntries(values), lang });
        if (attempt.current?.body !== body) attempt.current = { body, id: crypto.randomUUID() };
        setState('sending');
        setError('');
        try {
            const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Idempotency-Key': attempt.current.id }, body, signal: AbortSignal.timeout(15000) });
            if (!response.ok) { setError(response.status === 429 ? t.rate : t.error); setState('idle'); return; }
            const result: unknown = await response.json();
            if (!result || typeof result !== 'object' || !('ok' in result) || result.ok !== true) throw new Error('Unexpected response');
            setState('success');
        } catch { setError(t.error); setState('idle'); }
    }
    const inputClass = `w-full rounded-md border px-4 py-3 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40 ${light ? 'border-slate-300 bg-white text-[#142b4a]' : 'border-white/20 bg-[#060d1a] text-white'}`;
    const labelClass = `block text-sm ${light ? 'text-slate-600' : 'text-slate-300'}`;
    return <div id="contact-form" className={`scroll-mt-32 rounded-lg border p-6 sm:p-8 ${light ? 'border-slate-200 bg-white text-[#142b4a]' : 'border-white/10 bg-[#0a1628] text-white'}`}>
        {state === 'success' ? <div role="status" className="py-10 text-center">
            <CheckCircle2 aria-hidden="true" className="mx-auto mb-6 h-12 w-12 text-emerald-400" />
            <h2 className="mb-3 text-2xl font-bold">{t.success}</h2><p className={labelClass}>{t.successMessage}</p>
        </div> : <form onSubmit={submit} className="space-y-5" aria-label={t.title} aria-busy={state === 'sending'}>
            <h2 className="text-xl font-semibold">{t.title}</h2>
            <input type="hidden" name="topic" value={purpose} />
            <fieldset disabled={state === 'sending'} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                    <label className={labelClass}>{t.name}<input className={inputClass} name="name" autoComplete="name" required minLength={2} maxLength={100} /></label>
                    <label className={labelClass}>{t.company}<input className={inputClass} name="company" autoComplete="organization" required maxLength={160} /></label>
                </div>
                <label className={labelClass}>{t.email}<input className={inputClass} name="email" type="email" autoComplete="email" required maxLength={254} /></label>
                <label className={labelClass}>{t.message}<textarea className={inputClass} name="message" rows={4} required minLength={10} maxLength={4000} defaultValue={purpose === 'apd' ? (en ? 'I would like to discuss APD’s current scope and suitability for our document processes.' : 'APD’nin güncel kapsamını ve belge süreçlerimize uygunluğunu görüşmek istiyorum.') : ''} /></label>
                <div hidden aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
                <p className={`text-xs ${light ? 'text-slate-600' : 'text-slate-400'}`}>{t.note}</p>
                <button type="submit" className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-[#234f89] px-6 py-4 font-semibold text-white hover:bg-[#173b6a] disabled:opacity-60"><Send aria-hidden="true" className="h-4 w-4" />{state === 'sending' ? t.submitting : t.submit}</button>
            </fieldset>
            {error && <p role="alert" className={`text-sm ${light ? 'text-rose-700' : 'text-rose-300'}`}>{error}</p>}
            <a className={`inline-block text-sm underline ${light ? 'text-[#234f89]' : 'text-blue-300'}`} href="mailto:info@btpsolution.com">info@btpsolution.com</a>
        </form>}
    </div>;
}
