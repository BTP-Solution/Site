import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { getIntegrationSolutionsMainContent } from '@/lib/i18n/services/integrationSolutions';

const CARD_ICON_NAMES = ['FileCheck', 'Link2', 'ArrowLeftRight', 'Landmark'];

export default async function IntegrationSolutionsPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const t = getIntegrationSolutionsMainContent(lang);

    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
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
                iconName="Link2"
                accentColor="#f59e0b"
                gradientFrom="#f59e0b"
                gradientTo="#fb923c"
                stats={t.stats}
            />
            <ServiceIntro paragraphs={t.intro} />
            <div id="hizmetler">
                <ServiceCards sectionTitle={t.cardsTitle} subtitle={t.cardsSubtitle} variant="grid" accentColor="#f59e0b" cards={t.cards.map((c, i) => ({ ...c, iconName: CARD_ICON_NAMES[i] }))} />
            </div>
            <ServiceBenefits sectionTitle={t.benefitsTitle} variant="checks" accentColor="#f59e0b" items={t.benefits} />
            <ServiceCta title={t.ctaTitle} subtitle={t.ctaSubtitle} buttonText={t.ctaButton} buttonHref="/contact" features={t.ctaFeatures} />
        </main>
    );
}
