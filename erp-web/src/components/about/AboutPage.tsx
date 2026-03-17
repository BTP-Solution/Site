'use client';

import { Building2, Users, Target, Award, MapPin, Mail, Phone, ArrowRight, Sparkles, Globe, Cpu, Shield, Zap } from 'lucide-react';
import Image from 'next/image';
import TransitionLink from '@/components/ui/TransitionLink';

type AboutPageProps = {
    dict: any;
    lang: string;
};

const STATS = [
    { value: '50+', label: 'Tamamlanan Proje', icon: Target },
    { value: '30+', label: 'Mutlu Müşteri', icon: Users },
    { value: '4+', label: 'Yıllık Deneyim', icon: Award },
    { value: '20+', label: 'Uzman Kadro', icon: Building2 },
];

const VALUES = [
    {
        icon: Cpu,
        title: 'Teknoloji Odaklılık',
        description: 'SAP ekosisteminde en güncel teknolojileri takip ediyor, müşterilerimize en iyi çözümleri sunuyoruz.',
        color: '#3463ac',
    },
    {
        icon: Shield,
        title: 'Güvenilirlik',
        description: 'Her projede şeffaf iletişim, zamanında teslimat ve kaliteli iş çıktısı ile güvene dayalı ilişkiler kuruyoruz.',
        color: '#7e22ce',
    },
    {
        icon: Zap,
        title: 'Çeviklik',
        description: 'Hızla değişen iş dünyasında esnek yaklaşımımız ile müşterilerimizin ihtiyaçlarına anında cevap veriyoruz.',
        color: '#ff7700',
    },
    {
        icon: Globe,
        title: 'Global Vizyon',
        description: 'Uluslararası standartlarda hizmet sunarak Türkiye\'den dünyaya açılan kurumsal çözümler geliştiriyoruz.',
        color: '#10b981',
    },
];

