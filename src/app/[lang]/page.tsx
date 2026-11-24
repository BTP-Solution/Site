import HomePage from '@/components/marketing/HomePage';

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return <HomePage lang={lang} />;
}
