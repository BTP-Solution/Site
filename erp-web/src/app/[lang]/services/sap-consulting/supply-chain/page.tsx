'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { Truck, ShoppingCart, BarChart2, Settings, Warehouse, Box, ClipboardCheck } from 'lucide-react';

export default function SupplyChainPage() {
    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            {/* HERO */}
            <ServiceHero
                breadcrumbs={[
                    { label: 'Anasayfa', href: '/' },
                    { label: 'Hizmetlerimiz', href: '/services' },
                    { label: 'SAP Danışmanlık', href: '/services/sap-consulting' },
                    { label: 'Tedarik Zinciri, Üretim ve Lojistik' },
                ]}
                title="Tedarik Zinciri, Üretim ve Lojistik Çözümleri"
                highlightedWord="Lojistik"
                subtitle="Planlamadan sevkiyata, üretimden depo yönetimine kadar uçtan uca SAP operasyon danışmanlığı."
                description="SAP MM, SD, PP, WM/EWM modüllerini iş modelinize entegre ederek stok maliyetlerini optimize ediyor, üretim planlamanızı hatasız yapıyor ve müşteri teslimatlarınızı zamanında gerçekleştirmenizi sağlıyoruz."
                ctaText="Operasyonel Verimliliğinizi Artırın"
                ctaHref="/contact"
                icon={Truck}
                accentColor="#34d399"
                gradientFrom="#34d399"
                gradientTo="#06b6d4"
                stats={[
                    { value: '%40', label: 'Stok Maliyetinde Düşüş' },
                    { value: '%95', label: 'Zamanında Teslimat Oranı' },
                    { value: '5 Modül', label: 'Uçtan Uca Entegrasyon' },
                ]}
            />

            {/* GİRİŞ */}
            <ServiceIntro
                paragraphs={[
                    'Modern iş dünyasında rekabet avantajı sağlamanın yolu, tedarik zinciri süreçlerinin uçtan uca, kesintisiz ve izlenebilir olmasından geçer. Tedarikçiden son tüketiciye kadar uzanan bu yolculukta oluşabilecek her kopukluk, doğrudan zaman ve maliyet kaybı anlamına gelir.',
                    'SAP\'nin güçlü lojistik ve üretim modüllerini (MM, SD, PP, WM, EWM) iş modelinize entegre ederek; satınalmadan üretime, depolamadan sevkiyata kadar tüm operasyonel döngünüzü dijitalleştiriyor ve ölçülebilir verimlilik kazanımları elde etmenizi sağlıyoruz.',
                ]}
            />

            {/* HİZMET KARTLARI — 6 ADET, MODÜL BAZLI */}
            <ServiceCards
                sectionTitle="Modül Bazlı Hizmet Kapsamımız"
                subtitle="Her bir SAP modülünde uzmanlaşmış ekiplerle uçtan uca operasyonel dönüşüm"
                variant="grid"
                accentColor="#34d399"
                cards={[
                    {
                        icon: ShoppingCart,
                        title: 'Satınalma ve Malzeme Yönetimi (MM)',
                        description: 'Tedarikçi değerlendirme, satın alma talepleri, otomatik sipariş onay süreçleri, fatura doğrulama ve optimum stok seviyesi yönetimi.',
                        tag: 'TEDARİK OPTİMİZASYONU'
                    },
                    {
                        icon: BarChart2,
                        title: 'Satış ve Dağıtım (SD)',
                        description: 'Müşteriye özel fiyatlandırma, sipariş yönetimi, teslimat planlaması, sevkiyat koordinasyonu ve faturalama akışlarının yapılandırılması.',
                        tag: 'MÜŞTERİ MEMNUNİYETİ'
                    },
                    {
                        icon: Settings,
                        title: 'Üretim Planlama ve Kontrol (PP)',
                        description: 'Talep bazlı üretim planlaması, MRP çalıştırma, kapasite yönetimi, iş emirleri koordinasyonu ve üretim maliyeti takibi.',
                        tag: 'ÜRETİM VERİMLİLİĞİ'
                    },
                    {
                        icon: Warehouse,
                        title: 'Depo Yönetimi (WM)',
                        description: 'Depo yapılandırma, raf ve bölge bazlı stok takibi, mal kabul, transfer emirleri ve stok sayım süreçlerinin yönetimi.',
                        tag: 'STOK KONTROLÜ'
                    },
                    {
                        icon: Box,
                        title: 'Genişletilmiş Depo Yönetimi (EWM)',
                        description: 'El terminali (RF) entegrasyonu, dalga bazlı sipariş toplama, barkodlu izlenebilirlik, cross-docking ve ileri seviye depo otomasyonu.',
                        tag: 'LOJİSTİK HIZ'
                    },
                    {
                        icon: ClipboardCheck,
                        title: 'Kalite Yönetimi (QM)',
                        description: 'Mal kabul ve üretim sürecinde kalite muayeneleri, uygunsuzluk yönetimi, sertifika takibi ve tedarikçi kalite denetim entegrasyonu.',
                        tag: 'SIFIR HATA'
                    },
                ]}
            />

            {/* FAYDALAR */}
            <ServiceBenefits
                sectionTitle="Sağlanan Faydalar"
                variant="pills"
                accentColor="#34d399"
                items={[
                    'Stok fazlası ve yok satma risklerinin minimuma indirilmesi',
                    'Birimler arası (Satınalma, Üretim, Satış, Depo) anlık veri entegrasyonu',
                    'Üretim ve sipariş süreçlerinde uçtan uca görünürlük ve izlenebilirlik',
                    'Manuel iş yükünün azaltılması ve süreç standardizasyonu',
                ]}
            />

            {/* CTA */}
            <ServiceCta
                title="Tedarik zinciri darboğazlarını aşmak ve operasyonel süreçlerinizi hızlandırmak için hazır mısınız?"
                subtitle="Uzman ekibimiz SAP S/4HANA tabanlı modern lojistik ve üretim çözümleri için size rehberlik etsin."
                buttonText="Süreç Danışmanlığı Talep Edin"
                buttonHref="/contact"
                features={['Süreç Check-Up', 'Pilot Uygulama Fırsatı', 'Global Best-Practice Metodolojisi']}
            />
        </main>
    );
}
