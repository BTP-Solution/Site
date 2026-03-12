'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { Palette, Settings, Smartphone, Layout, PencilRuler } from 'lucide-react';

export default function FioriSapui5Page() {
    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            {/* HERO */}
            <ServiceHero
                breadcrumbs={[
                    { label: 'Anasayfa', href: '/' },
                    { label: 'Hizmetlerimiz', href: '/services' },
                    { label: 'Teknoloji ve Yazılım Geliştirme', href: '/services/tech-development' },
                    { label: 'SAP Fiori ve SAPUI5 Arayüzleri' },
                ]}
                title="SAP Fiori ve SAPUI5 Arayüzleri"
                highlightedWord="Fiori"
                subtitle="SAP ekranlarını daha sade, kullanıcı dostu ve mobil uyumlu deneyimlere dönüştürüyoruz."
                description="Karmaşık kullanıcı akışlarını sadeleştiriyor, çalışanların SAP süreçlerini daha hızlı ve rahat yönetebileceği modern Fiori arayüzleri tasarlıyoruz."
                ctaText="UX Danışmanlığı Alın"
                ctaHref="/contact"
                icon={Palette}
                accentColor="#f97316"
                gradientFrom="#f97316"
                gradientTo="#eab308"
                stats={[
                    { value: 'Fiori', label: 'Modern UX Tasarımı' },
                    { value: 'SAPUI5', label: 'Özel Geliştirme' },
                    { value: 'Responsive', label: 'Çoklu Cihaz Uyumu' },
                ]}
            />

            {/* GİRİŞ */}
            <ServiceIntro
                paragraphs={[
                    'Kullanıcı deneyimi, yazılım benimsenmesinde kritik bir rol oynar. Karmaşık ve zor kullanılan arayüzler, sistem yatırımlarından beklenen verimi doğrudan etkiler. Modern, sade ve erişilebilir bir arayüz, kullanıcı memnuniyetini artırır ve operasyonel verimliliği güçlendirir.',
                    'Klasik SAP GUI ekranlarından modern, responsive ve daha erişilebilir Fiori arayüzlerine geçiş sürecinde kurumunuza özel çözümler sunuyor; standart uygulamalardan özel geliştirmelere kadar geniş bir yelpazede UX/UI desteği sağlıyoruz.',
                ]}
            />

            {/* HİZMET KARTLARI */}
            <ServiceCards
                sectionTitle="Arayüz Hizmetlerimiz"
                subtitle="SAP kullanıcı deneyimini uçtan uca iyileştiren çözümler"
                variant="grid"
                accentColor="#f97316"
                cards={[
                    {
                        icon: Settings,
                        title: 'Standart Fiori Uyarlamaları',
                        description: 'SAP standart Fiori uygulamalarının kuruma uygun devreye alınması, konfigürasyonu ve yetkilendirilmesi.',
                        tag: 'STANDART'
                    },
                    {
                        icon: PencilRuler,
                        title: 'Custom SAPUI5 Geliştirme',
                        description: 'Standartların yeterli olmadığı durumlar için kuruma özel SAPUI5 tabanlı arayüz geliştirme ve freestyle uygulama tasarımı.',
                        tag: 'ÖZEL GELİŞTİRME'
                    },
                    {
                        icon: Smartphone,
                        title: 'Launchpad ve Mobilite',
                        description: 'Fiori Launchpad kurulumu, rol bazlı ana sayfa yapılandırması ve çoklu cihaz deneyimi (masaüstü, tablet, mobil) optimizasyonu.',
                        tag: 'MOBİLİTE'
                    },
                    {
                        icon: Layout,
                        title: 'UX Tasarımı ve Tema',
                        description: 'Kurumsal kimliğe uyumlu tema tasarımı, custom CSS, görünüm ve kullanım deneyimi iyileştirmeleri.',
                        tag: 'TASARIM'
                    },
                ]}
            />

            {/* HANGİ ALANLARDA DEĞER YARATIYORUZ */}
            <ServiceBenefits
                sectionTitle="Hangi Alanlarda Değer Yaratıyoruz?"
                variant="checks"
                accentColor="#f97316"
                items={[
                    'Onay süreçleri',
                    'Operasyon ekranları',
                    'Mobil saha kullanımı',
                    'Yönetici panelleri',
                    'Self-service uygulamalar',
                ]}
            />

            {/* FAYDALAR */}
            <ServiceBenefits
                sectionTitle="Sağlanan Faydalar"
                variant="pills"
                accentColor="#f97316"
                items={[
                    'Artan kullanıcı memnuniyeti',
                    'Daha hızlı işlem deneyimi',
                    'Eğitim ihtiyacında azalma',
                    'Mobil, tablet ve masaüstü uyumu',
                ]}
            />

            {/* CTA */}
            <ServiceCta
                title="SAP ekranlarınızı modern ve kullanıcı dostu hale getirelim."
                subtitle="Kullanıcı deneyimi değerlendirmesi ve Fiori geçiş stratejisi için uzmanlarımızla görüşün."
                buttonText="UX Danışmanlığı Alın"
                buttonHref="/contact"
                features={['UX Değerlendirmesi', 'Fiori Geçiş Planı', 'Prototip Çalışması']}
            />
        </main>
    );
}
