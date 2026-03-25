import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { getAbapRapCapContent } from '@/lib/i18n/services/techDevelopment';

const CARD_ICON_NAMES = ['Code2', 'Layers', 'Cloud'];

export default async function AbapRapCapPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const t = getAbapRapCapContent(lang);

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
                iconName="Zap"
                accentColor="#10b981"
                gradientFrom="#10b981"
                gradientTo="#3b82f6"
                stats={t.stats}
            />
            <ServiceIntro paragraphs={t.intro} />
            <ServiceCards sectionTitle={t.cardsTitle} subtitle={t.cardsSubtitle} variant="grid" accentColor="#10b981" cards={t.cards.map((c, i) => ({ ...c, iconName: CARD_ICON_NAMES[i] }))} />
            <ServiceBenefits sectionTitle={t.checksTitle} variant="checks" accentColor="#10b981" items={t.checks} />
            <ServiceBenefits sectionTitle={t.benefitsTitle} variant="pills" accentColor="#10b981" items={t.benefits} />
            <ServiceCta title={t.ctaTitle} subtitle={t.ctaSubtitle} buttonText={t.ctaButton} buttonHref="/contact" features={t.ctaFeatures} />
        </main>
    );
}
