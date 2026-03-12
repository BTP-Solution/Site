'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { Zap, Code2, Layers, Cloud } from 'lucide-react';

export default function AbapRapCapPage() {
    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            {/* HERO */}
            <ServiceHero
                breadcrumbs={[
                    { label: 'Anasayfa', href: '/' },
                    { label: 'Hizmetlerimiz', href: '/services' },
                    { label: 'Teknoloji ve Yazılım Geliştirme', href: '/services/tech-development' },
                    { label: 'ABAP, RAP / CAP Geliştirme' },
                ]}
                title="ABAP, RAP / CAP Geliştirme"
                highlightedWord="RAP"
                subtitle="Modern SAP backend geliştirme modelleriyle sürdürülebilir ve yüksek performanslı çözümler geliştiriyoruz."
                description="Klasik ABAP geliştirmelerinden bulut uyumlu RAP ve CAP modellerine kadar, sistem mimarinizi yormayan, bakımı kolay ve geleceğe açık backend yapıları kuruyoruz."
                ctaText="Kod Analizi Talep Edin"
                ctaHref="/contact"
                icon={Zap}
                accentColor="#10b981"
                gradientFrom="#10b981"
                gradientTo="#3b82f6"
                stats={[
                    { value: 'OO-ABAP', label: 'Nesne Yönelimli' },
                    { value: 'RAP', label: 'RESTful Geliştirme' },
                    { value: 'CAP', label: 'Bulut Uyumlu' },
                ]}
            />

            {/* GİRİŞ */}
            <ServiceIntro
                paragraphs={[
                    'SAP backend geliştirme yaklaşımı, klasik prosedürel programlamadan modern servis odaklı mimarilere evriliyor. S/4HANA ile birlikte gelen Clean Core stratejisi, geliştirmelerin daha sürdürülebilir, güncellenebilir ve performanslı olmasını hedefliyor.',
                    'Amacımız yalnızca kod yazmak değil; sürdürülebilir, performanslı ve SAP güncellemelerine uyumlu bir uygulama temeli oluşturmaktır. Klasik ABAP modernizasyonundan BTP üzerindeki CAP servislerine kadar bu evrimin her aşamasında destek sunuyoruz.',
                ]}
            />

            {/* HİZMET KARTLARI */}
            <ServiceCards
                sectionTitle="Geliştirme Yaklaşımlarımız"
                subtitle="Klasikten moderne, her katmanda backend uzmanlığı"
                variant="grid"
                accentColor="#10b981"
                cards={[
                    {
                        icon: Code2,
                        title: 'Modern ABAP (OO-ABAP)',
                        description: 'S/4HANA ile uyumlu, nesne yönelimli, performans odaklı backend geliştirmeler. CDS View, AMDP ve modern ABAP yapılarıyla verimli veri işleme.',
                        tag: 'BACKEND'
                    },
                    {
                        icon: Layers,
                        title: 'ABAP RESTful Model (RAP)',
                        description: 'Fiori uygulamaları ve servis tabanlı yapılar için modern backend yaklaşımı. Draft handling, managed/unmanaged senaryolar ve OData V4 desteği.',
                        tag: 'SERVİS'
                    },
                    {
                        icon: Cloud,
                        title: 'Cloud Application Programming (CAP)',
                        description: 'SAP BTP üzerinde çalışan, bağımsız ve kurumsal seviye uygulama servisleri. Node.js veya Java tabanlı, event-driven mimari desteği.',
                        tag: 'BULUT'
                    },
                ]}
            />

            {/* HANGİ İHTİYAÇLARDA DESTEK VERİYORUZ */}
            <ServiceBenefits
                sectionTitle="Hangi İhtiyaçlarda Destek Veriyoruz?"
                variant="checks"
                accentColor="#10b981"
                items={[
                    'Klasik ABAP kodlarının modernizasyonu',
                    'Fiori uygulamaları için servis geliştirme',
                    'API ve OData servis yapıları',
                    'BTP üzerinde bağımsız uygulama servisleri',
                    'Performans ve sürdürülebilirlik iyileştirmeleri',
                ]}
            />

            {/* FAYDALAR */}
            <ServiceBenefits
                sectionTitle="Sağlanan Faydalar"
                variant="pills"
                accentColor="#10b981"
                items={[
                    'Hızlı ve standart Fiori entegrasyonu',
                    'SAP güncellemeleriyle daha uyumlu yapı',
                    'Yüksek performanslı veri işleme yaklaşımı',
                    'Daha sürdürülebilir backend mimarisi',
                ]}
            />

            {/* CTA */}
            <ServiceCta
                title="Eski nesil geliştirmelerden modern mimariye geçiş yapın."
                subtitle="Backend geliştirme yaklaşımınızı değerlendirmek ve modernizasyon fırsatlarını belirlemek için uzmanlarımızla görüşün."
                buttonText="Kod Analizi Talep Edin"
                buttonHref="/contact"
                features={['Kod Kalite Değerlendirmesi', 'Modernizasyon Yol Haritası', 'Clean Core Danışmanlığı']}
            />
        </main>
    );
}
