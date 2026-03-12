'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { Blocks, FileText, ArrowLeftRight, Link2 } from 'lucide-react';

export default function IntegrationSolutionsPage() {
    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            {/* HERO */}
            <ServiceHero
                breadcrumbs={[
                    { label: 'Anasayfa', href: '/' },
                    { label: 'Hizmetlerimiz', href: '/services' },
                    { label: 'Entegrasyon Çözümleri' },
                ]}
                title="Entegrasyon Çözümleri"
                highlightedWord="Entegrasyon"
                subtitle="Sistemlerinizi Birbirine Bağlayan Uçtan Uca Çözümler"
                description="SAP ve SAP dışı sistemlerinizi birbirine entegre ediyor, e-dönüşüm süreçlerinizi dijitalleştiriyor ve API tabanlı modern entegrasyon mimarileri kuruyoruz."
                ctaText="Entegrasyon İhtiyaçlarınızı Değerlendirelim"
                ctaHref="/contact"
                secondaryCtaText="Hizmetlerimizi İnceleyin"
                secondaryCtaHref="#hizmetler"
                icon={Blocks}
                accentColor="#f59e0b"
                gradientFrom="#f59e0b"
                gradientTo="#ef4444"
                stats={[
                    { value: '50+', label: 'Entegrasyon Projesi' },
                    { value: '7/24', label: 'Kesintisiz Veri Akışı' },
                    { value: '%99.9', label: 'Sistem Erişilebilirliği' },
                ]}
            />

            {/* GİRİŞ */}
            <ServiceIntro
                paragraphs={[
                    'Kurumsal yapılarda farklı sistemlerin bir arada çalışması kaçınılmazdır. Ancak bu sistemlerin birbirinden kopuk çalışması, veri tutarsızlıkları, süreç gecikmeleri ve operasyonel verimsizliklere neden olur. Entegrasyon, bu kopuklukları ortadan kaldırarak tüm iş süreçlerinin sorunsuz bir şekilde akmasını sağlar.',
                    'SAP PI/PO, SAP CPI (Cloud Platform Integration), API Management ve modern entegrasyon araçlarıyla kurumunuzdaki tüm sistemleri birbirine bağlıyor, veri akışlarını otomatikleştiriyor ve dijital belge süreçlerinizi uçtan uca yönetiyoruz.',
                ]}
            />

            {/* HİZMET KARTLARI */}
            <div id="hizmetler">
                <ServiceCards
                    sectionTitle="Entegrasyon Hizmet Alanlarımız"
                    subtitle="Dijital belge yönetiminden sistem entegrasyonuna kapsamlı çözümler"
                    variant="grid"
                    accentColor="#f59e0b"
                    cards={[
                        {
                            icon: FileText,
                            title: 'E-Dönüşüm ve Dijital Arşivleme',
                            description: 'e-Fatura, e-İrsaliye, e-Arşiv, e-Defter ve tüm dijital belge süreçlerinizi SAP entegrasyonuyla GİB uyumlu şekilde yönetiyoruz.',
                            tag: 'E-DÖNÜŞÜM',
                            href: '/services/integration-solutions/e-donusum',
                            linkText: 'Detayları Gör'
                        },
                        {
                            icon: Link2,
                            title: 'API ve Sistem Entegrasyonları',
                            description: 'REST/SOAP API\'ler, web servisleri ve modern entegrasyon platformlarıyla sistemlerinizi birbirine bağlıyoruz.',
                            tag: 'API ENTEGRASYONu',
                            href: '/services/integration-solutions/api-integration',
                            linkText: 'Detayları Gör'
                        },
                        {
                            icon: ArrowLeftRight,
                            title: 'SAP ve Non-SAP Sistem Entegrasyonları',
                            description: 'SAP ile CRM, HR, MES, WMS ve üçüncü parti sistemler arasında güvenilir, gerçek zamanlı veri entegrasyonu sağlıyoruz.',
                            tag: 'SİSTEM ENTEGRASYONU',
                            href: '/services/integration-solutions/sap-nonsap',
                            linkText: 'Detayları Gör'
                        },
                    ]}
                />
            </div>

            {/* NEDEN BİZ */}
            <ServiceBenefits
                sectionTitle="Neden Bizimle Çalışmalısınız?"
                variant="pills"
                accentColor="#f59e0b"
                items={[
                    'SAP PI/PO ve CPI Uzmanlığı',
                    'Uçtan Uca Entegrasyon Mimarisi',
                    'GİB Uyumlu E-Dönüşüm Deneyimi',
                    'Gerçek Zamanlı Veri Akışı',
                    'Ölçeklenebilir API Yönetimi',
                ]}
            />

            {/* CTA */}
            <ServiceCta
                title="Sistemlerinizi birbirine bağlamaya hazır mısınız?"
                subtitle="Uzman entegrasyon ekibimiz, kurumunuzun veri akışlarını optimize etmek ve süreçlerinizi otomatikleştirmek için yanınızda."
                buttonText="Entegrasyon Danışmanlığı Alın"
                buttonHref="/contact"
                features={['Ücretsiz Entegrasyon Analizi', 'PoC Çalışması', 'SAP Sertifikalı Ekip']}
            />
        </main>
    );
}
