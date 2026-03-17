import { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://btpsolution.com';

const pages = [
    '',
    '/about',
    '/products/apd',
    '/services/sap-consulting',
    '/services/sap-consulting/financial-solutions',
    '/services/sap-consulting/supply-chain',
    '/services/sap-consulting/hr-solutions',
    '/services/sap-consulting/customer-experience',
    '/services/sap-consulting/business-intelligence',
    '/services/sap-consulting/process-analysis',
    '/services/sap-consulting/roll-out',
    '/services/tech-development',
    '/services/tech-development/sap-btp',
    '/services/tech-development/fiori-sapui5',
    '/services/tech-development/abap-rap-cap',
    '/services/tech-development/cloud-migration',
    '/services/tech-development/workflow-automation',
    '/services/integration-solutions',
    '/services/integration-solutions/sap-nonsap',
    '/services/integration-solutions/banka-fintech',
    '/services/integration-solutions/e-donusum',
    '/services/integration-solutions/api-integration',
    '/services/ai-data-solutions',
    '/services/ai-data-solutions/ai-ml',
    '/services/ai-data-solutions/business-analytics',
    '/services/ai-data-solutions/data-management',
    '/services/ai-data-solutions/rpa-automation',
];

export default function sitemap(): MetadataRoute.Sitemap {
    const entries: MetadataRoute.Sitemap = [];

    for (const page of pages) {
        for (const lang of ['tr', 'en']) {
            entries.push({
                url: `${SITE_URL}/${lang}${page}`,
                lastModified: new Date(),
                changeFrequency: page === '' ? 'weekly' : 'monthly',
                priority: page === '' ? 1 : page === '/about' ? 0.8 : 0.7,
                alternates: {
                    languages: {
                        tr: `${SITE_URL}/tr${page}`,
                        en: `${SITE_URL}/en${page}`,
                    },
                },
            });
        }
    }

    return entries;
}
