'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { Users, Clock, Cpu, Settings, Code2, Wrench, Smartphone, Blocks, Link2, ClipboardList, Search } from 'lucide-react';

export default function UzmanKaynakPage() {
    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            <ServiceHero
                breadcrumbs={[
                    { label: 'Anasayfa', href: '/' },
                    { label: 'Hizmetlerimiz', href: '/services' },
                    { label: 'SAP Danışmanlık', href: '/services/sap-danismanlik' },
                    { label: 'Uzman Kaynak Desteği' },
                ]}
                title="Uzman Kaynak Desteği"
                highlightedWord="Uzman"
                subtitle="Esnek & Yetkin Kaynaklar"
                description="SAP projelerinizde ihtiyaç duyduğunuz uzman danışmanlık ve teknik kaynak desteğini esnek ve sürdürülebilir modellerle sunuyoruz."
                ctaText="Kaynak İhtiyacınızı Paylaşın"
                ctaHref="/contact"
                secondaryCtaText="Destek Modellerimiz"
                secondaryCtaHref="#modeller"
                icon={Users}
                accentColor="#f472b6"
                gradientFrom="#f472b6"
                gradientTo="#db2777"
                stats={[
                    { value: '60+', label: 'SAP Uzmanı' },
                    { value: '48s', label: 'Ortalama Eşleşme' },
                    { value: '%97', label: 'Memnuniyet' },
                ]}
            />

            <ServiceIntro
                paragraphs={[
                    'SAP projeleri, farklı uzmanlık alanlarında yetkin kaynakların bir arada çalışmasını gerektirir. Doğru zamanda doğru uzmanlığa erişim, projelerinizin hızını ve kalitesini doğrudan etkiler.',
                    'Proje bazlı veya sürekli destek modelleriyle, danışman, geliştirici ve teknik uzman ihtiyacınızı esnek bir yapıda karşılıyoruz.',
                ]}
            />

            <ServiceCards
                sectionTitle="Hizmet Kapsamı"
                subtitle="Esnek kaynak modelleriyle projelerinizi güçlendiriyoruz"
                variant="featured"
                accentColor="#f472b6"
                cards={[
                    { icon: Users, title: 'Proje Bazlı Uzman Desteği', description: 'Belirli projelere özel, süreli uzman kaynak tahsisi sağlıyoruz.', tag: 'En Çok Tercih Edilen' },
                    { icon: Clock, title: 'Esnek Kaynak Modeli', description: 'Kısa ve uzun dönem ihtiyaçlarınıza uygun esnek destek modelleri sunuyoruz.' },
                    { icon: Cpu, title: 'Teknik Uzman Desteği', description: 'ABAP, Fiori, BTP gibi alanlarda deneyimli teknik uzman desteği sağlıyoruz.' },
                    { icon: Settings, title: 'Fonksiyonel Danışman', description: 'FI, CO, MM, SD gibi modüllerde fonksiyonel danışmanlık hizmeti sunuyoruz.' },
                    { icon: Code2, title: 'Geliştirme Ekibi Takviyesi', description: 'Mevcut geliştirme ekibinize ek kapasite sağlıyoruz.' },
                    { icon: Wrench, title: 'Operasyonel Destek', description: 'Sistem bakım ve operasyon süreçleriniz için sürekli destek sağlıyoruz.' },
                ]}
            />

            <ServiceCards
                sectionTitle="Destek Alanlarımız"
                variant="compact"
                accentColor="#f472b6"
                cards={[
                    { icon: Code2, title: 'ABAP', description: '' },
                    { icon: Smartphone, title: 'SAP Fiori', description: '' },
                    { icon: Blocks, title: 'RAP / CAP', description: '' },
                    { icon: Link2, title: 'Entegrasyon', description: '' },
                    { icon: ClipboardList, title: 'Uygulama', description: '' },
                    { icon: Search, title: 'Teknik Analiz', description: '' },
                ]}
            />

            <ServiceBenefits
                sectionTitle="Sağlanan Faydalar"
                variant="pills"
                accentColor="#f472b6"
                items={[
                    'Hızlı kaynak erişimi',
                    'Proje esnekliği',
                    'Uzmanlık çözümü',
                    'Ekip desteği',
                    'Sürekli destek',
                ]}
            />

            <ServiceCta
                title="SAP projeleriniz için doğru uzman desteğini hızlıca sağlayın."
                subtitle="Geniş uzman havuzumuzdan ihtiyacınıza uygun kaynağı bulalım."
                buttonText="İletişime Geçin"
                buttonHref="/contact"
                accentColor="#f472b6"
                features={['Hızlı Eşleştirme', 'Esnek Süre Modeli', 'Referans Garantisi']}
            />
        </main>
    );
}
