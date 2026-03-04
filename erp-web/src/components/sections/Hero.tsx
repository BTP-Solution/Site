'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
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

    return (
        <section className="relative overflow-hidden bg-slate-950 min-h-[90vh] flex items-center">
            {/* Animated gradient orbs */}
            <div className="absolute inset-0">
                <div className="absolute top-[-20%] right-[-10%] h-[700px] w-[700px] rounded-full bg-gradient-to-br from-[#3463ac]/25 to-transparent blur-[120px] animate-orb-1"></div>
                <div className="absolute bottom-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-purple-600/20 to-transparent blur-[100px] animate-orb-2"></div>
                <div className="absolute top-[30%] left-[40%] h-[300px] w-[300px] rounded-full bg-gradient-to-br from-blue-400/10 to-transparent blur-[80px] animate-orb-3"></div>
            </div>

            {/* Noise texture */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
                backgroundSize: '24px 24px'
            }}></div>

            <div className="container relative mx-auto px-4 sm:px-8 z-10 pt-12">
                <div className="mx-auto max-w-5xl text-center">
                    {/* Main Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]" style={{ animation: 'float-in 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s both' }}>
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
                        <Link
                            href={`/${lang}/services`}
                            className="cta-shimmer group flex h-14 w-full sm:w-auto items-center justify-center gap-2.5 rounded-full px-10 text-base font-semibold text-white transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(52,99,172,0.4)] focus-visible:outline-none"
                        >
                            <span className="relative z-10 flex items-center gap-2.5">
                                {dict.hero.primaryCta}
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </span>
                        </Link>
                        <Link
                            href={`/${lang}/contact`}
                            className="group flex h-14 w-full sm:w-auto items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-10 text-base font-semibold text-slate-300 transition-all hover:bg-white/10 hover:border-white/20 hover:text-white focus-visible:outline-none"
                        >
                            {dict.hero.secondaryCta}
                        </Link>
                    </div>

                    {/* Animated Counter Stats */}
                    <div className="mt-20 flex items-center justify-center gap-12 sm:gap-20" style={{ animation: 'float-in 0.8s cubic-bezier(0.16,1,0.3,1) 0.7s both' }}>
                        {dict.hero.stats.map((stat: any, i: number) => (
                            <div key={i} className="flex flex-col items-center">
                                <span className="text-3xl sm:text-4xl font-bold text-white tabular-nums">
                                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                </span>
                                <span className="mt-1 text-xs sm:text-sm text-slate-500 font-medium tracking-wide">{stat.label}</span>
                            </div>
                        ))}
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
