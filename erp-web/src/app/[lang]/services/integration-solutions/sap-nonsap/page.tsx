'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceSteps from '@/components/services/ServiceSteps';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { ArrowLeftRight, Database, Factory, Users, ShoppingCart, Landmark, Workflow } from 'lucide-react';

export default function SapNonSapPage() {
    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            {/* HERO */}
            <ServiceHero
                breadcrumbs={[
                    { label: 'Anasayfa', href: '/' },
                    { label: 'Hizmetlerimiz', href: '/services' },
                    { label: 'Entegrasyon Çözümleri', href: '/services/integration-solutions' },
                    { label: 'SAP ve Non-SAP Sistem Entegrasyonları' },
                ]}
                title="SAP ve Non-SAP Sistem Entegrasyonları"
                highlightedWord="Non-SAP"
                subtitle="Farklı Platformları Tek Bir Ekosistemde Buluşturun"
                description="SAP ERP sisteminizi CRM, HR, MES, WMS, e-ticaret ve üçüncü parti yazılımlarla entegre ederek kesintisiz veri akışı ve süreç bütünlüğü sağlıyoruz."
                ctaText="Entegrasyon İhtiyaçlarınızı Değerlendirelim"
                ctaHref="/contact"
                secondaryCtaText="Senaryolarımızı İnceleyin"
                secondaryCtaHref="#senaryolar"
                icon={ArrowLeftRight}
                accentColor="#f59e0b"
                gradientFrom="#ef4444"
                gradientTo="#f59e0b"
                stats={[
                    { value: '30+', label: 'Entegrasyon Senaryosu' },
                    { value: 'SAP ↔ Non-SAP', label: 'Çift Yönlü Akış' },
                    { value: '%99.9', label: 'Veri Tutarlılığı' },
                ]}
            />

            {/* GİRİŞ */}
            <ServiceIntro
                paragraphs={[
                    'Modern kurumsal yapılarda SAP, tek başına çalışan bir sistem değildir. CRM, İK yönetimi, üretim yürütme (MES), depo yönetim sistemleri (WMS), e-ticaret platformları ve çeşitli üçüncü parti yazılımlarla birlikte bir ekosistem oluşturur. Bu ekosistemdeki kopukluklar, veri tutarsızlıklarına, süreç gecikmelerine ve operasyonel verimsizliklere yol açar.',
                    'SAP PI/PO, CPI, IDoc, BAPI, RFC ve modern API teknolojilerini kullanarak SAP sisteminizi tüm dış platformlarla güvenli, gerçek zamanlı ve ölçeklenebilir şekilde entegre ediyoruz.',
                ]}
            />

            {/* ENTEGRASYON SENARYOLARI */}
            <div id="senaryolar">
                <ServiceCards
                    sectionTitle="Entegrasyon Senaryolarımız"
                    subtitle="SAP ile dış sistemler arasında uçtan uca veri köprüsü"
                    variant="grid"
                    accentColor="#f59e0b"
                    cards={[
                        {
                            icon: Users,
                            title: 'CRM ve Müşteri Yönetimi Entegrasyonu',
                            description: 'Salesforce, Microsoft Dynamics, HubSpot ve diğer CRM sistemleriyle müşteri verisi, sipariş ve teklif akışı entegrasyonu.',
                            tag: 'CRM'
                        },
                        {
                            icon: Factory,
                            title: 'MES ve Üretim Sistemi Entegrasyonu',
                            description: 'Üretim yürütme sistemleri (MES) ile SAP PP/QM modülleri arasında iş emri, üretim geri bildirimi ve kalite verisi aktarımı.',
                            tag: 'ÜRETİM'
                        },
                        {
                            icon: Database,
                            title: 'WMS ve Depo Yönetimi Entegrasyonu',
                            description: 'Harici depo yönetim sistemleriyle SAP WM/EWM arasında stok hareketi, mal kabul ve sevkiyat verisi senkronizasyonu.',
                            tag: 'DEPO'
                        },
                        {
                            icon: ShoppingCart,
                            title: 'E-Ticaret Platform Entegrasyonu',
                            description: 'SAP SD modülü ile e-ticaret platformları arasında sipariş, stok, fiyat ve müşteri verisi entegrasyonu.',
                            tag: 'E-TİCARET'
                        },
                        {
                            icon: Landmark,
                            title: 'Banka ve Finans Entegrasyonu',
                            description: 'SAP FI modülü ile banka sistemleri arasında ödeme talimatı, hesap ekstresi, DBS ve otomatik mutabakat entegrasyonu.',
                            tag: 'FİNANS'
                        },
                        {
                            icon: Workflow,
                            title: 'HR ve İK Sistemi Entegrasyonu',
                            description: 'SAP HCM/SuccessFactors ile bordro, özlük, izin, performans ve işe alım sistemleri arasında veri entegrasyonu.',
                            tag: 'İNSAN KAYNAKLARI'
                        },
                    ]}
                />
            </div>

            {/* ÇALIŞMA YAKLAŞIMI */}
            <ServiceSteps
                sectionTitle="Entegrasyon Yol Haritamız"
                subtitle="Karmaşık sistem bağlantılarını adım adım hayata geçiriyoruz"
                variant="horizontal"
                accentColor="#f59e0b"
                steps={[
                    { title: 'Sistem Haritalama', description: 'Mevcut sistemlerinizi, veri modellerini ve entegrasyon noktalarını haritalandırırız.' },
                    { title: 'Arayüz Tasarımı', description: 'Veri eşleme, dönüşüm kuralları, hata yönetimi ve iletişim protokollerini tasarlarız.' },
                    { title: 'Geliştirme ve Test', description: 'Entegrasyon akışlarını kurar, birim ve uçtan uca testlerle veri tutarlılığını doğrularız.' },
                    { title: 'Canlıya Geçiş ve İzleme', description: 'Paralel çalışma dönemi, canlı geçiş, 7/24 izleme ve sürekli optimizasyon desteği sağlarız.' },
                ]}
            />

            {/* FAYDALAR */}
            <ServiceBenefits
                sectionTitle="Entegrasyonun Sağladığı Kazanımlar"
                variant="pills"
                accentColor="#f59e0b"
                items={[
                    'Tüm sistemlerde tek doğru veri kaynağı (Single Source of Truth)',
                    'Süreçler arası anlık veri akışı ve senkronizasyon',
                    'Manuel veri aktarımının ve hata riskinin ortadan kaldırılması',
                    'Platformdan bağımsız, ölçeklenebilir entegrasyon altyapısı',
                    'Merkezi izleme ile entegrasyon sağlığının sürekli denetimi',
                ]}
            />

            {/* CTA */}
            <ServiceCta
                title="SAP sisteminizi tüm platformlarla entegre etmeye hazır mısınız?"
                subtitle="Deneyimli entegrasyon ekibimiz, kurumunuzdaki tüm sistemleri tek bir ekosistemde buluşturmak için yanınızda."
                buttonText="Entegrasyon Danışmanlığı Talep Edin"
                buttonHref="/contact"
                features={['Sistem Haritalama', 'PoC Çalışması', 'Çift Yönlü Entegrasyon']}
            />
        </main>
    );
}
