import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Cloud, Database, Link2, BarChart3, Monitor, FileText, Truck, Settings, FileCheck2, Code2, Blocks, Brain, Sparkles, ArrowRight, Cpu, Workflow, Archive, Zap, ShieldCheck } from 'lucide-react';

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
        items: [
            { label: 'E-Dönüşüm ve Dijital Arşivleme', href: '/services/integration-solutions/e-donusum' },
            { label: 'API ve Sistem Entegrasyonları', href: '/services' },
            { label: 'SAP ve Non-SAP Sistem Entegrasyonları', href: '/services' },
        ],
    },
    {
        key: 'cloud',
        icon: Cloud,
        color: '#22d3ee',
        label: 'Bulut ve Altyapı Çözümleri',
        items: [
            { label: 'Public ve Private Cloud Çözümleri', href: '/services' },
            { label: 'Bulut Geçiş ve Modernizasyon', href: '/services/tech-development/cloud-migration' },
            { label: 'HANA Donanım ve Altyapı Danışmanlığı', href: '/services' },
        ],
    },
    {
        key: 'digital',
        icon: Workflow,
        color: '#f472b6',
        label: 'Dijital Dönüşüm ve Otomasyon',
        items: [
            { label: 'E-Dönüşüm ve Dijital Arşivleme', href: '/services/integration-solutions/e-donusum' },
            { label: 'İş Akışı ve Kurumsal Süreç Otomasyonu', href: '/services/tech-development/workflow-automation' },
        ],
    },
    {
        key: 'ai',
        icon: Brain,
        color: '#818cf8',
        label: 'Veri, Yapay Zeka ve Akıllı Çözümler',
        items: [
            { label: 'Veri Dönüşümü ve Veri Yönetimi', href: '/services' },
            { label: 'Raporlama ve Analitik Çözümleri', href: '/services' },
            { label: 'AI Destekli Süreçler', href: '/services' },
            { label: 'ML Tabanlı Uygulamalar', href: '/services' },
            { label: 'Karar Destek Çözümleri', href: '/services' },
        ],
    },
];

