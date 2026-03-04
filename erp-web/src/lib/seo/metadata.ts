import { Metadata } from 'next';

type SEOProps = {
    title: string;
    description: string;
    canonicalUrl?: string;
    openGraph?: Metadata['openGraph'];
};

export function generateSeoMetadata({
    title,
    description,
    canonicalUrl,
    openGraph,
}: SEOProps): Metadata {
    return {
        title,
        description,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title,
            description,
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
