'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { Code2, Cloud, Layers, Palette, Server, Workflow } from 'lucide-react';

export default function TechDevelopmentPage() {
    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            {/* HERO */}
            <ServiceHero
                breadcrumbs={[
                    { label: 'Anasayfa', href: '/' },
                    { label: 'Hizmetlerimiz', href: '/services' },
                    { label: 'Teknoloji ve Yazılım Geliştirme' },
                ]}
                title="Teknoloji ve Yazılım Geliştirme"
                highlightedWord="Yazılım"
                subtitle="SAP standartlarına uyumlu, sürdürülebilir ve modern uygulama mimarileri geliştiriyoruz."
                description="Dijital dönüşüm yalnızca standart yazılımları devreye almak değil, onları kurumunuza uygun, sürdürülebilir ve ölçeklenebilir hale getirmektir. Geleneksel geliştirmelerden modern bulut mimarilerine kadar, SAP yatırımlarınızı daha verimli kullanmanızı sağlayan teknoloji çözümleri sunuyoruz."
                ctaText="Teknoloji Çözümlerini İnceleyin"
                ctaHref="#hizmetler"
                icon={Code2}
                accentColor="#0ea5e9"
                gradientFrom="#0ea5e9"
                gradientTo="#8b5cf6"
                stats={[
                    { value: 'BTP', label: 'Platform Uzmanlığı' },
                    { value: 'RAP/CAP', label: 'Modern Geliştirme' },
                    { value: 'Fiori', label: 'UX/UI Tasarımı' },
                ]}
            />

            {/* GİRİŞ */}
            <ServiceIntro
                paragraphs={[
                    'SAP ekosisteminde başarılı bir teknoloji stratejisi, yalnızca standart modüllerin devreye alınmasından ibaret değildir. Kurumunuza özgü ihtiyaçlar için modern geliştirme yaklaşımları, doğru platform tercihleri ve kullanıcı odaklı arayüz tasarımları bir bütün olarak ele alınmalıdır.',
                    'Backend geliştirmeden UX tasarımına, platform çözümlerinden bulut modernizasyonuna kadar SAP teknoloji yığınının tüm katmanlarında hizmet sunuyoruz.',
                ]}
            />

            {/* YÖNLENDİRME KARTLARI */}
            <div id="hizmetler">
                <ServiceCards
                    sectionTitle="Teknoloji Hizmet Alanlarımız"
                    subtitle="Modern SAP geliştirme, mimari ve bulut yetkinlikleri"
                    variant="grid"
                    accentColor="#0ea5e9"
                    cards={[
                        {
                            icon: Layers,
                            title: 'SAP BTP Çözümleri',
                            description: 'Uygulama geliştirme, entegrasyon, otomasyon ve analitiği tek bir platformda bir araya getiriyoruz.',
                            tag: '✦ PLATFORM',
                            href: '/services/tech-development/sap-btp',
                            linkText: 'Detayları Gör'
                        },
                        {
                            icon: Code2,
                            title: 'ABAP, RAP / CAP Geliştirme',
                            description: 'Modern SAP backend geliştirme modelleriyle sürdürülebilir ve performanslı çözümler üretiyoruz.',
                            tag: '✦ CLEAN CORE',
                            href: '/services/tech-development/abap-rap-cap',
                            linkText: 'Detayları Gör'
                        },
                        {
                            icon: Palette,
                            title: 'SAP Fiori ve SAPUI5',
                            description: 'SAP ekranlarını daha sade, kullanıcı dostu ve mobil uyumlu deneyimlere dönüştürüyoruz.',
                            tag: '✦ UX/UI',
                            href: '/services/tech-development/fiori-sapui5',
                            linkText: 'Detayları Gör'
                        },
                        {
                            icon: Cloud,
                            title: 'Bulut Geçiş ve Modernizasyon',
                            description: 'Mevcut altyapınızı daha esnek, güncel ve sürdürülebilir bulut mimarilerine taşıyoruz.',
                            tag: '✦ MİMARİ',
                            href: '/services/tech-development/cloud-migration',
                            linkText: 'Detayları Gör'
                        },
                        {
                            icon: Workflow,
                            title: 'İş Akışı ve Süreç Otomasyonu',
                            description: 'Manuel onay mekanizmalarını ve tekrarlayan süreçleri SAP tabanlı otomasyon araçlarıyla dijitalleştiriyoruz.',
                            tag: '✦ OTOMASYON',
                            href: '/services/tech-development/workflow-automation',
                            linkText: 'Detayları Gör'
                        },
                    ]}
                />
            </div>

            {/* NEDEN BİZ */}
            <ServiceBenefits
                sectionTitle="Neden Biz?"
                variant="pills"
                accentColor="#0ea5e9"
                items={[
                    'Clean Core Yaklaşımı',
                    'Modern Teknoloji Yığını',
                    'Çevik Geliştirme',
                    'Ölçeklenebilir Mimari',
                ]}
            />

            {/* CTA */}
            <ServiceCta
                title="Dijital altyapınızı geleceğe hazırlayalım."
                subtitle="SAP teknoloji yatırımlarınızı daha verimli ve sürdürülebilir hale getirmek için uzmanlarımızla görüşün."
                buttonText="Uzmanlarımızla Görüşün"
                buttonHref="/contact"
                features={['Platform Danışmanlığı', 'Mimari Değerlendirme', 'PoC Çalışması']}
            />
        </main>
    );
}
