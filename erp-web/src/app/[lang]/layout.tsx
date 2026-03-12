import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/ui/CookieBanner';
import PageTransitionProvider from '@/components/layout/PageTransition';
import { getDictionary, Locale } from '@/lib/i18n/getDictionary';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'BTP Solution - SAP BTP Solutions',
  description: 'Enterprise resource planning and digital transformation consulting.',
};

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
