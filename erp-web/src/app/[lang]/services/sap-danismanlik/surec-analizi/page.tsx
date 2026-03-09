'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceSteps from '@/components/services/ServiceSteps';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { Search, AlertTriangle, Gauge, Lightbulb, Monitor, Scissors } from 'lucide-react';

export default function SurecAnaliziPage() {
    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            <ServiceHero
                breadcrumbs={[
                    { label: 'Anasayfa', href: '/' },
                    { label: 'Hizmetlerimiz', href: '/services' },
                    { label: 'SAP Danışmanlık', href: '/services/sap-danismanlik' },
                    { label: 'Süreç Analizi ve İyileştirme' },
                ]}
                title="Süreç Analizi ve İyileştirme"
                highlightedWord="İyileştirme"
                subtitle="Operasyonel Mükemmellik"
                description="İş süreçlerinizi analiz ediyor, darboğazları tespit ediyor ve daha verimli operasyonlar için iyileştirme yol haritası sunuyoruz."
                ctaText="Sürecinizi Değerlendirelim"
                ctaHref="/contact"
                icon={Search}
                accentColor="#22d3ee"
                gradientFrom="#22d3ee"
                gradientTo="#0891b2"
                stats={[
                    { value: '%40', label: 'Verimlilik Artışı' },
                    { value: '%60', label: 'Manuel İş Azalması' },
                    { value: '3x', label: 'Daha Hızlı Süreçler' },
                ]}
            />

            <ServiceIntro
                paragraphs={[
                    'Kurumsal iş süreçlerinin düzenli olarak analiz edilmesi, operasyonel verimlilik ve rekabet avantajı için kritik bir adımdır. Mevcut süreçlerinizin haritasını çıkararak verimsizlikleri ve tekrar eden iş yüklerini tespit ediyoruz.',
                    'SAP uyumlu süreç iyileştirme önerilerimizle, dijitalleştirme fırsatlarını belirliyor ve operasyonel sadeleştirme yaklaşımıyla daha verimli bir çalışma modeli oluşturuyoruz.',
                ]}
            />

            <ServiceCards
                sectionTitle="Hizmet Kapsamı"
                subtitle="Süreçlerinizi daha verimli hale getiriyoruz"
                variant="grid"
                accentColor="#22d3ee"
                cards={[
                    { icon: Search, title: 'Mevcut Süreç Analizi', description: 'İş süreçlerinizin mevcut durumunu detaylı olarak haritalandırıyoruz.', tag: 'Keşif' },
                    { icon: AlertTriangle, title: 'Darboğaz Tespiti', description: 'Süreçlerdeki darboğazları, gereksiz tekrarları ve manuel yoğunlukları belirliyoruz.', tag: 'Problem Tespiti' },
                    { icon: Gauge, title: 'Verimlilik Değerlendirmesi', description: 'Süreç performansını ölçümlüyor ve iyileştirme alanlarını sıralıyoruz.', tag: 'Ölçümleme' },
                    { icon: Lightbulb, title: 'SAP Uyumlu İyileştirme', description: 'SAP best practice yaklaşımlarıyla uyumlu süreç iyileştirme çözümleri sunuyoruz.', tag: 'Best Practice' },
                    { icon: Monitor, title: 'Dijitalleştirme Fırsatları', description: 'Manuel süreçlerin dijitalleştirilmesi için uygun çözüm araçları belirliyoruz.', tag: 'Dijital Dönüşüm' },
                    { icon: Scissors, title: 'Operasyonel Sadeleştirme', description: 'Gereksiz karmaşıklıkları gidererek daha yalın iş akışları tasarlıyoruz.', tag: 'Yalın Süreç' },
                ]}
            />

            <ServiceSteps
                sectionTitle="Nasıl Çalışıyoruz?"
                subtitle="Kanıtlanmış 4 adımlı yaklaşımımız"
                variant="cards"
                accentColor="#22d3ee"
                steps={[
                    { title: 'Mevcut Durum Analizi', description: 'İş süreçlerinizi detaylı olarak inceliyoruz' },
                    { title: 'Sorun Alanları', description: 'Darboğaz ve verimsizlikleri belirliyoruz' },
                    { title: 'İyileştirme Önerisi', description: 'SAP uyumlu çözüm önerileri hazırlıyoruz' },
                    { title: 'Yol Haritası', description: 'Aşamalı uygulama planı oluşturuyoruz' },
                ]}
            />

            <ServiceBenefits
                sectionTitle="Sağlanan Faydalar"
                variant="checks"
                accentColor="#22d3ee"
                items={[
                    'Operasyonel verimlilik artışı',
                    'Manuel iş yükünde azalma',
                    'Süreç standardizasyonu',
                    'Ölçülebilir iş akışları',
                ]}
            />

            <ServiceCta
                title="İş süreçlerinizi daha verimli ve sürdürülebilir hale getirelim."
                subtitle="Uzman ekibimizle süreçlerinizi birlikte optimize edelim."
                buttonText="İletişime Geçin"
                buttonHref="/contact"
                accentColor="#22d3ee"
                features={['Süreç Haritası', 'Verimlilik Raporu', 'Uygulama Yol Haritası']}
            />
        </main>
    );
}
