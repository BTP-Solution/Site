'use client';

import { CheckCircle2 } from 'lucide-react';
import { getApdContent } from '@/lib/i18n/services/apdProduct';

export default function ApdWhyUs({ lang }: { lang: string }) {
    const t = getApdContent(lang).whyUs;

    return (
        <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#0a1628]/30 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff7700]/10 border border-[#ff7700]/30 mb-8">
                        <span className="text-xs font-medium tracking-wide text-[#ff7700] uppercase">{t.badge}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        {t.title} <span className="text-[#3463ac]">{t.titleHighlight}</span> {t.titlePost}
                    </h2>
                    <p className="text-lg text-slate-400 mb-8 leading-relaxed">{t.subtitle}</p>

                    <ul className="space-y-4">
                        {t.differentiators.map((diff, idx) => (
                            <li key={idx} className="flex items-start">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 mr-3" />
                                <span className="text-slate-300">{diff}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-12 p-6 bg-[#060d1a] border border-[#ff7700]/20 rounded-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff7700]/10 rounded-full blur-2xl" />
                        <h4 className="text-lg font-bold text-white mb-2">{t.whyNowTitle}</h4>
                        <p className="text-slate-400 text-sm">{t.whyNowText}</p>
                    </div>
                </div>

                <div className="relative w-full aspect-square md:aspect-video lg:aspect-square flex items-center justify-center z-10">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#3463ac]/20 to-[#ff7700]/10 rounded-full blur-3xl" />
                    <div className="relative w-[80%] h-[80%] border border-white/10 rounded-full flex items-center justify-center">
                        <div className="absolute w-[60%] h-[60%] border border-white/20 rounded-full animate-[spin_20s_linear_infinite]" />
                        <div className="absolute w-[40%] h-[40%] border-t-2 border-r-2 border-[#3463ac] rounded-full animate-[spin_10s_linear_infinite_reverse]" />
                        <div className="absolute w-[20%] h-[20%] bg-[#ff7700]/80 rounded-full shadow-[0_0_50px_rgba(255,119,0,0.6)] animate-pulse" />
                    </div>
                </div>
            </div>
        </section>
    );
}
