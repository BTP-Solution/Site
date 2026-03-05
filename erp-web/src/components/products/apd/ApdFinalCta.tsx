'use client';

import { ShieldCheck, Lock, Send, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function ApdFinalCta() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
    };

    return (
        <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#060d1a] to-[#0a1628] overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-40">
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#3463ac]/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#ff7700]/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10">

                {/* Trust Indicators (Optional Pre-CTA block) */}
                <div className="flex flex-wrap justify-center items-center gap-8 mb-20 pb-16 border-b border-white/5">
                    <div className="flex items-center gap-3">
                        <ShieldCheck className="w-8 h-8 text-emerald-500" />
                        <div>
                            <p className="text-sm font-bold text-white uppercase tracking-wider">ISO 27001</p>
                            <p className="text-xs text-slate-400">Bilgi Güvenliği</p>
                        </div>
                    </div>
                    <div className="hidden sm:block w-px h-8 bg-white/10" />
                    <div className="flex items-center gap-3">
                        <Lock className="w-8 h-8 text-blue-400" />
                        <div>
                            <p className="text-sm font-bold text-white uppercase tracking-wider">SOC 2 Type II</p>
                            <p className="text-xs text-slate-400">Veri İzolasyonu</p>
                        </div>
                    </div>
                    <div className="hidden sm:block w-px h-8 bg-white/10" />
                    <div className="flex items-center gap-3">
                        <div className="text-2xl font-black text-[#ff7700]">%99.9</div>
                        <div>
                            <p className="text-sm font-bold text-white uppercase tracking-wider">Garanti</p>
                            <p className="text-xs text-slate-400">Kesintisiz SLA</p>
                        </div>
                    </div>
                </div>

                {/* Main CTA Split */}
                <div className="bg-[#000000]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left: Copy */}
                    <div>
                        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Operasyonel <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3463ac] to-[#8aade6]">Verimliliği</span> Ertelemeyin.
                        </h2>
                        <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                            SAP sisteminizi sadece bir kayıt aracı olmaktan çıkarıp, otonom
                            bir operasyon merkezine dönüştürün. Otomasyonun şirketinizde
                            yaratacağı etkiyi kendi gözlerinizle görün.
                        </p>
                        <ul className="space-y-3 mb-12">
                            <li className="flex items-center text-slate-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#ff7700] mr-3" />
                                Ücretsiz Keşif Görüşmesi
                            </li>
                            <li className="flex items-center text-slate-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#3463ac] mr-3" />
                                Sisteminize Özel ROI Hesaplaması
                            </li>
                            <li className="flex items-center text-slate-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3" />
                                Kavram Kanıtı (PoC) Desteği
                            </li>
                        </ul>
                    </div>

                    {/* Right: Form */}
                    <div className="bg-[#0a1628] rounded-2xl p-6 lg:p-8 border border-white/5 relative">
                        {isSuccess ? (
                            <div className="absolute inset-0 z-20 bg-[#0a1628] rounded-2xl flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-500">
                                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Talebiniz Alındı</h3>
                                <p className="text-slate-400">Uzman ekiplerimiz en kısa sürede sağladığınız iletişim adresi üzerinden sizinle iletişime geçecektir.</p>
                            </div>
                        ) : null}

                        <h3 className="text-xl font-bold text-white mb-6">Demoyu Planlayalım</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label htmlFor="name" className="text-xs font-medium text-slate-400 uppercase tracking-wider">İsim Soyisim</label>
                                    <input required id="name" type="text" className="w-full bg-[#060d1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-[#3463ac] focus:ring-1 focus:ring-[#3463ac] transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="company" className="text-xs font-medium text-slate-400 uppercase tracking-wider">Şirket Adı</label>
                                    <input required id="company" type="text" className="w-full bg-[#060d1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-[#3463ac] focus:ring-1 focus:ring-[#3463ac] transition-all" placeholder="ACME Corp." />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="email" className="text-xs font-medium text-slate-400 uppercase tracking-wider">Kurumsal E-posta</label>
                                <input required id="email" type="email" className="w-full bg-[#060d1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-[#3463ac] focus:ring-1 focus:ring-[#3463ac] transition-all" placeholder="john@acme.com" />
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="message" className="text-xs font-medium text-slate-400 uppercase tracking-wider">Mesajınız (Opsiyonel)</label>
                                <textarea id="message" rows={3} className="w-full bg-[#060d1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-[#3463ac] focus:ring-1 focus:ring-[#3463ac] transition-all resize-none" placeholder="Uyguladığınız yapı hakkında ön bilgi verebilirsiniz..."></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full group relative inline-flex items-center justify-center gap-2 mt-4 px-8 py-4 bg-[#ff7700] disabled:bg-[#ff7700]/50 text-white rounded-xl font-semibold overflow-hidden transition-transform active:scale-95"
                            >
                                {isSubmitting ? (
                                    <span className="animate-pulse flex items-center gap-2">Gönderiliyor...</span>
                                ) : (
                                    <>
                                        <span className="relative z-10">Talebi Gönder</span>
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
