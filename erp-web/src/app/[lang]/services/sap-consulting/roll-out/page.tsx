'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { RotateCw, Globe2, Building2, Database, ShieldCheck, HeadphonesIcon } from 'lucide-react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function RolloutPage() {
    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            {/* HERO */}
            <ServiceHero
                breadcrumbs={[
                    { label: 'Anasayfa', href: '/' },
                    { label: 'Hizmetlerimiz', href: '/services' },
                    { label: 'SAP Danışmanlık', href: '/services/sap-consulting' },
                    { label: 'SAP Roll-out ve Destek' },
                ]}
                title="SAP Roll-out ve Destek Hizmetleri"
                highlightedWord="Roll-out"
                subtitle="Kurumsal süreçlerinizi yeni lokasyonlara güvenle taşıyoruz"
                description="Kurumsal süreçlerinizi yeni lokasyonlara ve şirketlere güvenle taşıyor; yasal mevzuatlara tam uyumlu yaygınlaştırma ve kesintisiz destek hizmetleri sunuyoruz."
                ctaText="Roll-out Sürecini Başlatın"
                ctaHref="/contact"
                icon={RotateCw}
                accentColor="#3b82f6"
                gradientFrom="#3b82f6"
                gradientTo="#8b5cf6"
                stats={[
                    { value: '%100', label: 'Mevzuata Uyum' },
                    { value: 'SLA', label: '7/24 Teknik Destek Garantisi' },
                    { value: 'AMS', label: 'Uygulama Yönetimi' },
                ]}
            />

            {/* GİRİŞ */}
            <ServiceIntro
                paragraphs={[
                    'Büyüyen ve globalleşen organizasyonlar için, merkezdeki standart iş süreçlerinin yeni şubelere, ülkelere veya satın alınan şirketlere aktarılması (Roll-out) kritik bir adımdır. Bu süreçte hem ana (Global Template) yapının korunması hem de yerel dinamiklere uyum sağlanması ciddi bir uzmanlık gerektirir.',
                    'Mevcut sisteminizi bozmadan, yerel (lokalizasyon) yasal gereksinimleri (e-Dönüşüm, vergi vb.) eksiksiz karşılayacak şekilde yaygınlaştırma projelerinizi gerçekleştiriyor; canlıya geçiş sonrası SLA standartlarında destek sunuyoruz.'
                ]}
            />

            {/* KARTLAR */}
            <ServiceCards
                sectionTitle="Hizmet Kapsamı ve Destek Modeli"
                subtitle="Küresel denetimden yerele uzanan standardize uygulamalar"
                variant="grid"
                accentColor="#3b82f6"
                cards={[
                    {
                        icon: Globe2,
                        title: 'Roll-out Planlama ve Gap Analizi',
                        description: 'Global merkez şablonu (Template) ile yerel ihtiyaçların karşılaştırılması ve aradaki fonksiyonel farkların belirlenmesi.',
                        tag: 'Stratejik Plan'
                    },
                    {
                        icon: Building2,
                        title: 'Lokalizasyon Uyarlamaları',
                        description: 'Türkiye VUK mevzuatı, e-Dönüşüm (e-Fatura vb.) süreçleri gibi yerel yasal ve finansal mevzuatlara sistemin uyumlandırılması.',
                        tag: 'Yasal Uyum'
                    },
                    {
                        icon: Database,
                        title: 'Veri Göçü (Data Migration)',
                        description: 'Yeni dahil olan şirket veya lokasyonun eski verilerinin (Legacy), SAP sistemine temiz, tutarlı ve güvenli bir biçimde aktarımı.',
                        tag: 'Kayıpsız Geçiş'
                    },
                    {
                        icon: HeadphonesIcon,
                        title: 'Hypercare ve AMS Desteği',
                        description: 'Canlıya geçiş (Go-Live) sürecinde yoğun destek (Hypercare) ve sonrasında sürekli uygulama yönetimi (AMS) ile proaktif hata çözümü.',
                        tag: 'Kesintisiz İş'
                    },
                ]}
            />

            {/* SSS (Accordion) */}
            <section className="w-full bg-[#0a1628]/30 py-24 px-4 sm:px-6 lg:px-8 relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#3b82f6]/30 to-[#3b82f6]/30" />
                            <div className="w-2 h-2 rounded-full bg-[#3b82f6] shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
                            <div className="h-px w-12 bg-gradient-to-l from-transparent via-[#3b82f6]/30 to-[#3b82f6]/30" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sıkça Sorulan Sorular</h2>
                        <p className="text-slate-400 text-base">Yaygınlaştırma süreçlerindeki deneyimlerimize dayalı yanıtlar</p>
                    </div>

                    <div className="space-y-4">
                        <FaqItem
                            question="Roll-out projelerinde yerel mevzuatlara uyumu nasıl sağlıyorsunuz?"
                            answer="Mali danışmanlarımız ve mevzuat hakim SAP yerel modül uzmanlarımız (Lokasyon bazlı: Türkiye / Yurtdışı vb.) ile yasal gereklilikleri projenin en başında tespit eder ve merkezi şablona (Global Template) entegre edilecek şekilde yapılandırırız. Böylece yerel e-Dönüşüm beklentilerini tam zamanında karşılarız."
                        />
                        <FaqItem
                            question="Canlı kullanıma geçiş sonrası destek süreciniz nasıl işliyor?"
                            answer="Go-Live sonrası ilk haftalarda 'Hypercare' modunda sürekli ve anında yerinde destek veriyor, işler rutine bindikten sonra sorunların kritiklik (Severity) seviyesine göre belirlenmiş SLA (Hizmet Seviyesi Taahhüdü) süreleri içerisinde düzenli uzaktan müdahale eden dedike (AMS) destek masası sunuyoruz."
                        />
                    </div>
                </div>
            </section>

            {/* FAYDALAR */}
            <ServiceBenefits
                sectionTitle="Sağlanan Faydalar"
                variant="pills"
                accentColor="#3b82f6"
                items={[
                    'Merkezi kontrol yeteneğinin şirket geneline yayılması',
                    'Yeni lokasyonlarda daha hızlı devreye alma (Go-live) süresi',
                    'Süreç standardizasyonu ve operasyonel maliyet düşüşü',
                    'Ortak raporlama dilinin oluşması',
                ]}
            />

            {/* CTA */}
            <ServiceCta
                title="Büyüme stratejilerinizi SAP Roll-out uzmanlığımızla destekleyin."
                subtitle="Firmanız globalleşirken veya yerel iştirak ağını genişletirken teknik bariyerleri aşmanıza yardımcı oluyoruz."
                buttonText="Yaygınlaştırma Planınızı Çizelim"
                buttonHref="/contact"
                features={['Ölçeklenebilir Operasyon', 'Gelişmiş Uyumluluk', 'Risksiz ve Garantili Geçiş']}
            />
        </main>
    );
}

// Simple Faq component for this page
function FaqItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-white/[0.05] bg-[#060d1a] rounded-xl overflow-hidden transition-colors hover:border-white/[0.1] hover:bg-[#0a1628]/50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]"
            >
                <span className="text-white font-medium text-lg pr-4">{question}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#3b82f6]' : ''}`} />
            </button>
            <div
                className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                style={{ overflow: 'hidden' }}
            >
                <div className="px-6 pb-6 pt-0 text-slate-400 leading-relaxed border-t border-white/[0.02]">
                    <div className="pt-4">{answer}</div>
                </div>
            </div>
        </div>
    );
}
