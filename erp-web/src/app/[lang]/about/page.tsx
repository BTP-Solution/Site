import AboutPage from '@/components/about/AboutPage';
import { getDictionary, Locale } from '@/lib/i18n/getDictionary';

export default async function About({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dictionary = await getDictionary((lang as Locale) || 'tr');

    return <AboutPage dict={dictionary} lang={lang} />;
}
