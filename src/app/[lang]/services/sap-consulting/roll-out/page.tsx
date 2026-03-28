import { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo/metadata';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import FaqItem from '@/components/services/FaqItem';
import { getRollOutContent } from '@/lib/i18n/services/sapConsultingSub2';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = getRollOutContent(lang);
    return generateSeoMetadata({
        lang,
        path: '/services/sap-consulting/roll-out',
        title: `${t.title} | BTP Solution`,
        description: t.description,
    });
}

export default async function RolloutPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const t = getRollOutContent(lang);

    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            <BreadcrumbJsonLd items={t.breadcrumbs} lang={lang} />
            <ServiceJsonLd name={t.title} description={t.description} lang={lang} path="/services/sap-consulting/roll-out" />
            <ServiceHero
                breadcrumbs={t.breadcrumbs}
                title={t.title}
                highlightedWord={t.highlightedWord}
                subtitle={t.subtitle}
                description={t.description}
                ctaText={t.ctaText}
                ctaHref="/contact"
                iconName="RotateCw"
                accentColor="#3b82f6"
                gradientFrom="#3b82f6"
                gradientTo="#8b5cf6"
                stats={t.stats}
            />
            <ServiceIntro paragraphs={t.intro} />
            <ServiceCards
                sectionTitle={t.cardsTitle}
                subtitle={t.cardsSubtitle}
                variant="grid"
                accentColor="#3b82f6"
                cards={t.cards.map((c, i) => ({ ...c, iconName: ['Globe2', 'Building2', 'Database', 'HeadphonesIcon'][i] }))}
            />

            <section className="w-full bg-[#0a1628]/30 py-24 px-4 sm:px-6 lg:px-8 relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#3b82f6]/30 to-[#3b82f6]/30" />
                            <div className="w-2 h-2 rounded-full bg-[#3b82f6] shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
                            <div className="h-px w-12 bg-gradient-to-l from-transparent via-[#3b82f6]/30 to-[#3b82f6]/30" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.faqTitle}</h2>
                        <p className="text-slate-400 text-base">{t.faqSubtitle}</p>
                    </div>
                    <div className="space-y-4">
                        {t.faq.map((item, i) => (
                            <FaqItem key={i} question={item.question} answer={item.answer} />
                        ))}
                    </div>
                </div>
            </section>

            <ServiceBenefits sectionTitle={t.benefitsTitle} variant="pills" accentColor="#3b82f6" items={t.benefits} />
            <ServiceCta
                title={t.ctaTitle}
                subtitle={t.ctaSubtitle}
                buttonText={t.ctaButton}
                buttonHref="/contact"
                features={t.ctaFeatures}
            />
        </main>
    );
}
