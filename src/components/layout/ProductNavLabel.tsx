'use client';

import { usePathname } from 'next/navigation';
import AiaWordmark from '@/components/marketing/AiaWordmark';

export default function ProductNavLabel({ lang, wordmark = false }: { lang: string; wordmark?: boolean }) {
    const isHome = usePathname() === `/${lang}`;
    const name = isHome ? 'M·AI' : 'AIA';
    if (wordmark) return isHome ? <span>{name}</span> : <AiaWordmark />;
    return <>{name} · {lang === 'en' ? 'Invoice Automation' : 'Fatura Otomasyonu'}</>;
}
