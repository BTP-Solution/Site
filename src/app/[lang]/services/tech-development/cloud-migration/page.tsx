import { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo/metadata';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { getCloudMigrationContent } from '@/lib/i18n/services/techDevelopment';

const CARD_ICON_NAMES = ['ArrowUpFromLine', 'RefreshCcw', 'ShieldCheck', 'Gauge'];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = getCloudMigrationContent(lang);
    return generateSeoMetadata({
        lang,
        path: '/services/tech-development/cloud-migration',
        title: `${t.title} | BTP Solution`,
        description: t.description,
    });
}

export default async function CloudMigrationPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const t = getCloudMigrationContent(lang);

    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            <BreadcrumbJsonLd items={t.breadcrumbs} lang={lang} />
            <ServiceJsonLd name={t.title} description={t.description} lang={lang} path="/services/tech-development/cloud-migration" />
            <ServiceHero
                breadcrumbs={t.breadcrumbs}
                title={t.title}
                highlightedWord={t.highlightedWord}
                subtitle={t.subtitle}
                description={t.description}
                ctaText={t.ctaText}
                ctaHref="/contact"
                iconName="CloudUpload"
                accentColor="#38bdf8"
                gradientFrom="#38bdf8"
                gradientTo="#e0f2fe"
                stats={t.stats}
            />
            <ServiceIntro paragraphs={t.intro} />
            <ServiceCards sectionTitle={t.cardsTitle} subtitle={t.cardsSubtitle} variant="grid" accentColor="#38bdf8" cards={t.cards.map((c, i) => ({ ...c, iconName: CARD_ICON_NAMES[i] }))} />
            <ServiceBenefits sectionTitle={t.checksTitle} variant="checks" accentColor="#38bdf8" items={t.checks} />
            <ServiceBenefits sectionTitle={t.benefitsTitle} variant="pills" accentColor="#38bdf8" items={t.benefits} />
            <ServiceCta title={t.ctaTitle} subtitle={t.ctaSubtitle} buttonText={t.ctaButton} buttonHref="/contact" features={t.ctaFeatures} />
        </main>
    );
}
