'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceSteps from '@/components/services/ServiceSteps';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { FileText, Receipt, FileArchive, BookOpenCheck, ScrollText, ShieldCheck, ArrowLeftRight } from 'lucide-react';

export default function EDonusumPage() {
    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            {/* HERO */}
            <ServiceHero
                breadcrumbs={[
                    { label: 'Anasayfa', href: '/' },
                    { label: 'Hizmetlerimiz', href: '/services' },
                    { label: 'Entegrasyon Çözümleri' },
                    { label: 'E-Dönüşüm ve Dijital Arşivleme' },
                ]}
                title="E-Dönüşüm ve Dijital Arşivleme"
                highlightedWord="E-Dönüşüm"
                subtitle="SAP Entegrasyonlu Uçtan Uca Dijital Belge Yönetimi"
                description="e-Fatura, e-İrsaliye, e-Arşiv, e-Defter ve diğer tüm e-dönüşüm süreçlerinizi SAP sisteminizle entegre bir şekilde yönetiyor, yasal uyumluluğunuzu garantiliyoruz."
                ctaText="E-Dönüşüm Danışmanlığı Alın"
                ctaHref="/contact"
                secondaryCtaText="Çözümlerimizi İnceleyin"
                secondaryCtaHref="#cozumler"
                icon={FileText}
                accentColor="#f59e0b"
                gradientFrom="#f59e0b"
                gradientTo="#ef4444"
                stats={[
                    { value: '7+', label: 'E-Belge Türü Desteği' },
                    { value: '%100', label: 'GİB Uyumluluğu' },
                    { value: '7/24', label: 'Otomatik İşlem' },
                ]}
            />

            {/* GİRİŞ */}
            <ServiceIntro
                paragraphs={[
                    'Türkiye\'deki yasal düzenlemeler, işletmelerin fatura, irsaliye, defter ve arşivleme süreçlerini dijital ortama taşımasını zorunlu kılmaktadır. Ancak e-dönüşüm sadece bir mevzuat uyumu değil, aynı zamanda iş süreçlerini hızlandıran, maliyetleri düşüren ve hata riskini minimize eden stratejik bir fırsattır.',
                    'SAP ERP sisteminizle tam entegre çalışan e-dönüşüm çözümlerimiz sayesinde, tüm dijital belge süreçlerinizi tek bir noktadan yönetebilir, GİB (Gelir İdaresi Başkanlığı) uyumluluğunu otomatik olarak sağlayabilir ve kâğıtsız ofis hedefine ulaşabilirsiniz.',
                ]}
            />

            {/* ÇÖZÜM KARTLARI */}
            <div id="cozumler">
                <ServiceCards
                    sectionTitle="E-Dönüşüm Çözüm Kapsamımız"
                    subtitle="SAP entegrasyonlu, GİB uyumlu dijital belge yönetimi"
                    variant="grid"
                    accentColor="#f59e0b"
                    cards={[
                        {
                            icon: Receipt,
                            title: 'e-Fatura Entegrasyonu',
                            description: 'SAP FI/SD modülleriyle entegre e-fatura oluşturma, gönderme, teslim alma ve otomatik muhasebeleştirme. UBL-TR 1.2 ve GİB standartlarında tam uyumluluk.',
                            tag: 'e-FATURA'
                        },
                        {
                            icon: ArrowLeftRight,
                            title: 'e-İrsaliye Yönetimi',
                            description: 'Sevkiyat süreçleriyle senkronize e-irsaliye oluşturma ve takibi. SAP SD/WM/EWM modülleriyle entegre otomatik irsaliye akışları.',
                            tag: 'e-İRSALİYE'
                        },
                        {
                            icon: FileArchive,
                            title: 'e-Arşiv Fatura',
                            description: 'e-Fatura kapsamında olmayan müşterilerinize yönelik e-arşiv fatura oluşturma, PDF çıktı ve GİB\'e raporlama süreçleri.',
                            tag: 'e-ARŞİV'
                        },
                        {
                            icon: BookOpenCheck,
                            title: 'e-Defter ve Beratları',
                            description: 'Yevmiye defteri ve büyük defterin XBRL formatında oluşturulması, berat imzalama ve GİB\'e otomatik gönderim.',
                            tag: 'e-DEFTER'
                        },
                        {
                            icon: ScrollText,
                            title: 'e-Müstahsil ve e-Serbest Meslek',
                            description: 'Tarımsal alım süreçlerinde e-müstahsil makbuzu ve serbest meslek erbabına yönelik e-serbest meslek makbuzu entegrasyonu.',
                            tag: 'e-MÜSTAHSIL'
                        },
                        {
                            icon: ShieldCheck,
                            title: 'Dijital Arşivleme ve Uyumluluk',
                            description: 'Tüm e-belgelerin yasal saklama sürelerine uygun dijital arşivlenmesi, erişim kontrolü ve denetim izi (audit trail) yönetimi.',
                            tag: 'ARŞİVLEME'
                        },
                    ]}
                />
            </div>

            {/* ÇALIŞMA YAKLAŞIMI */}
            <ServiceSteps
                sectionTitle="Uygulama Sürecimiz"
                subtitle="SAP entegrasyonlu e-dönüşüm projeleri adım adım"
                variant="horizontal"
                accentColor="#f59e0b"
                steps={[
                    { title: 'Mevcut Durum Analizi', description: 'Fatura, irsaliye ve defter süreçlerinizi analiz eder, e-dönüşüm ihtiyaçlarınızı belirleriz.' },
                    { title: 'Entegratör Seçimi ve Tasarım', description: 'GİB onaylı entegratör ile SAP arasındaki veri akışını ve iş kurallarını tasarlarız.' },
                    { title: 'Konfigürasyon ve Test', description: 'SAP tarafında çıktı yapılandırması, UBL şema eşleme ve GİB test ortamında doğrulama yaparız.' },
                    { title: 'Devreye Alma ve İzleme', description: 'Canlı ortama geçiş, hata yönetimi, otomatik durum takibi ve raporlama altyapısını kurarız.' },
                ]}
            />

            {/* FAYDALAR */}
            <ServiceBenefits
                sectionTitle="E-Dönüşüm ile Elde Edeceğiniz Kazanımlar"
                variant="pills"
                accentColor="#f59e0b"
                items={[
                    'Kâğıt, posta ve depolama maliyetlerinde %80\'e varan tasarruf',
                    'Fatura işleme süresinde dakikalardan saniyelere geçiş',
                    'GİB mevzuatına %100 uyumluluk garantisi',
                    'SAP ile uçtan uca entegre, manuel müdahalesiz belge akışı',
                    'Dijital arşivleme ile anlık erişim ve denetim kolaylığı',
                ]}
            />

            {/* CTA */}
            <ServiceCta
                title="E-dönüşüm süreçlerinizi SAP ile entegre ederek dijitalleştirmeye hazır mısınız?"
                subtitle="Uzman ekibimiz GİB uyumlu, SAP entegrasyonlu e-dönüşüm projelerinizde yanınızda."
                buttonText="E-Dönüşüm Danışmanlığı Talep Edin"
                buttonHref="/contact"
                features={['Ücretsiz Ön Analiz', 'GİB Uyumluluk Garantisi', 'SAP Sertifikalı Ekip']}
            />
        </main>
    );
}
