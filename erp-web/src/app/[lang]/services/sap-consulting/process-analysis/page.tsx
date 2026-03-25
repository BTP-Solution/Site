import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { getProcessAnalysisContent } from '@/lib/i18n/services/processAnalysis';

const CARD_ICON_NAMES = ['Map', 'LayoutList', 'Target', 'UserCheck'];

export default async function ProcessAnalysisPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const t = getProcessAnalysisContent(lang);
    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            <ServiceHero breadcrumbs={t.breadcrumbs} title={t.title} highlightedWord={t.highlightedWord}
                subtitle={t.subtitle} description={t.description} ctaText={t.ctaText} ctaHref="/contact"
                iconName="Search" accentColor="#3463ac" gradientFrom="#3463ac" gradientTo="#7e6fcf" stats={t.stats} />
            <ServiceIntro paragraphs={t.intro} />
            <ServiceCards sectionTitle={t.cardsTitle} subtitle={t.cardsSubtitle} variant="grid" accentColor="#3463ac"
                cards={t.cards.map((c, i) => ({ ...c, iconName: CARD_ICON_NAMES[i] }))} />
            <ServiceBenefits sectionTitle={t.benefitsTitle} variant="pills" accentColor="#3463ac" items={t.benefits} />
            <ServiceCta title={t.ctaTitle} subtitle={t.ctaSubtitle} buttonText={t.ctaButton} buttonHref="/contact" features={t.ctaFeatures} />
        </main>
    );
}
