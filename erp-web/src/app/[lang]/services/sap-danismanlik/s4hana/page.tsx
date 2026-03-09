'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceSteps from '@/components/services/ServiceSteps';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { Search, GitBranch, Layers, RefreshCw, CalendarCheck, Users } from 'lucide-react';

export default function S4HanaPage() {
    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            <ServiceHero
                breadcrumbs={[
                    { label: 'Anasayfa', href: '/' },
                    { label: 'Hizmetlerimiz', href: '/services' },
                    { label: 'SAP Danışmanlık', href: '/services/sap-danismanlik' },
                    { label: 'SAP S/4HANA Danışmanlığı' },
                ]}
                title="SAP S/4HANA Danışmanlığı"
                highlightedWord="S/4HANA"
                subtitle="Geleceğe Hazır Dönüşüm"
                description="SAP S/4HANA dönüşüm süreçlerinde analiz, planlama, geçiş ve uygulama desteği sunan profesyonel danışmanlık hizmeti."
                ctaText="Projenizi Değerlendirelim"
                ctaHref="/contact"
                secondaryCtaText="Yaklaşımımız"
                secondaryCtaHref="#yaklasim"
                icon={Layers}
                accentColor="#ff7700"
                gradientFrom="#ff7700"
                gradientTo="#ff9a44"
                variant="centered"
                stats={[
                    { value: '25+', label: 'S/4HANA Projesi' },
                    { value: '%98', label: 'Zamanında Teslimat' },
                    { value: '4+', label: 'Sektör Deneyimi' },
                ]}
            />

            <ServiceIntro
                paragraphs={[
                    'SAP S/4HANA dönüşüm projeleri, kurumsal sistemlerin geleceğe hazırlanması açısından stratejik önem taşır. Doğru planlama ve uygulama yaklaşımı, sürecin başarısını doğrudan etkiler.',
                    'Mevcut ERP altyapınızın değerlendirilmesinden geçiş stratejisinin belirlenmesine, Greenfield veya Brownfield yaklaşımının seçilmesinden uygulama koordinasyonuna kadar tüm aşamalarda uzman desteği sunuyoruz.',
                ]}
            />

            <ServiceCards
                sectionTitle="Hizmet Kapsamı"
                subtitle="Dönüşüm projenizin her aşamasında yanınızdayız"
                variant="featured"
                accentColor="#ff7700"
                cards={[
                    { icon: Search, title: 'Mevcut Sistem Analizi', description: 'Mevcut SAP altyapınızı ve iş süreçlerinizi detaylı olarak analiz ediyoruz.', tag: 'Analiz & Keşif' },
                    { icon: GitBranch, title: 'Dönüşüm Stratejisi', description: 'İş hedeflerinize uygun S/4HANA dönüşüm stratejisini birlikte şekillendiriyoruz.' },
                    { icon: Layers, title: 'Greenfield / Brownfield', description: 'En uygun geçiş yaklaşımını iş gereksinimlerinize göre belirliyoruz.' },
                    { icon: RefreshCw, title: 'Süreç Uyumluluk', description: 'İş süreçlerinizin S/4HANA ile uyumluluğunu değerlendiriyoruz.' },
                    { icon: CalendarCheck, title: 'Geçiş Planlama', description: 'Detaylı geçiş planı ve zaman çizelgesi oluşturuyoruz.' },
                    { icon: Users, title: 'Proje Koordinasyonu', description: 'Dönüşüm sürecinde teknik ve fonksiyonel koordinasyonu yönetiyoruz.' },
                ]}
            />

            <ServiceSteps
                sectionTitle="Proje Yaklaşımımız"
                subtitle="Kanıtlanmış metodolojimiz"
                variant="cards"
                accentColor="#ff7700"
                steps={[
                    { title: 'Analiz', description: 'Mevcut durumunuzu derinlemesine inceliyoruz' },
                    { title: 'Yol Haritası', description: 'Stratejik geçiş planı oluşturuyoruz' },
                    { title: 'Tasarım', description: 'Çözüm mimarisini şekillendiriyoruz' },
                    { title: 'Devreye Alma', description: 'Sistemi güvenle hayata geçiriyoruz' },
                ]}
            />

            <ServiceBenefits
                sectionTitle="Sağlanan Faydalar"
                variant="border-left"
                accentColor="#ff7700"
                items={[
                    'Modern ve entegre altyapı',
                    'Daha yüksek operasyonel verimlilik',
                    'Süreç standardizasyonu',
                    'Geleceğe hazır sistem yapısı',
                ]}
            />

            <ServiceCta
                title="SAP S/4HANA dönüşümünüzü doğru stratejiyle yönetin."
                subtitle="Dönüşüm yolculuğunuzda deneyimli ekibimizle birlikte ilerleyin."
                buttonText="İletişime Geçin"
                buttonHref="/contact"
                accentColor="#ff7700"
                features={['Ücretsiz Keşif Görüşmesi', 'Greenfield/Brownfield Analizi', 'Risk Değerlendirmesi']}
            />
        </main>
    );
}
