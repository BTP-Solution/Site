'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceSteps from '@/components/services/ServiceSteps';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { Monitor, Settings, Cpu, Search, Blocks, Users } from 'lucide-react';

export default function SapDanismanlikPage() {
    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            <ServiceHero
                breadcrumbs={[
                    { label: 'Anasayfa', href: '/' },
                    { label: 'Hizmetlerimiz', href: '/services' },
                    { label: 'SAP Danışmanlık' },
                ]}
                title="SAP Danışmanlık"
                highlightedWord="Danışmanlık"
                subtitle="Uçtan Uca SAP Uzmanlığı"
                description="İş süreçlerini analiz eden, doğru SAP çözümlerini kurgulayan ve sürdürülebilir dijital dönüşümü destekleyen danışmanlık yaklaşımı."
                ctaText="İletişime Geçin"
                ctaHref="/contact"
                secondaryCtaText="Hizmetleri İnceleyin"
                secondaryCtaHref="#hizmetler"
                icon={Monitor}
                accentColor="#3463ac"
                gradientFrom="#3463ac"
                gradientTo="#7e6fcf"
                stats={[
                    { value: '50+', label: 'Tamamlanan Proje' },
                    { value: '30+', label: 'SAP Uzmanı' },
                    { value: '%99', label: 'Müşteri Memnuniyeti' },
                ]}
            />

            <ServiceIntro
                paragraphs={[
                    'SAP danışmanlık hizmetlerimiz, kurumsal iş süreçlerinizi derinlemesine analiz ederek en uygun SAP çözümlerini belirlemenize yardımcı olur. Fonksiyonel ve teknik uzmanlığımızla, hem mevcut sistemlerinizin verimliliğini artırıyor hem de dijital dönüşüm yol haritanızı şekillendiriyoruz.',
                    'S/4HANA geçiş projelerinden süreç iyileştirmeye, uygulama danışmanlığından çözüm mimarisine kadar geniş bir yelpazede, proje bazlı veya sürekli destek modelleriyle yanınızdayız.',
                ]}
            />

            <ServiceCards
                sectionTitle="Hizmet Kapsamı"
                subtitle="SAP ekosisteminde uçtan uca danışmanlık desteği"
                variant="grid"
                accentColor="#3463ac"
                cards={[
                    { icon: Monitor, title: 'SAP S/4HANA Danışmanlığı', description: 'S/4HANA geçiş stratejisi, analiz, planlama ve uygulama desteği ile dijital dönüşümünüzü yönlendiriyoruz.', tag: 'Dijital Dönüşüm' },
                    { icon: Settings, title: 'SAP Uygulama Danışmanlığı', description: 'İş ihtiyaçlarınıza uygun SAP uygulama yapılandırma, uyarlama ve kullanıcı odaklı çözüm tasarımı.', tag: 'Fonksiyonel Uzmanlık' },
                    { icon: Cpu, title: 'SAP Teknoloji Danışmanlığı', description: 'Teknik mimari değerlendirme, entegrasyon altyapısı ve modernizasyon yaklaşımlarıyla sisteminizi güçlendiriyoruz.', tag: 'Teknik Altyapı' },
                    { icon: Search, title: 'Süreç Analizi ve İyileştirme', description: 'Mevcut iş süreçlerinizin haritasını çıkarıyor, darboğazları tespit ediyor ve verimlilik önerileri sunuyoruz.', tag: 'Operasyonel Verimlilik' },
                    { icon: Blocks, title: 'Proje ve Çözüm Mimari Desteği', description: 'Doğru çözüm mimarisini tasarlıyor, teknik yönlendirme ve proje koordinasyonu desteği sağlıyoruz.', tag: 'Mimari Tasarım' },
                    { icon: Users, title: 'Uzman Kaynak Desteği', description: 'Proje bazlı veya sürekli uzman danışman, geliştirici ve teknik kaynak desteği ile kapasitenizi güçlendiriyoruz.', tag: 'Kaynak Yönetimi' },
                ]}
            />

            <ServiceSteps
                sectionTitle="Çalışma Yaklaşımımız"
                subtitle="Her projede aynı disiplinle çalışıyoruz"
                variant="horizontal"
                accentColor="#3463ac"
                steps={[
                    { title: 'İhtiyaç Analizi', description: 'Hedeflerinizi netleştiriyoruz' },
                    { title: 'Mevcut Yapı Değerlendirmesi', description: 'Sisteminizi inceliyoruz' },
                    { title: 'Çözüm Tasarımı', description: 'En uygun yapıyı planlıyoruz' },
                    { title: 'Uygulama', description: 'Planı hayata geçiriyoruz' },
                    { title: 'Destek', description: 'Sürdürülebilir destek sağlıyoruz' },
                ]}
            />

            <ServiceBenefits
                sectionTitle="Neden Bizi Tercih Etmelisiniz?"
                variant="pills"
                accentColor="#3463ac"
                items={[
                    'SAP uzmanlığı',
                    'Süreç odaklı yaklaşım',
                    'Ölçeklenebilir yapı',
                    'Uzun vadeli destek',
                    'Sertifikalı ekip',
                ]}
            />

            <ServiceCta
                title="SAP projeleriniz için doğru danışmanlık yapısını birlikte oluşturalım."
                subtitle="Uzman ekibimizle tanışın ve projenizi değerlendirelim."
                buttonText="Bizimle İletişime Geçin"
                buttonHref="/contact"
                features={['Ücretsiz Ön Değerlendirme', 'Proje Odaklı Yaklaşım', 'Esnek Destek Modeli']}
            />
        </main>
    );
}
