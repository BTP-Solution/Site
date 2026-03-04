import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Cloud, Database, Link2, BarChart3, Monitor, FileText, Truck, Settings } from 'lucide-react';

type NavbarProps = {
    dict: any;
    lang: string;
};

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

                            {/* MEGA DROPDOWN — WIDE 4-COLUMN */}
                            <div className="absolute left-1/2 top-full pt-3 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-[640px] z-50">
                                <div className="dropdown-panel rounded-2xl border border-white/[0.08] bg-slate-950/95 backdrop-blur-2xl p-5 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.6)] ring-1 ring-white/[0.05]">
                                    <div className="grid grid-cols-2 gap-5">

                                        {/* SAP Danışmanlık */}
                                        <div>
                                            <div className="flex items-center gap-2 mb-3">
                                                <Monitor className="h-4 w-4 text-[#3463ac]" strokeWidth={1.5} />
                                                <span className="text-xs font-bold text-white/70">SAP Danışmanlık</span>
                                            </div>
                                            <div className="space-y-0.5">
                                                {['Lisans & Bakım', 'Teknoloji Danışmanlığı', 'Uygulama Danışmanlığı', 'Dış Kaynak Kullanımı', 'HANA Donanım & Bulut'].map(s => (
                                                    <Link key={s} href={`/${lang}/services`} className="block rounded-lg px-3 py-1.5 text-[13px] text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-white">{s}</Link>
                                                ))}
                                            </div>
                                        </div>

                                        {/* E-Dönüşüm */}
                                        <div>
                                            <div className="flex items-center gap-2 mb-3">
                                                <FileText className="h-4 w-4 text-[#22d3ee]" strokeWidth={1.5} />
                                                <span className="text-xs font-bold text-white/70">E-Dönüşüm</span>
                                            </div>
                                            <div className="space-y-0.5">
                                                {['e-Fatura / e-İrsaliye', 'e-Arşiv / e-Defter', 'e-Bordro / e-SGK', 'e-İmza Portalı', 'Dijital Arşivleme'].map(s => (
                                                    <Link key={s} href={`/${lang}/services`} className="block rounded-lg px-3 py-1.5 text-[13px] text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-white">{s}</Link>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Tedarik Zinciri */}
                                        <div>
                                            <div className="flex items-center gap-2 mb-3">
                                                <Truck className="h-4 w-4 text-[#34d399]" strokeWidth={1.5} />
                                                <span className="text-xs font-bold text-white/70">Tedarik Zinciri</span>
                                            </div>
                                            <div className="space-y-0.5">
                                                {['Planlama', 'Üretim', 'Lojistik', 'Tedarikçi Yönetimi', 'Entegrasyon Çözümleri'].map(s => (
                                                    <Link key={s} href={`/${lang}/services`} className="block rounded-lg px-3 py-1.5 text-[13px] text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-white">{s}</Link>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Teknoloji & Cloud */}
                                        <div>
                                            <div className="flex items-center gap-2 mb-3">
                                                <Settings className="h-4 w-4 text-[#a78bfa]" strokeWidth={1.5} />
                                                <span className="text-xs font-bold text-white/70">Teknoloji & Cloud</span>
                                            </div>
                                            <div className="space-y-0.5">
                                                {['S/4HANA & BTP', 'ABAP / RAP / CAP', 'SAP Fiori', 'Public & Private Cloud', 'AI / ML'].map(s => (
                                                    <Link key={s} href={`/${lang}/services`} className="block rounded-lg px-3 py-1.5 text-[13px] text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-white">{s}</Link>
                                                ))}
                                            </div>
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
