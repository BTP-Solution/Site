'use client';
import { useSyncExternalStore } from 'react';
import Cookies from 'js-cookie';
import { X } from 'lucide-react';
import type { Dictionary } from '@/lib/i18n/getDictionary';

const eventName = 'btp-consent-change';
const subscribe = (callback: () => void) => {
    window.addEventListener(eventName, callback);
    return () => window.removeEventListener(eventName, callback);
};
const snapshot = () => !!Cookies.get('btp-cookie-consent');
const serverSnapshot = () => true;

export default function CookieBanner({ dict }: { dict: Dictionary }) {
    const hasPreference = useSyncExternalStore(subscribe, snapshot, serverSnapshot);
    const save = (value: 'accepted' | 'rejected') => {
        Cookies.set('btp-cookie-consent', value, { expires: 365, sameSite: 'Lax', secure: window.location.protocol === 'https:', path: '/' });
        if (value === 'rejected') {
            Cookies.remove('btp-visits', { path: '/' });
            Cookies.remove('btp-first-visit', { path: '/' });
        }
        window.dispatchEvent(new Event(eventName));
    };
    if (hasPreference) return null;
    const t = dict.cookies;
    return <aside aria-label={t.title} data-cookie-banner className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto z-[60] md:max-w-sm">
        <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/95 p-6 shadow-2xl backdrop-blur-xl">
            <div className="flex items-start justify-between gap-4">
                <h2 className="font-semibold text-white">{t.title}</h2>
                <button type="button" aria-label={t.close} onClick={() => save('rejected')} className="text-slate-300"><X className="h-5 w-5" /></button>
            </div>
            <p className="text-sm text-slate-300">{t.description}</p>
            <div className="flex flex-wrap gap-3">
                <button type="button" onClick={() => save('accepted')} className="flex-1 rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-medium text-white">{t.accept}</button>
                <button type="button" onClick={() => save('rejected')} className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-300">{t.reject}</button>
            </div>
        </div>
    </aside>;
}
