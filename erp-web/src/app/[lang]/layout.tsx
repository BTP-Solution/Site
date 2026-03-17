import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/ui/CookieBanner';
import PageTransitionProvider from '@/components/layout/PageTransition';
import { getDictionary, Locale } from '@/lib/i18n/getDictionary';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://btpsolution.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const altLang = lang === 'tr' ? 'en' : 'tr';

  return {
    title: lang === 'tr'
      ? 'BTP Solution - SAP Danışmanlık ve Dijital Dönüşüm'
      : 'BTP Solution - SAP Consulting & Digital Transformation',
    description: lang === 'tr'
      ? 'SAP ekosisteminde uzmanlaşmış danışmanlık hizmetleri ve yapay zekâ destekli yenilikçi ürünlerle kurumsal iş süreçlerinizi dijital çağa taşıyoruz.'
      : 'We transform your enterprise processes with specialized SAP consulting and AI-powered innovative products.',
    alternates: {
      canonical: `${SITE_URL}/${lang}`,
      languages: {
        'tr': `${SITE_URL}/tr`,
        'en': `${SITE_URL}/en`,
        'x-default': `${SITE_URL}/tr`,
      },
    },
    openGraph: {
      title: 'BTP Solution',
      description: lang === 'tr'
        ? 'SAP ekosisteminde uzmanlaşmış danışmanlık ve yenilikçi ürün çözümleri.'
        : 'Specialized SAP consulting and innovative product solutions.',
      url: `${SITE_URL}/${lang}`,
      siteName: 'BTP Solution',
      locale: lang === 'tr' ? 'tr_TR' : 'en_US',
      type: 'website',
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dictionary = await getDictionary((lang as Locale) || 'tr');

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-white text-zinc-900 min-h-screen flex flex-col`}>
        <PageTransitionProvider>
          <Header dict={dictionary} lang={lang} />
          <main className="flex-1">
            {children}
          </main>
          <Footer dict={dictionary} />
          <CookieBanner dict={dictionary} />
        </PageTransitionProvider>
      </body>
    </html>
  );
}
