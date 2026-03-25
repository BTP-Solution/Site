import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceSteps from '@/components/services/ServiceSteps';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { getRpaAutomationContent } from '@/lib/i18n/services/aiDataSolutions';

const CARD_ICON_NAMES = ['FileInput', 'Bot', 'ClipboardCheck', 'Mail', 'Repeat', 'Workflow'];

export default async function RpaAutomationPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const t = getRpaAutomationContent(lang);

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
                secondaryCtaHref="#senaryolar"
                iconName="Workflow"
                accentColor="#818cf8"
                gradientFrom="#f472b6"
                gradientTo="#818cf8"
                stats={t.stats}
            />
            <ServiceIntro paragraphs={t.intro} />
            <div id="senaryolar">
                <ServiceCards sectionTitle={t.cardsTitle} subtitle={t.cardsSubtitle} variant="grid" accentColor="#818cf8" cards={t.cards.map((c, i) => ({ ...c, iconName: CARD_ICON_NAMES[i] }))} />
            </div>
            <ServiceSteps sectionTitle={t.stepsTitle} subtitle={t.stepsSubtitle} variant="horizontal" accentColor="#818cf8" steps={t.steps} />
            <ServiceBenefits sectionTitle={t.benefitsTitle} variant="pills" accentColor="#818cf8" items={t.benefits} />
            <ServiceCta title={t.ctaTitle} subtitle={t.ctaSubtitle} buttonText={t.ctaButton} buttonHref="/contact" features={t.ctaFeatures} />
        </main>
    );
}
