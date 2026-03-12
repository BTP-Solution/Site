'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceSteps from '@/components/services/ServiceSteps';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { Coins, BookOpen, Landmark, PiggyBank, LineChart, FileBarChart, ShieldCheck } from 'lucide-react';

export default function FinancialSolutionsPage() {
    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            {/* HERO */}
            <ServiceHero
                breadcrumbs={[
                    { label: 'Anasayfa', href: '/' },
                    { label: 'Hizmetlerimiz', href: '/services' },
                    { label: 'SAP Danışmanlık', href: '/services/sap-consulting' },
                    { label: 'Finansal Çözümler' },
                ]}
                title="SAP Finansal Çözümler"
                highlightedWord="Finansal"
                subtitle="FI/CO Modülleriyle Kurumsal Finansal Dönüşüm"
                description="SAP FI ve CO modüllerinin gücünü iş süreçlerinize entegre ederek finansal görünürlüğünüzü artırıyor, maliyet kontrolünüzü güçlendiriyor ve yasal uyumluluğunuzu güvence altına alıyoruz."
                ctaText="Finansal Dönüşümünüzü Başlatın"
                ctaHref="/contact"
                secondaryCtaText="Modüllerimizi Keşfedin"
                secondaryCtaHref="#moduller"
                icon={Coins}
                accentColor="#10b981"
                gradientFrom="#10b981"
                gradientTo="#3b82f6"
                stats={[
                    { value: '6 Modül', label: 'Uçtan Uca FI/CO Kapsamı' },
                    { value: '%99.9', label: 'Raporlama Doğruluğu' },
                    { value: '%35', label: 'Kapanış Süresinde Kısalma' },
                ]}
            />

            {/* GİRİŞ */}
            <ServiceIntro
                paragraphs={[
                    'Finansal süreçler bir kurumun kalbidir. Doğru muhasebe kayıtları, şeffaf maliyet kontrolü ve zamanında raporlama, stratejik kararların altyapısını oluşturur. Ancak karmaşık organizasyon yapılarında bu süreçlerin manuel veya birbirinden kopuk sistemlerle yönetilmesi, ciddi verimsizliklere ve uyumluluk risklerine yol açar.',
                    'SAP FI (Financial Accounting) ve CO (Controlling) modüllerini merkeze alarak, genel muhasebeden maliyet muhasebesine, sabit kıymet yönetiminden nakit akışı planlamasına kadar tüm finansal süreçlerinizi dijitalleştiriyor, otomatikleştiriyor ve uluslararası standartlara uyumlu hale getiriyoruz.',
                ]}
            />

            {/* HİZMET KARTLARI — 6 MODÜL */}
            <div id="moduller">
                <ServiceCards
                    sectionTitle="Modül Bazlı Hizmet Kapsamımız"
                    subtitle="SAP FI/CO ekosisteminde uçtan uca finansal dönüşüm"
                    variant="grid"
                    accentColor="#10b981"
                    cards={[
                        {
                            icon: BookOpen,
                            title: 'Finansal Muhasebe (FI)',
                            description: 'Genel muhasebe (GL), alacak hesapları (AR), borç hesapları (AP), banka muhasebesi ve otomatik mutabakat süreçlerinin yapılandırılması.',
                            tag: 'ANA MUHASEBE'
                        },
                        {
                            icon: LineChart,
                            title: 'Kontrol ve Maliyet Muhasebesi (CO)',
                            description: 'Maliyet merkezi muhasebesi, kâr merkezi analizi, dahili sipariş yönetimi, ürün maliyetlendirme ve kârlılık analizi (CO-PA).',
                            tag: 'MALİYET KONTROLÜ'
                        },
                        {
                            icon: Landmark,
                            title: 'Sabit Kıymet Yönetimi (FI-AA)',
                            description: 'Varlık ana verileri, amortisman hesaplamaları, varlık transferleri, hurdaya ayırma ve yatırım yönetimi süreçlerinin otomasyonu.',
                            tag: 'VARLIK YÖNETİMİ'
                        },
                        {
                            icon: PiggyBank,
                            title: 'Nakit ve Likidite Yönetimi (FI-TR)',
                            description: 'Nakit akışı tahminleme, banka iletişim yönetimi, likidite planlama, döviz pozisyonu takibi ve finansal risk yönetimi.',
                            tag: 'NAKİT YÖNETİMİ'
                        },
                        {
                            icon: FileBarChart,
                            title: 'Bütçe ve Yatırım Yönetimi (IM)',
                            description: 'Yatırım programları, bütçe planlama ve kontrolü, yatırım talep yönetimi ve çok yıllık yatırım planlaması.',
                            tag: 'BÜTÇE PLANLAMA'
                        },
                        {
                            icon: ShieldCheck,
                            title: 'Raporlama ve Yasal Uyumluluk',
                            description: 'IFRS ve VUK uyumlu mali tablolar, konsolidasyon raporları, denetim iz sürme (audit trail), e-beyanname entegrasyonu ve çoklu para birimi yönetimi.',
                            tag: 'UYUMLULUK'
                        },
                    ]}
                />
            </div>

            {/* ÇALIŞMA YAKLAŞIMI */}
            <ServiceSteps
                sectionTitle="Çalışma Yaklaşımımız"
                subtitle="Finansal dönüşüm projelerinde kanıtlanmış metodolojimiz"
                variant="horizontal"
                accentColor="#10b981"
                steps={[
                    { title: 'Finansal Analiz', description: 'Mevcut muhasebe yapınız, hesap planınız ve raporlama ihtiyaçlarınızı detaylı analiz ederiz.' },
                    { title: 'Süreç Tasarımı (Blueprint)', description: 'Yasal gereksinimler ve uluslararası standartlara uygun FI/CO süreç mimarisini kurgularız.' },
                    { title: 'Konfigürasyon ve Test', description: 'Hesap planı, maliyet merkezi hiyerarşisi, raporlama yapısını oluşturur ve UAT ile doğrularız.' },
                    { title: 'Geçiş ve Destek', description: 'Açılış bakiyesi aktarımı, paralel çalışma dönemi ve devreye alma sonrası sürekli destek sağlarız.' },
                ]}
            />

            {/* FAYDALAR */}
            <ServiceBenefits
                sectionTitle="Finansal Çözümlerimizin Avantajları"
                variant="pills"
                accentColor="#10b981"
                items={[
                    'Tek noktadan gerçek zamanlı finansal görünürlük',
                    'Ay sonu / yıl sonu kapanış sürelerinde %35\'e varan kısalma',
                    'IFRS ve VUK uyumlu çift standart raporlama',
                    'Manuel hataların ortadan kaldırılması ve süreç otomasyonu',
                    'Anlık maliyet kontrolü ve kârlılık takibi',
                ]}
            />

            {/* CTA */}
            <ServiceCta
                title="Finansal süreçlerinizi SAP ile dijitalleştirmeye hazır mısınız?"
                subtitle="Uzman FI/CO danışmanlarımız, kurumunuzun finansal altyapısını en yüksek verimlilikle yapılandırmak için yanınızda."
                buttonText="Finansal Danışmanlık Talep Edin"
                buttonHref="/contact"
                features={['Ücretsiz Ön Analiz', 'IFRS/VUK Uyumluluk Garantisi', 'Deneyimli FI/CO Ekibi']}
            />
        </main>
    );
}
