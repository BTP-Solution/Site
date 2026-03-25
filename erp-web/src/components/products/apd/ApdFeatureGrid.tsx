'use client';

import { Activity, GitMerge, FileSearch, ShieldCheck, Zap, Workflow } from 'lucide-react';
import { getApdContent } from '@/lib/i18n/services/apdProduct';

const featureIcons = [FileSearch, Zap, GitMerge, ShieldCheck, Activity, Workflow];

export default function ApdFeatureGrid({ lang }: { lang: string }) {
    const t = getApdContent(lang).features;

    return (
        <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#0a1628]/50">
            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t.title}</h2>
                    <p className="text-slate-400">{t.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {t.items.map((feature, idx) => {
                        const Icon = featureIcons[idx];
                        return (
                            <div key={idx} className="group relative bg-[#060d1a] border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:border-[#3463ac]/40 hover:bg-[#3463ac]/5">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#3463ac]/10 flex items-center justify-center group-hover:bg-[#3463ac]/20 transition-colors">
                                        <Icon className="w-5 h-5 text-[#3463ac]" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-slate-100">{feature.title}</h3>
                                </div>
                                <p className="text-sm text-slate-400 mb-6 leading-relaxed">{feature.description}</p>
                                <div className="mt-auto pt-4 border-t border-white/5">
                                    <p className="text-xs text-slate-500 font-medium tracking-wide uppercase">
                                        <span className="text-[#ff7700] mr-2">{t.solvesLabel}</span>
                                        {feature.problem}
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
