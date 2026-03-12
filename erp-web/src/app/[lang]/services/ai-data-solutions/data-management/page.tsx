'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceSteps from '@/components/services/ServiceSteps';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { Database, ShieldCheck, ArrowLeftRight, FileSearch, Layers, RefreshCcw } from 'lucide-react';

export default function DataManagementPage() {
    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            {/* HERO */}
            <ServiceHero
                breadcrumbs={[
                    { label: 'Anasayfa', href: '/' },
                    { label: 'Hizmetlerimiz', href: '/services' },
                    { label: 'Veri ve Akıllı Çözümler', href: '/services/ai-data-solutions' },
                    { label: 'Veri Yönetimi ve Dönüşümü' },
                ]}
                title="Veri Yönetimi ve Dönüşümü"
                highlightedWord="Veri Yönetimi"
                subtitle="Kurumsal Verilerinizin Kalitesini, Bütünlüğünü ve Değerini Artırın"
                description="Veri kalitesi yönetimi, veri taşıma, master data governance ve veri dönüşümü ile kurumsal veri altyapınızı SAP standartlarında güçlendiriyoruz."
                ctaText="Veri Yönetimi Danışmanlığı Alın"
                ctaHref="/contact"
                secondaryCtaText="Çözümlerimizi İnceleyin"
                secondaryCtaHref="#cozumler"
                icon={Database}
                accentColor="#818cf8"
                gradientFrom="#818cf8"
                gradientTo="#6366f1"
                stats={[
                    { value: 'MDG', label: 'Master Data Governance' },
                    { value: 'DQ', label: 'Veri Kalitesi' },
                    { value: 'ETL', label: 'Veri Dönüşümü' },
                ]}
            />

            {/* GİRİŞ */}
            <ServiceIntro
                paragraphs={[
                    'Kurumsal sistemlerdeki veri kalitesizliği, yanlış raporlara, süreç aksamalarına ve maliyet kaybına neden olur. Duplike, eksik veya tutarsız veriler iş süreçlerini olumsuz etkiler. Veri yönetimi, bu sorunları kaynağında çözerek güvenilir ve tekil bir veri altyapısı oluşturmayı hedefler.',
                    'SAP Master Data Governance (MDG), SAP Data Services, SAP Information Steward ve modern veri araçlarıyla kurumunuzdaki veri kalitesini artırıyor, veri taşıma projelerini güvenle yönetiyor ve master data süreçlerini merkezileştiriyoruz.',
                ]}
            />

            {/* ÇÖZÜM KARTLARI */}
            <div id="cozumler">
                <ServiceCards
                    sectionTitle="Veri Yönetimi Çözümlerimiz"
                    subtitle="Veri kalitesinden master data yönetimine kapsamlı altyapı"
                    variant="grid"
                    accentColor="#818cf8"
                    cards={[
                        {
                            icon: ShieldCheck,
                            title: 'Veri Kalitesi Yönetimi',
                            description: 'Duplike tespiti, veri doğrulama kuralları, temizleme ve zenginleştirme ile kurumsal veri kalitesini sürdürülebilir şekilde artırın.',
                            tag: 'VERİ KALİTESİ'
                        },
                        {
                            icon: Layers,
                            title: 'SAP Master Data Governance (MDG)',
                            description: 'Müşteri, tedarikçi, malzeme ve finans verilerini merkezi yönetim, onay iş akışları ve konsolidasyon ile standartlaştırın.',
                            tag: 'MASTER DATA'
                        },
                        {
                            icon: ArrowLeftRight,
                            title: 'Veri Taşıma ve Göç Projeleri',
                            description: 'Eski sistemlerden SAP\'ye veya SAP ECC\'den S/4HANA\'ya güvenli veri göçü. Haritalama, dönüşüm, doğrulama ve paralel çalıştırma.',
                            tag: 'VERİ GÖÇ'
                        },
                        {
                            icon: RefreshCcw,
                            title: 'ETL ve Veri Dönüşümü',
                            description: 'SAP Data Services ve modern ETL araçlarıyla farklı kaynaklardan veri toplama, dönüştürme ve hedef sisteme yükleme süreçleri.',
                            tag: 'ETL'
                        },
                        {
                            icon: FileSearch,
                            title: 'Veri Profilleme ve Analiz',
                            description: 'Mevcut verilerinizin yapısını, kalitesini ve tutarlılığını analiz ederek iyileştirme yol haritası oluşturun.',
                            tag: 'VERİ ANALİZ'
                        },
                        {
                            icon: Database,
                            title: 'Veri Arşivleme ve Yaşam Döngüsü',
                            description: 'Sistem performansını artırmak için eski verileri güvenli şekilde arşivleyin, saklama politikaları ve yasal uyumluluk sağlayın.',
                            tag: 'ARŞİVLEME'
                        },
                    ]}
                />
            </div>

            {/* ÇALIŞMA YAKLAŞIMI */}
            <ServiceSteps
                sectionTitle="Veri Yönetimi Sürecimiz"
                subtitle="Veri kalitesinden veri yönetimine adım adım"
                variant="horizontal"
                accentColor="#818cf8"
                steps={[
                    { title: 'Veri Mevcut Durum Analizi', description: 'Mevcut veri kaynaklarınızı, kalitesini, hacmini ve iş süreçlerine etkisini analiz ederiz.' },
                    { title: 'Strateji ve Tasarım', description: 'Veri governance modeli, kalite kuralları, MDG iş akışları ve göç stratejisini tasarlarız.' },
                    { title: 'Uygulama ve Test', description: 'Veri temizleme, dönüşüm ve yükleme süreçlerini kurgular, doğrulama testlerini yaparız.' },
                    { title: 'Sürdürülebilir Yönetim', description: 'Veri kalitesi izleme, düzenli raporlama ve sürekli iyileştirme mekanizmalarını devreye alırız.' },
                ]}
            />

            {/* FAYDALAR */}
            <ServiceBenefits
                sectionTitle="Veri Yönetiminin Avantajları"
                variant="pills"
                accentColor="#818cf8"
                items={[
                    'Güvenilir, tutarlı ve tekil kurumsal veri kaynağı',
                    'Raporlama ve analitikte doğruluk oranında artış',
                    'Veri göçü projelerinde risk minimizasyonu',
                    'Düzenleyici uyumluluk ve denetim hazırlığı',
                    'SAP sistem performansında iyileştirme',
                ]}
            />

            {/* CTA */}
            <ServiceCta
                title="Kurumsal veri kalitenizi yükseltmeye hazır mısınız?"
                subtitle="Veri yönetimi uzmanlarımız, verilerinizi güvenilir bir kurumsal varlığa dönüştürmek için yanınızda."
                buttonText="Veri Yönetimi Danışmanlığı Talep Edin"
                buttonHref="/contact"
                features={['Ücretsiz Veri Kalitesi Değerlendirmesi', 'MDG Demo', 'Göç Fizibilite Analizi']}
            />
        </main>
    );
}
