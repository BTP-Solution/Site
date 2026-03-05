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
import ParticleCanvas from '@/components/ui/ParticleCanvas';

type BentoGridProps = {
    dict: any;
};

/* ══════════════════════════════════
   SERVICE DATA
   ══════════════════════════════════ */

const SERVICES = [
    { id: 'tech', icon: Settings, accent: '#a78bfa' },
    { id: 'consulting', icon: Briefcase, accent: '#3463ac' },
    { id: 'integration', icon: Link2, accent: '#f59e0b' },
    { id: 'supplychain', icon: Truck, accent: '#34d399' },
    { id: 'edonusum', icon: FileText, accent: '#22d3ee' },
];

/* ══════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════ */

export default function BentoGrid({ dict }: BentoGridProps) {
    const b = dict.bento;
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    const serviceData: Record<string, { title: string; description: string; tags: string[] }> = {
        consulting: { title: b.consulting.title, description: b.consulting.description, tags: b.consulting.tags || [] },
        edonusum: { title: b.edonusum?.title || 'E-Dönüşüm', description: b.edonusum?.description || '', tags: b.edonusum?.tags || [] },
        supplychain: { title: b.supplychain?.title || 'Dijital Tedarik Zinciri', description: b.supplychain?.description || '', tags: b.supplychain?.tags || [] },
        integration: { title: b.integration?.title || 'Entegrasyon', description: b.integration?.description || '', tags: b.integration?.tags || [] },
        tech: { title: b.tech?.title || 'Teknoloji & Cloud', description: b.tech?.description || '', tags: b.tech?.tags || [] },
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

                                <div className="relative z-10 flex flex-col h-full">
                                    <div
                                        className="flex h-10 w-10 items-center justify-center rounded-xl mb-5 transition-all duration-300 group-hover:scale-110 shrink-0"
                                        style={{ background: `${svc.accent}10` }}
                                    >
                                        <Icon className="h-[18px] w-[18px]" style={{ color: svc.accent }} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-sm font-semibold text-white mb-2 group-hover:translate-x-0.5 transition-transform duration-300">
                                        {info.title}
                                    </h3>
                                    <p className="text-[12px] text-slate-500 leading-relaxed font-light mb-6">
                                        {info.description}
                                    </p>

                                    {/* Scrolling Sub-Tags (Marquee) */}
                                    <div className="mt-auto relative w-full overflow-hidden flex items-center border-t border-white/[0.04] pt-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-4 before:bg-gradient-to-r before:from-[#0a1628] before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-4 after:bg-gradient-to-l after:from-[#0a1628] after:to-transparent after:z-10 group-hover:before:from-[#0f1d32] group-hover:after:from-[#0f1d32] transition-colors duration-500">
                                        <div className="animate-marquee flex whitespace-nowrap gap-3 w-max">
                                            {/* Double the array for seamless infinite scroll */}
                                            {[...info.tags, ...info.tags].map((tag, tagIdx) => (
                                                <span
                                                    key={tagIdx}
                                                    className="text-[10px] font-medium tracking-wide text-slate-400/80 bg-white/[0.03] px-2.5 py-1 rounded border border-white/[0.03]"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ── Bottom Row: Expanded R&D + Stats ── */}
                <div className={`mx-auto max-w-5xl mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '600ms' }}>

                    {/* Expanded R&D Card (Takes 2 Columns) */}
                    <div className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-[#0a1628] to-[#111e36] p-8 md:p-10 transition-all duration-500 hover:border-purple-500/30 hover:shadow-[0_0_40px_-15px_rgba(126,34,206,0.3)]">
                        {/* Dynamic Interactive Particle Background */}
                        <ParticleCanvas className="opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

                        {/* Ambient base glows so it doesn't look completely empty if canvas fails */}
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[radial-gradient(circle,_rgba(168,85,247,0.15)_0%,_transparent_70%)] rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000 pointer-events-none"></div>

                        <div className="relative z-10 flex flex-col h-full justify-center pointer-events-none">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-500/20">
                                    <Lightbulb className="h-6 w-6 text-purple-400" strokeWidth={1.5} />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400">{b.rnd.tag}</span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-purple-100 transition-colors duration-300">
                                {b.rnd.title}
                            </h3>

                            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
                                {b.rnd.description}
                            </p>

                            <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-purple-400 opacity-80 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer w-max">
                                Ürünlerimizi Keşfedin
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </div>

                    {/* Stats Card (Takes 1 Column) */}
                    <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 flex flex-col justify-center items-center text-center transition-all duration-500 hover:bg-white/[0.04]">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#3463ac]/5 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                        <span className="relative z-10 text-5xl font-extrabold bg-gradient-to-br from-[#3463ac] via-[#5b8fd4] to-[#a855f7] bg-clip-text text-transparent">
                            {b.statCard.value}
                        </span>
                        <span className="relative z-10 text-base font-semibold text-white mt-2 mb-1">{b.statCard.sub}</span>
                        <span className="relative z-10 text-xs text-slate-500 max-w-[160px] leading-relaxed">{b.statCard.label}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
