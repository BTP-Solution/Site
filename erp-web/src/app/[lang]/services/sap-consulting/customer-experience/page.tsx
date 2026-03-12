'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceSteps from '@/components/services/ServiceSteps';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { ShoppingBag, Megaphone, HeadphonesIcon, Store, Target, UserCircle } from 'lucide-react';

export default function CustomerExperiencePage() {
    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            {/* HERO */}
            <ServiceHero
                breadcrumbs={[
                    { label: 'Anasayfa', href: '/' },
                    { label: 'Hizmetlerimiz', href: '/services' },
                    { label: 'SAP Danışmanlık', href: '/services/sap-consulting' },
                    { label: 'Müşteri Deneyimi ve Satış' },
                ]}
                title="Müşteri Deneyimi ve Satış"
                highlightedWord="Müşteri Deneyimi"
                subtitle="SAP CX ve CRM ile Müşteri Odaklı Dönüşüm"
                description="Pazarlama, satış, e-ticaret ve müşteri hizmetleri süreçlerinizi SAP Customer Experience çözümleriyle entegre ve kişiselleştirilmiş bir deneyime dönüştürüyoruz."
                ctaText="CX Çözümlerini Keşfedin"
                ctaHref="#cozumler"
                secondaryCtaText="Demo Talep Edin"
                secondaryCtaHref="/contact"
                icon={ShoppingBag}
                accentColor="#ec4899"
                gradientFrom="#ec4899"
                gradientTo="#f43f5e"
                stats={[
                    { value: 'CRM', label: 'Müşteri Yönetimi' },
                    { value: 'CX', label: '360° Müşteri Görünümü' },
                    { value: 'Omni', label: 'Kanal Bütünlüğü' },
                ]}
            />

            {/* GİRİŞ */}
            <ServiceIntro
                paragraphs={[
                    'Günümüzde müşteri beklentileri her zamankinden yüksek. Müşteriler, kişiselleştirilmiş deneyimler, hızlı yanıtlar ve tutarlı bir kanal deneyimi bekliyor. Bu beklentileri karşılayamayan işletmeler, müşteri sadakatini ve rekabet avantajını kaybetme riskiyle karşı karşıya.',
                    'SAP Customer Experience (CX) portföyü — SAP Sales Cloud, SAP Marketing Cloud, SAP Commerce Cloud ve SAP Service Cloud — ile müşteri yolculuğunun her aşamasını dijitalleştiriyor, 360 derece müşteri görünümü sağlıyor ve satış performansınızı artırıyoruz.',
                ]}
            />

            {/* ÇÖZÜM KARTLARI */}
            <div id="cozumler">
                <ServiceCards
                    sectionTitle="Müşteri Deneyimi Çözümlerimiz"
                    subtitle="Müşteri yolculuğunun her aşamasında değer yaratan çözümler"
                    variant="grid"
                    accentColor="#ec4899"
                    cards={[
                        {
                            icon: Target,
                            title: 'SAP Sales Cloud',
                            description: 'Satış ekibinize 360° müşteri görünümü, fırsat yönetimi, teklif oluşturma ve satış tahmini araçlarıyla güç kazandırın.',
                            tag: 'SATIŞ'
                        },
                        {
                            icon: Megaphone,
                            title: 'SAP Marketing Cloud',
                            description: 'Hedef kitle segmentasyonu, kampanya yönetimi, lead puanlama ve çok kanallı pazarlama otomasyonu ile doğru müşteriye ulaşın.',
                            tag: 'PAZARLAMA'
                        },
                        {
                            icon: Store,
                            title: 'SAP Commerce Cloud',
                            description: 'B2B ve B2C e-ticaret platformu kurulumu, ürün katalog yönetimi, sipariş yönetimi ve kişiselleştirilmiş alışveriş deneyimi.',
                            tag: 'E-TİCARET'
                        },
                        {
                            icon: HeadphonesIcon,
                            title: 'SAP Service Cloud',
                            description: 'Müşteri hizmetleri yönetimi, ticket sistemi, SLA takibi, self-servis portallar ve omni-kanal destek altyapısı.',
                            tag: 'MÜŞTERİ HİZMETLERİ'
                        },
                        {
                            icon: UserCircle,
                            title: 'SAP CRM ve 360° Müşteri Görünümü',
                            description: 'Tüm müşteri etkileşim verilerini tek bir platformda toplayarak satış, servis ve pazarlama ekiplerine bütünsel müşteri profili sunun.',
                            tag: 'CRM'
                        },
                        {
                            icon: ShoppingBag,
                            title: 'Müşteri Veri Platformu (CDP)',
                            description: 'Farklı kanallardan gelen müşteri verilerini birleştirin, gerçek zamanlı segmentasyon yapın ve kişiselleştirilmiş deneyimler sunun.',
                            tag: 'VERİ PLATFORMU'
                        },
                    ]}
                />
            </div>

            {/* ÇALIŞMA YAKLAŞIMI */}
            <ServiceSteps
                sectionTitle="CX Dönüşüm Sürecimiz"
                subtitle="Müşteri odaklı dijital dönüşüm adım adım"
                variant="horizontal"
                accentColor="#ec4899"
                steps={[
                    { title: 'Müşteri Yolculuğu Analizi', description: 'Mevcut müşteri deneyiminizi haritalandırır, iyileştirme fırsatlarını belirleriz.' },
                    { title: 'CX Strateji ve Tasarım', description: 'Satış, pazarlama ve servis süreçlerinizi SAP CX modülleriyle tasarlarız.' },
                    { title: 'Konfigürasyon ve Entegrasyon', description: 'CX çözümlerini SAP ERP ve üçüncü parti sistemlerle entegre ederiz.' },
                    { title: 'Devreye Alma ve Optimizasyon', description: 'Canlı geçiş sonrası kullanıcı eğitimi, KPI takibi ve sürekli optimizasyon sağlarız.' },
                ]}
            />

            {/* FAYDALAR */}
            <ServiceBenefits
                sectionTitle="CX Çözümlerinin Avantajları"
                variant="pills"
                accentColor="#ec4899"
                items={[
                    '360° müşteri görünümü ile kişiselleştirilmiş deneyim',
                    'Satış dönüşüm oranlarında ölçülebilir artış',
                    'Omni-kanal bütünlüğü ile tutarlı müşteri deneyimi',
                    'Veri odaklı pazarlama ile ROI optimizasyonu',
                    'Müşteri memnuniyeti ve sadakatinde artış',
                ]}
            />

            {/* CTA */}
            <ServiceCta
                title="Müşteri deneyiminizi SAP CX ile dönüştürmeye hazır mısınız?"
                subtitle="CX uzmanlarımız, müşteri odaklı dijital dönüşümünüz için yanınızda."
                buttonText="CX Danışmanlığı Talep Edin"
                buttonHref="/contact"
                features={['Müşteri Yolculuğu Analizi', 'CX Demo', 'Pilot Proje Desteği']}
            />
        </main>
    );
}
