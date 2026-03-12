'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe, Menu, X, ChevronRight, ChevronDown, Cloud, Database, Link2, BarChart3, Check, Sparkles, FileCheck2 } from 'lucide-react';
import Navbar from './Navbar';

const SUPPORTED_LANGUAGES = [
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
];

type HeaderProps = {
    dict: any;
    lang: string;
};

export default function Header({ dict, lang }: HeaderProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const redirectedPathname = (locale: string) => {
        if (!pathname) return `/${locale}`;
        const segments = pathname.split('/');
        segments[1] = locale; // Replace the current locale segment with the new one
        return segments.join('/');
    };

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;
            setIsScrolled(prev => {
                // Hysteresis: shrink at 50px, restore at 10px
                if (!prev && y > 50) return true;
                if (prev && y < 10) return false;
                return prev;
            });
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isMobileMenuOpen]);

    const toggleSection = (section: string) => {
        setExpandedMobileSection(prev => prev === section ? null : section);
    };

    return (
        <header
            className={`header-glass sticky top-0 z-50 w-full border-b bg-slate-950/50 backdrop-blur-xl ${isScrolled
                ? 'scrolled border-white/[0.06]'
                : 'border-white/[0.03]'
                }`}
        >
            <div
                className={`container relative mx-auto flex items-center justify-between px-4 sm:px-8 transition-all duration-400 ${isScrolled ? 'h-16' : 'h-24'
                    }`}
            >
                {/* NAVBAR (LOGO + LINKS) */}
                <div className="flex-1 pr-6">
                    <Navbar dict={dict} lang={lang} />
                </div>

                {/* ACTIONS & LANG TOGGLE */}
                <div className="flex items-center justify-end gap-3 w-auto shrink-0">

                    {/* LANGUAGE SWITCHER (DESKTOP) */}
                    <div className="hidden sm:flex group relative items-center">
                        <button className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 backdrop-blur-md text-sm font-medium text-slate-400 transition-all duration-300 hover:bg-white/[0.08] hover:text-white hover:border-white/[0.15] hover:shadow-[0_0_20px_rgba(52,99,172,0.12)] focus-visible:outline-none">
                            <Globe className="h-4 w-4" />
                            <span className="uppercase">{lang}</span>
                            <ChevronDown className="h-3.5 w-3.5 opacity-40 transition-transform duration-300 group-hover:rotate-180 group-hover:opacity-80" />
                        </button>

                        {/* LANGUAGE DROPDOWN */}
                        <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-52 z-50">
                            <div className="dropdown-panel flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-950/95 backdrop-blur-2xl shadow-[0_20px_60px_-12px_rgba(0,0,0,0.6)] ring-1 ring-white/[0.05] p-1.5 max-h-64 overflow-y-auto custom-scrollbar">
                                <div className="mb-1 px-3 pt-2 pb-1">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Language</span>
                                </div>
                                {SUPPORTED_LANGUAGES.map((l) => (
                                    <Link
                                        key={l.code}
                                        href={redirectedPathname(l.code)}
                                        className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-200 ${lang === l.code
                                            ? 'bg-[#3463ac]/15 text-white font-semibold shadow-[inset_0_0_0_1px_rgba(52,99,172,0.2)]'
                                            : 'text-slate-400 hover:text-white hover:bg-white/[0.06]'
                                            }`}
                                    >
                                        <span className="text-base">{l.flag}</span>
                                        <span className="flex-1">{l.name}</span>
                                        {lang === l.code && (
                                            <Check className="h-3.5 w-3.5 text-[#5b8fd4]" />
                                        )}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA BUTTON — SHIMMER */}
                    <Link
                        href={`/${lang}/contact`}
                        className="cta-shimmer hidden sm:inline-flex h-10 items-center justify-center rounded-full px-6 text-sm font-semibold text-white shadow-[0_0_20px_rgba(52,99,172,0.25)] transition-all duration-300 hover:shadow-[0_4px_30px_rgba(52,99,172,0.4)] hover:-translate-y-0.5 focus-visible:outline-none"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <Sparkles className="h-3.5 w-3.5" />
                            {dict.navigation.getConsultation}
                        </span>
                    </Link>

                    {/* MOBILE HAMBURGER */}
                    <button
                        onClick={() => {
                            setIsMobileMenuOpen(!isMobileMenuOpen);
                            if (!isMobileMenuOpen) setExpandedMobileSection(null);
                        }}
                        className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-slate-400 transition-all duration-300 hover:bg-white/[0.08] hover:text-white hover:border-white/[0.15] focus-visible:outline-none"
                        aria-label="Toggle mobile menu"
                    >
                        <div className="relative h-5 w-5">
                            <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isMobileMenuOpen ? 'rotate-90 opacity-0 scale-75' : 'rotate-0 opacity-100 scale-100'}`}>
                                <Menu className="h-5 w-5" />
                            </span>
                            <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isMobileMenuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-75'}`}>
                                <X className="h-5 w-5" />
                            </span>
                        </div>
                    </button>
                </div>
            </div>

            {/* ═══════════════════════════════════════════
               MOBILE MENU OVERLAY
               ═══════════════════════════════════════════ */}
            <div
                className={`absolute left-0 w-full bg-slate-950 backdrop-blur-3xl z-40 lg:hidden overflow-y-auto custom-scrollbar transition-all duration-500 ${isMobileMenuOpen
                    ? 'opacity-100 visible'
                    : 'opacity-0 invisible pointer-events-none'
                    }`}
                style={{
                    top: isScrolled ? '4rem' : '6rem',
                    height: isScrolled ? 'calc(100dvh - 4rem)' : 'calc(100dvh - 6rem)',
                }}
            >
                <div className="flex flex-col px-6 py-8 gap-4">

                    {/* SERVICES ACCORDION */}
                    <div className={`flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden backdrop-blur-sm ${isMobileMenuOpen ? 'mobile-stagger-1' : ''}`}>
                        <button
                            onClick={() => toggleSection('services')}
                            className="flex items-center justify-between p-5 w-full text-left focus-visible:outline-none group"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#3463ac]/20 to-purple-500/10 ring-1 ring-white/[0.06]">
                                    <Cloud className="h-4 w-4 text-[#5b8fd4]" />
                                </div>
                                <span className="font-semibold text-slate-200">{dict.navigation.services}</span>
                            </div>
                            <ChevronDown className={`h-4 w-4 text-slate-500 transition-transform duration-400 ${expandedMobileSection === 'services' ? 'rotate-180 text-[#5b8fd4]' : ''}`} />
                        </button>

                        <div className={`flex flex-col transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${expandedMobileSection === 'services' ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                            }`}>
                            <div className="mx-4 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"></div>

                            {/* SAP Danışmanlık ve Uygulama Hizmetleri */}
                            <div className="px-5 pt-3 pb-1">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-[#3463ac]/70">SAP Danışmanlık ve Uygulama</span>
                            </div>
                            {[
                                { label: 'Tedarik Zinciri, Üretim ve Lojistik', href: '/services/sap-consulting/supply-chain' },
                                { label: 'Süreç Analizi ve Proje Yönetimi', href: '/services/sap-consulting/process-analysis' },
                                { label: 'SAP Roll-out ve Destek Hizmetleri', href: '/services/sap-consulting/roll-out' },
                                { label: 'Finansal Çözümler', href: '/services/sap-consulting/financial-solutions' },
                                { label: 'İnsan Kaynakları Çözümleri', href: '/services/sap-consulting/hr-solutions' },
                                { label: 'İş Zekası ve Veri Analitiği', href: '/services/sap-consulting/business-intelligence' },
                                { label: 'Müşteri Deneyimi ve Satış', href: '/services/sap-consulting/customer-experience' },
                            ].map(s => (
                                <Link key={s.label} href={`/${lang}${s.href}`} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 py-2 px-5 text-slate-400 hover:text-white transition-colors">
                                    <span className="font-medium text-[13px]">{s.label}</span>
                                </Link>
                            ))}

                            {/* Teknoloji ve Yazılım */}
                            <div className="px-5 pt-3 pb-1">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-[#a78bfa]/70">Teknoloji ve Yazılım Geliştirme</span>
                            </div>
                            {[
                                { label: 'SAP BTP Çözümleri', href: '/services/tech-development/sap-btp' },
                                { label: 'ABAP, RAP / CAP Geliştirme', href: '/services/tech-development/abap-rap-cap' },
                                { label: 'SAP Fiori ve SAPUI5 Arayüzleri', href: '/services/tech-development/fiori-sapui5' },
                                { label: 'Bulut Geçiş ve Modernizasyon', href: '/services/tech-development/cloud-migration' },
                                { label: 'İş Akışı ve Süreç Otomasyonu', href: '/services/tech-development/workflow-automation' },
                            ].map(s => (
                                <Link key={s.label} href={`/${lang}${s.href}`} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 py-2 px-5 text-slate-400 hover:text-white transition-colors">
                                    <span className="font-medium text-[13px]">{s.label}</span>
                                </Link>
                            ))}

                            {/* Entegrasyon */}
                            <div className="px-5 pt-3 pb-1">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-[#f59e0b]/70">Entegrasyon Çözümleri</span>
                            </div>
                            {[
                                { label: 'E-Dönüşüm ve Dijital Arşivleme', href: '/services/integration-solutions/e-donusum' },
                                { label: 'API ve Sistem Entegrasyonları', href: '/services/integration-solutions/api-integration' },
                                { label: 'SAP ve Non-SAP Sistem Entegrasyonları', href: '/services/integration-solutions/sap-nonsap' },
                                { label: 'Banka ve Fintech Entegrasyonları', href: '/services/integration-solutions/banka-fintech' },
                            ].map(s => (
                                <Link key={s.label} href={`/${lang}${s.href}`} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 py-2 px-5 text-slate-400 hover:text-white transition-colors">
                                    <span className="font-medium text-[13px]">{s.label}</span>
                                </Link>
                            ))}

                            {/* Veri, Yapay Zeka */}
                            <div className="px-5 pt-3 pb-1">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-[#818cf8]/70">Veri & Yapay Zeka</span>
                            </div>
                            {['Veri Dönüşümü ve Veri Yönetimi', 'Raporlama ve Analitik Çözümleri', 'AI Destekli Süreçler', 'ML Tabanlı Uygulamalar', 'Karar Destek Çözümleri'].map(s => (
                                <Link key={s} href={`/${lang}/services`} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 py-2 px-5 text-slate-400 hover:text-white transition-colors">
                                    <span className="font-medium text-[13px]">{s}</span>
                                </Link>
                            ))}

                            <div className="h-3"></div>
                        </div>
                    </div>

                    {/* PRODUCTS ACCORDION */}
                    <div className={`flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden backdrop-blur-sm ${isMobileMenuOpen ? 'mobile-stagger-2' : ''}`}>
                        <button
                            onClick={() => toggleSection('products')}
                            className="flex items-center justify-between p-5 w-full text-left focus-visible:outline-none group"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-[#3463ac]/10 ring-1 ring-white/[0.06]">
                                    <BarChart3 className="h-4 w-4 text-purple-400" />
                                </div>
                                <span className="font-semibold text-slate-200">{dict.navigation.products}</span>
                            </div>
                            <ChevronDown className={`h-4 w-4 text-slate-500 transition-transform duration-400 ${expandedMobileSection === 'products' ? 'rotate-180 text-purple-400' : ''}`} />
                        </button>

                        <div className={`flex flex-col transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${expandedMobileSection === 'products' ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                            }`}>
                            <div className="mx-4 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"></div>
                            <Link href={`/${lang}/products/apd`} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 py-3.5 px-5 text-slate-400 hover:text-white transition-colors">
                                <FileCheck2 className="h-4 w-4 text-[#ff7700]" />
                                <span className="font-medium text-sm">APD Automation</span>
                            </Link>
                            <Link href={`/${lang}/products#connector`} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 py-3.5 px-5 text-slate-400 hover:text-white transition-colors">
                                <Link2 className="h-3.5 w-3.5 text-slate-500" />
                                <span className="font-medium text-sm">BTP Connector</span>
                            </Link>
                            <Link href={`/${lang}/products#analytics`} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 py-3.5 px-5 text-slate-400 hover:text-white transition-colors">
                                <BarChart3 className="h-3.5 w-3.5 text-slate-500" />
                                <span className="font-medium text-sm">Data Analytics Suite</span>
                            </Link>
                        </div>
                    </div>

                    {/* ABOUT */}
                    <div className={`flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden backdrop-blur-sm ${isMobileMenuOpen ? 'mobile-stagger-3' : ''}`}>
                        <Link href={`/${lang}/about`} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between p-5 w-full text-left group">
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-white/[0.06] to-white/[0.02] ring-1 ring-white/[0.06]">
                                    <span className="text-sm">💡</span>
                                </div>
                                <span className="font-semibold text-slate-200">{dict.navigation.about}</span>
                            </div>
                            <ChevronRight className="h-4 w-4 text-slate-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-white" />
                        </Link>
                    </div>

                    {/* LANGUAGE ACCORDION (MOBILE) */}
                    <div className={`flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden backdrop-blur-sm ${isMobileMenuOpen ? 'mobile-stagger-4' : ''}`}>
                        <button
                            onClick={() => toggleSection('language')}
                            className="flex items-center justify-between p-5 w-full text-left focus-visible:outline-none"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-white/[0.06] to-white/[0.02] ring-1 ring-white/[0.06]">
                                    <Globe className="h-4 w-4 text-slate-400" />
                                </div>
                                <span className="font-semibold text-slate-200">
                                    {SUPPORTED_LANGUAGES.find(l => l.code === lang)?.flag} {SUPPORTED_LANGUAGES.find(l => l.code === lang)?.name || lang.toUpperCase()}
                                </span>
                            </div>
                            <ChevronDown className={`h-4 w-4 text-slate-500 transition-transform duration-400 ${expandedMobileSection === 'language' ? 'rotate-180 text-white' : ''}`} />
                        </button>

                        <div className={`flex flex-col transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${expandedMobileSection === 'language' ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                            }`}>
                            <div className="mx-4 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"></div>
                            {SUPPORTED_LANGUAGES.map((l) => (
                                <Link
                                    key={l.code}
                                    href={redirectedPathname(l.code)}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`flex items-center gap-3 py-3.5 px-5 text-sm transition-all ${lang === l.code
                                        ? 'bg-[#3463ac]/10 text-white font-semibold'
                                        : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                                        }`}
                                >
                                    <span className="text-base">{l.flag}</span>
                                    <span className="flex-1">{l.name}</span>
                                    {lang === l.code && (
                                        <Check className="h-3.5 w-3.5 text-[#5b8fd4]" />
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* MOBILE CTA */}
                    <div className={`mt-4 pb-6 ${isMobileMenuOpen ? 'mobile-stagger-5' : ''}`}>
                        <Link
                            href={`/${lang}/contact`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="cta-shimmer flex w-full h-14 items-center justify-center rounded-2xl px-6 text-base font-semibold text-white shadow-[0_0_30px_rgba(52,99,172,0.3)] transition-all"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <Sparkles className="h-4 w-4" />
                                {dict.navigation.getConsultation}
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
