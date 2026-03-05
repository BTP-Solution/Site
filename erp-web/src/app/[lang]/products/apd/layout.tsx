import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'APD: SAP Uyumlu Fatura ve Belge Otomasyonu | BTP Solution',
    description: 'Automatic Posting Document (APD) ile finansal belgelerinizi yapay zeka ile işleyin. SAP S/4HANA ve ECC uyumlu belge otomasyonu için demoyu planlayın.',
};

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
