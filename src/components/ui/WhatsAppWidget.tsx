'use client';
import { useEffect, useRef, useState } from 'react';
import { MessageCircle, X, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function WhatsAppWidget({ lang }: { lang: string }) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const button = useRef<HTMLButtonElement>(null);
    const en = lang === 'en';
    const message = en ? 'Hello, I would like to get information about BTP Solution services.' : 'Merhaba, BTP Solution hizmetleri hakkında bilgi almak istiyorum.';
    useEffect(() => {
        const close = (event: MouseEvent) => { if (!ref.current?.contains(event.target as Node)) setOpen(false); };
        const escape = (event: KeyboardEvent) => { if (event.key === 'Escape' && open) { setOpen(false); button.current?.focus(); } };
        document.addEventListener('click', close); document.addEventListener('keydown', escape);
        return () => { document.removeEventListener('click', close); document.removeEventListener('keydown', escape); };
    }, [open]);
    return <div ref={ref} data-contact-widget className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3">
        {open && <div id="quick-contact" className="w-64 rounded-lg border border-slate-200 bg-white p-5 text-[#142b4a] shadow-xl">
            <p className="mb-4 text-sm font-semibold">{en ? 'How can we help?' : 'Nasıl yardımcı olabiliriz?'}</p>
            <div className="grid gap-4 text-sm">
                <Link href={`/${lang}/contact`} onClick={() => setOpen(false)} className="flex items-center justify-between">{en ? 'Contact form' : 'İletişim formu'}<ArrowUpRight size={15} aria-hidden="true" /></Link>
                <a className="flex items-center justify-between" href={`https://wa.me/905547251187?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer">WhatsApp<ArrowUpRight size={15} aria-hidden="true" /></a>
                <a className="flex items-center justify-between" href="https://teams.microsoft.com/l/chat/0/0?users=erdal.eser@btpsolution.com" target="_blank" rel="noopener noreferrer">Microsoft Teams<ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
        </div>}
        <button ref={button} type="button" aria-label={en ? 'Contact options' : 'İletişim seçenekleri'} aria-expanded={open} aria-controls="quick-contact" onClick={() => setOpen(!open)} className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-[#234f89] text-white shadow-lg transition-colors hover:bg-[#173b6a]">{open ? <X size={20} aria-hidden="true" /> : <MessageCircle size={21} aria-hidden="true" />}</button>
    </div>;
}
