import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceSteps from '@/components/services/ServiceSteps';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { getWorkflowAutomationContent } from '@/lib/i18n/services/techDevelopment';

const CARD_ICON_NAMES = ['GitBranch', 'Bot', 'Zap', 'Bell', 'FileCheck2', 'BarChart3'];

export default async function WorkflowAutomationPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const t = getWorkflowAutomationContent(lang);

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
                iconName="Workflow"
                accentColor="#f472b6"
                gradientFrom="#f472b6"
                gradientTo="#a78bfa"
                stats={t.stats}
            />
            <ServiceIntro paragraphs={t.intro} />
            <div id="cozumler">
                <ServiceCards sectionTitle={t.cardsTitle} subtitle={t.cardsSubtitle} variant="grid" accentColor="#f472b6" cards={t.cards.map((c, i) => ({ ...c, iconName: CARD_ICON_NAMES[i] }))} />
            </div>
            <ServiceSteps sectionTitle={t.stepsTitle} subtitle={t.stepsSubtitle} variant="horizontal" accentColor="#f472b6" steps={t.steps} />
            <ServiceBenefits sectionTitle={t.benefitsTitle} variant="pills" accentColor="#f472b6" items={t.benefits} />
            <ServiceCta title={t.ctaTitle} subtitle={t.ctaSubtitle} buttonText={t.ctaButton} buttonHref="/contact" features={t.ctaFeatures} />
        </main>
    );
}
