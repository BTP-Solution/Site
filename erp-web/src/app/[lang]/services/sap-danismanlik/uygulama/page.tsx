'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { ClipboardList, Settings, RefreshCw, Layers, User, Lightbulb, Landmark, ShoppingCart, Truck, Factory, CheckSquare, BarChart3 } from 'lucide-react';

export default function UygulamaDanismanlikPage() {
    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            <ServiceHero
                breadcrumbs={[
                    { label: 'Anasayfa', href: '/' },
                    { label: 'Hizmetlerimiz', href: '/services' },
                    { label: 'SAP Danışmanlık', href: '/services/sap-danismanlik' },
                    { label: 'SAP Uygulama Danışmanlığı' },
                ]}
                title="SAP Uygulama Danışmanlığı"
                highlightedWord="Uygulama"
                subtitle="Modül Bazlı Uzmanlık"
                description="İş süreçlerine uyumlu, sürdürülebilir ve verimli SAP uygulama yapıları tasarlıyoruz."
                ctaText="Çözümümüzü İnceleyin"
                ctaHref="/contact"
                secondaryCtaText="Modüllerimizi Keşfedin"
                secondaryCtaHref="#moduller"
                icon={Settings}
                accentColor="#34d399"
                gradientFrom="#34d399"
                gradientTo="#059669"
                stats={[
                    { value: '10+', label: 'SAP Modülü' },
                    { value: '40+', label: 'Fonksiyonel Uzman' },
                    { value: '%95', label: 'Süreç Uyumu' },
                ]}
            />

            <ServiceIntro
                paragraphs={[
                    'SAP uygulama danışmanlığı, şirketlerin iş süreçlerine en uygun SAP yapılandırmalarını belirleyerek operasyonel verimliliği artırır. Modül bazlı uzmanlıkla, her iş alanına özel çözümler sunuyoruz.',
                    'Kullanıcı odaklı yaklaşımımızla SAP uygulamalarınızı iş hedeflerinize uyumlu hale getiriyor, sürdürülebilir ve kolay yönetilebilir yapılar tasarlıyoruz.',
                ]}
            />

            <ServiceCards
                sectionTitle="Hizmet Detayları"
                subtitle="Her modülde derin fonksiyonel uzmanlık"
                variant="grid"
                accentColor="#34d399"
                cards={[
                    { icon: ClipboardList, title: 'İş İhtiyacı Analizi', description: 'İş süreçlerinizi analiz ederek SAP çözüm gereksinimlerinizi belirliyoruz.', tag: 'Keşif Aşaması' },
                    { icon: Settings, title: 'Uygulama Yapılandırma', description: 'SAP modüllerini iş gereksinimlerinize uygun şekilde yapılandırıyoruz.', tag: 'Konfigürasyon' },
                    { icon: RefreshCw, title: 'Süreç Uyarlama', description: 'Mevcut iş süreçlerinizi SAP best practice ile uyumlu hale getiriyoruz.', tag: 'Best Practice' },
                    { icon: Layers, title: 'Modül Bazlı Danışmanlık', description: 'FI, CO, MM, SD, PP, QM gibi modüllerde uzman danışmanlık hizmeti sunuyoruz.', tag: 'Fonksiyonel' },
                    { icon: User, title: 'Kullanıcı Odaklı Yaklaşım', description: 'Son kullanıcı deneyimini ön planda tutarak uygulamaları tasarlıyoruz.', tag: 'UX Tasarımı' },
                    { icon: Lightbulb, title: 'Sürdürülebilir Çözüm', description: 'Uzun vadeli değer yaratan, ölçeklenebilir ve bakımı kolay çözümler oluşturuyoruz.', tag: 'Ölçeklenebilir' },
                ]}
            />

            <ServiceCards
                sectionTitle="Destek Verdiğimiz Alanlar"
                variant="compact"
                accentColor="#34d399"
                cards={[
                    { icon: Landmark, title: 'Finans (FI/CO)', description: '' },
                    { icon: ShoppingCart, title: 'Satınalma (MM)', description: '' },
                    { icon: Truck, title: 'Satış & Lojistik (SD)', description: '' },
                    { icon: Factory, title: 'Üretim (PP)', description: '' },
                    { icon: CheckSquare, title: 'Kalite (QM)', description: '' },
                    { icon: BarChart3, title: 'Raporlama (BI)', description: '' },
                ]}
            />

            <ServiceBenefits
                sectionTitle="Sağlanan Faydalar"
                variant="checks"
                accentColor="#34d399"
                items={[
                    'İş süreçlerine daha yüksek uyum',
                    'Daha verimli operasyon',
                    'Kullanıcı deneyiminde iyileşme',
                    'Daha kolay yönetilebilir yapı',
                ]}
            />

            <ServiceCta
                title="SAP uygulamalarınızı iş hedeflerinize uygun hale getirelim."
                subtitle="Modül bazlı uzmanlığımızla süreçlerinizi optimize edelim."
                buttonText="İletişime Geçin"
                buttonHref="/contact"
                accentColor="#34d399"
                features={['Modül Bazlı Uzmanlık', 'Kullanıcı Odaklı Tasarım', 'Sürdürülebilir Yapı']}
            />
        </main>
    );
}
