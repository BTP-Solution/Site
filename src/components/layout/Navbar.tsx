'use client';

import TransitionLink from '@/components/ui/TransitionLink';
import Image from 'next/image';
import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronDown, Database, Link2, BarChart3, Monitor, FileText, Truck, Settings, FileCheck2, Code2, Blocks, Brain, Sparkles, ArrowRight, Cpu, Archive, Zap, ShieldCheck } from 'lucide-react';

type NavbarProps = {
    dict: any;
    lang: string;
};

/* ─── service categories data ─── */
const SERVICE_CATEGORIES = [
    {
        key: 'sap',
        icon: Monitor,
        color: '#3463ac',
        label: 'SAP Danışmanlık ve Uygulama Hizmetleri',
        href: '/services/sap-consulting',
        items: [
            { label: 'Tedarik Zinciri, Üretim ve Lojistik', href: '/services/sap-consulting/supply-chain' },
            { label: 'Süreç Analizi ve Proje Yönetimi', href: '/services/sap-consulting/process-analysis' },
            { label: 'SAP Roll-out ve Destek Hizmetleri', href: '/services/sap-consulting/roll-out' },
            { label: 'Finansal Çözümler', href: '/services/sap-consulting/financial-solutions' },
            { label: 'İnsan Kaynakları Çözümleri', href: '/services/sap-consulting/hr-solutions' },
            { label: 'İş Zekası ve Veri Analitiği', href: '/services/sap-consulting/business-intelligence' },
            { label: 'Müşteri Deneyimi ve Satış', href: '/services/sap-consulting/customer-experience' },
        ],
    },
    {
        key: 'tech',
        icon: Code2,
        color: '#a78bfa',
        label: 'Teknoloji ve Yazılım Geliştirme',
        href: '/services/tech-development',
        items: [
            { label: 'SAP BTP Çözümleri', href: '/services/tech-development/sap-btp' },
            { label: 'ABAP, RAP / CAP Geliştirme', href: '/services/tech-development/abap-rap-cap' },
            { label: 'SAP Fiori ve SAPUI5 Arayüzleri', href: '/services/tech-development/fiori-sapui5' },
            { label: 'Bulut Geçiş ve Modernizasyon', href: '/services/tech-development/cloud-migration' },
            { label: 'İş Akışı ve Süreç Otomasyonu', href: '/services/tech-development/workflow-automation' },
        ],
    },
    {
        key: 'integration',
        icon: Blocks,
        color: '#f59e0b',
        label: 'Entegrasyon Çözümleri',
        href: '/services/integration-solutions',
        items: [
            { label: 'E-Dönüşüm ve Dijital Arşivleme', href: '/services/integration-solutions/e-donusum' },
            { label: 'API ve Sistem Entegrasyonları', href: '/services/integration-solutions/api-integration' },
            { label: 'SAP ve Non-SAP Sistem Entegrasyonları', href: '/services/integration-solutions/sap-nonsap' },
            { label: 'Banka ve Fintech Entegrasyonları', href: '/services/integration-solutions/banka-fintech' },
        ],
    },
    {
        key: 'ai',
        icon: Brain,
        color: '#818cf8',
        label: 'Veri, Yapay Zeka ve Akıllı Çözümler',
        href: '/services/ai-data-solutions',
        items: [
            { label: 'Veri Yönetimi ve Dönüşümü', href: '/services/ai-data-solutions/data-management' },
            { label: 'İş Zekası ve Gelişmiş Analitik', href: '/services/ai-data-solutions/business-analytics' },
            { label: 'Yapay Zeka ve Makine Öğrenimi', href: '/services/ai-data-solutions/ai-ml' },
            { label: 'Akıllı İş Akışı ve Süreç Otomasyonu', href: '/services/ai-data-solutions/rpa-automation' },
        ],
    },
];

