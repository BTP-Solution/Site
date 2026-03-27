'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { getApdContent } from '@/lib/i18n/services/apdProduct';

export default function ApdFAQ({ lang }: { lang: string }) {
    const t = getApdContent(lang).faq;
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#0a1628]/30">
            <div className="max-w-4xl mx-auto w-full">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t.title}</h2>
                    <p className="text-slate-400">{t.subtitle}</p>
                </div>

                <div className="space-y-4">
                    {t.items.map((faq, idx) => (
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
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
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
