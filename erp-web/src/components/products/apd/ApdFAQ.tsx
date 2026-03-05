'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: 'SAP sistemine entegrasyonu ne kadar sürer?',
        answer: 'Standart paket konfigürasyonumuzla mevcut sistem topolojinize 2-4 hafta içerisinde sorunsuz entegre olabiliyoruz.',
    },
    {
        question: 'Sadece S/4HANA ile mi uyumlu?',
        answer: 'Hayır, APD hem S/4HANA hem de legacy ECC sistemleriyle tam uyumlu çalışır.',
    },
    {
        question: 'Eski, kalitesi düşük faturaları okuyabiliyor mu?',
        answer: 'Gelişmiş görüntü işleme algoritmalarımız (Z-filtering) sayesinde düşük çözünürlüklü veya kırışık belgelerde yüksek okuma oranlarına ulaşıyoruz.',
    },
    {
        question: 'Bizim özel (Z) SAP modüllerimiz var, onlara veri basabilir mi?',
        answer: 'Kesinlikle. API tabanlı, modüler yapımız sayesinde özel Z-tablolarınıza veya custom function module (BAPI/RFC) yapılarınıza kolayca uyarlanabilir.',
    },
    {
        question: 'Verilerimiz nerede tutuluyor?',
        answer: 'Kurulum tercihinize (Cloud/On-Premise) bağlı olarak tamamen şirket içi sunucularınızda veya lokal güvenli veri merkezlerimizde barındırılabilir.',
    },
    {
        question: 'Demo sürecinde kendi belgelerimizi test edebilir miyiz?',
        answer: 'Evet. Kendi anonimize edilmiş fatura veya irsaliyelerinizle gerçek bir PoC (Proof of Concept) ortamı kuruyoruz.',
    },
];

export default function ApdFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#0a1628]/30">
            <div className="max-w-4xl mx-auto w-full">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Aklınızdaki Sorular
                    </h2>
                    <p className="text-slate-400">
                        Entegrasyon, güvenlik ve otomasyon süreçleri hakkında
                        en çok merak edilenler.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className={`border border-white/10 rounded-xl overflow-hidden transition-colors duration-300 ${openIndex === idx ? 'bg-[#3463ac]/10 border-[#3463ac]/30' : 'bg-[#060d1a] hover:bg-white/[0.02]'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className={`text-lg font-medium pr-8 ${openIndex === idx ? 'text-white' : 'text-slate-300'}`}>
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-[#3463ac]' : 'text-slate-500'}`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
