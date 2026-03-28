import Hero from '@/components/sections/Hero';
import BentoGrid from '@/components/sections/BentoGrid';
import ClientLogos from '@/components/sections/ClientLogos';
import CtaSection from '@/components/sections/CtaSection';
import { getDictionary, Locale } from '@/lib/i18n/getDictionary';

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary((lang as Locale) || 'tr');

  return (
    <>
      <Hero dict={dictionary} lang={lang} />
      <BentoGrid dict={dictionary} />
      {/* <ClientLogos dict={dictionary} /> */}
      <CtaSection dict={dictionary} lang={lang} />
    </>
  );
}
