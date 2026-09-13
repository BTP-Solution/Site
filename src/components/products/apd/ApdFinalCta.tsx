'use client';

import { ShieldCheck, Lock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { getApdContent } from '@/lib/i18n/services/apdProduct';

export default function ApdFinalCta({ lang }: { lang: string }) {
    const t = getApdContent(lang).finalCta;
    return (
        <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#060d1a] to-[#0a1628] overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-40">
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#3463ac]/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#ff7700]/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="flex flex-wrap justify-center items-center gap-8 mb-20 pb-16 border-b border-white/5">
                    <div className="flex items-center gap-3">
                        <ShieldCheck className="w-8 h-8 text-emerald-500" />
                        <div>
                            <p className="text-sm font-bold text-white uppercase tracking-wider">{t.trust.iso.title}</p>
                            <p className="text-xs text-slate-400">{t.trust.iso.subtitle}</p>
                        </div>
                    </div>
                    <div className="hidden sm:block w-px h-8 bg-white/10" />
                    <div className="flex items-center gap-3">
                        <Lock className="w-8 h-8 text-blue-400" />
                        <div>
                            <p className="text-sm font-bold text-white uppercase tracking-wider">{t.trust.soc.title}</p>
                            <p className="text-xs text-slate-400">{t.trust.soc.subtitle}</p>
                        </div>
                    </div>
                    <div className="hidden sm:block w-px h-8 bg-white/10" />
                    <div className="flex items-center gap-3">
                        <div className="text-2xl font-black text-[#ff7700]">{t.trust.sla.value}</div>
                        <div>
                            <p className="text-sm font-bold text-white uppercase tracking-wider">{t.trust.sla.title}</p>
                            <p className="text-xs text-slate-400">{t.trust.sla.subtitle}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#000000]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    <div>
                        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            {t.titlePre} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3463ac] to-[#8aade6]">{t.titleHighlight}</span> {t.titlePost}
                        </h2>
                        <p className="text-lg text-slate-400 mb-8 leading-relaxed">{t.subtitle}</p>
                        <ul className="space-y-3 mb-12">
                            {t.features.map((feat, i) => (
                                <li key={i} className="flex items-center text-slate-300">
                                    <span className={`w-1.5 h-1.5 rounded-full mr-3 ${i === 0 ? 'bg-[#ff7700]' : i === 1 ? 'bg-[#3463ac]' : 'bg-emerald-500'}`} />
                                    {feat}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <ContactForm lang={lang} />
                </div>
            </div>
        </section>
    );
}