export default function Navbar({ dict, lang }: NavbarProps) {
    /* ─── state ─── */
    const [openDropdown, setOpenDropdown] = useState<'services' | 'products' | null>(null);
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    /* ─── close with exit animation ─── */
    const closeDropdown = useCallback(() => {
        if (openDropdown === null) return;
        setIsAnimatingOut(true);
        setTimeout(() => {
            setOpenDropdown(null);
            setIsAnimatingOut(false);
        }, 250);
    }, [openDropdown]);

    /* ─── navigate helper (close dropdown) ─── */
    const handleNavigate = useCallback(() => {
        closeDropdown();
    }, [closeDropdown]);

    /* ─── toggle on click ─── */
    const toggleDropdown = (menu: 'services' | 'products') => {
        if (openDropdown === menu && !isAnimatingOut) {
            closeDropdown();
        } else {
            setIsAnimatingOut(false);
            setOpenDropdown(menu);
        }
    };

    /* ─── hover open with delay ─── */
    const handleMouseEnter = (menu: 'services' | 'products') => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsAnimatingOut(false);
        setOpenDropdown(menu);
    };

    const handleMouseLeave = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            closeDropdown();
        }, 200);
    };

    /* ─── click outside to close ─── */
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                closeDropdown();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [closeDropdown]);

    /* ─── ESC to close ─── */
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeDropdown();
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [closeDropdown]);

    const isServicesOpen = openDropdown === 'services';
    const isProductsOpen = openDropdown === 'products';

    return (
        <nav className="flex w-full items-center justify-between py-2">

            {/* LOGO */}
            <div className="flex items-center">
                <TransitionLink href={`/${lang}`} className="group relative transition-transform duration-300 hover:scale-105">
                    <div className="absolute inset-0 rounded-xl bg-[#3463ac]/0 blur-xl transition-all duration-500 group-hover:bg-[#3463ac]/20"></div>
                    <Image
                        src="/btp_logo-2.png"
                        alt="BTP Solution Logo"
                        width={180}
                        height={46}
                        priority
                        className="relative h-10 w-auto object-contain drop-shadow-[0_0_12px_rgba(52,99,172,0.15)]"
                    />
                </TransitionLink>
            </div>

            {/* CENTERED NAV — ANIMATED GRADIENT BORDER CAPSULE */}
            <div className="absolute left-1/2 top-1/2 hidden lg:flex -translate-x-1/2 -translate-y-1/2" ref={dropdownRef}>
                <div className="navbar-capsule-border shadow-[0_4px_30px_-8px_rgba(52,99,172,0.2)]">
                    <div className="navbar-capsule-inner flex items-center gap-0.5 px-2 py-1.5">

                        {/* SERVICES DROPDOWN */}
                        <div
                            className="relative"
                            style={{ animation: 'float-in 0.5s cubic-bezier(0.16,1,0.3,1) 0.1s both' }}
                            onMouseEnter={() => handleMouseEnter('services')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button
                                onClick={() => toggleDropdown('services')}
                                className={`nav-link-premium flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline-none ${
                                    isServicesOpen ? 'bg-white/[0.1] text-white' : 'text-slate-300 hover:bg-white/[0.07] hover:text-white'
                                }`}
                            >
                                {dict.navigation.services}
                                <ChevronDown className={`h-3.5 w-3.5 transition-all duration-400 ${isServicesOpen ? 'rotate-180 opacity-100' : 'opacity-40'}`} />
                            </button>

                            {/* ═══ MEGA DROPDOWN — 4-COLUMN GRID ═══ */}
                            {(isServicesOpen || isAnimatingOut) && openDropdown === 'services' && (
                                <div
                                    className={`absolute left-1/2 top-full pt-4 -translate-x-1/2 z-50 w-[1080px] ${
                                        isAnimatingOut ? 'mega-dropdown-exit' : 'mega-dropdown-enter'
                                    }`}
                                    onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className="rounded-2xl border border-white/[0.06] bg-[#0c1222]/[0.97] backdrop-blur-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.6)] overflow-hidden">

                                        {/* STATIC SUBTLE TOP ACCENT */}
                                        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#3463ac]/40 to-transparent"></div>

                                        {/* 4-COLUMN GRID */}
                                        <div className="grid grid-cols-4 gap-0 px-2 py-6">
                                            {SERVICE_CATEGORIES.map((cat, catIdx) => (
                                                <div
                                                    key={cat.key}
                                                    className={`mega-content-item flex flex-col px-5 ${
                                                        catIdx < SERVICE_CATEGORIES.length - 1 ? 'border-r border-white/[0.04]' : ''
                                                    }`}
                                                    style={{ animationDelay: `${catIdx * 50}ms` }}
                                                >
                                                    {/* Category Label */}
                                                    <TransitionLink
                                                        href={`/${lang}${cat.href}`}
                                                        onClick={() => { closeDropdown(); }}
                                                        className="group/cat flex items-center gap-2 mb-3 pb-3 border-b transition-colors duration-200"
                                                        style={{ borderBottomColor: `${cat.color}15` }}
                                                    >
                                                        <span
                                                            className="text-[11px] font-semibold uppercase tracking-[0.12em] transition-opacity duration-200 group-hover/cat:opacity-80"
                                                            style={{ color: cat.color }}
                                                        >
                                                            {cat.label}
                                                        </span>
                                                        <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 transition-all duration-200 group-hover/cat:opacity-60 group-hover/cat:translate-x-0" style={{ color: cat.color }} />
                                                    </TransitionLink>

                                                    {/* Service Items */}
                                                    <div className="flex flex-col">
                                                        {cat.items.map((item, i) => (
                                                            <TransitionLink
                                                                key={item.label}
                                                                href={`/${lang}${item.href}`}
                                                                onClick={() => { closeDropdown(); }}
                                                                className="mega-content-item group/item relative rounded-md py-2 pl-3 pr-2 text-[13px] text-slate-500 transition-all duration-150 hover:text-white hover:bg-white/[0.03]"
                                                                style={{ animationDelay: `${catIdx * 50 + i * 30}ms` }}
                                                            >
                                                                {/* Left accent bar on hover */}
                                                                <span
                                                                    className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 rounded-full transition-all duration-200 group-hover/item:h-4"
                                                                    style={{ backgroundColor: cat.color }}
                                                                />
                                                                {item.label}
                                                            </TransitionLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* BOTTOM CTA */}
                                        <div className="border-t border-white/[0.04] mx-5">
                                            <TransitionLink
                                                href={`/${lang}/services`}
                                                onClick={() => { closeDropdown(); }}
                                                className="group/cta flex items-center gap-2 py-3.5 text-[12px] font-medium text-slate-500 transition-colors duration-200 hover:text-slate-300"
                                            >
                                                <span>Tüm Hizmetleri Keşfedin</span>
                                                <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover/cta:translate-x-0.5" />
                                            </TransitionLink>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* PRODUCTS DROPDOWN */}
                        <div
                            className="relative"
                            style={{ animation: 'float-in 0.5s cubic-bezier(0.16,1,0.3,1) 0.2s both' }}
                            onMouseEnter={() => handleMouseEnter('products')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button
                                onClick={() => toggleDropdown('products')}
                                className={`nav-link-premium flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline-none ${
                                    isProductsOpen ? 'bg-white/[0.1] text-white' : 'text-slate-300 hover:bg-white/[0.07] hover:text-white'
                                }`}
                            >
                                {dict.navigation.products}
                                <ChevronDown className={`h-3.5 w-3.5 transition-all duration-400 ${isProductsOpen ? 'rotate-180 opacity-100' : 'opacity-40'}`} />
                            </button>

                            {/* PRODUCTS DROPDOWN */}
                            {(isProductsOpen || isAnimatingOut) && openDropdown === 'products' && (
                                <div
                                    className={`absolute left-1/2 top-full pt-4 -translate-x-1/2 w-[340px] z-50 ${
                                        isAnimatingOut ? 'mega-dropdown-exit' : 'mega-dropdown-enter'
                                    }`}
                                    onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className="rounded-2xl border border-white/[0.08] bg-[#0a1628]/[0.98] backdrop-blur-3xl p-2 shadow-[0_25px_60px_-12px_rgba(0,0,0,0.7)] ring-1 ring-white/[0.05] overflow-hidden">
                                        <div className="h-[2px] w-full bg-gradient-to-r from-[#ff7700] via-purple-500 to-[#3463ac] mega-gradient-line mb-2 rounded-full"></div>

                                        <div className="px-3 pt-1 pb-2">
                                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">{dict.navigation.products}</span>
                                        </div>

                                        <TransitionLink href={`/${lang}/products/apd`} onClick={() => { closeDropdown(); }} className="group/item flex items-center gap-3.5 rounded-xl px-4 py-3 text-sm text-slate-300 transition-all duration-250 hover:bg-white/[0.05] mega-content-item" style={{ animationDelay: '0ms' }}>
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff7700]/20 to-[#3463ac]/10 ring-1 ring-white/[0.06] transition-all duration-300 group-hover/item:from-[#ff7700]/30 group-hover/item:to-[#3463ac]/20 group-hover/item:shadow-[0_0_16px_rgba(255,119,0,0.2)]">
                                                <FileCheck2 className="h-4.5 w-4.5 text-[#ff7700] transition-colors group-hover/item:text-[#ff8c2b]" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-semibold text-white/90 transition-colors group-hover/item:text-white">APD Automation</span>
                                                <span className="text-xs text-slate-500 transition-colors group-hover/item:text-slate-400">Smart posting document engine</span>
                                            </div>
                                        </TransitionLink>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* ABOUT LINK */}
                        <div style={{ animation: 'float-in 0.5s cubic-bezier(0.16,1,0.3,1) 0.3s both' }}>
                            <TransitionLink
                                href={`/${lang}/about`}
                                className="nav-link-premium rounded-full px-5 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none"
                            >
                                {dict.navigation.about}
                            </TransitionLink>
                        </div>

                    </div>
                </div>
            </div>

            {/* SPACER */}
            <div className="flex w-32"></div>

        </nav>
    );
}
