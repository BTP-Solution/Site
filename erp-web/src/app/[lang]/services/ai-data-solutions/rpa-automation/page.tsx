'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceSteps from '@/components/services/ServiceSteps';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { Workflow, Bot, FileInput, Mail, ClipboardCheck, Repeat } from 'lucide-react';

export default function RpaAutomationPage() {
    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            {/* HERO */}
            <ServiceHero
                breadcrumbs={[
                    { label: 'Anasayfa', href: '/' },
                    { label: 'Hizmetlerimiz', href: '/services' },
                    { label: 'Veri ve Akıllı Çözümler', href: '/services/ai-data-solutions' },
                    { label: 'Akıllı İş Akışı ve RPA' },
                ]}
                title="Akıllı İş Akışı ve Süreç Otomasyonu"
                highlightedWord="Süreç Otomasyonu"
                subtitle="RPA ve Akıllı Otomasyon ile İnsan Hatasını Ortadan Kaldırın"
                description="SAP iRPA, SAP Build Process Automation ve endüstriyel RPA araçlarıyla tekrarlayan görevleri otomatikleştiriyor, çalışanlarınızı katma değerli işlere yönlendiriyoruz."
                ctaText="Otomasyon Projenizi Başlatın"
                ctaHref="/contact"
                secondaryCtaText="Otomasyon Senaryoları"
                secondaryCtaHref="#senaryolar"
                icon={Workflow}
                accentColor="#818cf8"
                gradientFrom="#f472b6"
                gradientTo="#818cf8"
                stats={[
                    { value: 'iRPA', label: 'SAP Akıllı RPA' },
                    { value: '%80', label: 'Zaman Tasarrufu' },
                    { value: '7/24', label: 'Kesintisiz Çalışma' },
                ]}
            />

            {/* GİRİŞ */}
            <ServiceIntro
                paragraphs={[
                    'Kurumsal süreçlerde tekrarlayan, kural tabanlı ve zaman alan görevler hem verimliliği düşürür hem de insan hatasına zemin hazırlar. Robot Süreç Otomasyonu (RPA) ve akıllı iş akışı yönetimi, bu görevleri yazılım robotlarına devrederek 7/24 hatasız çalışma sağlar.',
                    'SAP iRPA (Intelligent Robotic Process Automation), SAP Build Process Automation ve UiPath gibi endüstriyel araçlarla fatura işleme, veri girişi, onay süreçleri ve raporlama gibi tekrarlayan görevleri otomatikleştiriyor, AI destekli akıllı otomasyon senaryoları kuruyoruz.',
                ]}
            />

            {/* OTOMASYON SENARYOLARI */}
            <div id="senaryolar">
                <ServiceCards
                    sectionTitle="Otomasyon Senaryolarımız"
                    subtitle="Tekrarlayan görevlerden çalışanlarınızı özgürleştirin"
                    variant="grid"
                    accentColor="#818cf8"
                    cards={[
                        {
                            icon: FileInput,
                            title: 'Fatura ve Belge İşleme Otomasyonu',
                            description: 'Gelen faturaların OCR ile okunması, SAP\'ye otomatik girişi, eşleştirme ve onay süreçlerinin robotlarla yönetimi.',
                            tag: 'FATURA İŞLEME'
                        },
                        {
                            icon: Bot,
                            title: 'Veri Girişi ve Sistem Güncelleme',
                            description: 'Farklı sistemler arasında veri aktarımı, master data güncelleme, toplu veri yükleme ve form doldurma otomasyonu.',
                            tag: 'VERİ GİRİŞİ'
                        },
                        {
                            icon: ClipboardCheck,
                            title: 'Onay İş Akışı Otomasyonu',
                            description: 'Satın alma talebi, masraf onayı, izin talepleri gibi çok aşamalı onay süreçlerini SAP Build ile otomatikleştirin.',
                            tag: 'ONAY AKIŞLARI'
                        },
                        {
                            icon: Mail,
                            title: 'E-Posta ve Bildirim Otomasyonu',
                            description: 'E-posta eki işleme, otomatik yanıtlama, bildirim tetikleme ve SLA uyarı mekanizmalarını robotlara devredin.',
                            tag: 'E-POSTA'
                        },
                        {
                            icon: Repeat,
                            title: 'Periyodik Raporlama Otomasyonu',
                            description: 'Günlük, haftalık ve aylık raporların otomatik oluşturulması, formatlanması ve ilgili kişilere dağıtılması.',
                            tag: 'RAPORLAMA'
                        },
                        {
                            icon: Workflow,
                            title: 'Akıllı İş Akışı Tasarımı',
                            description: 'SAP Build Process Automation ile koşullu dallanma, paralel onay, eskalasyon ve SLA yönetimli akıllı iş akışları.',
                            tag: 'İŞ AKIŞI'
                        },
                    ]}
                />
            </div>

            {/* ÇALIŞMA YAKLAŞIMI */}
            <ServiceSteps
                sectionTitle="Otomasyon Yol Haritamız"
                subtitle="Keşiften üretime, bir robottan kültüre"
                variant="horizontal"
                accentColor="#818cf8"
                steps={[
                    { title: 'Süreç Keşfi ve Analiz', description: 'Tekrarlayan süreçlerinizi haritalandırır, otomasyon potansiyelini ve ROI\'yi değerlendiririz.' },
                    { title: 'Robot / İş Akışı Tasarımı', description: 'Bot senaryolarını tasarlar, iş akışı kurallarını belirler ve exception handling mekanizmalarını kurgularız.' },
                    { title: 'Geliştirme ve Test', description: 'Robotları geliştirir, test ortamında doğrular ve edge case senaryolarını test ederiz.' },
                    { title: 'Devreye Alma ve İzleme', description: 'Robotları üretime alır, merkezi orkestrasyon, performans izleme ve sürekli iyileştirme sağlarız.' },
                ]}
            />

            {/* FAYDALAR */}
            <ServiceBenefits
                sectionTitle="RPA ve Otomasyonun Avantajları"
                variant="pills"
                accentColor="#818cf8"
                items={[
                    'Tekrarlayan görevlerde %80\'e varan zaman tasarrufu',
                    'İnsan hatasının neredeyse sıfıra indirilmesi',
                    'Robotlarla 7/24 kesintisiz çalışma kapasitesi',
                    'Çalışanların katma değerli işlere yönlendirilmesi',
                    'Hızlı ROI — genellikle 3-6 ay içinde geri dönüş',
                ]}
            />

            {/* CTA */}
            <ServiceCta
                title="Tekrarlayan görevleri robotlara devretmeye hazır mısınız?"
                subtitle="RPA ve otomasyon uzmanlarımız, süreçlerinizi akıllı hale getirmek için yanınızda."
                buttonText="Otomasyon Danışmanlığı Talep Edin"
                buttonHref="/contact"
                features={['Ücretsiz Süreç Keşfi', 'RPA PoC Çalışması', 'iRPA Demo']}
            />
        </main>
    );
}
