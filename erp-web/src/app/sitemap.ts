import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://erp-web.example.com';
    return [
        {
            url: `${baseUrl}/tr`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${baseUrl}/en`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
    ];
}
