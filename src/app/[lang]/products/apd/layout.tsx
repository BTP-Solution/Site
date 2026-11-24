import { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo/metadata';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    return generateSeoMetadata({
        lang,
        path: '/products/apd',
        title: lang === 'tr'
            ? 'APD: SAP için Fatura ve Belge Otomasyonu | BTP Solution'
            : 'APD: Invoice & Document Automation for SAP | BTP Solution',
        description: lang === 'tr'
            ? 'SAP belge işleme ve kayıt süreçleri için geliştirdiğimiz APD ürününü tanıyın. Geliştirme durumunu, kapsamını ve sürecinize uygunluğunu birlikte değerlendirelim.'
            : 'Explore APD, our product in development for document processing and SAP posting. Review its development status, scope and suitability for your workflows.',
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
