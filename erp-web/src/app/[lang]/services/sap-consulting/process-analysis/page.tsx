'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { Search, Map, LayoutList, Target, UserCheck } from 'lucide-react';

export default function ProcessAnalysisPage() {
    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            <ServiceHero
                breadcrumbs={[
                    { label: 'Anasayfa', href: '/' },
                    { label: 'Hizmetlerimiz', href: '/services' },
                    { label: 'SAP Danışmanlık', href: '/services/sap-consulting' },
                    { label: 'Süreç Analizi ve Proje Yönetimi' },
                ]}
                title="Süreç Analizi ve Proje Yönetimi"
                highlightedWord="Yönetimi"
                subtitle="Dönüşüm projelerinizde sıfır risk, maksimum denetim."
                description="Karmaşık iş süreçlerinizi haritalandırıyor, darboğazları tespit ediyor ve SAP projelerinizi uluslararası standartlarda, kontrollü bir şekilde yönetiyoruz."
                ctaText="Projenizi Birlikte Planlayalım"
                ctaHref="/contact"
                icon={Search}
                accentColor="#3463ac"
                gradientFrom="#3463ac"
                gradientTo="#7e6fcf"
                stats={[
                    { value: '%100', label: 'Şeffaf Proje Yönetimi' },
                    { value: 'BPR', label: 'Süreç İyileştirme Çıktısı' },
                    { value: 'Agile', label: 'Çevik Proje Teslimatı' },
                ]}
            />

            <ServiceIntro
                paragraphs={[
                    'Bir teknoloji yatırımının başarıya ulaşması, altındaki süreç tasarımının kalitesine bağlıdır. Mevcut işleyişteki hatalar veya eksiklikler yeni sisteme taşındığında, beklenen verim elde edilemez.',
                    'Bu nedenle projelerimize her zaman derinlemesine bir süreç analizi ile başlıyoruz. İhtiyaçlarınızı netleştiriyor, iyileştirme (BPR - Business Process Reengineering) fırsatlarını değerlendiriyor ve SAP Activate ile Çevik (Agile) metodolojileri harmanlayarak projelerinizi risklerden arındırıyoruz.',
                ]}
            />

            <ServiceCards
                sectionTitle="Hizmet Kapsamı ve Yaklaşımımız"
                subtitle="Projelerinizin her aşamasını kontrol atında tutuyoruz"
                variant="grid"
                accentColor="#3463ac"
                cards={[
                    {
                        icon: Map,
                        title: 'Mevcut Durum (As-Is) Analizi',
                        description: 'Süreç görünürlük çalışmaları ile departmanlar arası mevcut işleyişin analiz edilmesi ve uçtan uca dokümantasyonu.',
                        tag: 'Süreç Haritası'
                    },
                    {
                        icon: LayoutList,
                        title: 'Boşluk (Gap) Analizi',
                        description: 'Kurumun hedeflenen / varılması istenen yapısı (To-Be) ile mevcut işleyişi arasındaki farkların uluslararası GAP standartlarında tespiti.',
                        tag: 'Gelişim Alanları'
                    },
                    {
                        icon: Target,
                        title: 'Yol Haritası Oluşturma',
                        description: 'Kaynak, zaman ve bütçe kısıtlarını dikkate alarak gerçekleştirilen, riskleri bertaraf edecek gerçekçi ve sürdürülebilir bir proje planlaması.',
                        tag: 'Strateji'
                    },
                    {
                        icon: UserCheck,
                        title: 'Proje Yönetimi ve Koordinasyon',
                        description: 'Tüm aşamalarda kapsam takibi, iç / dış ekip koordinasyonu, kalite yönetimi ve kapsam kaymalarına (Scope creep) karşı risk yönetimi.',
                        tag: 'Koordinasyon'
                    },
                ]}
            />

            <ServiceBenefits
                sectionTitle="Sağlanan Faydalar"
                variant="pills"
                accentColor="#3463ac"
                items={[
                    'Kapsam kayması (Scope creep) riskinin önlenmesi',
                    'Bütçe ve zaman çizelgesine tam uyum',
                    'Ekip içi net görev ve sorumluluk paylaşımı',
                    'Daha hızlı karar alma ve şeffaf raporlama mekanizması',
                ]}
            />

            <ServiceCta
                title="Projelerinizi sürprizlere yer bırakmadan, zamanında ve bütçesinde tamamlayalım."
                subtitle="İhtiyaç analizinde nerede olduğunuzu belirlemek için danışmanlarımızla hemen bağlantıya geçin."
                buttonText="Ücretsiz Ön Değerlendirme Talep Edin"
                buttonHref="/contact"
                features={['Global Proje Disiplini', 'Tam Kapsam Görünürlüğü', 'SAP Sertifikalı Uzmanlık']}
            />
        </main>
    );
}
