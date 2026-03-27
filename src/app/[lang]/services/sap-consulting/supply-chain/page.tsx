import { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo/metadata';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCards from '@/components/services/ServiceCards';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCta from '@/components/services/ServiceCta';
import { getSupplyChainContent } from '@/lib/i18n/services/supplyChain';

const CARD_ICON_NAMES = ['ShoppingCart', 'BarChart2', 'Settings', 'Warehouse', 'Box', 'ClipboardCheck'];


export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = getSupplyChainContent(lang);
    return generateSeoMetadata({
        lang,
        path: '/services/sap-consulting/supply-chain',
        title: `${t.title} | BTP Solution`,
        description: t.description,
    });
}

export default async function SupplyChainPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const t = getSupplyChainContent(lang);
    return (
        <main className="w-full flex flex-col bg-[#060d1a]">
            <BreadcrumbJsonLd items={t.breadcrumbs} lang={lang} />
            <ServiceJsonLd name={t.title} description={t.description} lang={lang} path="/services/sap-consulting/supply-chain" />
            <ServiceHero breadcrumbs={t.breadcrumbs} title={t.title} highlightedWord={t.highlightedWord}
                subtitle={t.subtitle} description={t.description} ctaText={t.ctaText} ctaHref="/contact"
                iconName="Truck" accentColor="#34d399" gradientFrom="#34d399" gradientTo="#06b6d4" stats={t.stats} />
            <ServiceIntro paragraphs={t.intro} />
            <ServiceCards sectionTitle={t.cardsTitle} subtitle={t.cardsSubtitle} variant="grid" accentColor="#34d399"
                cards={t.cards.map((c, i) => ({ ...c, iconName: CARD_ICON_NAMES[i] }))} />
            <ServiceBenefits sectionTitle={t.benefitsTitle} variant="pills" accentColor="#34d399" items={t.benefits} />
            <ServiceCta title={t.ctaTitle} subtitle={t.ctaSubtitle} buttonText={t.ctaButton} buttonHref="/contact" features={t.ctaFeatures} />
        </main>
    );
}
