'use client';

import { Building2, Factory, FileSpreadsheet } from 'lucide-react';
import { getApdContent } from '@/lib/i18n/services/apdProduct';

const scenarioIcons = [Factory, Building2, FileSpreadsheet];

export default function ApdScenarios({ lang }: { lang: string }) {
    const t = getApdContent(lang).scenarios;

    return (
        <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#060d1a]">
            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        {t.title} <span className="text-[#3463ac]">{t.titleHighlight}</span>
                    </h2>
                    <p className="text-slate-400">{t.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {t.items.map((scenario, idx) => {
                        const Icon = scenarioIcons[idx];
                        return (
                            <div key={idx} className="group bg-[#0a1628]/40 border border-white/5 rounded-2xl p-8 hover:bg-[#0a1628]/80 hover:border-[#3463ac]/30 transition-all duration-300 flex flex-col h-full">
                                <div className="w-14 h-14 rounded-xl bg-slate-800/50 flex items-center justify-center mb-6 border border-white/5">
                                    <Icon className="w-7 h-7 text-slate-300 group-hover:text-[#3463ac] transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-6">{scenario.title}</h3>
                                <div className="flex flex-col gap-4 flex-grow">
                                    <div>
                                        <h4 className="text-xs font-semibold text-[#ff7700] uppercase mb-1">{t.problemLabel}</h4>
                                        <p className="text-sm text-slate-400 leading-relaxed">{scenario.problem}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-semibold text-[#3463ac] uppercase mb-1">{t.solutionLabel}</h4>
                                        <p className="text-sm text-slate-300 leading-relaxed">{scenario.solution}</p>
                                    </div>
                                </div>
                                <div className="mt-6 pt-4 border-t border-white/10">
                                    <p className="text-sm font-semibold text-emerald-400">
                                        <span className="text-slate-500 mr-2">{t.resultLabel}</span>
                                        {scenario.result}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
