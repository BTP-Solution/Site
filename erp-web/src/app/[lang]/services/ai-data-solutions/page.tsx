'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { Brain, Database, BarChart3, Cpu, Workflow } from 'lucide-react';

export default function AiDataSolutionsPage() {
    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            {/* HERO */}
            <ServiceHero
                breadcrumbs={[
                    { label: 'Anasayfa', href: '/' },
                    { label: 'Hizmetlerimiz', href: '/services' },
                    { label: 'Veri, Yapay Zeka ve Akıllı Çözümler' },
                ]}
                title="Veri, Yapay Zeka ve Akıllı Çözümler"
                highlightedWord="Yapay Zeka"
                subtitle="Veriden Değer, Zekadan Güç, Otomasyondan Verimlilik"
                description="Kurumsal verilerinizi stratejik bir varlığa dönüştürüyor, yapay zeka ve makine öğrenimi ile süreçlerinize zeka katıyor, akıllı otomasyon ile operasyonel verimliliğinizi artırıyoruz."
                ctaText="Akıllı Çözümlerimizi Keşfedin"
                ctaHref="#hizmetler"
                secondaryCtaText="Demo Talep Edin"
                secondaryCtaHref="/contact"
                icon={Brain}
                accentColor="#818cf8"
                gradientFrom="#818cf8"
                gradientTo="#c084fc"
                stats={[
                    { value: 'AI/ML', label: 'Akıllı Süreçler' },
                    { value: 'SAC', label: 'Gelişmiş Analitik' },
                    { value: 'RPA', label: 'Süreç Otomasyonu' },
                ]}
            />

            {/* GİRİŞ */}
            <ServiceIntro
                paragraphs={[
                    'Dijital çağda veri, kurumların en değerli varlığıdır. Ancak veriyi toplamak yeterli değildir — onu anlamlandırmak, stratejik kararlara dönüştürmek ve süreçleri akıllı hale getirmek asıl katma değeri yaratır. İşte bu noktada veri yönetimi, yapay zeka ve akıllı otomasyon çözümleri devreye girer.',
                    'SAP ve modern teknoloji yığını üzerinde veri kalitesinden tahminlemeye, dashboardlardan robot süreç otomasyonuna kadar uçtan uca akıllı çözümler sunuyoruz.',
                ]}
            />

            {/* HİZMET KARTLARI */}
            <div id="hizmetler">
                <ServiceCards
                    sectionTitle="Akıllı Çözüm Alanlarımız"
                    subtitle="Veri yönetiminden yapay zekaya, raporlamadan otomasyona"
                    variant="grid"
                    accentColor="#818cf8"
                    cards={[
                        {
                            icon: Database,
                            title: 'Veri Yönetimi ve Dönüşümü',
                            description: 'Veri kalitesi, veri taşıma, master data yönetimi ve veri dönüşümü ile kurumsal veri altyapınızı güçlendiriyoruz.',
                            tag: 'VERİ YÖNETİMİ',
                            href: '/services/ai-data-solutions/data-management',
                            linkText: 'Detayları Gör'
                        },
                        {
                            icon: BarChart3,
                            title: 'İş Zekası ve Gelişmiş Analitik',
                            description: 'SAP Analytics Cloud, BW ve gelişmiş raporlama araçlarıyla verilerinizi görselleştiriyor ve karar destek altyapısı kuruyoruz.',
                            tag: 'ANALİTİK',
                            href: '/services/ai-data-solutions/business-analytics',
                            linkText: 'Detayları Gör'
                        },
                        {
                            icon: Cpu,
                            title: 'Yapay Zeka ve Makine Öğrenimi',
                            description: 'AI ve ML tabanlı tahminleme, anomali tespiti, doğal dil işleme ve akıllı süreç çözümleriyle kurumunuza zeka katıyoruz.',
                            tag: 'AI / ML',
                            href: '/services/ai-data-solutions/ai-ml',
                            linkText: 'Detayları Gör'
                        },
                        {
                            icon: Workflow,
                            title: 'Akıllı İş Akışı ve Süreç Otomasyonu',
                            description: 'RPA, akıllı iş akışları ve SAP iRPA ile tekrarlayan görevleri otomatikleştiriyor, insan hatasını ortadan kaldırıyoruz.',
                            tag: 'RPA / OTOMASYON',
                            href: '/services/ai-data-solutions/rpa-automation',
                            linkText: 'Detayları Gör'
                        },
                    ]}
                />
            </div>

            {/* NEDEN BİZ */}
            <ServiceBenefits
                sectionTitle="Neden Bizimle Çalışmalısınız?"
                variant="pills"
                accentColor="#818cf8"
                items={[
                    'SAP ve açık kaynak AI/ML platform uzmanlığı',
                    'Veriden içgörüye, içgörüden aksiyona uçtan uca çözüm',
                    'Sektörel deneyimle desteklenen tahminleme modelleri',
                    'SAP iRPA ve BTP AI Services bilgisi',
                    'Ölçeklenebilir ve bakımı kolay veri mimarisi',
                ]}
            />

            {/* CTA */}
            <ServiceCta
                title="Verilerinizi akıllı çözümlere dönüştürmeye hazır mısınız?"
                subtitle="AI, ML ve veri analitiği uzmanlarımız, kurumunuzun dijital zeka dönüşümünde yanınızda."
                buttonText="Akıllı Çözüm Danışmanlığı Alın"
                buttonHref="/contact"
                features={['Ücretsiz Veri Olgunluk Analizi', 'AI/ML PoC Çalışması', 'Dashboard Demo']}
            />
        </main>
    );
}
