'use client';

import { Calculator, Clock, ShieldAlert } from 'lucide-react';
import { getApdContent } from '@/lib/i18n/services/apdProduct';

const icons = [Clock, Calculator, ShieldAlert];

export default function ApdPainPoints({ lang }: { lang: string }) {
    const t = getApdContent(lang).painPoints;

    return (
        <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#0a1628]/30">
            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {t.items.map((point, idx) => {
                        const Icon = icons[idx];
                        return (
                            <div key={idx} className="group relative bg-[#060d1a] border border-white/5 rounded-2xl p-8 hover:border-[#ff7700]/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(255,119,0,0.05)]">
                                <div className="w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center mb-6 group-hover:bg-[#ff7700]/10 transition-colors">
                                    <Icon className="w-6 h-6 text-slate-400 group-hover:text-[#ff7700] transition-colors" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-4">{point.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{point.description}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#3463ac]/20 to-[#0a1628] border border-[#3463ac]/30 rounded-2xl p-8 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#3463ac]/10 rounded-full blur-3xl" />
                    <h3 className="text-xl font-bold text-white mb-3">{t.costTitle}</h3>
                    <p className="text-lg text-slate-300">
                        {t.costPre}<strong className="text-white">{t.costBold}</strong>{t.costMid}<strong className="text-[#ff7700]">{t.costHighlight}</strong>{t.costPost}
                    </p>
                </div>
            </div>
        </section>
    );
}
