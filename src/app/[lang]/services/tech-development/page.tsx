import { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo/metadata';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { getTechDevelopmentMainContent } from '@/lib/i18n/services/techDevelopment';

const CARD_ICON_NAMES = ['Cloud', 'Code', 'Palette', 'CloudUpload', 'Workflow'];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = getTechDevelopmentMainContent(lang);
    return generateSeoMetadata({
        lang,
        path: '/services/tech-development',
        title: `${t.title} | BTP Solution`,
        description: t.description,
    });
}

export default async function TechDevelopmentPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const t = getTechDevelopmentMainContent(lang);

    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            <BreadcrumbJsonLd items={t.breadcrumbs} lang={lang} />
            <ServiceJsonLd name={t.title} description={t.description} lang={lang} path="/services/tech-development" />
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
                iconName="Code"
                accentColor="#10b981"
                gradientFrom="#10b981"
                gradientTo="#3b82f6"
                stats={t.stats}
            />
            <ServiceIntro paragraphs={t.intro} />
            <div id="hizmetler">
                <ServiceCards sectionTitle={t.cardsTitle} subtitle={t.cardsSubtitle} variant="grid" accentColor="#10b981" cards={t.cards.map((c, i) => ({ ...c, iconName: CARD_ICON_NAMES[i] }))} />
            </div>
            <ServiceBenefits sectionTitle={t.benefitsTitle} variant="checks" accentColor="#10b981" items={t.benefits} />
            <ServiceCta title={t.ctaTitle} subtitle={t.ctaSubtitle} buttonText={t.ctaButton} buttonHref="/contact" features={t.ctaFeatures} />
        </main>
    );
}
