'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceSteps from '@/components/services/ServiceSteps';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { Blocks, LayoutGrid, Compass, CalendarCheck, AlertTriangle, Map } from 'lucide-react';

export default function MimariDestekPage() {
    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            <ServiceHero
                breadcrumbs={[
                    { label: 'Anasayfa', href: '/' },
                    { label: 'Hizmetlerimiz', href: '/services' },
                    { label: 'SAP Danışmanlık', href: '/services/sap-danismanlik' },
                    { label: 'Proje ve Çözüm Mimari Desteği' },
                ]}
                title="Proje ve Çözüm Mimari Desteği"
                highlightedWord="Mimari"
                subtitle="Stratejik Mimari Yönlendirme"
                description="SAP projeleriniz için doğru mimari yapıyı kuruyor, teknik ve fonksiyonel çözüm çerçevesini netleştiriyoruz."
                ctaText="Projenizi Konuşalım"
                ctaHref="/contact"
                secondaryCtaText="Yaklaşımımız"
                secondaryCtaHref="#yaklasim"
                icon={Blocks}
                accentColor="#f59e0b"
                gradientFrom="#f59e0b"
                gradientTo="#d97706"
                variant="centered"
                stats={[
                    { value: '30+', label: 'Mimari Proje' },
                    { value: '%95', label: 'Risk Azaltma' },
                    { value: '5+', label: 'Sektör' },
                ]}
            />

            <ServiceIntro
                paragraphs={[
                    'Başarılı SAP projelerinin temelinde, doğru çözüm mimarisi ve güçlü proje yönlendirmesi yatar. Sistem bileşenlerinin konumlandırılması, teknik kararların stratejik hedeflerle uyumu ve risk yönetimi projelerinizin başarısını belirler.',
                    'Çözüm mimarisi tasarımından uygulama yol haritası oluşturmaya, risk analizi ve bağımlılık yönetiminden teknik yönlendirmeye kadar projenizin her aşamasında güçlü bir mimari çerçeve sunuyoruz.',
                ]}
            />

            <ServiceCards
                sectionTitle="Hizmet Alanları"
                subtitle="Projenizin mimari temellerini güçlendiriyoruz"
                variant="featured"
                accentColor="#f59e0b"
                cards={[
                    { icon: Blocks, title: 'Çözüm Mimarisi Tasarımı', description: 'İş hedeflerinize uygun, sürdürülebilir ve ölçeklenebilir çözüm mimarileri tasarlıyoruz.', tag: 'Temel Hizmet' },
                    { icon: LayoutGrid, title: 'Sistem Konumlandırma', description: 'SAP bileşenlerini doğru konumlandırarak tutarlı bir sistem peyzajı oluşturuyoruz.' },
                    { icon: Compass, title: 'Teknik Yönlendirme', description: 'Teknik kararlarınıza rehberlik ediyor, doğru teknoloji seçimlerini destekliyoruz.' },
                    { icon: CalendarCheck, title: 'Proje Planlama', description: 'Proje kapsamı, zaman çizelgesi ve kaynak planlaması desteği sağlıyoruz.' },
                    { icon: AlertTriangle, title: 'Risk & Bağımlılık Analizi', description: 'Proje risklerini önceden belirliyor ve bağımlılık yönetimi stratejileri oluşturuyoruz.' },
                    { icon: Map, title: 'Uygulama Yol Haritası', description: 'Aşamalı uygulama planıyla projenizin kontrollü ilerlemesini sağlıyoruz.' },
                ]}
            />

            <ServiceSteps
                sectionTitle="Yaklaşımımız"
                subtitle="Yapısal ve sistematik mimari sürecimiz"
                variant="timeline"
                accentColor="#f59e0b"
                steps={[
                    { title: 'İş Hedeflerini Anlama', description: 'Stratejik hedeflerinizi ve teknik beklentilerinizi netleştiriyoruz' },
                    { title: 'Mimari Çerçeveyi Oluşturma', description: 'Sistem bileşenlerini doğru şekilde yapılandırıyoruz' },
                    { title: 'Önceliklendirme', description: 'Kritik iş alanlarına göre uygulama sıralaması yapıyoruz' },
                    { title: 'Sürdürülebilir Yapı', description: 'Uzun vadeli teknoloji uyumunu garanti altına alıyoruz' },
                ]}
            />

            <ServiceBenefits
                sectionTitle="Sağlanan Değer"
                variant="border-left"
                accentColor="#f59e0b"
                items={[
                    'Kontrollü proje yönetimi',
                    'Doğru teknoloji konumlandırması',
                    'Düşük proje riski',
                    'Sürdürülebilir mimari',
                ]}
            />

            <ServiceCta
                title="SAP projeniz için güçlü bir mimari yapı oluşturalım."
                subtitle="Deneyimli çözüm mimarlarımızla projenizi güçlendirin."
                buttonText="İletişime Geçin"
                buttonHref="/contact"
                accentColor="#f59e0b"
                features={['Çözüm Mimarisi', 'Risk Analizi', 'Uygulama Yol Haritası']}
            />
        </main>
    );
}
