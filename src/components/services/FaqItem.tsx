'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-white/[0.05] bg-[#060d1a] rounded-xl overflow-hidden transition-colors hover:border-white/[0.1] hover:bg-[#0a1628]/50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]"
            >
                <span className="text-white font-medium text-lg pr-4">{question}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#3b82f6]' : ''}`} />
            </button>
            <div
                className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                style={{ overflow: 'hidden' }}
            >
                <div className="px-6 pb-6 pt-0 text-slate-400 leading-relaxed border-t border-white/[0.02]">
                    <div className="pt-4">{answer}</div>
                </div>
            </div>
        </div>
    );
}
