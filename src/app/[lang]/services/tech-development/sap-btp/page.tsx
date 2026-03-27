import { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo/metadata';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceSteps from '@/components/services/ServiceSteps';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { getSapBtpContent } from '@/lib/i18n/services/techDevelopment';

const CARD_ICON_NAMES = ['Code', 'Layers', 'Workflow', 'Bot', 'Cloud', 'Database'];


export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = getSapBtpContent(lang);
    return generateSeoMetadata({
        lang,
        path: '/services/tech-development/sap-btp',
        title: `${t.title} | BTP Solution`,
        description: t.description,
    });
}

export default async function SapBtpPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const t = getSapBtpContent(lang);

    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            <BreadcrumbJsonLd items={t.breadcrumbs} lang={lang} />
            <ServiceJsonLd name={t.title} description={t.description} lang={lang} path="/services/tech-development/sap-btp" />
            <ServiceHero
                breadcrumbs={t.breadcrumbs}
                title={t.title}
                highlightedWord={t.highlightedWord}
                subtitle={t.subtitle}
                description={t.description}
                ctaText={t.ctaText}
                ctaHref="/contact"
                secondaryCtaText={t.secondaryCtaText}
                secondaryCtaHref="#hizmetler"
                iconName="Cloud"
                accentColor="#6366f1"
                gradientFrom="#6366f1"
                gradientTo="#818cf8"
                stats={t.stats}
            />
            <ServiceIntro paragraphs={t.intro} />
            <div id="hizmetler">
                <ServiceCards sectionTitle={t.cardsTitle} subtitle={t.cardsSubtitle} variant="grid" accentColor="#6366f1" cards={t.cards.map((c, i) => ({ ...c, iconName: CARD_ICON_NAMES[i] }))} />
            </div>
            <ServiceSteps sectionTitle={t.stepsTitle} subtitle={t.stepsSubtitle} variant="horizontal" accentColor="#6366f1" steps={t.steps} />
            <ServiceBenefits sectionTitle={t.benefitsTitle} variant="pills" accentColor="#6366f1" items={t.benefits} />
            <ServiceCta title={t.ctaTitle} subtitle={t.ctaSubtitle} buttonText={t.ctaButton} buttonHref="/contact" features={t.ctaFeatures} />
        </main>
    );
}
