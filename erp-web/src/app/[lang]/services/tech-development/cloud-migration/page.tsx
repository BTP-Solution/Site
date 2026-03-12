'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { CloudUpload, ArrowUpFromLine, RefreshCcw, ShieldCheck, Gauge } from 'lucide-react';

export default function CloudMigrationPage() {
    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            {/* HERO */}
            <ServiceHero
                breadcrumbs={[
                    { label: 'Anasayfa', href: '/' },
                    { label: 'Hizmetlerimiz', href: '/services' },
                    { label: 'Teknoloji ve Yazılım Geliştirme', href: '/services/tech-development' },
                    { label: 'Bulut Geçiş ve Modernizasyon' },
                ]}
                title="Bulut Geçiş ve Modernizasyon"
                highlightedWord="Bulut"
                subtitle="Mevcut altyapınızı daha esnek, güncel ve sürdürülebilir bulut mimarilerine taşıyoruz."
                description="Yerinde sistemlerin buluta geçişini planlıyor, modern altyapı senaryoları oluşturuyor ve operasyonel esnekliği artıran geçiş stratejileri geliştiriyoruz."
                ctaText="Bulut Yol Haritası Çıkarın"
                ctaHref="/contact"
                icon={CloudUpload}
                accentColor="#38bdf8"
                gradientFrom="#38bdf8"
                gradientTo="#e0f2fe"
                stats={[
                    { value: 'Hybrid', label: 'Esnek Mimari' },
                    { value: 'DR', label: 'İş Sürekliliği' },
                    { value: 'FinOps', label: 'Maliyet Yönetimi' },
                ]}
            />

            {/* GİRİŞ */}
            <ServiceIntro
                paragraphs={[
                    'Donanım yenileme döngüleri, veri merkezi yönetimi yükü ve ölçeklenme ihtiyaçları, birçok kurum için bulut geçişini kaçınılmaz hale getiriyor. Ancak bu geçişin kontrollü, güvenli ve iş sürekliliğini riske atmadan gerçekleştirilmesi büyük önem taşır.',
                    'Public Cloud, Private Cloud ve hibrit senaryolarda deneyim sahibi ekibimizle, SAP altyapınızın buluta taşınmasını planlıyor, geçiş risklerini azaltmaya yardımcı oluyor ve operasyonel esnekliğinizi artırıyoruz.',
                ]}
            />

            {/* HİZMET KARTLARI */}
            <ServiceCards
                sectionTitle="Modernizasyon Hizmetlerimiz"
                subtitle="Altyapı geçişinden performans optimizasyonuna kadar kapsamlı destek"
                variant="grid"
                accentColor="#38bdf8"
                cards={[
                    {
                        icon: ArrowUpFromLine,
                        title: 'Buluta Taşıma (Lift & Shift)',
                        description: 'Mevcut SAP mimarisinin uygun bulut altyapılarına taşınması. Kesinti süresini en aza indiren planlı geçiş stratejileri.',
                        tag: 'GEÇİŞ'
                    },
                    {
                        icon: RefreshCcw,
                        title: 'Sistem Modernizasyonu',
                        description: 'Eski altyapı, işletim sistemi ve veritabanı yapılarının güncellenmesi. HANA geçişi ve OS/DB modernizasyon projeleri.',
                        tag: 'GÜNCELLEME'
                    },
                    {
                        icon: ShieldCheck,
                        title: 'Bulut Güvenliği ve Yedekleme',
                        description: 'Güvenlik mimarisi, iş sürekliliği planlaması ve felaket kurtarma (DR) senaryolarının tasarlanması ve uygulanması.',
                        tag: 'GÜVENLİK'
                    },
                    {
                        icon: Gauge,
                        title: 'Performans ve Kaynak Optimizasyonu',
                        description: 'Altyapı kaynaklarının iş yüküne uygun şekilde yönetilmesi. FinOps yaklaşımıyla maliyet optimizasyonu ve kapasite planlaması.',
                        tag: 'OPTİMİZASYON'
                    },
                ]}
            />

            {/* HANGİ GEÇİŞ SENARYOLARINDA DESTEK VERİYORUZ */}
            <ServiceBenefits
                sectionTitle="Hangi Geçiş Senaryolarında Destek Veriyoruz?"
                variant="checks"
                accentColor="#38bdf8"
                items={[
                    'On-premise sistemlerden cloud altyapılara geçiş',
                    'Altyapı yenileme',
                    'HANA modernizasyonu',
                    'DR ve yedekleme planlaması',
                    'Performans ve maliyet optimizasyonu',
                ]}
            />

            {/* FAYDALAR */}
            <ServiceBenefits
                sectionTitle="Sağlanan Faydalar"
                variant="pills"
                accentColor="#38bdf8"
                items={[
                    'Altyapı yönetiminde esneklik',
                    'Daha güncel ve sürdürülebilir sistem yapısı',
                    'Yüksek erişilebilirlik hedefi',
                    'İhtiyaca göre ölçeklenebilir kapasite yönetimi',
                ]}
            />

            {/* CTA */}
            <ServiceCta
                title="Altyapınızı bulutun esnekliğiyle modernize edin."
                subtitle="Bulut geçiş stratejinizi oluşturmak ve altyapı değerlendirmesi için uzmanlarımızla görüşün."
                buttonText="Bulut Yol Haritası Çıkarın"
                buttonHref="/contact"
                features={['Altyapı Değerlendirmesi', 'TCO Analizi', 'Geçiş Yol Haritası']}
            />
        </main>
    );
}
