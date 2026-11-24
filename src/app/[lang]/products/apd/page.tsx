import ApdPage from '@/components/marketing/ApdPage';

export default async function ProductPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    return <ApdPage lang={lang} />;
}
