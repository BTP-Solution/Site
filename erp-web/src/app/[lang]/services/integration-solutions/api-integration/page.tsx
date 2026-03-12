'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceSteps from '@/components/services/ServiceSteps';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { Link2, Globe, Webhook, RefreshCcw, ShieldCheck, Gauge } from 'lucide-react';

export default function ApiIntegrationPage() {
    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            {/* HERO */}
            <ServiceHero
                breadcrumbs={[
                    { label: 'Anasayfa', href: '/' },
                    { label: 'Hizmetlerimiz', href: '/services' },
                    { label: 'Entegrasyon Çözümleri', href: '/services/integration-solutions' },
                    { label: 'API ve Sistem Entegrasyonları' },
                ]}
                title="API ve Sistem Entegrasyonları"
                highlightedWord="API"
                subtitle="Modern Entegrasyon Mimarileriyle Sistemlerinizi Birleştirin"
                description="REST, SOAP, OData ve GraphQL tabanlı API entegrasyonlarıyla kurumsal sistemlerinizi güvenli ve ölçeklenebilir bir şekilde birbirine bağlıyoruz."
                ctaText="Entegrasyon Projenizi Başlatın"
                ctaHref="/contact"
                secondaryCtaText="Çözümlerimizi İnceleyin"
                secondaryCtaHref="#cozumler"
                icon={Link2}
                accentColor="#f59e0b"
                gradientFrom="#f59e0b"
                gradientTo="#fb923c"
                stats={[
                    { value: 'REST/SOAP', label: 'Çoklu Protokol Desteği' },
                    { value: 'SAP CPI', label: 'Cloud Entegrasyon' },
                    { value: '7/24', label: 'Kesintisiz Veri Akışı' },
                ]}
            />

            {/* GİRİŞ */}
            <ServiceIntro
                paragraphs={[
                    'Dijital dönüşüm sürecinde kurumların en büyük ihtiyaçlarından biri, farklı platformlarda çalışan sistemlerin birbirleriyle sorunsuz iletişim kurabilmesidir. API entegrasyonu, bu iletişimi standart, güvenli ve ölçeklenebilir bir şekilde sağlamanın en modern yoludur.',
                    'SAP PI/PO, SAP CPI (Cloud Platform Integration), API Management platformları ve özel middleware çözümleriyle kurumunuzdaki tüm veri akışlarını merkezi bir noktadan yönetiyor, gerçek zamanlı veya toplu veri transferlerini otomatikleştiriyoruz.',
                ]}
            />

            {/* ÇÖZÜM KARTLARI */}
            <div id="cozumler">
                <ServiceCards
                    sectionTitle="API Entegrasyon Çözümlerimiz"
                    subtitle="Her türlü sistem bağlantısı için kapsamlı entegrasyon altyapısı"
                    variant="grid"
                    accentColor="#f59e0b"
                    cards={[
                        {
                            icon: Globe,
                            title: 'REST ve SOAP Web Servisleri',
                            description: 'RESTful API tasarımı, SOAP servisleri, OData ve GraphQL uç noktalarıyla standart tabanlı entegrasyon altyapısı oluşturuyoruz.',
                            tag: 'WEB SERVİSLERİ'
                        },
                        {
                            icon: Webhook,
                            title: 'SAP PI/PO ve CPI Entegrasyonu',
                            description: 'SAP Process Integration, Process Orchestration ve Cloud Platform Integration ile kurumsal entegrasyon senaryolarını konfigüre ediyoruz.',
                            tag: 'SAP ENTEGRASYON'
                        },
                        {
                            icon: RefreshCcw,
                            title: 'Gerçek Zamanlı ve Toplu Veri Transferi',
                            description: 'Anlık (real-time) ve zamanlanmış (batch) veri aktarım senaryoları tasarlıyor, IDoc, BAPI, RFC ve dosya tabanlı entegrasyonlar kuruyoruz.',
                            tag: 'VERİ TRANSFERİ'
                        },
                        {
                            icon: Link2,
                            title: 'API Gateway ve Yönetim',
                            description: 'API güvenliği, hız sınırlama, kimlik doğrulama, kullanım analitiği ve versiyon yönetimi ile kurumsal API altyapısı oluşturuyoruz.',
                            tag: 'API YÖNETİMİ'
                        },
                        {
                            icon: ShieldCheck,
                            title: 'Güvenlik ve Kimlik Doğrulama',
                            description: 'OAuth 2.0, JWT, sertifika tabanlı kimlik doğrulama, IP kısıtlama ve şifreli veri iletişimi ile güvenli entegrasyon sağlıyoruz.',
                            tag: 'GÜVENLİK'
                        },
                        {
                            icon: Gauge,
                            title: 'İzleme ve Hata Yönetimi',
                            description: 'Entegrasyon trafiğinin anlık izlenmesi, otomatik hata bildirimi, yeniden deneme mekanizmaları ve performans raporlama.',
                            tag: 'İZLEME'
                        },
                    ]}
                />
            </div>

            {/* ÇALIŞMA YAKLAŞIMI */}
            <ServiceSteps
                sectionTitle="Entegrasyon Yol Haritamız"
                subtitle="Analiz, tasarım, geliştirme ve devreye alma adımlarıyla"
                variant="horizontal"
                accentColor="#f59e0b"
                steps={[
                    { title: 'Entegrasyon Analizi', description: 'Mevcut sistemleriniz, veri akışlarınız ve bağlantı ihtiyaçlarınızı detaylı analiz ederiz.' },
                    { title: 'Mimari Tasarım', description: 'Protokol seçimi, güvenlik modeli, hata yönetimi ve veri dönüşüm kurallarını tasarlarız.' },
                    { title: 'Geliştirme ve Test', description: 'Entegrasyon akışlarını geliştirip uçtan uca test ortamında doğrular, performans testlerini yaparız.' },
                    { title: 'Devreye Alma ve İzleme', description: 'Canlı ortama geçiş sonrası sürekli izleme, hata yönetimi ve optimizasyon desteği sağlarız.' },
                ]}
            />

            {/* FAYDALAR */}
            <ServiceBenefits
                sectionTitle="API Entegrasyonunun Avantajları"
                variant="pills"
                accentColor="#f59e0b"
                items={[
                    'Sistemler arası gerçek zamanlı veri tutarlılığı',
                    'Manuel veri girişinin ve insan hatasının ortadan kaldırılması',
                    'Güvenli ve standart tabanlı iletişim protokolleri',
                    'Ölçeklenebilir ve bakımı kolay entegrasyon altyapısı',
                    'Merkezi izleme ve otomatik hata yönetimi',
                ]}
            />

            {/* CTA */}
            <ServiceCta
                title="Sistemlerinizi modern API altyapısıyla birbirine bağlamaya hazır mısınız?"
                subtitle="SAP PI/PO ve CPI uzmanlarımız, kurumunuzun entegrasyon ihtiyaçlarını en verimli şekilde karşılamak için yanınızda."
                buttonText="Entegrasyon Danışmanlığı Talep Edin"
                buttonHref="/contact"
                features={['Ücretsiz Entegrasyon Analizi', 'PoC Çalışması', 'SAP Sertifikalı Ekip']}
            />
        </main>
    );
}
