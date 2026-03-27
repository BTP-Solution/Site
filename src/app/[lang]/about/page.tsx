import { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo/metadata';
import AboutPage from '@/components/about/AboutPage';
import { getDictionary, Locale } from '@/lib/i18n/getDictionary';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    return generateSeoMetadata({
        lang,
        path: '/about',
        title: lang === 'tr'
            ? 'Hakkımızda | BTP Solution'
            : 'About Us | BTP Solution',
        description: lang === 'tr'
            ? 'BTP Solution, SAP ekosisteminde uzmanlaşmış, dijital dönüşüm ve yapay zekâ destekli kurumsal çözümler sunan bir teknoloji şirketidir.'
            : 'BTP Solution is a technology company specializing in the SAP ecosystem, offering digital transformation and AI-powered enterprise solutions.',
    });
}

export default async function About({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dictionary = await getDictionary((lang as Locale) || 'tr');

    return <AboutPage dict={dictionary} lang={lang} />;
}
