import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { getAiDataSolutionsMainContent } from '@/lib/i18n/services/aiDataSolutions';

const CARD_ICON_NAMES = ['Database', 'BarChart3', 'Brain', 'Workflow'];

export default async function AiDataSolutionsPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const t = getAiDataSolutionsMainContent(lang);

    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            <ServiceHero
                breadcrumbs={t.breadcrumbs}
                title={t.title}
                highlightedWord={t.highlightedWord}
                subtitle={t.subtitle}
                description={t.description}
                ctaText={t.ctaText}
                ctaHref="#cozumler"
                secondaryCtaText={t.secondaryCtaText}
                secondaryCtaHref="/contact"
                iconName="Brain"
                accentColor="#818cf8"
                gradientFrom="#818cf8"
                gradientTo="#c084fc"
                stats={t.stats}
            />
            <ServiceIntro paragraphs={t.intro} />
            <div id="cozumler">
                <ServiceCards
                    sectionTitle={t.cardsTitle}
                    subtitle={t.cardsSubtitle}
                    variant="grid"
                    accentColor="#818cf8"
                    cards={t.cards.map((c, i) => ({ ...c, iconName: CARD_ICON_NAMES[i] }))}
                />
            </div>
            <ServiceBenefits sectionTitle={t.benefitsTitle} variant="checks" accentColor="#818cf8" items={t.benefits} />
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