export default function Navbar({ dict, lang }: NavbarProps) {
    return (
        <nav className="flex w-full items-center justify-between py-2">

            {/* LOGO */}
            <div className="flex items-center">
                <Link href={`/${lang}`} className="group relative transition-transform duration-300 hover:scale-105">
                    <div className="absolute inset-0 rounded-xl bg-[#3463ac]/0 blur-xl transition-all duration-500 group-hover:bg-[#3463ac]/20"></div>
                    <Image
                        src="/btp_logo-2.png"
                        alt="BTP Solution Logo"
                        width={180}
                        height={46}
                        priority
                        className="relative h-10 w-auto object-contain drop-shadow-[0_0_12px_rgba(52,99,172,0.15)]"
                    />
                </Link>
            </div>

            {/* CENTERED NAV — ANIMATED GRADIENT BORDER CAPSULE */}
            <div className="absolute left-1/2 top-1/2 hidden lg:flex -translate-x-1/2 -translate-y-1/2">
                <div className="navbar-capsule-border shadow-[0_4px_30px_-8px_rgba(52,99,172,0.2)]">
                    <div className="navbar-capsule-inner flex items-center gap-0.5 px-2 py-1.5">

                        {/* SERVICES DROPDOWN */}
                        <div className="group relative" style={{ animation: 'float-in 0.5s cubic-bezier(0.16,1,0.3,1) 0.1s both' }}>
                            <Link
                                href={`/${lang}/services`}
                                className="nav-link-premium flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none"
                            >
                                {dict.navigation.services}
                                <ChevronDown className="h-3.5 w-3.5 opacity-40 transition-all duration-300 group-hover:rotate-180 group-hover:opacity-100" />
                            </Link>

                            {/* ═══ MEGA DROPDOWN — 7 CATEGORIES ═══ */}
                            <div className="absolute left-1/2 top-full pt-3 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[920px] z-50">
                                <div className="mega-dropdown-panel rounded-2xl border border-white/[0.08] bg-[#0a1628]/[0.97] backdrop-blur-2xl p-0 shadow-[0_25px_80px_-12px_rgba(0,0,0,0.7)] ring-1 ring-white/[0.05] overflow-hidden">

                                    {/* TOP GRADIENT LINE */}
                                    <div className="h-[2px] w-full bg-gradient-to-r from-[#3463ac] via-[#a78bfa] to-[#22d3ee]"></div>

                                    <div className="flex">

                                        {/* LEFT: 3-COLUMN GRID */}
                                        <div className="flex-1 grid grid-cols-3 gap-0 p-5 pr-0">
                                            {SERVICE_CATEGORIES.slice(0, 5).map((cat, ci) => {
                                                const Icon = cat.icon;
                                                return (
                                                    <div key={cat.key} className="mega-cat-group px-3 py-2">
                                                        {/* Category heading */}
                                                        <div className="flex items-center gap-2.5 mb-2.5">
                                                            <div
                                                                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ring-1 ring-white/[0.08]"
                                                                style={{ background: `linear-gradient(135deg, ${cat.color}22, ${cat.color}08)` }}
                                                            >
                                                                <Icon className="h-3.5 w-3.5" style={{ color: cat.color }} strokeWidth={1.8} />
                                                            </div>
                                                            {'href' in cat && cat.href ? (
                                                                <Link href={`/${lang}${cat.href}`} className="text-[11px] font-bold uppercase tracking-wider text-white/60 hover:text-white transition-colors">
                                                                    {cat.label}
                                                                </Link>
                                                            ) : (
                                                                <span className="text-[11px] font-bold uppercase tracking-wider text-white/60">{cat.label}</span>
                                                            )}
                                                        </div>
                                                        {/* Items */}
                                                        <div className="space-y-0">
                                                            {cat.items.map((s, si) => (
                                                                <Link
                                                                    key={s.label}
                                                                    href={`/${lang}${s.href}`}
                                                                    className="mega-item block rounded-lg px-2.5 py-[6px] text-[12.5px] text-slate-400 transition-all duration-200 hover:bg-white/[0.05] hover:text-white hover:translate-x-0.5"
                                                                >
                                                                    {s.label}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        {/* RIGHT: HIGHLIGHTED AI CATEGORY + CTA */}
                                        <div className="w-[240px] border-l border-white/[0.06] bg-gradient-to-b from-[#818cf8]/[0.04] to-transparent p-5 flex flex-col justify-between">
                                            {/* AI Category */}
                                            {(() => {
                                                const aiCat = SERVICE_CATEGORIES[5];
                                                const AiIcon = aiCat.icon;
                                                return (
                                                    <div>
                                                        <div className="flex items-center gap-2.5 mb-3">
                                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#818cf8]/25 to-[#a78bfa]/10 ring-1 ring-[#818cf8]/20 shadow-[0_0_20px_rgba(129,140,248,0.1)]">
                                                                <AiIcon className="h-4 w-4 text-[#818cf8]" strokeWidth={1.8} />
                                                            </div>
                                                            <div>
                                                                <span className="text-[11px] font-bold uppercase tracking-wider text-[#818cf8]/80">{aiCat.label}</span>
                                                            </div>
                                                        </div>
                                                        <div className="space-y-0">
                                                            {aiCat.items.map(s => (
                                                                <Link
                                                                    key={s.label}
                                                                    href={`/${lang}${s.href}`}
                                                                    className="mega-item block rounded-lg px-2.5 py-[6px] text-[12.5px] text-slate-400 transition-all duration-200 hover:bg-[#818cf8]/[0.08] hover:text-white hover:translate-x-0.5"
                                                                >
                                                                    {s.label}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                );
                                            })()}

                                            {/* CTA at bottom */}
                                            <Link
                                                href={`/${lang}/services`}
                                                className="group/cta mt-4 flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-white/[0.07] hover:text-white hover:border-white/[0.15] hover:shadow-[0_0_20px_rgba(52,99,172,0.15)]"
                                            >
                                                <span className="text-[13px]">Tüm Hizmetler</span>
                                                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-1" />
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* PRODUCTS DROPDOWN */}
                        <div className="group relative" style={{ animation: 'float-in 0.5s cubic-bezier(0.16,1,0.3,1) 0.2s both' }}>
                            <Link
                                href={`/${lang}/products`}
                                className="nav-link-premium flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none"
                            >
                                {dict.navigation.products}
                                <ChevronDown className="h-3.5 w-3.5 opacity-40 transition-all duration-300 group-hover:rotate-180 group-hover:opacity-100" />
                            </Link>

                            {/* MEGA DROPDOWN */}
                            <div className="absolute left-1/2 top-full pt-3 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-72 z-50">
                                <div className="dropdown-panel rounded-2xl border border-white/[0.08] bg-slate-950/95 backdrop-blur-2xl p-2 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.6)] ring-1 ring-white/[0.05]">
                                    <div className="mb-2 px-4 pt-2">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{dict.navigation.products}</span>
                                    </div>
                                    <Link href={`/${lang}/products/apd`} className="dropdown-item group/item flex items-center gap-3.5 rounded-xl px-4 py-3 text-sm text-slate-300 transition-all">
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#ff7700]/20 to-[#3463ac]/10 ring-1 ring-white/[0.06] transition-all duration-300 group-hover/item:from-[#ff7700]/30 group-hover/item:to-[#3463ac]/20 group-hover/item:shadow-[0_0_12px_rgba(255,119,0,0.2)]">
                                            <FileCheck2 className="h-4 w-4 text-[#ff7700] transition-colors group-hover/item:text-[#ff8c2b]" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-white/90 transition-colors group-hover/item:text-white">APD Automation</span>
                                            <span className="text-xs text-slate-500 transition-colors group-hover/item:text-slate-400">Smart posting document engine</span>
                                        </div>
                                    </Link>
                                    <div className="mx-4 my-0.5 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"></div>
                                    <Link href={`/${lang}/products#connector`} className="dropdown-item group/item flex items-center gap-3.5 rounded-xl px-4 py-3 text-sm text-slate-300 transition-all">
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-[#3463ac]/10 ring-1 ring-white/[0.06] transition-all duration-300 group-hover/item:from-purple-500/30 group-hover/item:to-[#3463ac]/20 group-hover/item:shadow-[0_0_12px_rgba(126,34,206,0.2)]">
                                            <Link2 className="h-4 w-4 text-purple-400 transition-colors group-hover/item:text-purple-300" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-white/90 transition-colors group-hover/item:text-white">BTP Connector</span>
                                            <span className="text-xs text-slate-500 transition-colors group-hover/item:text-slate-400">Seamlessly link your legacy systems</span>
                                        </div>
                                    </Link>
                                    <div className="mx-4 my-0.5 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"></div>
                                    <Link href={`/${lang}/products#analytics`} className="dropdown-item group/item flex items-center gap-3.5 rounded-xl px-4 py-3 text-sm text-slate-300 transition-all">
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-[#3463ac]/10 ring-1 ring-white/[0.06] transition-all duration-300 group-hover/item:from-purple-500/30 group-hover/item:to-[#3463ac]/20 group-hover/item:shadow-[0_0_12px_rgba(126,34,206,0.2)]">
                                            <BarChart3 className="h-4 w-4 text-purple-400 transition-colors group-hover/item:text-purple-300" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-white/90 transition-colors group-hover/item:text-white">Data Analytics Suite</span>
                                            <span className="text-xs text-slate-500 transition-colors group-hover/item:text-slate-400">Turn raw data into strategic assets</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* ABOUT LINK */}
                        <div style={{ animation: 'float-in 0.5s cubic-bezier(0.16,1,0.3,1) 0.3s both' }}>
                            <Link
                                href={`/${lang}/about`}
                                className="nav-link-premium rounded-full px-5 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none"
                            >
                                {dict.navigation.about}
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            {/* SPACER */}
            <div className="flex w-32"></div>

        </nav>
    );
}
