'use client';

import { ShieldCheck, Lock, Send, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { getApdContent } from '@/lib/i18n/services/apdProduct';

export default function ApdFinalCta({ lang }: { lang: string }) {
    const t = getApdContent(lang).finalCta;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
    };

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

                    <div className="bg-[#0a1628] rounded-2xl p-6 lg:p-8 border border-white/5 relative">
                        {isSuccess ? (
                            <div className="absolute inset-0 z-20 bg-[#0a1628] rounded-2xl flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-500">
                                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{t.successTitle}</h3>
                                <p className="text-slate-400">{t.successMsg}</p>
                            </div>
                        ) : null}

                        <h3 className="text-xl font-bold text-white mb-6">{t.formTitle}</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label htmlFor="name" className="text-xs font-medium text-slate-400 uppercase tracking-wider">{t.nameLabel}</label>
                                    <input required id="name" type="text" className="w-full bg-[#060d1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-[#3463ac] focus:ring-1 focus:ring-[#3463ac] transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="company" className="text-xs font-medium text-slate-400 uppercase tracking-wider">{t.companyLabel}</label>
                                    <input required id="company" type="text" className="w-full bg-[#060d1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-[#3463ac] focus:ring-1 focus:ring-[#3463ac] transition-all" placeholder="ACME Corp." />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label htmlFor="email" className="text-xs font-medium text-slate-400 uppercase tracking-wider">{t.emailLabel}</label>
                                <input required id="email" type="email" className="w-full bg-[#060d1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-[#3463ac] focus:ring-1 focus:ring-[#3463ac] transition-all" placeholder="john@acme.com" />
                            </div>
                            <div className="space-y-1.5">
                                <label htmlFor="message" className="text-xs font-medium text-slate-400 uppercase tracking-wider">{t.messageLabel}</label>
                                <textarea id="message" rows={3} className="w-full bg-[#060d1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-[#3463ac] focus:ring-1 focus:ring-[#3463ac] transition-all resize-none" placeholder={t.messagePlaceholder}></textarea>
                            </div>
                            <button type="submit" disabled={isSubmitting} className="w-full group relative inline-flex items-center justify-center gap-2 mt-4 px-8 py-4 bg-[#ff7700] disabled:bg-[#ff7700]/50 text-white rounded-xl font-semibold overflow-hidden transition-transform active:scale-95">
                                {isSubmitting ? (
                                    <span className="animate-pulse flex items-center gap-2">{t.submitting}</span>
                                ) : (
                                    <>
                                        <span className="relative z-10">{t.submitBtn}</span>
                                        <Send className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#ff8c2b] to-[#e66a00] opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
