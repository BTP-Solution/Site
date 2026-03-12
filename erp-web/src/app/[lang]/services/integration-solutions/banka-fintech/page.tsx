'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceSteps from '@/components/services/ServiceSteps';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { Landmark, CreditCard, ArrowLeftRight, FileCheck2, ShieldCheck, Wallet } from 'lucide-react';

export default function BankaFintechPage() {
    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            {/* HERO */}
            <ServiceHero
                breadcrumbs={[
                    { label: 'Anasayfa', href: '/' },
                    { label: 'Hizmetlerimiz', href: '/services' },
                    { label: 'Entegrasyon Çözümleri', href: '/services/integration-solutions' },
                    { label: 'Banka ve Fintech Entegrasyonları' },
                ]}
                title="Banka ve Fintech Entegrasyonları"
                highlightedWord="Fintech"
                subtitle="SAP Sisteminizi Finansal Ekosistemle Buluşturun"
                description="SAP ERP sisteminizi bankalar, ödeme kuruluşları ve fintech platformlarıyla doğrudan entegre ederek hesap hareketleri, otomatik ödeme, DBS ve mutabakat süreçlerinizi otomatikleştiriyoruz."
                ctaText="Banka Entegrasyonunuzu Planlayalım"
                ctaHref="/contact"
                secondaryCtaText="Çözümlerimizi İnceleyin"
                secondaryCtaHref="#cozumler"
                icon={Landmark}
                accentColor="#f59e0b"
                gradientFrom="#f59e0b"
                gradientTo="#ea580c"
                stats={[
                    { value: '15+', label: 'Banka Entegrasyonu' },
                    { value: 'Real-Time', label: 'Anlık Haberleşme' },
                    { value: '%100', label: 'Mevzuat Uyumu' },
                ]}
            />

            {/* GİRİŞ */}
            <ServiceIntro
                paragraphs={[
                    'Kurumsal finans süreçlerinde SAP sistemi ile bankalar arasındaki kopukluk, manuel işlemlere, gecikmelere ve mutabakat hatalarına neden olur. Banka entegrasyonu, SAP FI modülünüzü doğrudan banka sistemleriyle konuşturarak ödeme talimatlarının otomatik iletilmesini, hesap ekstrelerinin anlık alınmasını ve mutabakat süreçlerinin otomatikleştirilmesini sağlar.',
                    'Türkiye\'deki büyük bankalar, DBS (Doğrudan Borçlandırma Sistemi), havale/EFT, çek-senet takibi ve sanal POS entegrasyonlarında SAP PI/PO, CPI ve web servisler aracılığıyla güvenli, gerçek zamanlı ve mevzuata uyumlu banka entegrasyon çözümleri sunuyoruz.',
                ]}
            />

            {/* ÇÖZÜM KARTLARI */}
            <div id="cozumler">
                <ServiceCards
                    sectionTitle="Banka Entegrasyon Çözümlerimiz"
                    subtitle="SAP ile finansal ekosistem arasında güvenli ve otomatik veri köprüsü"
                    variant="grid"
                    accentColor="#f59e0b"
                    cards={[
                        {
                            icon: CreditCard,
                            title: 'Otomatik Ödeme Talimatları',
                            description: 'SAP FI üzerinden oluşturulan ödeme tekliflerini bankaya otomatik ileterek havale, EFT ve toplu ödeme süreçlerini dijitalleştirin.',
                            tag: 'ÖDEME'
                        },
                        {
                            icon: ArrowLeftRight,
                            title: 'Hesap Ekstresi ve Mutabakat',
                            description: 'Banka hesap ekstrelerini (MT940/camt.053) otomatik alarak SAP üzerinde anlık mutabakat yapın, açık kalemleri otomatik eşleştirin.',
                            tag: 'MUTABAKAT'
                        },
                        {
                            icon: Wallet,
                            title: 'DBS (Doğrudan Borçlandırma)',
                            description: 'Tedarikçi ödemelerini DBS üzerinden yönetin. SAP ile banka arasında otomatik borçlandırma talimatı ve onay akışları kurun.',
                            tag: 'DBS'
                        },
                        {
                            icon: FileCheck2,
                            title: 'Çek-Senet Takibi ve Yönetimi',
                            description: 'Çek ve senet portföyünüzü SAP üzerinden yönetin, vade takibi, tahsilat, ciro ve bankaya teslim süreçlerini otomatikleştirin.',
                            tag: 'ÇEK-SENET'
                        },
                        {
                            icon: ShieldCheck,
                            title: 'Sanal POS ve Tahsilat Entegrasyonu',
                            description: 'E-ticaret ve satış kanallarından gelen ödemeleri sanal POS entegrasyonuyla SAP\'ye otomatik aktarın, mutabakat sürecini hızlandırın.',
                            tag: 'SANAL POS'
                        },
                        {
                            icon: Landmark,
                            title: 'Fintech ve Ödeme Kuruluşu Entegrasyonu',
                            description: 'iyzico, PayTR, Papara gibi fintech platformları ve TCMB ile entegrasyon. Döviz kurları, ödeme bildirimleri ve dijital cüzdan bağlantıları.',
                            tag: 'FİNTECH'
                        },
                    ]}
                />
            </div>

            {/* ÇALIŞMA YAKLAŞIMI */}
            <ServiceSteps
                sectionTitle="Entegrasyon Sürecimiz"
                subtitle="Güvenli ve mevzuata uyumlu banka entegrasyonu adım adım"
                variant="horizontal"
                accentColor="#f59e0b"
                steps={[
                    { title: 'Finans Süreç Analizi', description: 'Mevcut ödeme, tahsilat ve mutabakat süreçlerinizi, çalıştığınız bankaları ve mevzuat gereksinimlerinizi analiz ederiz.' },
                    { title: 'Arayüz ve Güvenlik Tasarımı', description: 'Banka ile haberleşme formatları (XML, MT, ISO 20022), şifreleme, sertifika ve yetkilendirme modellerini tasarlarız.' },
                    { title: 'Geliştirme ve Test', description: 'SAP PI/PO veya CPI üzerinde entegrasyonları geliştirip banka test ortamlarıyla pilotlama yaparız.' },
                    { title: 'Canlıya Geçiş ve İzleme', description: 'Paralel çalışma, canlı geçiş, 7/24 izleme ve otomatik hata bildirimi ile kesintisiz banka iletişimi sağlarız.' },
                ]}
            />

            {/* FAYDALAR */}
            <ServiceBenefits
                sectionTitle="Banka Entegrasyonunun Avantajları"
                variant="pills"
                accentColor="#f59e0b"
                items={[
                    'Manuel banka işlemlerinin ortadan kaldırılması',
                    'Anlık hesap ekstresi ile gerçek zamanlı nakit pozisyonu',
                    'Otomatik mutabakat ile hata oranında %95 azalma',
                    'DBS ile tedarikçi finansmanında vade avantajı',
                    'Mevzuata tam uyumlu, denetlenebilir ödeme süreçleri',
                ]}
            />

            {/* CTA */}
            <ServiceCta
                title="Banka süreçlerinizi SAP ile otomatikleştirmeye hazır mısınız?"
                subtitle="Finans entegrasyon uzmanlarımız, bankanızla SAP arasında güvenli ve kesintisiz bir köprü kurmak için yanınızda."
                buttonText="Banka Entegrasyonu Danışmanlığı Alın"
                buttonHref="/contact"
                features={['Ücretsiz Süreç Analizi', 'Banka Pilot Testi', 'ISO 20022 Uyumluluk']}
            />
        </main>
    );
}
