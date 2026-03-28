import { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo/metadata';
import ServicesOverview from '@/components/sections/ServicesOverview';
import { getDictionary, Locale } from '@/lib/i18n/getDictionary';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    return generateSeoMetadata({
        lang,
        path: '/services',
        title: lang === 'tr' ? 'Hizmetlerimiz | BTP Solution' : 'Our Services | BTP Solution',
        description: lang === 'tr'
            ? 'SAP danışmanlık, teknoloji geliştirme, entegrasyon ve yapay zeka çözümleriyle kurumsal dönüşümünüzü uçtan uca yönetiyoruz.'
            : 'We manage your enterprise transformation end-to-end with SAP consulting, technology development, integration, and AI solutions.',
    });
}

export default async function ServicesPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dictionary = await getDictionary((lang as Locale) || 'tr');

    return <ServicesOverview dict={dictionary} lang={lang} />;
}
