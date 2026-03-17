'use client';

import { ArrowRight, FileCheck2, FileScan } from 'lucide-react';
import TransitionLink from '@/components/ui/TransitionLink';

export default function ApdHero() {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                {/* Left Column: Copy */}
                <div className="flex flex-col items-start gap-8 z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3463ac]/10 border border-[#3463ac]/30">
                        <span className="flex w-2 h-2 rounded-full bg-[#ff7700] animate-pulse" />
                        <span className="text-xs font-medium tracking-wide text-[#3463ac] uppercase">Yeni Nesil Otomasyon</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight">
                        Finansal Operasyonlarınızı <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3463ac] to-[#8aade6]">
                            Sıfır Hatayla
                        </span>, Saniyeler İçinde İşleyin.
                    </h1>

                    <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                        Manuel belge işleme süreçleri yavaş, maliyetli ve hataya açıktır.
                        <strong className="text-slate-200 font-semibold"> Automatic Posting Document (APD)</strong> ile fatura,
                        fiş ve belgelerinizi yapay zeka ile okuyor, doğrudan SAP sisteminize hatasız olarak kaydediyoruz.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 pt-4">
                        <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ff7700] text-white rounded-xl font-semibold overflow-hidden transition-transform active:scale-95 hover:shadow-[0_0_20px_rgba(255,119,0,0.3)]">
                            <span className="relative z-10">Demoyu Planlayalım</span>
                            <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#ff8c2b] to-[#e66a00] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                        <TransitionLink
                            href="#tech-docs"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-slate-700 hover:border-[#3463ac] text-slate-300 hover:text-white rounded-xl font-semibold transition-all"
                        >
                            Teknik Dokümantasyonu İncele
                        </TransitionLink>
                    </div>
                </div>

                {/* Right Column: Interaction Mockup */}
                <div className="relative w-full aspect-square md:aspect-video lg:aspect-square flex items-center justify-center z-10">
                    {/* Main Mockup Container - Glassmorphism */}
                    <div className="relative w-full max-w-lg bg-[#0a1628]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 overflow-hidden">
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-[#3463ac]/20 flex items-center justify-center">
                                    <FileScan className="w-4 h-4 text-[#3463ac]" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-200">BTP APD Engine</h3>
                                    <p className="text-[10px] text-slate-500">Live Processing</p>
                                </div>
                            </div>
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                            </div>
                        </div>

                        {/* Animation Canvas Wrapper */}
                        <div className="relative h-64 w-full flex flex-col items-center justify-center gap-6">
                            {/* Document Sim */}
                            <div className="relative w-48 h-32 bg-white/[0.03] border border-white/10 rounded overflow-hidden shadow-lg animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]">
                                {/* Scanner Line */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-[#3463ac] shadow-[0_0_15px_#3463ac] animate-[scan_2s_linear_infinite]" />

                                {/* Fake Text Lines */}
                                <div className="p-4 flex flex-col gap-3 opacity-60">
                                    <div className="h-2 rounded bg-slate-600 w-3/4" />
                                    <div className="h-2 rounded bg-slate-700 w-1/2" />
                                    <div className="h-2 rounded bg-slate-700 w-5/6" />
                                    <div className="mt-4 flex justify-between">
                                        <div className="h-4 rounded bg-[#3463ac]/40 w-1/3" />
                                        <div className="h-4 rounded bg-[#ff7700]/40 w-1/4" />
                                    </div>
                                </div>
                            </div>

                            {/* Status Update */}
                            <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full w-max mx-auto shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                                <FileCheck2 className="w-4 h-4 text-emerald-400" />
                                <span className="text-xs font-semibold text-emerald-400 tracking-wide">POSTED TO SAP FI</span>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements behind mockup */}
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#ff7700]/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#3463ac]/20 rounded-full blur-3xl pointer-events-none" />
                </div>
            </div>
        </section>
    );
}
