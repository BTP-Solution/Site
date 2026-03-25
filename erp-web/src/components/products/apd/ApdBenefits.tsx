'use client';

import { getApdContent } from '@/lib/i18n/services/apdProduct';

export default function ApdBenefits({ lang }: { lang: string }) {
    const t = getApdContent(lang).benefits;

    return (
        <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#060d1a]">
            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {t.items.map((benefit, idx) => (
                        <div key={idx} className={`bg-[#0a1628]/40 border-l-4 ${benefit.accent} rounded-r-2xl p-8 hover:bg-[#0a1628]/80 transition-colors duration-300`}>
                            <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                            <ul className="space-y-3 mb-6">
                                {benefit.points.map((point, i) => (
                                    <li key={i} className="flex items-start text-slate-300">
                                        <span className="mr-3 text-[#ff7700] mt-1">•</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-4 border-t border-white/5">
                                <p className="text-sm text-[#3463ac] font-medium italic">
                                    {t.resultLabel} {benefit.result}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
