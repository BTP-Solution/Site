'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { Rocket, AppWindow, Workflow, BotMessageSquare, BarChart3 } from 'lucide-react';

export default function SapBtpPage() {
    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            {/* HERO */}
            <ServiceHero
                breadcrumbs={[
                    { label: 'Anasayfa', href: '/' },
                    { label: 'Hizmetlerimiz', href: '/services' },
                    { label: 'Teknoloji ve Yazılım Geliştirme', href: '/services/tech-development' },
                    { label: 'SAP BTP Çözümleri' },
                ]}
                title="SAP BTP Çözümleri"
                highlightedWord="BTP"
                subtitle="Uygulama geliştirme, entegrasyon, otomasyon ve analitiği tek bir platformda bir araya getiriyoruz."
                description="SAP BTP ile özel geliştirmeleri çekirdek sistemden ayrıştırıyor, entegrasyonları API tabanlı hale getiriyor ve yeni nesil iş uygulamalarını daha çevik biçimde hayata geçiriyoruz."
                ctaText="BTP Demo Talep Edin"
                ctaHref="/contact"
                icon={Rocket}
                accentColor="#4f46e5"
                gradientFrom="#4f46e5"
                gradientTo="#ec4899"
                stats={[
                    { value: 'Clean Core', label: 'Mimari Yaklaşım' },
                    { value: 'API-First', label: 'Entegrasyon Modeli' },
                    { value: 'Low-Code', label: 'Hızlı Geliştirme' },
                ]}
            />

            {/* GİRİŞ */}
            <ServiceIntro
                paragraphs={[
                    'S/4HANA çekirdeğini daha sade ve sürdürülebilir tutmak için özel geliştirmeler SAP BTP üzerinde konumlandırılabilir. Bu yaklaşım, çekirdek sistemi güncellemelere uyumlu tutar ve aynı zamanda kuruma özel iş mantığının bağımsız olarak geliştirilmesine olanak tanır.',
                    'SAP BTP, SAP ve dış sistemler arasında daha yönetilebilir entegrasyon, süreç otomasyonu ve analitik imkanları sunan kapsamlı bir platform olarak, dijital dönüşüm yol haritanızın temel yapı taşlarından biri haline gelebilir.',
                ]}
            />

            {/* HİZMET KARTLARI */}
            <ServiceCards
                sectionTitle="Platform Hizmetlerimiz"
                subtitle="SAP BTP ekosisteminde uçtan uca çözüm yetkinliği"
                variant="grid"
                accentColor="#4f46e5"
                cards={[
                    {
                        icon: AppWindow,
                        title: 'App Development',
                        description: 'SAP BTP üzerinde modern, bağımsız ve ölçeklenebilir uygulama geliştirme. Side-by-side extension mimarisi ile çekirdek sistemi koruyarak yenilikçi çözümler üretme.',
                        tag: 'GELİŞTİRME'
                    },
                    {
                        icon: Workflow,
                        title: 'Entegrasyon (Integration Suite)',
                        description: 'SAP ve Non-SAP sistemler arasında güvenli ve yönetilebilir veri akışı. API Management, event-driven mimari ve güvenli veri orchestration çözümleri.',
                        tag: 'ENTEGRASYON'
                    },
                    {
                        icon: BotMessageSquare,
                        title: 'Otomasyon (Build Process Automation)',
                        description: 'Manuel iş süreçlerinin dijitalleştirilmesi ve otomasyon yaklaşımı. Onay akışları, belge işleme ve tekrarlayan görevlerin otomasyonu.',
                        tag: 'OTOMASYON'
                    },
                    {
                        icon: BarChart3,
                        title: 'Veri ve Analitik (SAC)',
                        description: 'SAP Analytics Cloud ile raporlama, görünürlük ve analitik destek. Gerçek zamanlı dashboard, planlama ve tahminleme çözümleri.',
                        tag: 'ANALİTİK'
                    },
                ]}
            />

            {/* HANGİ İHTİYAÇLARDA DESTEK VERİYORUZ */}
            <ServiceBenefits
                sectionTitle="Hangi İhtiyaçlarda Destek Veriyoruz?"
                variant="checks"
                accentColor="#4f46e5"
                items={[
                    'Yeni uygulama geliştirme',
                    'Sistem entegrasyonları',
                    'Süreç otomasyonu',
                    'API tabanlı servisleşme',
                    'Analitik ve raporlama ihtiyaçları',
                ]}
            />

            {/* FAYDALAR */}
            <ServiceBenefits
                sectionTitle="Sağlanan Faydalar"
                variant="pills"
                accentColor="#4f46e5"
                items={[
                    'Clean Core yaklaşımına uyum',
                    'Sistem bağımsız entegrasyon yeteneği',
                    'Daha çevik geliştirme imkanı',
                    'Sürdürülebilir platform mimarisi',
                ]}
            />

            {/* CTA */}
            <ServiceCta
                title="SAP BTP ile teknoloji altyapınızı daha çevik hale getirin."
                subtitle="Platform danışmanlarımız ihtiyaçlarınıza uygun BTP senaryolarını birlikte değerlendirsin."
                buttonText="BTP Demo Talep Edin"
                buttonHref="/contact"
                features={['Platform Değerlendirmesi', 'PoC Çalışması', 'Mimari Danışmanlık']}
            />
        </main>
    );
}
