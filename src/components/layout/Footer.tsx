import ProductNavLabel from './ProductNavLabel';
import Image from 'next/image';
import Link from 'next/link';
import type { Dictionary } from '@/lib/i18n/getDictionary';
import styles from '@/components/marketing/Marketing.module.css';

export default function Footer({ dict, lang }: { dict: Dictionary; lang: string }) {
    const en = lang === 'en';
    const serviceLinks = [
        [dict.footer.services.sapConsulting, '/services/sap-consulting'],
        [dict.footer.services.techDev, '/services/tech-development'],
        [dict.footer.services.integration, '/services/integration-solutions'],
        [dict.footer.services.aiData, '/services/ai-data-solutions'],
    ];
    return <footer className={styles.footer}>
        <div className={styles.wrap}>
            <div className={styles.footerGrid}>
                <div>
                    <Link href={`/${lang}`} className={styles.brand} aria-label="BTP Solution"><Image src="/btp_logo-2.png" alt="BTP" width={120} height={31} /><span>SOLUTION</span></Link>
                    <p>{en ? 'SAP consulting, integration and software development. Expertise that becomes a product.' : 'SAP danışmanlığı, entegrasyon ve yazılım geliştirme. Ürüne dönüşen uzmanlık.'}</p>
                </div>
                <div><h2>{dict.navigation.services}</h2><ul>{serviceLinks.map(([label, path]) => <li key={path}><Link href={`/${lang}${path}`}>{label}</Link></li>)}</ul></div>
                <div><h2>{dict.footer.company}</h2><ul>
                    <li><Link href={`/${lang}/products/apd`}><ProductNavLabel lang={lang} /></Link></li>
                    <li><Link href={`/${lang}/about`}>{dict.navigation.about}</Link></li>
                    <li><Link href={`/${lang}/services`}>{en ? 'All services' : 'Tüm hizmetler'}</Link></li>
                    <li><Link href={`/${lang}/contact`}>{dict.navigation.contact}</Link></li>
                </ul></div>
                <div><h2>{dict.navigation.contact}</h2><address>
                    <a href="mailto:info@btpsolution.com">info@btpsolution.com</a>
                    <a href="tel:+905547251187">+90 554 725 11 87</a>
                    <a href="https://maps.google.com/?q=Ferahevler+Mah+%C3%96nceler+Sok+No:33+D:2+Sar%C4%B1yer+%C4%B0stanbul" target="_blank" rel="noopener noreferrer">Ferahevler Mah. Önceler Sok.<br />No:33 D:2 Sarıyer / İstanbul</a>
                </address></div>
            </div>
            <div className={styles.footerBottom}>
                <span>© {new Date().getFullYear()} BTP Solution. {dict.footer.rights}</span>
                <div><a href="https://linkedin.com/company/btpsolution" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="https://twitter.com/btpsolution" target="_blank" rel="noopener noreferrer">X / Twitter</a></div>
            </div>
        </div>
    </footer>;
}
