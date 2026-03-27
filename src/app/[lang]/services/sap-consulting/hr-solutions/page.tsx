import { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo/metadata';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceSteps from '@/components/services/ServiceSteps';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { getHrSolutionsContent } from '@/lib/i18n/services/sapConsultingSub2';

const CARD_ICON_NAMES = ['Users2', 'UserCheck', 'Clock', 'Target', 'UserPlus', 'GraduationCap'];


export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = getHrSolutionsContent(lang);
    return generateSeoMetadata({
        lang,
        path: '/services/sap-consulting/hr-solutions',
        title: `${t.title} | BTP Solution`,
        description: t.description,
    });
}

export default async function HrSolutionsPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const t = getHrSolutionsContent(lang);

    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            <BreadcrumbJsonLd items={t.breadcrumbs} lang={lang} />
            <ServiceJsonLd name={t.title} description={t.description} lang={lang} path="/services/sap-consulting/hr-solutions" />
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
                iconName="Users2"
                accentColor="#14b8a6"
                gradientFrom="#14b8a6"
                gradientTo="#3b82f6"
                stats={t.stats}
            />
            <ServiceIntro paragraphs={t.intro} />
            <div id="cozumler">
                <ServiceCards
                    sectionTitle={t.cardsTitle}
                    subtitle={t.cardsSubtitle}
                    variant="grid"
                    accentColor="#14b8a6"
                    cards={t.cards.map((c, i) => ({ ...c, iconName: CARD_ICON_NAMES[i] }))}
                />
            </div>
            <ServiceSteps
                sectionTitle={t.stepsTitle}
                subtitle={t.stepsSubtitle}
                variant="horizontal"
                accentColor="#14b8a6"
                steps={t.steps}
            />
            <ServiceBenefits sectionTitle={t.benefitsTitle} variant="pills" accentColor="#14b8a6" items={t.benefits} />
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
