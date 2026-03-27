import { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo/metadata';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    return generateSeoMetadata({
        lang,
        path: '/products/apd',
        title: lang === 'tr'
            ? 'APD: SAP Uyumlu Fatura ve Belge Otomasyonu | BTP Solution'
            : 'APD: SAP Compatible Invoice & Document Automation | BTP Solution',
        description: lang === 'tr'
            ? 'Automatic Posting Document (APD) ile finansal belgelerinizi yapay zeka ile işleyin. SAP S/4HANA ve ECC uyumlu belge otomasyonu için demoyu planlayın.'
            : 'Process your financial documents with AI using Automatic Posting Document (APD). Plan a demo for SAP S/4HANA and ECC compatible document automation.',
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
