'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceSteps from '@/components/services/ServiceSteps';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { Workflow, GitBranch, Bell, FileCheck2, BarChart3, Zap, Bot } from 'lucide-react';

export default function WorkflowAutomationPage() {
    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            {/* HERO */}
            <ServiceHero
                breadcrumbs={[
                    { label: 'Anasayfa', href: '/' },
                    { label: 'Hizmetlerimiz', href: '/services' },
                    { label: 'Teknoloji ve Yazılım Geliştirme', href: '/services/tech-development' },
                    { label: 'İş Akışı ve Kurumsal Süreç Otomasyonu' },
                ]}
                title="İş Akışı ve Kurumsal Süreç Otomasyonu"
                highlightedWord="Otomasyonu"
                subtitle="Manuel Süreçlerden Akıllı İş Akışlarına Dönüşüm"
                description="SAP ekosistemi üzerinde iş süreçlerinizi otomatikleştiriyor, onay mekanizmalarını dijitalleştiriyor ve kurumsal verimliliğinizi ölçülebilir şekilde artırıyoruz."
                ctaText="Otomasyon Çözümlerini Keşfedin"
                ctaHref="#cozumler"
                secondaryCtaText="Demo Talep Edin"
                secondaryCtaHref="/contact"
                icon={Workflow}
                accentColor="#f472b6"
                gradientFrom="#f472b6"
                gradientTo="#a78bfa"
                stats={[
                    { value: '%70', label: 'Manuel İş Yükü Azalması' },
                    { value: '7/24', label: 'Kesintisiz Süreç İşletimi' },
                    { value: '%90', label: 'Onay Süresi Kısalması' },
                ]}
            />

            {/* GİRİŞ */}
            <ServiceIntro
                paragraphs={[
                    'Kurumsal süreçlerin büyük bölümü hâlâ e-posta trafiğiyle, manuel onaylarla veya kâğıt tabanlı iş akışlarıyla yönetilmektedir. Bu durum hem zaman kaybına hem de hata ve uyumsuzluk risklerine neden olur. İş akışı otomasyonu, bu süreçleri dijitalleştirerek daha hızlı, izlenebilir ve denetlenebilir hale getirir.',
                    'SAP Workflow, SAP Build Process Automation, BTP iFlow ve RPA araçlarıyla kurumunuzdaki tekrarlayan süreçleri otomatikleştiriyor, onay hiyerarşilerini dijitalleştiriyor ve iş kurallarını merkezi bir platformdan yönetmenizi sağlıyoruz.',
                ]}
            />

            {/* ÇÖZÜM KARTLARI */}
            <div id="cozumler">
                <ServiceCards
                    sectionTitle="Otomasyon Çözüm Alanlarımız"
                    subtitle="İş akışlarınızı uçtan uca dijitalleştiren kapsamlı çözüm portföyü"
                    variant="grid"
                    accentColor="#f472b6"
                    cards={[
                        {
                            icon: GitBranch,
                            title: 'SAP Workflow ve Onay Mekanizmaları',
                            description: 'Satınalma talepleri, masraf onayları, sözleşme yönetimi ve personel süreçleri için çok aşamalı, koşullu onay iş akışları tasarlıyoruz.',
                            tag: 'ONAY YÖNETİMİ'
                        },
                        {
                            icon: Bot,
                            title: 'SAP Build Process Automation',
                            description: 'Low-code / no-code platformuyla iş süreçlerini hızlıca otomatikleştirin. Görsel tasarım araçlarıyla teknik bilgi gerektirmeden süreç oluşturun.',
                            tag: 'LOW-CODE'
                        },
                        {
                            icon: Zap,
                            title: 'RPA ve Robotik Süreç Otomasyonu',
                            description: 'Tekrarlayan veri giriş, raporlama ve sistem arası aktarım işlemlerini yazılım robotlarıyla otomatikleştirin, insan hatasını ortadan kaldırın.',
                            tag: 'ROBOTİK OTOMASYON'
                        },
                        {
                            icon: Bell,
                            title: 'Bildirim ve Eskalasyon Yönetimi',
                            description: 'Geciken onaylar, SLA ihlalleri ve kritik eşik aşımları için otomatik bildirim, hatırlatma ve eskalasyon kuralları tanımlayın.',
                            tag: 'BİLDİRİM SİSTEMİ'
                        },
                        {
                            icon: FileCheck2,
                            title: 'Belge ve Döküman Otomasyonu',
                            description: 'Fatura işleme, sözleşme oluşturma, rapor dağıtımı ve arşivleme süreçlerini otomatikleştirerek kâğıtsız ofis hedefine ulaşın.',
                            tag: 'BELGE YÖNETİMİ'
                        },
                        {
                            icon: BarChart3,
                            title: 'Süreç İzleme ve Analitik',
                            description: 'Otomatik süreçlerin performansını gerçek zamanlı takip edin. Darboğazları tespit edin, SLA uyumunu ölçün ve sürekli iyileştirme yapın.',
                            tag: 'ANALİTİK'
                        },
                    ]}
                />
            </div>

            {/* ÇALIŞMA YAKLAŞIMI */}
            <ServiceSteps
                sectionTitle="Otomasyon Yol Haritamız"
                subtitle="Süreç keşfinden canlı kullanıma, adım adım otomasyon"
                variant="horizontal"
                accentColor="#f472b6"
                steps={[
                    { title: 'Süreç Keşfi', description: 'Mevcut iş akışlarınızı analiz eder, otomasyon potansiyeli yüksek süreçleri belirleriz.' },
                    { title: 'Tasarım ve Modelleme', description: 'BPMN standartlarında iş akışı diyagramları oluşturur, onay kurallarını ve koşullarını tanımlarız.' },
                    { title: 'Geliştirme ve Entegrasyon', description: 'SAP Workflow, BPA veya RPA araçlarıyla akışları geliştirip mevcut sistemlerinize entegre ederiz.' },
                    { title: 'Devreye Alma ve İzleme', description: 'Canlıya alınan süreçleri dashboard\'larla izler, KPI\'lar üzerinden sürekli iyileştirme yaparız.' },
                ]}
            />

            {/* FAYDALAR */}
            <ServiceBenefits
                sectionTitle="Otomasyon ile Elde Edeceğiniz Kazanımlar"
                variant="pills"
                accentColor="#f472b6"
                items={[
                    'Manuel iş yükünde %70\'e varan azalma',
                    'Onay süreçlerinde dakikalar yerine saniyeler',
                    'Uçtan uca süreç izlenebilirliği ve denetim izi',
                    'İnsan hatasının minimize edilmesi',
                    'Çalışan memnuniyeti ve operasyonel verimlilik artışı',
                ]}
            />

            {/* CTA */}
            <ServiceCta
                title="Tekrarlayan süreçlerinizi otomatikleştirmeye hazır mısınız?"
                subtitle="Uzman ekibimiz, kurumunuza özel otomasyon çözümleri tasarlayarak dijital verimlilik dönüşümünüzü başlatsın."
                buttonText="Otomasyon Danışmanlığı Talep Edin"
                buttonHref="/contact"
                features={['Ücretsiz Süreç Değerlendirmesi', 'PoC Çalışması', 'Hızlı Devreye Alma']}
            />
        </main>
    );
}
