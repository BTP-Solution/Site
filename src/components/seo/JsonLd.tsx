export function OrganizationJsonLd() {
    const data = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'BTP Solution',
        url: 'https://btpsolution.com',
        logo: 'https://btpsolution.com/btp_logo.svg',
        description: 'SAP danışmanlık, dijital dönüşüm ve yapay zekâ destekli kurumsal çözümler sunan teknoloji şirketi.',
        sameAs: [],
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            availableLanguage: ['Turkish', 'English'],
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

export function WebSiteJsonLd({ lang }: { lang: string }) {
    const data = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'BTP Solution',
        url: `https://btpsolution.com/${lang}`,
        inLanguage: lang === 'tr' ? 'tr-TR' : 'en-US',
        potentialAction: {
            '@type': 'SearchAction',
            target: `https://btpsolution.com/${lang}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

type BreadcrumbItem = {
    label: string;
    href?: string;
};

export function BreadcrumbJsonLd({ items, lang }: { items: BreadcrumbItem[]; lang: string }) {
    const baseUrl = 'https://btpsolution.com';
    const data = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.label,
            item: item.href ? `${baseUrl}/${lang}${item.href}` : undefined,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

export function ServiceJsonLd({
    name,
    description,
    lang,
    path,
}: {
    name: string;
    description: string;
    lang: string;
    path: string;
}) {
    const data = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name,
        description,
        url: `https://btpsolution.com/${lang}${path}`,
        provider: {
            '@type': 'Organization',
            name: 'BTP Solution',
            url: 'https://btpsolution.com',
        },
        areaServed: {
            '@type': 'Country',
            name: lang === 'tr' ? 'Türkiye' : 'Turkey',
        },
        availableLanguage: ['Turkish', 'English'],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
