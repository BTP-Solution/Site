'use client';

import { useEffect, useRef, useState } from 'react';
import TransitionLink from '@/components/ui/TransitionLink';
import {
    Monitor,
    Code2,
    Blocks,
    Brain,
    ArrowRight,
    Sparkles,
    Truck,
    Search,
    RotateCw,
    Coins,
    Users,
    BarChart3,
    ShoppingBag,
    Cloud,
    Terminal,
    Layout,
    ArrowUpCircle,
    Workflow,
    FileText,
    Link2,
    Server,
    Landmark,
    Database,
    LineChart,
    Cpu,
    Zap,
} from 'lucide-react';

type ServicesOverviewProps = {
    dict: any;
    lang: string;
};

const ICON_MAP: Record<string, any> = {
    Monitor, Code2, Blocks, Brain, ArrowRight, Sparkles,
    Truck, Search, RotateCw, Coins, Users, BarChart3, ShoppingBag,
    Cloud, Terminal, Layout, ArrowUpCircle, Workflow,
    FileText, Link2, Server, Landmark, Database, LineChart, Cpu, Zap,
};

const SERVICE_CATEGORIES = [
    {
        key: 'sap',
        icon: 'Monitor',
        color: '#3463ac',
        gradient: 'from-[#3463ac]/20 to-[#5b8fd4]/10',
        href: '/services/sap-consulting',
        items: [
            { icon: 'Truck', href: '/services/sap-consulting/supply-chain' },
            { icon: 'Search', href: '/services/sap-consulting/process-analysis' },
            { icon: 'RotateCw', href: '/services/sap-consulting/roll-out' },
            { icon: 'Coins', href: '/services/sap-consulting/financial-solutions' },
            { icon: 'Users', href: '/services/sap-consulting/hr-solutions' },
            { icon: 'BarChart3', href: '/services/sap-consulting/business-intelligence' },
            { icon: 'ShoppingBag', href: '/services/sap-consulting/customer-experience' },
        ],
    },
    {
        key: 'tech',
        icon: 'Code2',
        color: '#a78bfa',
        gradient: 'from-[#a78bfa]/20 to-[#7c3aed]/10',
        href: '/services/tech-development',
        items: [
            { icon: 'Cloud', href: '/services/tech-development/sap-btp' },
            { icon: 'Terminal', href: '/services/tech-development/abap-rap-cap' },
            { icon: 'Layout', href: '/services/tech-development/fiori-sapui5' },
            { icon: 'ArrowUpCircle', href: '/services/tech-development/cloud-migration' },
            { icon: 'Workflow', href: '/services/tech-development/workflow-automation' },
        ],
    },
    {
        key: 'integration',
        icon: 'Blocks',
        color: '#f59e0b',
        gradient: 'from-[#f59e0b]/20 to-[#d97706]/10',
        href: '/services/integration-solutions',
        items: [
            { icon: 'FileText', href: '/services/integration-solutions/e-donusum' },
            { icon: 'Link2', href: '/services/integration-solutions/api-integration' },
            { icon: 'Server', href: '/services/integration-solutions/sap-nonsap' },
            { icon: 'Landmark', href: '/services/integration-solutions/banka-fintech' },
        ],
    },
    {
        key: 'ai',
        icon: 'Brain',
        color: '#818cf8',
        gradient: 'from-[#818cf8]/20 to-[#6366f1]/10',
        href: '/services/ai-data-solutions',
        items: [
            { icon: 'Database', href: '/services/ai-data-solutions/data-management' },
            { icon: 'LineChart', href: '/services/ai-data-solutions/business-analytics' },
            { icon: 'Cpu', href: '/services/ai-data-solutions/ai-ml' },
            { icon: 'Zap', href: '/services/ai-data-solutions/rpa-automation' },
        ],
    },
];

