'use client';

import { useEffect, useRef, useState } from 'react';
import {
    Briefcase,
    FileText,
    Truck,
    Link2,
    Settings,
    Lightbulb,
    ArrowRight,
} from 'lucide-react';

type BentoGridProps = {
    dict: any;
};

/* ══════════════════════════════════
   SERVICE DATA
   ══════════════════════════════════ */

const SERVICES = [
    { id: 'consulting', icon: Briefcase, accent: '#3463ac' },
    { id: 'edonusum', icon: FileText, accent: '#22d3ee' },
    { id: 'supplychain', icon: Truck, accent: '#34d399' },
    { id: 'integration', icon: Link2, accent: '#f59e0b' },
    { id: 'tech', icon: Settings, accent: '#a78bfa' },
];

/* ══════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════ */

export default function BentoGrid({ dict }: BentoGridProps) {
    const b = dict.bento;
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    const serviceData: Record<string, { title: string; description: string }> = {
        consulting: { title: b.consulting.title, description: b.consulting.description },
        edonusum: { title: b.edonusum?.title || 'E-Dönüşüm', description: b.edonusum?.description || '' },
        supplychain: { title: b.supplychain?.title || 'Dijital Tedarik Zinciri', description: b.supplychain?.description || '' },
        integration: { title: b.integration?.title || 'Entegrasyon', description: b.integration?.description || '' },
        tech: { title: b.tech?.title || 'Teknoloji & Cloud', description: b.tech?.description || '' },
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative py-28 sm:py-36 overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #060d1a 0%, #0c1829 50%, #060d1a 100%)' }}
        >
            {/* Subtle ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,_rgba(52,99,172,0.05)_0%,_transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-8">
                {/* ── Header ── */}
                <div className={`mx-auto max-w-2xl text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        {b.sectionTitle}
                    </h2>
                    <p className="mt-5 text-base sm:text-lg text-slate-500 font-light leading-relaxed">
                        {b.sectionSubtitle}
                    </p>
                </div>

                {/* ── Service Cards — Clean 5-column grid ── */}
                <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.06]">
                    {SERVICES.map((svc, i) => {
                        const Icon = svc.icon;
                        const info = serviceData[svc.id];
                        return (
                            <div
                                key={svc.id}
                                className={`group relative bg-[#0a1628] p-6 sm:p-7 transition-all duration-500 hover:bg-white/[0.04] cursor-default ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                style={{ transitionDelay: `${200 + i * 80}ms` }}
                            >
                                {/* Hover glow */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{
                                        background: `radial-gradient(circle at 50% 0%, ${svc.accent}08 0%, transparent 70%)`,
                                    }}
                                />

                                <div className="relative z-10">
                                    <div
                                        className="flex h-10 w-10 items-center justify-center rounded-xl mb-5 transition-all duration-300 group-hover:scale-110"
                                        style={{ background: `${svc.accent}10` }}
                                    >
                                        <Icon className="h-[18px] w-[18px]" style={{ color: svc.accent }} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-sm font-semibold text-white mb-2 group-hover:translate-x-0.5 transition-transform duration-300">
                                        {info.title}
                                    </h3>
                                    <p className="text-[12px] text-slate-500 leading-relaxed line-clamp-3 group-hover:text-slate-400 transition-colors duration-300">
                                        {info.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ── Bottom Row: R&D + Products highlight + CTA ── */}
                <div className={`mx-auto max-w-5xl mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '600ms' }}>

                    {/* R&D Card */}
                    <div className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/[0.1]">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/10 transition-all duration-300 group-hover:scale-110">
                                <Lightbulb className="h-4 w-4 text-purple-400" strokeWidth={1.5} />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400/60">{b.rnd.tag}</span>
                        </div>
                        <h3 className="text-base font-semibold text-white mb-2">{b.rnd.title}</h3>
                        <p className="text-[12px] text-slate-500 leading-relaxed">{b.rnd.description}</p>
                    </div>

                    {/* Stats */}
                    <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 flex flex-col justify-center items-center text-center">
                        <span className="text-4xl font-extrabold bg-gradient-to-r from-[#3463ac] to-[#a78bfa] bg-clip-text text-transparent">
                            {b.statCard.value}
                        </span>
                        <span className="text-sm font-medium text-white/80 mt-1">{b.statCard.sub}</span>
                        <span className="text-[11px] text-slate-600 mt-0.5">{b.statCard.label}</span>
                    </div>

                    {/* CTA */}
                    <div className="group relative rounded-2xl bg-gradient-to-br from-[#3463ac] to-[#2b528f] p-7 border border-[#5b8fd4]/15 transition-all duration-500 hover:shadow-[0_16px_40px_rgba(52,99,172,0.2)] hover:-translate-y-0.5 flex flex-col justify-center items-center text-center cursor-pointer">
                        <span className="text-base font-bold text-white">Projelerinizi</span>
                        <span className="text-base font-bold text-white/80">Konuşalım</span>
                        <div className="mt-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                            <ArrowRight className="h-3.5 w-3.5 text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
