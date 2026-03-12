'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceSteps from '@/components/services/ServiceSteps';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { Cpu, BrainCircuit, Eye, MessageSquare, TrendingUp, ScanSearch } from 'lucide-react';

export default function AiMlPage() {
    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            {/* HERO */}
            <ServiceHero
                breadcrumbs={[
                    { label: 'Anasayfa', href: '/' },
                    { label: 'Hizmetlerimiz', href: '/services' },
                    { label: 'Veri ve Akıllı Çözümler', href: '/services/ai-data-solutions' },
                    { label: 'Yapay Zeka ve Makine Öğrenimi' },
                ]}
                title="Yapay Zeka ve Makine Öğrenimi"
                highlightedWord="Yapay Zeka"
                subtitle="Süreçlerinize Zeka Katın, Geleceği Tahmin Edin"
                description="SAP AI Core, SAP AI Launchpad ve açık kaynak ML frameworkleri ile kurumsal süreçlerinize yapay zeka ve makine öğrenimi yetenekleri kazandırıyoruz."
                ctaText="AI/ML Projesi Başlatın"
                ctaHref="/contact"
                secondaryCtaText="Kullanım Senaryolarımız"
                secondaryCtaHref="#senaryolar"
                icon={Cpu}
                accentColor="#818cf8"
                gradientFrom="#c084fc"
                gradientTo="#818cf8"
                stats={[
                    { value: 'SAP AI', label: 'Core & Launchpad' },
                    { value: 'ML', label: 'Tahminleme Modelleri' },
                    { value: 'NLP', label: 'Doğal Dil İşleme' },
                ]}
            />

            {/* GİRİŞ */}
            <ServiceIntro
                paragraphs={[
                    'Yapay zeka ve makine öğrenimi, kurumsal süreçlerde insanın tek başına yakalayamayacağı örüntüleri keşfeder, geleceğe yönelik öngörüler üretir ve karar alma süreçlerini hızlandırır. Talep tahmini, anomali tespiti, doküman işleme ve müşteri davranış analizi gibi alanlarda ölçülebilir iş değeri yaratır.',
                    'SAP BTP AI Services, SAP AI Core ve açık kaynak framework\'ler (TensorFlow, PyTorch, scikit-learn) ile kurumsal ihtiyaçlarınıza özel AI/ML modelleri geliştiriyor, eğitiyor ve üretim ortamına alıyoruz.',
                ]}
            />

            {/* KULLANIM SENARYOLARI */}
            <div id="senaryolar">
                <ServiceCards
                    sectionTitle="AI/ML Kullanım Senaryolarımız"
                    subtitle="Kurumsal süreçlere zeka kazandıran gerçek dünya çözümleri"
                    variant="grid"
                    accentColor="#818cf8"
                    cards={[
                        {
                            icon: TrendingUp,
                            title: 'Talep Tahmini ve Planlama',
                            description: 'Satış, üretim ve stok verilerinden yola çıkarak gelecek talebi tahmin edin. Sezonsellik, trendler ve anomalileri otomatik algılayın.',
                            tag: 'TAHMİNLEME'
                        },
                        {
                            icon: ScanSearch,
                            title: 'Anomali Tespiti ve Kalite Kontrol',
                            description: 'Üretim, finans ve operasyonel verilerde normalden sapmaları gerçek zamanlı tespit edin. Sahtecilik ve hata önleme modelleri.',
                            tag: 'ANOMALİ TESPİTİ'
                        },
                        {
                            icon: MessageSquare,
                            title: 'Doğal Dil İşleme (NLP)',
                            description: 'Müşteri geri bildirimi analizi, belge sınıflandırma, chatbot entegrasyonu ve metin madenciliği çözümleri.',
                            tag: 'NLP'
                        },
                        {
                            icon: Eye,
                            title: 'Görüntü İşleme ve OCR',
                            description: 'Fatura, irsaliye ve belge tanıma, kalite kontrol görüntü analizi ve SAP ile otomatik veri girişi.',
                            tag: 'GÖRÜNTÜ İŞLEME'
                        },
                        {
                            icon: BrainCircuit,
                            title: 'Öneri Sistemleri',
                            description: 'Müşteri davranış verilerinden kişiselleştirilmiş ürün/hizmet önerileri, cross-sell ve up-sell fırsatlarını otomatik tespit edin.',
                            tag: 'ÖNERİ SİSTEMLERİ'
                        },
                        {
                            icon: Cpu,
                            title: 'Süreç Optimizasyonu (ML)',
                            description: 'Tedarik zinciri, lojistik rota optimizasyonu, dinamik fiyatlandırma ve kaynak planlamasında ML tabanlı optimizasyon.',
                            tag: 'OPTİMİZASYON'
                        },
                    ]}
                />
            </div>

            {/* ÇALIŞMA YAKLAŞIMI */}
            <ServiceSteps
                sectionTitle="AI/ML Proje Sürecimiz"
                subtitle="Fikirden üretime, modelden değere"
                variant="horizontal"
                accentColor="#818cf8"
                steps={[
                    { title: 'Kullanım Senaryosu Keşfi', description: 'İş süreçlerinizi analiz eder, en yüksek iş değeri sunan AI/ML kullanım senaryolarını belirleriz.' },
                    { title: 'Veri Hazırlığı ve Model Geliştirme', description: 'Verileri toplar, temizler, öznitelikleri çıkarır ve uygun ML modellerini geliştiririz.' },
                    { title: 'PoC ve Doğrulama', description: 'Pilot proje ile modelin iş değerini kanıtlar, performans metriklerini raporlarız.' },
                    { title: 'Üretim ve Sürekli İyileştirme', description: 'Modeli üretim ortamına alır, SAP ile entegre eder ve sürekli öğrenme döngüsü kurarız.' },
                ]}
            />

            {/* FAYDALAR */}
            <ServiceBenefits
                sectionTitle="AI/ML Çözümlerinin Avantajları"
                variant="pills"
                accentColor="#818cf8"
                items={[
                    'İnsan gözünün kaçırdığı örüntüleri keşfetme',
                    'Geleceğe yönelik tahminlerle proaktif karar alma',
                    'Tekrarlayan bilişsel görevlerin otomatikleştirilmesi',
                    'Müşteri deneyiminde kişiselleştirme ve iyileştirme',
                    'Operasyonel süreçlerde ölçülebilir verimlilik artışı',
                ]}
            />

            {/* CTA */}
            <ServiceCta
                title="Süreçlerinize yapay zeka ile güç katmaya hazır mısınız?"
                subtitle="AI/ML uzmanlarımız, kurumunuz için en değerli kullanım senaryolarını belirleyip hayata geçirmek için yanınızda."
                buttonText="AI/ML Danışmanlığı Talep Edin"
                buttonHref="/contact"
                features={['Kullanım Senaryosu Atölyesi', 'PoC Çalışması', 'SAP AI Services Demo']}
            />
        </main>
    );
}
