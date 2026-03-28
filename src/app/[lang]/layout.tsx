import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/ui/CookieBanner';
import WhatsAppWidget from '@/components/ui/WhatsAppWidget';
import PageTransitionProvider from '@/components/layout/PageTransition';
import { getDictionary, Locale } from '@/lib/i18n/getDictionary';
import { generateSeoMetadata } from '@/lib/seo/metadata';
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/seo/JsonLd';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });


export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  return generateSeoMetadata({
    lang,
    path: '',
    title: lang === 'tr'
      ? 'BTP Solution - SAP Danışmanlık ve Dijital Dönüşüm'
      : 'BTP Solution - SAP Consulting & Digital Transformation',
    description: lang === 'tr'
      ? 'SAP ekosisteminde uzmanlaşmış danışmanlık hizmetleri ve yapay zekâ destekli yenilikçi ürünlerle kurumsal iş süreçlerinizi dijital çağa taşıyoruz.'
      : 'We transform your enterprise processes with specialized SAP consulting and AI-powered innovative products.',
  });
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
        <OrganizationJsonLd />
        <WebSiteJsonLd lang={lang} />
        <PageTransitionProvider>
          <Header dict={dictionary} lang={lang} />
          <main className="flex-1">
            {children}
          </main>
          <Footer dict={dictionary} />
          <CookieBanner dict={dictionary} />
          <WhatsAppWidget lang={lang} />
        </PageTransitionProvider>
      </body>
    </html>
  );
}
