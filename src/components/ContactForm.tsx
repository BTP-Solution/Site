'use client';
import { useRef, useState, type FormEvent } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm({ lang }: { lang: string }) {
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
    const inputClass = 'w-full rounded-lg border border-white/20 bg-[#060d1a] px-4 py-3 text-white focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40';
    return <div id="contact-form" className="scroll-mt-32 rounded-2xl border border-white/10 bg-[#0a1628] p-6 sm:p-8">
        {state === 'success' ? <div role="status" className="py-10 text-center text-white">
            <CheckCircle2 aria-hidden="true" className="mx-auto mb-6 h-12 w-12 text-emerald-400" />
            <h2 className="mb-3 text-2xl font-bold">{t.success}</h2><p className="text-slate-300">{t.successMessage}</p>
        </div> : <form onSubmit={submit} className="space-y-5" aria-label={t.title} aria-busy={state === 'sending'}>
            <h2 className="text-xl font-bold text-white">{t.title}</h2>
            <fieldset disabled={state === 'sending'} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block text-sm text-slate-300">{t.name}<input className={inputClass} name="name" autoComplete="name" required minLength={2} maxLength={100} /></label>
                    <label className="block text-sm text-slate-300">{t.company}<input className={inputClass} name="company" autoComplete="organization" required maxLength={160} /></label>
                </div>
                <label className="block text-sm text-slate-300">{t.email}<input className={inputClass} name="email" type="email" autoComplete="email" required maxLength={254} /></label>
                <label className="block text-sm text-slate-300">{t.message}<textarea className={inputClass} name="message" rows={5} required minLength={10} maxLength={4000} /></label>
                <div hidden aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
                <p className="text-xs text-slate-400">{t.note}</p>
                <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#d95f00] px-6 py-4 font-semibold text-white disabled:opacity-60"><Send aria-hidden="true" className="h-4 w-4" />{state === 'sending' ? t.submitting : t.submit}</button>
            </fieldset>
            {error && <p role="alert" className="text-sm text-rose-300">{error}</p>}
            <a className="inline-block text-sm text-blue-300 underline" href="mailto:info@btpsolution.com">info@btpsolution.com</a>
        </form>}
    </div>;
}
