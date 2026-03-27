'use client';

import TransitionLink from '@/components/ui/TransitionLink';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

type HeroProps = {
    dict: any;
    lang: string;
};

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const duration = 2000;
                    const start = performance.now();
                    const animate = (now: number) => {
                        const elapsed = now - start;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * target));
                        if (progress < 1) requestAnimationFrame(animate);
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero({ dict, lang }: HeroProps) {
    const [morphIndex, setMorphIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const words = dict.hero.morphWords;

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setMorphIndex(prev => (prev + 1) % words.length);
                setIsVisible(true);
            }, 400);
        }, 3000);
        return () => clearInterval(interval);
    }, [words.length]);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <section
            className="relative overflow-hidden bg-[#060d1a] min-h-[95vh] flex items-center pt-24 pb-16"
            onMouseMove={handleMouseMove}
        >
            {/* Interactive Spotlight */}
            <div
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(52, 99, 172, 0.08), transparent 40%)`
                }}
            />

            {/* Premium Retro Grid */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden [mask-image:linear-gradient(to_bottom,black_10%,transparent_90%)] opacity-30">
                <div
                    className="absolute inset-0 -top-[50px] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [transform-origin:50%_0%] animate-retro-grid border-t border-white/[0.02]"
                ></div>
            </div>

            {/* Ambient Base Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[10%] h-[500px] w-[500px] rounded-full bg-[#3463ac]/15 blur-[120px] animate-orb-1"></div>
                <div className="absolute bottom-[-10%] left-[10%] h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[120px] animate-orb-2"></div>
            </div>

            <div className="container relative mx-auto px-4 sm:px-8 z-10 pt-12 md:pt-20">
                <div className="mx-auto max-w-5xl text-center flex flex-col items-center">

                    {/* Animated Pre-title Badge */}
                    <div
                        className="hero-badge mb-8 flex items-center gap-2 rounded-full border border-[#3463ac]/40 bg-white/[0.03] backdrop-blur-md px-4 py-1.5 text-sm font-medium text-slate-300"
                        style={{ animationDelay: '0s', animation: 'float-in 0.8s cubic-bezier(0.16,1,0.3,1) 0s both, badge-glow 4s ease-in-out infinite' }}
                    >
                        <Sparkles className="h-4 w-4 text-purple-400" />
                        <span>Yeni Nesil SAP ve AI Çözümleri</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 leading-[1.1] pb-2" style={{ animation: 'float-in 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s both' }}>
                        {dict.hero.title}
                    </h1>

                    {/* Morphing accent line */}
                    <div className="mt-5 flex items-center justify-center gap-3" style={{ animation: 'float-in 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s both' }}>
                        <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#3463ac]/50"></span>
                        <span
                            className={`text-base sm:text-lg font-medium bg-gradient-to-r from-[#5b8fd4] via-[#7e6fcf] to-[#a855f7] bg-clip-text text-transparent transition-all duration-400 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-2 blur-sm'}`}
                        >
                            {words[morphIndex]}
                        </span>
                        <span className="h-px w-8 bg-gradient-to-l from-transparent to-purple-500/50"></span>
                    </div>

                    {/* Subtitle */}
                    <p className="mx-auto mt-8 max-w-2xl text-lg sm:text-xl text-slate-400 font-light leading-relaxed" style={{ animation: 'float-in 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s both' }}>
                        {dict.hero.subtitle}
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animation: 'float-in 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s both' }}>
                        <TransitionLink
                            href={`/${lang}/services`}
                            className="cta-shimmer group flex h-14 w-full sm:w-auto items-center justify-center gap-2.5 rounded-full px-10 text-base font-semibold text-white transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(52,99,172,0.4)] focus-visible:outline-none"
                        >
                            <span className="relative z-10 flex items-center gap-2.5">
                                {dict.hero.primaryCta}
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </span>
                        </TransitionLink>
                        <TransitionLink
                            href={`/${lang}/contact`}
                            className="group flex h-14 w-full sm:w-auto items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-10 text-base font-semibold text-slate-300 transition-all hover:bg-white/10 hover:border-white/20 hover:text-white focus-visible:outline-none"
                        >
                            {dict.hero.secondaryCta}
                        </TransitionLink>
                    </div>

                    {/* Animated Counter Stats Dock */}
                    <div className="mt-20 w-full max-w-4xl mx-auto rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md p-6 sm:p-8" style={{ animation: 'float-in 0.8s cubic-bezier(0.16,1,0.3,1) 0.7s both' }}>
                        <div className="grid grid-cols-1 divide-y divide-white/5 sm:grid-cols-3 sm:divide-y-0 sm:divide-x sm:divide-white/5">
                            {dict.hero.stats.map((stat: any, i: number) => (
                                <div key={i} className="flex flex-col items-center py-4 sm:py-0">
                                    <span className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 tabular-nums">
                                        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                    </span>
                                    <span className="mt-2 text-xs sm:text-sm text-slate-400 font-medium tracking-wide">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40" style={{ animation: 'float-in 1s cubic-bezier(0.16,1,0.3,1) 1.2s both' }}>
                <div className="h-8 w-5 rounded-full border border-white/30 flex justify-center pt-1.5">
                    <div className="h-2 w-1 rounded-full bg-white/60 animate-scroll-dot"></div>
                </div>
            </div>
        </section>
    );
}
