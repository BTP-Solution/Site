import { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo/metadata';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    return generateSeoMetadata({
        lang,
        path: '/products/apd',
        title: lang === 'tr'
            ? 'AIA | SAP için Yapay Zekâ Destekli Fatura Otomasyonu'
            : 'AIA | AI-Powered Invoice Automation for SAP',
        description: lang === 'tr'
            ? 'AIA ile SAP için yapay zekâ destekli fatura otomasyonunu keşfedin. Gelen faturaları ve muhasebe süreçlerinizi bir araya getiren BTP Solution ürün yaklaşımı.'
            : 'Discover AIA: AI-powered invoice automation for SAP. Explore the BTP Solution product approach bringing incoming invoices and accounting workflows together.',
    });
}

export default function ApdLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-[#060d1a] min-h-screen">
            {children}
        </div>
    );
}