export default function AboutPage({ dict, lang }: AboutPageProps) {
    return (
        <main className="w-full flex flex-col items-center overflow-hidden bg-[#060d1a]">
            {/* Background ambient lighting */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#3463ac]/10 blur-[120px]" />
                <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] rounded-full bg-purple-900/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[30%] rounded-full bg-[#0a1628] blur-[100px]" />
            </div>

            <div className="relative z-10 w-full flex flex-col items-center">

                {/* ─── HERO SECTION ─── */}
                <section className="relative w-full pt-36 pb-20 sm:pt-44 sm:pb-28">
                    <div className="container mx-auto px-4 sm:px-8 max-w-5xl text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#3463ac]/20 bg-[#3463ac]/5 px-4 py-1.5 mb-8" style={{ animation: 'float-in 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s both' }}>
                            <Building2 className="h-3.5 w-3.5 text-[#5b8fd4]" />
                            <span className="text-xs font-semibold tracking-wider text-[#5b8fd4] uppercase">Hakkımızda</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight" style={{ animation: 'float-in 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s both' }}>
                            Teknolojiyi{' '}
                            <span className="bg-gradient-to-r from-[#3463ac] via-[#7e22ce] to-[#3463ac] bg-clip-text text-transparent">
                                Değere
                            </span>{' '}
                            Dönüştürüyoruz
                        </h1>

                        <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed" style={{ animation: 'float-in 0.8s cubic-bezier(0.16,1,0.3,1) 0.35s both' }}>
                            BTP Solution olarak SAP ekosisteminde uzmanlaşmış danışmanlık hizmetleri ve yapay zekâ destekli yenilikçi ürünlerle kurumsal iş süreçlerinizi dijital çağa taşıyoruz.
                        </p>
                    </div>
                </section>

                {/* ─── STATS SECTION ─── */}
                <section className="w-full pb-20">
                    <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" style={{ animation: 'float-in 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s both' }}>
                            {STATS.map((stat, i) => (
                                <div
                                    key={stat.label}
                                    className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3463ac]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <stat.icon className="h-6 w-6 text-[#5b8fd4] mx-auto mb-3 relative z-10" />
                                    <div className="text-3xl sm:text-4xl font-bold text-white relative z-10">{stat.value}</div>
                                    <div className="mt-1 text-sm text-slate-400 relative z-10">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── ABOUT STORY ─── */}
                <section className="w-full py-20 border-t border-white/[0.04]">
                    <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                                    Biz Kimiz?
                                </h2>
                                <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-[#3463ac] to-[#7e22ce]" />
                                <p className="mt-8 text-slate-400 leading-relaxed text-[15px]">
                                    BTP Solution, SAP ekosisteminde uzmanlaşmış bir teknoloji ve danışmanlık şirketidir. İstanbul merkezli ekibimiz, kurumsal müşterilerimize S/4HANA dönüşümü, SAP BTP entegrasyonları, ABAP/RAP/CAP geliştirme ve süreç otomasyonu alanlarında uçtan uca hizmet sunmaktadır.
                                </p>
                                <p className="mt-4 text-slate-400 leading-relaxed text-[15px]">
                                    Yapay zekâ destekli ürünlerimiz ve yenilikçi entegrasyon çözümlerimizle, işletmelerin dijital dönüşüm yolculuğunda güvenilir iş ortağı olmayı hedefliyoruz. Her projede kalite, şeffaflık ve sürdürülebilirliği ön planda tutuyoruz.
                                </p>
                                <p className="mt-4 text-slate-400 leading-relaxed text-[15px]">
                                    APD Automation gibi niş ürünlerimizle SAP süreçlerinde otomasyonu bir üst seviyeye taşırken, finansal çözümlerden tedarik zinciri yönetimine kadar geniş bir yelpazede değer katıyoruz.
                                </p>
                            </div>
                            <div className="relative">
                                <div className="rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-8 backdrop-blur-sm">
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#3463ac]/10 ring-1 ring-[#3463ac]/20">
                                                <Target className="h-5 w-5 text-[#5b8fd4]" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-white">Misyonumuz</h3>
                                                <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                                                    SAP teknolojilerini ve yapay zekâyı kullanarak kurumsal süreçleri dönüştürmek, müşterilerimize rekabet avantajı sağlamak ve dijital çağda sürdürülebilir büyümeyi mümkün kılmak.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                                        <div className="flex items-start gap-4">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#7e22ce]/10 ring-1 ring-[#7e22ce]/20">
                                                <Sparkles className="h-5 w-5 text-purple-400" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-white">Vizyonumuz</h3>
                                                <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                                                    Türkiye&apos;nin ve bölgenin lider SAP teknoloji partneri olarak, yapay zekâ ve inovasyon odaklı ürünleriyle global arenada tanınan bir teknoloji şirketi olmak.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Glow effect */}
                                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#3463ac]/10 via-purple-500/5 to-[#3463ac]/10 blur-xl -z-10" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ─── VALUES ─── */}
                <section className="w-full py-20 border-t border-white/[0.04]">
                    <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
                        <div className="text-center mb-14">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white">Değerlerimiz</h2>
                            <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#3463ac] to-[#7e22ce] mx-auto" />
                            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                                İş yapış tarzımızı şekillendiren ve her projede rehberimiz olan temel değerlerimiz.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {VALUES.map((val, i) => (
                                <div
                                    key={val.title}
                                    className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 hover:border-white/[0.12] transition-all duration-300"
                                >
                                    <div className="absolute top-0 left-0 right-0 h-px rounded-full" style={{ background: `linear-gradient(90deg, transparent, ${val.color}30, transparent)` }} />
                                    <div
                                        className="flex h-12 w-12 items-center justify-center rounded-xl ring-1 transition-all duration-300"
                                        style={{
                                            background: `linear-gradient(135deg, ${val.color}15, ${val.color}05)`,
                                            boxShadow: `0 0 0 1px ${val.color}20`,
                                        }}
                                    >
                                        <val.icon className="h-5 w-5" style={{ color: val.color }} />
                                    </div>
                                    <h3 className="mt-4 text-lg font-semibold text-white">{val.title}</h3>
                                    <p className="mt-2 text-sm text-slate-400 leading-relaxed">{val.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── WHY US ─── */}
                <section className="w-full py-20 border-t border-white/[0.04]">
                    <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
                        <div className="text-center mb-14">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white">Neden BTP Solution?</h2>
                            <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#3463ac] to-[#7e22ce] mx-auto" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {[
                                { title: 'SAP Uzmanlığı', desc: 'S/4HANA, BTP, ABAP RAP/CAP, Fiori ve tüm SAP modüllerinde derin uzmanlık.', icon: '🏆' },
                                { title: 'Yenilikçi Ürünler', desc: 'APD Automation gibi yapay zekâ destekli, SAP ekosistemi üzerinde çalışan niş ürünler.', icon: '🚀' },
                                { title: 'Uçtan Uca Çözüm', desc: 'Danışmanlıktan uygulamaya, entegrasyondan bakıma kadar tüm süreçlerde yanınızdayız.', icon: '🔗' },
                            ].map((item) => (
                                <div key={item.title} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 text-center hover:border-white/[0.12] transition-all duration-300">
                                    <div className="text-3xl mb-4">{item.icon}</div>
                                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                    <p className="mt-2 text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-14 text-center">
                            <TransitionLink
                                href={`/${lang}/services`}
                                className="cta-shimmer group inline-flex items-center gap-2.5 px-10 py-4 text-white rounded-full font-semibold shadow-2xl hover:shadow-[0_8px_30px_rgba(52,99,172,0.3)] transition-all hover:scale-105"
                            >
                                <span className="relative z-10 flex items-center gap-2.5">
                                    <Sparkles className="h-4 w-4" />
                                    Hizmetlerimizi Keşfedin
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </TransitionLink>
                        </div>
                    </div>
                </section>

                {/* ─── CONTACT & MAP ─── */}
                <section className="w-full py-20 border-t border-white/[0.04]">
                    <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
                        <div className="text-center mb-14">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white">Bize Ulaşın</h2>
                            <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#3463ac] to-[#7e22ce] mx-auto" />
                            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                                Dijital dönüşüm yolculuğunuzda sizinle birlikte yürümek için sabırsızlanıyoruz.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
                            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 flex items-start gap-4 hover:border-white/[0.12] transition-all duration-300">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#3463ac]/10 ring-1 ring-[#3463ac]/20">
                                    <MapPin className="h-5 w-5 text-[#5b8fd4]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">Adres</h3>
                                    <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                                        Ferahevler Mah. Önceler Sok.<br />
                                        No:33 D:2 Sarıyer / İstanbul
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 flex items-start gap-4 hover:border-white/[0.12] transition-all duration-300">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#7e22ce]/10 ring-1 ring-[#7e22ce]/20">
                                    <Mail className="h-5 w-5 text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">E-posta</h3>
                                    <p className="mt-1 text-sm text-slate-400">info@btpsolution.com</p>
                                </div>
                            </div>
                            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 flex items-start gap-4 hover:border-white/[0.12] transition-all duration-300">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ff7700]/10 ring-1 ring-[#ff7700]/20">
                                    <Phone className="h-5 w-5 text-[#ff7700]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">Telefon</h3>
                                    <p className="mt-1 text-sm text-slate-400">+90 554 725 11 87</p>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps Embed */}
                        <div className="rounded-2xl border border-white/[0.06] overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12024.28929574569!2d29.0163!3d41.1072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5bfc4b3c9e7%3A0xc40f78c2e76ec4a6!2sFerahevler%2C%20Sar%C4%B1yer%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1710000000000!5m2!1str!2str"
                                width="100%"
                                height="400"
                                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.85) contrast(1.2)' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="BTP Solution Konum"
                                className="w-full"
                            />
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}
