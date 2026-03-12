'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceSteps from '@/components/services/ServiceSteps';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { BarChart3, PieChart, TrendingUp, LayoutDashboard, Database, FileSpreadsheet } from 'lucide-react';

export default function BusinessIntelligencePage() {
    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            {/* HERO */}
            <ServiceHero
                breadcrumbs={[
                    { label: 'Anasayfa', href: '/' },
                    { label: 'Hizmetlerimiz', href: '/services' },
                    { label: 'SAP Danışmanlık', href: '/services/sap-consulting' },
                    { label: 'İş Zekası ve Veri Analitiği' },
                ]}
                title="İş Zekası ve Veri Analitiği"
                highlightedWord="İş Zekası"
                subtitle="SAP Analytics Cloud ve BW ile Veriye Dayalı Karar Alma"
                description="Kurumsal verilerinizi anlamlı içgörülere dönüştürüyor, interaktif dashboard'lar tasarlıyor ve gerçek zamanlı stratejik raporlama altyapısı kuruyoruz."
                ctaText="Analitik Çözümleri Keşfedin"
                ctaHref="#cozumler"
                secondaryCtaText="Demo Talep Edin"
                secondaryCtaHref="/contact"
                icon={BarChart3}
                accentColor="#06b6d4"
                gradientFrom="#06b6d4"
                gradientTo="#3b82f6"
                stats={[
                    { value: 'SAC', label: 'Cloud Analitik' },
                    { value: 'BW/4', label: 'Veri Ambarı' },
                    { value: 'Real-Time', label: 'Canlı Raporlama' },
                ]}
            />

            {/* GİRİŞ */}
            <ServiceIntro
                paragraphs={[
                    'Veriye dayalı karar alma kültürü, modern işletmelerin rekabet avantajının temelinde yer almaktadır. Ancak farklı sistemlerdeki dağınık verilerin toplanması, anlamlandırılması ve karar alıcılara doğru formatta sunulması ciddi bir altyapı ve uzmanlık gerektirir.',
                    'SAP Analytics Cloud (SAC), SAP BW/4HANA, SAP BusinessObjects ve embedded analytics çözümleriyle kurumunuzdaki tüm veri kaynaklarını birleştiriyor, interaktif dashboard\'lar oluşturuyor ve üst yönetimden operasyonel ekiplere kadar her seviyede doğru bilgiye erişim sağlıyoruz.',
                ]}
            />

            {/* ÇÖZÜM KARTLARI */}
            <div id="cozumler">
                <ServiceCards
                    sectionTitle="Analitik Çözüm Alanlarımız"
                    subtitle="Veri toplamadan görselleştirmeye, plandan tahmine kadar"
                    variant="grid"
                    accentColor="#06b6d4"
                    cards={[
                        {
                            icon: LayoutDashboard,
                            title: 'SAP Analytics Cloud (SAC)',
                            description: 'Cloud tabanlı BI platformuyla interaktif dashboard\'lar, hikaye anlatımlı raporlar ve mobil uyumlu analitik çözümler tasarlıyoruz.',
                            tag: 'CLOUD ANALİTİK'
                        },
                        {
                            icon: Database,
                            title: 'SAP BW/4HANA Veri Ambarı',
                            description: 'Kurumsal veri ambarı tasarımı, ETL süreçleri, veri modelleme ve HANA optimizasyonlu yüksek performanslı raporlama altyapısı.',
                            tag: 'VERİ AMBARI'
                        },
                        {
                            icon: PieChart,
                            title: 'Dashboard ve Görselleştirme',
                            description: 'Satış, finans, üretim ve tedarik zinciri verilerini gerçek zamanlı, interaktif ve drill-down destekli dashboard\'larda sunuyoruz.',
                            tag: 'DASHBOARD'
                        },
                        {
                            icon: TrendingUp,
                            title: 'Planlama ve Tahminleme',
                            description: 'SAC Planning ile bütçe planlama, satış tahmini, senaryo analizi ve what-if simülasyonlarıyla geleceğe yönelik öngörüler üretin.',
                            tag: 'PLANLAMA'
                        },
                        {
                            icon: FileSpreadsheet,
                            title: 'Kurumsal Raporlama (BO)',
                            description: 'SAP BusinessObjects ile Crystal Reports, Web Intelligence ve Lumira üzerinden standart ve düzenleyici raporlar oluşturun.',
                            tag: 'RAPORLAMA'
                        },
                        {
                            icon: BarChart3,
                            title: 'Embedded Analytics',
                            description: 'S/4HANA içindeki gömülü analitik yetenekleri devreye alarak gerçek zamanlı KPI izleme, CDS view ve Fiori analitik uygulamaları sunuyoruz.',
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
                accentColor="#06b6d4"
                steps={[
                    { title: 'Veri Kaynak Analizi', description: 'Mevcut veri kaynaklarınızı, raporlama ihtiyaçlarınızı ve KPI\'larınızı analiz ederiz.' },
                    { title: 'Veri Modeli Tasarımı', description: 'Veri ambarı mimarisi, ETL akışları ve HANA veri modellerini tasarlarız.' },
                    { title: 'Dashboard Geliştirme', description: 'İnteraktif, drill-down destekli ve mobil uyumlu dashboard\'lar oluşturur, test ederiz.' },
                    { title: 'Eğitim ve Devreye Alma', description: 'Kullanıcı eğitimleri vererek self-servis analitik kültürünü kurumunuza yerleştiririz.' },
                ]}
            />

            {/* FAYDALAR */}
            <ServiceBenefits
                sectionTitle="Analitik Çözümlerin Avantajları"
                variant="pills"
                accentColor="#06b6d4"
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
