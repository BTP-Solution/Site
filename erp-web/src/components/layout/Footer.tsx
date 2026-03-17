import Image from 'next/image';
import { MapPin, Mail, Phone, ArrowUpRight, Linkedin, Twitter, Github } from 'lucide-react';
import Link from 'next/link';

type FooterProps = {
    dict: any;
};

const FOOTER_LINKS = {
    services: [
        { label: 'SAP Danışmanlığı', href: '/services/sap-consulting' },
        { label: 'Teknoloji & Geliştirme', href: '/services/tech-development' },
        { label: 'Entegrasyon Çözümleri', href: '/services/integration-solutions' },
        { label: 'AI & Veri Çözümleri', href: '/services/ai-data-solutions' },
    ],
    company: [
        { label: 'Hakkımızda', href: '/about' },
        { label: 'Ürünlerimiz', href: '/products/apd' },
    ],
};

const SOCIAL_LINKS = [
    { icon: Linkedin, href: 'https://linkedin.com/company/btpsolution', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/btpsolution', label: 'Twitter' },
];

export default function Footer({ dict }: FooterProps) {
    return (
        <footer className="relative bg-[#060d1a] overflow-hidden">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3463ac]/40 to-transparent" />

            {/* Ambient lighting */}
            <div className="absolute bottom-0 left-[10%] w-[30%] h-[60%] rounded-full bg-[#3463ac]/5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-[10%] w-[25%] h-[50%] rounded-full bg-purple-900/5 blur-[100px] pointer-events-none" />

            {/* Main Footer Content */}
            <div className="relative container mx-auto px-4 sm:px-8 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

                    {/* Brand Column */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="flex items-center gap-3">
                            <Image
                                src="/btp_logo-2.png"
                                alt="BTP Solution"
                                width={120}
                                height={31}
                                className="h-8 w-auto object-contain"
                            />
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                            {dict.footer.description}
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-3 pt-2">
                            {SOCIAL_LINKS.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-[#3463ac]/30 hover:bg-[#3463ac]/10 transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-4 w-4 text-slate-500 group-hover:text-[#5b8fd4] transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services Links */}
                    <div className="lg:col-span-3">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-5">{dict.navigation.services}</h4>
                        <ul className="space-y-3">
                            {FOOTER_LINKS.services.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="group flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors duration-200">
                                        <span>{link.label}</span>
                                        <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200 text-[#5b8fd4]" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-5">Şirket</h4>
                        <ul className="space-y-3">
                            {FOOTER_LINKS.company.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="group flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors duration-200">
                                        <span>{link.label}</span>
                                        <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200 text-[#5b8fd4]" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-3">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-5">{dict.navigation.contact}</h4>
                        <div className="space-y-4">
                            <a href="https://maps.google.com/?q=Ferahevler+Mah+%C3%96nceler+Sok+No:33+D:2+Sar%C4%B1yer+%C4%B0stanbul" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 text-sm text-slate-400 hover:text-slate-300 transition-colors">
                                <MapPin className="h-4 w-4 mt-0.5 text-[#5b8fd4] shrink-0" />
                                <span className="leading-relaxed">
                                    Ferahevler Mah. Önceler Sok.<br />
                                    No:33 D:2 Sarıyer / İstanbul
                                </span>
                            </a>
                            <a href="tel:+905547251187" className="group flex items-center gap-3 text-sm text-slate-400 hover:text-slate-300 transition-colors">
                                <Phone className="h-4 w-4 text-[#ff7700] shrink-0" />
                                <span>+90 554 725 11 87</span>
                            </a>
                            <a href="mailto:info@btpsolution.com" className="group flex items-center gap-3 text-sm text-slate-400 hover:text-slate-300 transition-colors">
                                <Mail className="h-4 w-4 text-purple-400 shrink-0" />
                                <span>info@btpsolution.com</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-14 pt-6 border-t border-white/[0.04]">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-slate-600">
                            &copy; {new Date().getFullYear()} BTP Solution. {dict.footer.rights}
                        </p>
                        <div className="flex items-center gap-1 text-xs text-slate-600">
                            <span>Built with</span>
                            <span className="text-red-500/60 text-sm">♥</span>
                            <span>in İstanbul</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
