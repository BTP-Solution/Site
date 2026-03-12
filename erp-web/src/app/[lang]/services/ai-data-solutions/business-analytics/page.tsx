'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceSteps from '@/components/services/ServiceSteps';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { BarChart3, LayoutDashboard, PieChart, TrendingUp, Database, FileSpreadsheet } from 'lucide-react';

export default function BusinessAnalyticsPage() {
    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            {/* HERO */}
            <ServiceHero
                breadcrumbs={[
                    { label: 'Anasayfa', href: '/' },
                    { label: 'Hizmetlerimiz', href: '/services' },
                    { label: 'Veri ve Akıllı Çözümler', href: '/services/ai-data-solutions' },
                    { label: 'İş Zekası ve Gelişmiş Analitik' },
                ]}
                title="İş Zekası ve Gelişmiş Analitik"
                highlightedWord="Gelişmiş Analitik"
                subtitle="Verilerinizi Stratejik Kararlara Dönüştürün"
                description="SAP Analytics Cloud, BW/4HANA ve gelişmiş raporlama araçlarıyla kurumsal verilerinizi görselleştiriyor, karar destek altyapısı kuruyor ve self-servis analitik kültürü oluşturuyoruz."
                ctaText="Analitik Çözümleri Keşfedin"
                ctaHref="#cozumler"
                secondaryCtaText="Demo Talep Edin"
                secondaryCtaHref="/contact"
                icon={BarChart3}
                accentColor="#818cf8"
                gradientFrom="#a78bfa"
                gradientTo="#6366f1"
                stats={[
                    { value: 'SAC', label: 'Cloud Analitik' },
                    { value: 'BW/4', label: 'Veri Ambarı' },
                    { value: 'Real-Time', label: 'Canlı Raporlama' },
                ]}
            />

            {/* GİRİŞ */}
            <ServiceIntro
                paragraphs={[
                    'Veriye dayalı karar alma kültürü, modern işletmelerin rekabet avantajının temelinde yer alır. Farklı sistemlerdeki dağınık verilerin toplanması, anlamlandırılması ve doğru formatta sunulması, operasyonel ve stratejik kararların kalitesini doğrudan etkiler.',
                    'SAP Analytics Cloud, SAP BW/4HANA, BusinessObjects ve embedded analytics çözümleriyle tüm veri kaynaklarınızı birleştiriyor, interaktif dashboardlar oluşturuyor ve her seviyedeki kullanıcıya doğru bilgiyi doğru zamanda ulaştırıyoruz.',
                ]}
            />

            {/* ÇÖZÜM KARTLARI */}
            <div id="cozumler">
                <ServiceCards
                    sectionTitle="Analitik Çözüm Alanlarımız"
                    subtitle="Raporlamadan planlamaya, dashboarddan tahminlemeye"
                    variant="grid"
                    accentColor="#818cf8"
                    cards={[
                        {
                            icon: LayoutDashboard,
                            title: 'SAP Analytics Cloud (SAC)',
                            description: 'Cloud tabanlı BI platformuyla interaktif dashboardlar, hikaye anlatımlı raporlar ve mobil uyumlu analitik çözümler.',
                            tag: 'CLOUD ANALİTİK'
                        },
                        {
                            icon: Database,
                            title: 'SAP BW/4HANA Veri Ambarı',
                            description: 'Kurumsal veri ambarı tasarımı, ETL süreçleri, veri modelleme ve HANA optimizasyonlu yüksek performanslı raporlama.',
                            tag: 'VERİ AMBARI'
                        },
                        {
                            icon: PieChart,
                            title: 'Dashboard ve Karar Destek',
                            description: 'Satış, finans, üretim ve tedarik zinciri verilerini gerçek zamanlı, drill-down destekli dashboardlarda sunuyoruz.',
                            tag: 'DASHBOARD'
                        },
                        {
                            icon: TrendingUp,
                            title: 'Planlama, Bütçe ve Tahminleme',
                            description: 'SAC Planning ile bütçe planlama, satış tahmini, senaryo analizi ve what-if simülasyonlarıyla proaktif planlama.',
                            tag: 'PLANLAMA'
                        },
                        {
                            icon: FileSpreadsheet,
                            title: 'Kurumsal Raporlama (BusinessObjects)',
                            description: 'Crystal Reports, Web Intelligence ve Lumira ile standart, düzenleyici ve ad-hoc raporlar oluşturun.',
                            tag: 'RAPORLAMA'
                        },
                        {
                            icon: BarChart3,
                            title: 'Embedded Analytics ve KPI İzleme',
                            description: 'S/4HANA gömülü analitiği, CDS view tabanlı gerçek zamanlı KPI izleme ve Fiori analitik uygulamaları.',
                            tag: 'GÖMÜLÜ ANALİTİK'
                        },
                    ]}
                />
            </div>

            {/* ÇALIŞMA YAKLAŞIMI */}
            <ServiceSteps
                sectionTitle="Analitik Proje Sürecimiz"
                subtitle="Veriden içgörüye, içgörüden aksiyona"
                variant="horizontal"
                accentColor="#818cf8"
                steps={[
                    { title: 'İhtiyaç ve Veri Analizi', description: 'Raporlama ihtiyaçlarınızı, KPI\'larınızı ve mevcut veri kaynaklarınızı analiz ederiz.' },
                    { title: 'Veri Modeli Tasarımı', description: 'Veri ambarı mimarisi, ETL akışları ve HANA veri modellerini tasarlarız.' },
                    { title: 'Dashboard Geliştirme', description: 'İnteraktif, drill-down destekli ve mobil uyumlu dashboardlar oluşturur, test ederiz.' },
                    { title: 'Eğitim ve Devreye Alma', description: 'Kullanıcı eğitimleriyle self-servis analitik kültürünü kurumunuza yerleştiririz.' },
                ]}
            />

            {/* FAYDALAR */}
            <ServiceBenefits
                sectionTitle="Analitik Çözümlerin Avantajları"
                variant="pills"
                accentColor="#818cf8"
                items={[
                    'Veriye dayalı, hızlı ve doğru karar alma',
                    'Gerçek zamanlı KPI izleme ve erken uyarı',
                    'Self-servis raporlama ile İT bağımlılığının azaltılması',
                    'Tahminleme ve senaryo analiziyle proaktif planlama',
                    'Tüm veri kaynaklarının tek platformda birleştirilmesi',
                ]}
            />

            {/* CTA */}
            <ServiceCta
                title="Verilerinizi stratejik bir varlığa dönüştürmeye hazır mısınız?"
                subtitle="Analitik uzmanlarımız, kurumunuzun veri potansiyelini en üst düzeyde kullanmanız için yanınızda."
                buttonText="Analitik Danışmanlığı Talep Edin"
                buttonHref="/contact"
                features={['Dashboard Demo', 'Veri Olgunluk Değerlendirmesi', 'SAC Pilot Çalışma']}
            />
        </main>
    );
}
