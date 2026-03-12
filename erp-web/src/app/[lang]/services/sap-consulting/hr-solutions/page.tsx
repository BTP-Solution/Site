'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceSteps from '@/components/services/ServiceSteps';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { Users, UserCheck, GraduationCap, CalendarClock, BadgeDollarSign, HeartHandshake } from 'lucide-react';

export default function HrSolutionsPage() {
    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            {/* HERO */}
            <ServiceHero
                breadcrumbs={[
                    { label: 'Anasayfa', href: '/' },
                    { label: 'Hizmetlerimiz', href: '/services' },
                    { label: 'SAP Danışmanlık', href: '/services/sap-consulting' },
                    { label: 'İnsan Kaynakları Çözümleri' },
                ]}
                title="İnsan Kaynakları Çözümleri"
                highlightedWord="İnsan Kaynakları"
                subtitle="SAP HCM ve SuccessFactors ile Yetenek Yönetimi"
                description="Personel yönetimi, bordro, yetenek yönetimi ve organizasyonel gelişim süreçlerinizi SAP HCM ve SuccessFactors ile dijitalleştiriyoruz."
                ctaText="İK Çözümlerini Keşfedin"
                ctaHref="#cozumler"
                secondaryCtaText="Demo Talep Edin"
                secondaryCtaHref="/contact"
                icon={Users}
                accentColor="#6366f1"
                gradientFrom="#6366f1"
                gradientTo="#a78bfa"
                stats={[
                    { value: 'HCM', label: 'On-Premise Çözüm' },
                    { value: 'SF', label: 'Cloud İK Platformu' },
                    { value: '%100', label: 'Yasal Uyumluluk' },
                ]}
            />

            {/* GİRİŞ */}
            <ServiceIntro
                paragraphs={[
                    'İnsan kaynakları süreçleri, bir kurumun en değerli varlığı olan çalışanlarını yönetmenin temelini oluşturur. İşe alımdan bordro hesaplamasına, performans değerlendirmeden kariyer planlamaya kadar tüm İK süreçlerinin dijital, entegre ve verimli bir şekilde yönetilmesi kritik öneme sahiptir.',
                    'SAP HCM (on-premise) ve SAP SuccessFactors (cloud) çözümleriyle kurumunuzun İK süreçlerini uçtan uca dijitalleştiriyor, yasal uyumluluğu sağlıyor ve çalışan deneyimini iyileştiriyoruz.',
                ]}
            />

            {/* ÇÖZÜM KARTLARI */}
            <div id="cozumler">
                <ServiceCards
                    sectionTitle="İK Çözüm Kapsamımız"
                    subtitle="Personel yönetiminden yetenek gelişimine kapsamlı İK çözümleri"
                    variant="grid"
                    accentColor="#6366f1"
                    cards={[
                        {
                            icon: UserCheck,
                            title: 'Personel Yönetimi ve Özlük',
                            description: 'Çalışan master verileri, organizasyon yapıları, işe giriş-çıkış süreçleri ve özlük dosyası yönetimini SAP üzerinde merkezi olarak yönetin.',
                            tag: 'PERSONEL YÖNETİMİ'
                        },
                        {
                            icon: BadgeDollarSign,
                            title: 'Bordro ve Yasal Uyumluluk',
                            description: 'Türkiye mevzuatına tam uyumlu bordro hesaplama, SGK bildirgeleri, gelir vergisi beyannameleri ve yasal raporlama altyapısı.',
                            tag: 'BORDRO'
                        },
                        {
                            icon: CalendarClock,
                            title: 'Zaman Yönetimi ve İzin Takibi',
                            description: 'Mesai takibi, vardiya planlaması, izin talepleri ve onay iş akışları ile zaman yönetimi süreçlerini otomatikleştirin.',
                            tag: 'ZAMAN YÖNETİMİ'
                        },
                        {
                            icon: GraduationCap,
                            title: 'Yetenek Yönetimi (SuccessFactors)',
                            description: 'Performans değerlendirme, hedef yönetimi, yetkinlik bazlı değerlendirme, yedekleme planlaması ve kariyer gelişimi süreçleri.',
                            tag: 'YETENEK YÖNETİMİ'
                        },
                        {
                            icon: HeartHandshake,
                            title: 'İşe Alım ve Aday Yönetimi',
                            description: 'SuccessFactors Recruiting ile işe alım sürecini dijitalleştirin. Aday havuzu, mülakat yönetimi ve onboarding süreçlerini otomatikleştirin.',
                            tag: 'İŞE ALIM'
                        },
                        {
                            icon: Users,
                            title: 'Eğitim ve Gelişim (LMS)',
                            description: 'SAP SuccessFactors Learning ile çalışanlarınızın eğitim ihtiyaçlarını belirleyin, eğitim planları oluşturun ve gelişimi izleyin.',
                            tag: 'EĞİTİM'
                        },
                    ]}
                />
            </div>

            {/* ÇALIŞMA YAKLAŞIMI */}
            <ServiceSteps
                sectionTitle="Uygulama Sürecimiz"
                subtitle="İK dijitalleşme yolculuğunuz adım adım"
                variant="horizontal"
                accentColor="#6366f1"
                steps={[
                    { title: 'İK Süreç Analizi', description: 'Mevcut İK süreçlerinizi, organizasyon yapınızı ve yasal gereksinimlerinizi analiz ederiz.' },
                    { title: 'Çözüm Tasarımı', description: 'HCM ve/veya SuccessFactors modüllerini kurumunuzun ihtiyaçlarına göre yapılandırırız.' },
                    { title: 'Veri Göçü ve Test', description: 'Çalışan verilerini güvenli şekilde taşır, bordro doğrulaması ve UAT testleri yaparız.' },
                    { title: 'Devreye Alma', description: 'Kullanıcı eğitimleri, canlı geçiş ve hypercare desteğiyle sorunsuz devreye alma sağlarız.' },
                ]}
            />

            {/* FAYDALAR */}
            <ServiceBenefits
                sectionTitle="İK Dijitalleşmenin Avantajları"
                variant="pills"
                accentColor="#6366f1"
                items={[
                    'Merkezi ve doğru çalışan veri yönetimi',
                    'Bordro hesaplamada %100 yasal uyumluluk',
                    'Self-servis portal ile çalışan deneyimi iyileştirme',
                    'Veri tabanlı yetenek ve performans yönetimi',
                    'İK operasyonlarında %60\'a varan verimlilik artışı',
                ]}
            />

            {/* CTA */}
            <ServiceCta
                title="İK süreçlerinizi SAP ile dijitalleştirmeye hazır mısınız?"
                subtitle="Uzman İK danışmanlarımız, kurumunuzun insan kaynakları dönüşümünde yanınızda."
                buttonText="İK Danışmanlığı Talep Edin"
                buttonHref="/contact"
                features={['Ücretsiz İK Süreç Değerlendirmesi', 'SuccessFactors Demo', 'Bordro Uyumluluk Analizi']}
            />
        </main>
    );
}
