import { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo/metadata';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceSteps from '@/components/services/ServiceSteps';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { getSapConsultingContent } from '@/lib/i18n/services/sapConsulting';

const CARD_ICON_NAMES = ['Truck', 'Search', 'RotateCw', 'Coins', 'Users', 'BarChart3', 'ShoppingBag'];
const CARD_HREFS = [
    '/services/sap-consulting/supply-chain',
    '/services/sap-consulting/process-analysis',
    '/services/sap-consulting/roll-out',
    '/services/sap-consulting/financial-solutions',
    '/services/sap-consulting/hr-solutions',
    '/services/sap-consulting/business-intelligence',
    '/services/sap-consulting/customer-experience',
];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = getSapConsultingContent(lang).main;
    return generateSeoMetadata({
        lang,
        path: '/services/sap-consulting',
        title: `${t.title} | BTP Solution`,
        description: t.description,
    });
}

export default async function SapConsultingPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const t = getSapConsultingContent(lang).main;

    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            <BreadcrumbJsonLd items={t.breadcrumbs} lang={lang} />
            <ServiceJsonLd name={t.title} description={t.description} lang={lang} path="/services/sap-consulting" />
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
                iconName="Monitor"
                accentColor="#3463ac"
                gradientFrom="#3463ac"
                gradientTo="#7e6fcf"
                stats={t.stats}
            />

            <ServiceIntro paragraphs={t.intro} />

            <div id="hizmetler">
                <ServiceCards
                    sectionTitle={t.cardsTitle}
                    subtitle={t.cardsSubtitle}
                    variant="grid"
                    accentColor="#3463ac"
                    cards={t.cards.map((card, i) => ({
                        ...card,
                        iconName: CARD_ICON_NAMES[i],
                        href: CARD_HREFS[i],
                    }))}
                />
            </div>

            <ServiceSteps
                sectionTitle={t.stepsTitle}
                subtitle={t.stepsSubtitle}
                variant="horizontal"
                accentColor="#3463ac"
                steps={t.steps}
            />

            <ServiceBenefits
                sectionTitle={t.benefitsTitle}
                variant="pills"
                accentColor="#3463ac"
                items={t.benefits}
            />

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