export default function ServicesOverview({ dict, lang }: ServicesOverviewProps) {
    const s = dict.servicesOverview;
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.05 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <main ref={sectionRef} className="w-full bg-[#060d1a] min-h-screen">

            <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
                
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(52,99,172,0.15)_0%,_transparent_60%)]" />
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
                <div className="absolute top-40 right-1/4 w-80 h-80 bg-[#3463ac]/5 rounded-full blur-3xl" />

                <div className="container relative mx-auto px-4 sm:px-8">
                    <div className={`mx-auto max-w-3xl text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 mb-8 backdrop-blur-sm">
                            <Sparkles className="h-3.5 w-3.5 text-[#5b8fd4]" />
                            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                                {s?.badge || 'Hizmetlerimiz'}
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                            {s?.title || 'Dijital Dönüşüm'}{' '}
                            <span className="bg-gradient-to-r from-[#3463ac] via-[#5b8fd4] to-[#a855f7] bg-clip-text text-transparent">
                                {s?.titleHighlight || 'Çözümlerimiz'}
                            </span>
                        </h1>

                        <p className="mt-6 text-lg sm:text-xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
                            {s?.description || 'SAP danışmanlık, teknoloji geliştirme, entegrasyon ve yapay zeka çözümleriyle kurumsal dönüşümünüzü uçtan uca yönetiyoruz.'}
                        </p>
                    </div>
                </div>
            </section>

            <section className="relative pb-28 sm:pb-36">
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="flex flex-col gap-16 lg:gap-20">
                        {SERVICE_CATEGORIES.map((cat, catIdx) => {
                            const CatIcon = ICON_MAP[cat.icon];
                            const catContent = s?.categories?.[cat.key] || {};

                            return (
                                <div
                                    key={cat.key}
                                    className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                    style={{ transitionDelay: `${300 + catIdx * 150}ms` }}
                                >
                                    
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8">
                                        <div
                                            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${cat.gradient} ring-1 ring-white/[0.06]`}
                                        >
                                            {CatIcon && <CatIcon className="h-6 w-6" style={{ color: cat.color }} strokeWidth={1.5} />}
                                        </div>
                                        <div className="flex-1">
                                            <TransitionLink href={`/${lang}${cat.href}`} className="group inline-flex items-center gap-2">
                                                <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-white/90 transition-colors">
                                                    {catContent.title || cat.key}
                                                </h2>
                                                <ArrowRight className="h-5 w-5 text-slate-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" style={{ color: cat.color }} />
                                            </TransitionLink>
                                            <p className="mt-1 text-sm text-slate-500 max-w-2xl">
                                                {catContent.description || ''}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                                        {cat.items.map((item, i) => {
                                            const ItemIcon = ICON_MAP[item.icon];
                                            const itemContent = catContent.items?.[i] || {};
                                            return (
                                                <TransitionLink
                                                    key={item.href}
                                                    href={`/${lang}${item.href}`}
                                                    className="group relative flex flex-col rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/[0.1] hover:shadow-lg"
                                                >
                                                    
                                                    <div
                                                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                                        style={{ background: `radial-gradient(circle at 30% 0%, ${cat.color}08 0%, transparent 60%)` }}
                                                    />

                                                    <div className="relative z-10">
                                                        <div
                                                            className="flex h-9 w-9 items-center justify-center rounded-lg mb-3 transition-transform duration-300 group-hover:scale-110"
                                                            style={{ background: `${cat.color}12` }}
                                                        >
                                                            {ItemIcon && <ItemIcon className="h-4 w-4" style={{ color: cat.color }} strokeWidth={1.5} />}
                                                        </div>

                                                        <h3 className="text-sm font-semibold text-white mb-1.5 group-hover:translate-x-0.5 transition-transform duration-300">
                                                            {itemContent.title || ''}
                                                        </h3>
                                                        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                                                            {itemContent.description || ''}
                                                        </p>

                                                        <div className="mt-3 flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ color: cat.color }}>
                                                            <span>{s?.detailsLink || 'Detayları Gör'}</span>
                                                            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                                                        </div>
                                                    </div>
                                                </TransitionLink>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(52,99,172,0.1)_0%,_transparent_60%)]" />
                <div className={`container relative mx-auto px-4 sm:px-8 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '800ms' }}>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                        {s?.ctaTitle || 'Projeniz İçin Doğru Çözümü Birlikte Belirleyelim'}
                    </h2>
                    <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                        {s?.ctaDescription || 'Uzman ekibimiz, ihtiyaçlarınıza özel çözümler sunmak için yanınızda.'}
                    </p>
                    <button
                        onClick={() => document.querySelector('footer')?.scrollIntoView({ behavior: 'smooth' })}
                        className="cta-shimmer inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-semibold text-white shadow-[0_0_20px_rgba(52,99,172,0.25)] transition-all duration-300 hover:shadow-[0_4px_30px_rgba(52,99,172,0.4)] hover:-translate-y-0.5 cursor-pointer"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <Sparkles className="h-4 w-4" />
                            {s?.ctaButton || 'Bize Ulaşın'}
                        </span>
                    </button>
                </div>
            </section>
        </main>
    );
}
