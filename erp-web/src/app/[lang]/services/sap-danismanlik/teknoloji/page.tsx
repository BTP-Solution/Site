'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { Cpu, Link2, LayoutGrid, Gauge, RefreshCw, Cloud, Code2, Blocks, Smartphone, Database, Server, Workflow } from 'lucide-react';

export default function TeknolojiDanismanlikPage() {
    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            <ServiceHero
                breadcrumbs={[
                    { label: 'Anasayfa', href: '/' },
                    { label: 'Hizmetlerimiz', href: '/services' },
                    { label: 'SAP Danışmanlık', href: '/services/sap-danismanlik' },
                    { label: 'SAP Teknoloji Danışmanlığı' },
                ]}
                title="SAP Teknoloji Danışmanlığı"
                highlightedWord="Teknoloji"
                subtitle="Modern Mimari & Geliştirme"
                description="SAP altyapınızı, teknik mimarinizi ve geliştirme süreçlerinizi modern ihtiyaçlara uygun şekilde güçlendiriyoruz."
                ctaText="Teknik Yapınızı Değerlendirelim"
                ctaHref="/contact"
                secondaryCtaText="Uzmanlık Alanlarımız"
                secondaryCtaHref="#uzmanlik"
                icon={Cpu}
                accentColor="#a78bfa"
                gradientFrom="#a78bfa"
                gradientTo="#7c3aed"
                variant="centered"
                stats={[
                    { value: '6+', label: 'Teknoloji Alanı' },
                    { value: '20+', label: 'Teknik Uzman' },
                    { value: '100+', label: 'Geliştirme Projesi' },
                ]}
            />

            <ServiceIntro
                paragraphs={[
                    'Sağlam bir SAP teknik altyapısı, kurumsal dijital dönüşümün temel taşıdır. Doğru mimari kararlar, sistemlerinizin performansını, ölçeklenebilirliğini ve entegrasyon gücünü doğrudan belirler.',
                    'Teknik mimari değerlendirmeden geliştirme altyapısı planlamaya, performans optimizasyonundan bulut uyumluluk analizine kadar SAP teknoloji katmanınızda kapsamlı danışmanlık hizmeti sunuyoruz.',
                ]}
            />

            <ServiceCards
                sectionTitle="Hizmet Alanları"
                subtitle="Teknik altyapınızı geleceğe hazırlıyoruz"
                variant="featured"
                accentColor="#a78bfa"
                cards={[
                    { icon: LayoutGrid, title: 'Teknik Mimari Değerlendirme', description: 'Mevcut SAP teknik mimarinizi analiz ederek iyileştirme önerileri sunuyoruz.', tag: 'Stratejik Planlama' },
                    { icon: Link2, title: 'SAP Sistem Entegrasyonları', description: 'SAP ve üçüncü parti sistemler arasında güvenli entegrasyonlar kuruyoruz.' },
                    { icon: Cpu, title: 'Geliştirme Altyapısı', description: 'Modern geliştirme araçları ve süreçleriyle altyapınızı güçlendiriyoruz.' },
                    { icon: Gauge, title: 'Performans Optimizasyonu', description: 'Sistem performansını ölçüyor ve darboğazları gideriyoruz.' },
                    { icon: RefreshCw, title: 'Modernizasyon', description: 'Legacy yapılarınızı modern SAP teknolojileriyle uyumlu hale getiriyoruz.' },
                    { icon: Cloud, title: 'Bulut Uyumluluğu', description: 'Bulut stratejinize uygun SAP dağıtım modelleri tasarlıyoruz.' },
                ]}
            />

            <ServiceCards
                sectionTitle="Uzmanlık Alanlarımız"
                variant="compact"
                accentColor="#a78bfa"
                cards={[
                    { icon: Code2, title: 'ABAP', description: '' },
                    { icon: Blocks, title: 'RAP / CAP', description: '' },
                    { icon: Smartphone, title: 'SAP Fiori', description: '' },
                    { icon: Database, title: 'SAP BTP', description: '' },
                    { icon: Server, title: 'API & RFC', description: '' },
                    { icon: Workflow, title: 'Mimari', description: '' },
                ]}
            />

            <ServiceBenefits
                sectionTitle="Müşteri Faydaları"
                variant="pills"
                accentColor="#a78bfa"
                items={[
                    'Sağlam teknik altyapı',
                    'Ölçeklenebilir sistem',
                    'Hızlı geliştirme',
                    'Güçlü entegrasyon',
                    'Teknoloji uyumu',
                ]}
            />

            <ServiceCta
                title="SAP teknolojik altyapınızı geleceğe hazırlayın."
                subtitle="Teknik uzmanlarımızla sisteminizi güçlendirin."
                buttonText="İletişime Geçin"
                buttonHref="/contact"
                accentColor="#a78bfa"
                features={['Mimari Değerlendirme', 'Performans Analizi', 'Modernizasyon Planı']}
            />
        </main>
    );
}
