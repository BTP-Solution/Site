'use client';

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { X } from 'lucide-react';

export default function CookieBanner({ dict }: { dict: any }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user already accepted cookies
        const consent = Cookies.get('btp-cookie-consent');
        if (!consent) {
            setIsVisible(true);
        } else {
            // Track visit analytics since they consented
            trackVisit();
        }
    }, []);

    const trackVisit = () => {
        const visits = Cookies.get('btp-visits') || '0';
        Cookies.set('btp-visits', (parseInt(visits) + 1).toString(), { expires: 365 });

        const firstVisit = Cookies.get('btp-first-visit');
        if (!firstVisit) {
            Cookies.set('btp-first-visit', new Date().toISOString(), { expires: 365 });
        }
    };

    const handleAccept = () => {
        Cookies.set('btp-cookie-consent', 'true', { expires: 365 });
        setIsVisible(false);
        trackVisit(); // Start tracking immediately after consent
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 z-50 md:max-w-sm">
            <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-xl ring-1 ring-white/5">
                <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-white">Çerez Politikası</h3>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="text-slate-400 hover:text-white transition-colors focus-visible:outline-none"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <p className="text-sm text-slate-300">
                    Sitemizi daha iyi deneyimlemeniz ve kişiselleştirilmiş hizmet sunabilmemiz için çerezleri kullanıyoruz.
                </p>

                <div className="flex items-center gap-3 mt-2">
                    <button
                        onClick={handleAccept}
                        className="flex-1 rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-medium text-white shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all hover:bg-purple-500 active:scale-95 focus-visible:outline-none"
                    >
                        Kabul Ediyorum
                    </button>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="px-4 py-2.5 text-sm font-medium text-slate-400 hover:text-white transition-colors focus-visible:outline-none"
                    >
                        Reddet
                    </button>
                </div>
            </div>
        </div>
    );
}
