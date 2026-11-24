'use client';
import Link from 'next/link';
import type { Dictionary } from '@/lib/i18n/getDictionary';
import styles from '@/components/marketing/Marketing.module.css';

const categories = ['/services/sap-consulting', '/services/tech-development', '/services/integration-solutions', '/services/ai-data-solutions'] as const;

export default function Navbar({ dict, lang, onNavigate }: { dict: Dictionary; lang: string; onNavigate?: () => void }) {
    const entries = Object.entries(dict.serviceNavigation);
    return <div className={styles.serviceMenu}>
        <div className={styles.serviceMenuGrid}>{categories.map(category => <section key={category}>
            <h3><Link href={`/${lang}${category}`} onClick={onNavigate}>{dict.serviceNavigation[category]}</Link></h3>
            <ul>{entries.filter(([path]) => path.startsWith(category + '/')).map(([path, label]) =>
                <li key={path}><Link href={`/${lang}${path}`} onClick={onNavigate}>{label}</Link></li>
            )}</ul>
        </section>)}</div>
        <Link className={styles.menuAll} href={`/${lang}/services`} onClick={onNavigate}>{lang === 'en' ? 'Explore all services →' : 'Tüm hizmetleri inceleyin →'}</Link>
    </div>;
}
