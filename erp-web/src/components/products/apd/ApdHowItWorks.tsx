'use client';

import { ArrowRight, Bot, Database, UploadCloud } from 'lucide-react';

const steps = [
    {
        step: '01',
        icon: UploadCloud,
        title: 'Girdi (Capture)',
        description: 'Faturalar, e-postalar veya tarayıcıdan gelen fiziksel belgeler sisteme otomatik olarak ulaşır.',
        color: 'from-blue-500/20 to-blue-900/20',
        iconColor: 'text-blue-400',
    },
    {
        step: '02',
        icon: Bot,
        title: 'Otomasyon (Process)',
        description: 'Yapay zeka motorumuz (OCR) verileri okur, doğrular ve önceden belirlenmiş iş kurallarınıza göre anlamlandırır.',
        color: 'from-purple-500/20 to-purple-900/20',
        iconColor: 'text-purple-400',
    },
    {
        step: '03',
        icon: Database,
        title: 'SAP Kaydı (Post)',
        description: 'Doğrulanan sipariş ve fatura verileri, insan müdahalesi olmadan SAP sisteminize (FI/MM/SD) anında aktarılır.',
        color: 'from-emerald-500/20 to-emerald-900/20',
        iconColor: 'text-emerald-400',
    },
];

export default function ApdHowItWorks() {
    return (
        <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#060d1a] overflow-hidden">
            {/* Decorative Line */}
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#3463ac]/30 to-transparent z-0 hidden lg:block" />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        APD ile Süreç <span className="text-[#3463ac]">Nasıl İşler?</span>
                    </h2>
                    <p className="text-lg text-slate-400">
                        Üç basit adımla karmaşık veri yığınlarını, yapılandırılmış ve onaylanmış
                        SAP belgelerine dönüştürüyoruz.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
                    {steps.map((item, idx) => (
                        <div key={idx} className="relative group flex flex-col items-center text-center">
                            {/* Connector Arrow (Desktop) */}
                            {idx < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-[50px] -right-[60px] text-[#3463ac]/20 group-hover:text-[#3463ac]/60 transition-colors z-20">
                                    <ArrowRight className="w-10 h-10" />
                                </div>
                            )}

                            {/* Step Number Context Component */}
                            <div className="absolute -top-12 -left-4 text-[120px] font-black text-white/[0.02] tracking-tighter select-none z-0">
                                {item.step}
                            </div>

                            {/* Icon Circle */}
                            <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mb-8 border border-white/10 shadow-xl z-10 transition-transform duration-500 group-hover:scale-110 group-hover:border-white/20`}>
                                <item.icon className={`w-10 h-10 ${item.iconColor}`} />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 z-10">{item.title}</h3>
                            <p className="text-slate-400 leading-relaxed max-w-sm z-10">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
