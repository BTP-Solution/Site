import { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://btpsolution.com';

type SEOProps = {
    lang: string;
    path: string;
    title: string;
    description: string;
    openGraph?: Partial<NonNullable<Metadata['openGraph']>>;
};

export function generateSeoMetadata({
    lang,
    path,
    title,
    description,
    openGraph,
}: SEOProps): Metadata {
    const altLang = lang === 'tr' ? 'en' : 'tr';
    const canonical = `${SITE_URL}/${lang}${path}`;

    return {
        title,
        description,
        alternates: {
            canonical,
            languages: {
                'tr': `${SITE_URL}/tr${path}`,
                'en': `${SITE_URL}/en${path}`,
                'x-default': `${SITE_URL}/tr${path}`,
            },
        },
        openGraph: {
            title,
            description,
            url: canonical,
            siteName: 'BTP Solution',
            locale: lang === 'tr' ? 'tr_TR' : 'en_US',
            alternateLocale: [altLang === 'tr' ? 'tr_TR' : 'en_US'],
            type: 'website',
            ...openGraph,
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
        },
    };
}
