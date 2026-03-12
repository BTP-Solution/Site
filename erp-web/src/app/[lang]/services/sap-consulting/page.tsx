'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceSteps from '@/components/services/ServiceSteps';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { Monitor, Briefcase, Search, Settings, Truck, RotateCw, Blocks, ShieldCheck, Zap, Coins } from 'lucide-react';

export default function SapConsultingPage() {
    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            <ServiceHero
                breadcrumbs={[
                    { label: 'Anasayfa', href: '/' },
                    { label: 'Hizmetlerimiz', href: '/services' },
                    { label: 'SAP Danışmanlık ve Uygulama Hizmetleri' },
                ]}
                title="SAP Danışmanlık ve Uygulama Hizmetleri"
                highlightedWord="Danışmanlık"
                subtitle="Sürdürülebilir ve Ölçeklenebilir SAP Çözümleri"
                description="İş süreçlerinize tam uyumlu, sürdürülebilir ve ölçeklenebilir SAP çözümleriyle dijital dönüşümünüze yön veriyoruz."
                ctaText="Projenizi Konuşalım"
                ctaHref="/contact"
                secondaryCtaText="Hizmetlerimizi İnceleyin"
                secondaryCtaHref="#hizmetler"
                icon={Monitor}
                accentColor="#3463ac"
                gradientFrom="#3463ac"
                gradientTo="#7e6fcf"
                stats={[
                    { value: '50+', label: 'Tamamlanan Proje' },
                    { value: '30+', label: 'SAP Uzmanı' },
                    { value: '%99', label: 'Müşteri Memnuniyeti' },
                ]}
            />

            <ServiceIntro
                paragraphs={[
                    'Başarılı bir SAP projesi, yalnızca teknik bir sistem kurulumundan ibaret değildir. Kurumun mevcut iş yapış şekillerinin analiz edilmesi, doğru süreç tasarımı, eksiksiz bir operasyonel geçiş ve devreye alma sonrasında sağlanan sürdürülebilir destekle bir bütündür.',
                    'Amacımız; kurumunuzun hedeflerini anlayarak, teknolojik altyapınızı iş süreçlerinizle en yüksek verimi sağlayacak şekilde entegre etmektir. Projelerinizi zamanında, bütçe dahilinde ve beklenen kalitede hayata geçiriyoruz.',
                ]}
            />

            <div id="hizmetler">
                <ServiceCards
                    sectionTitle="Hizmet Alanlarımız"
                    subtitle="SAP ekosisteminde uçtan uca uzmanlık desteği"
                    variant="grid"
                    accentColor="#3463ac"
                    cards={[
                        {
                            icon: Truck, 
                            title: 'Tedarik Zinciri, Üretim ve Lojistik', 
                            description: 'Planlamadan sevkiyata kadar tüm operasyonel süreçlerinizi SAP standartlarında uçtan uca optimize ediyoruz.', 
                            tag: 'Operasyonel Verimlilik',
                            href: '/services/sap-consulting/supply-chain',
                            linkText: 'Detayları Gör'
                        },
                        { 
                            icon: Search, 
                            title: 'Süreç Analizi ve Proje Yönetimi', 
                            description: 'İş akışlarınızı şeffaflaştırıyor, iyileştirme alanlarını belirliyor ve geçiş projelerinizi uluslararası metodolojilerle yönetiyoruz.', 
                            tag: 'Süreç Optimizasyonu',
                            href: '/services/sap-consulting/process-analysis',
                            linkText: 'Detayları Gör'
                        },
                        { 
                            icon: RotateCw, 
                            title: 'SAP Roll-out ve Destek Hizmetleri', 
                            description: 'Yeni lokasyon ve şirket katılımları için yaygınlaştırma projelerini yönetiyor, devreye alma sonrası kesintisiz destek sunuyoruz.', 
                            tag: 'Sürekli Gelişim',
                            href: '/services/sap-consulting/roll-out',
                            linkText: 'Detayları Gör'
                        },
                        { 
                            icon: Coins, 
                            title: 'Finansal Çözümler', 
                            description: 'SAP FI/CO modülleriyle finansal süreçlerinizi dijitalleştiriyor, maliyet kontrolünü güçlendiriyor ve raporlama altyapınızı optimize ediyoruz.', 
                            tag: 'Finansal Yönetim',
                            href: '/services/sap-consulting/financial-solutions',
                            linkText: 'Detayları Gör'
                        },
                    ]}
                />
            </div>

            <ServiceSteps
                sectionTitle="Çalışma Yaklaşımımız"
                subtitle="Her projede planlı ve standart hizmet anlayışı"
                variant="horizontal"
                accentColor="#3463ac"
                steps={[
                    { title: 'Analiz ve Keşif', description: 'Mevcut durumun (As-Is) fotoğrafını çeker, ihtiyaçlarınızı belirleriz.' },
                    { title: 'Tasarım (Blueprint)', description: 'SAP standartlarına en uygun, geleceğe dönük süreç mimarisini (To-Be) kurgularız.' },
                    { title: 'Uygulama ve Test', description: 'Tasarlanan yapıyı sisteme uyarlar, kullanıcı kabul testleriyle (UAT) kaliteyi güvence altına alırız.' },
                    { title: 'Devreye Alma ve Destek', description: 'Sorunsuz bir canlı kullanım geçişi (Go-Live) sağlar ve sürekli destek (Hypercare) ile yanınızda oluruz.' },
                ]}
            />

            <ServiceBenefits
                sectionTitle="Neden Bizimle Çalışmalısınız?"
                variant="pills"
                accentColor="#3463ac"
                items={[
                    'Sürece Özel Yaklaşım',
                    'Kanıtlanmış S/4HANA Uzmanlığı',
                    'Kontrollü Şeffaf Yönetim',
                    'Referanslı Proje Başarıları',
                    'Güçlü Entegrasyon Yeteneği',
                ]}
            />

            <ServiceCta
                title="SAP uygulama projeleriniz için doğru mimariyi birlikte kuralım."
                subtitle="Uzman hedeflerimizle tanışın ve projenizi sürdürülebilir bir şekilde yapılandıralım."
                buttonText="Uzmanlarımızla İletişime Geçin"
                buttonHref="/contact"
                features={['Sektörel Uzmanlık', 'Proje Odaklı Yaklaşım', 'Uluslararası Standartlar']}
            />
        </main>
    );
}
