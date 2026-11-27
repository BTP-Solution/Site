import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import { withLocale } from '@/lib/i18n/locale';
import styles from './HomePage.module.css';

const copy = {
    tr: {
        eyebrow: 'SAP danışmanlığı, geliştirme ve entegrasyon',
        title: ['SAP projelerinizi', 'iş süreçlerinize göre', 'hayata geçiriyoruz.'],
        intro: 'Ekibinizle birlikte süreçlerinizi inceliyor, SAP’yi diğer sistemlerinizle buluşturuyor ve ihtiyaç duyduğunuz uygulamaları geliştiriyoruz.',
        contact: 'Projenizi konuşalım', explore: 'Hizmetleri inceleyin',
        diagram: 'İş süreçleri ve dış sistemler, iki ayrı hatla ortadaki SAP sistemine bağlanıyor.',
        processes: 'İş süreçleri', systems: 'Dış sistemler',
        services: 'Hizmetlerimiz', question: 'Hangi SAP projesinde birlikte çalışabiliriz?',
        work: [
            ['SAP dönüşümü ve yaygınlaştırma', 'SAP’ye geçişi planlayın, süreçlerinizi yeni şirket ve lokasyonlara taşıyın.'],
            ['SAP ve dış sistem entegrasyonu', 'SAP ile bankalar, e-ticaret sistemleri ve diğer uygulamalar arasında veri akışı kurun.'],
            ['Mevcut SAP yapısını geliştirme', 'Ekibinizin günlük işine uygun uygulamalar, arayüzler ve iş akışları geliştirin.'],
        ],
        featured: 'Öne çıkan çözüm',
        product: 'M·AI, gelen hizmet faturasını SAP kaydına hazırlamak için muhasebe hesabı ve masraf yeri önerir. Son kontrol finans ekibindedir.',
        productLink: 'M·AI’ı inceleyin',
    },
    en: {
        eyebrow: 'SAP consulting, development and integration',
        title: ['We build SAP', 'solutions around', 'the way you work.'],
        intro: 'We work with your team to understand your processes, connect SAP to your other systems and develop the applications you need.',
        contact: 'Let’s talk about your project', explore: 'Explore our services',
        diagram: 'Business processes and external systems connect to the central SAP system along two separate paths.',
        processes: 'Business processes', systems: 'External systems',
        services: 'Our services', question: 'How can we help with your SAP project?',
        work: [
            ['SAP transformation and rollout', 'Plan your transition to SAP and roll out your processes to new companies and locations.'],
            ['Connect SAP to external systems', 'Connect SAP to banks, e-commerce platforms and other business applications.'],
            ['Extend your existing SAP system', 'Develop applications, interfaces and workflows for your team’s day-to-day work.'],
        ],
        featured: 'Featured solution',
        product: 'M·AI suggests a general ledger account and cost center to prepare incoming service invoices for posting in SAP. Your finance team makes the final review.',
        productLink: 'Explore M·AI',
    },
};
const servicePaths = ['/services/sap-consulting/roll-out', '/services/integration-solutions', '/services/tech-development'];

export default function HomePage({ lang }: { lang: string }) {
    const text = copy[lang === 'en' ? 'en' : 'tr'];
    return <div className={styles.page}>
        <section className={styles.hero + ' ' + styles.shell} aria-labelledby="home-title">
            <div>
                <p className={styles.eyebrow}>{text.eyebrow}</p>
                <h1 id="home-title"><span>{text.title[0]}</span>{' '}<span>{text.title[1]}</span>{' '}<em>{text.title[2]}</em></h1>
                <p className={styles.intro}>{text.intro}</p>
                <div className={styles.actions}>
                    <Link className={styles.primary} href={withLocale('/contact', lang)}>{text.contact}<ArrowRight aria-hidden="true" /></Link>
                    <a className={styles.secondary} href="#services">{text.explore}<ArrowDown aria-hidden="true" /></a>
                </div>
            </div>
            <figure className={styles.plate}>
                <Image src="/home-sap-integration.png" alt={text.diagram} width={570} height={405} unoptimized />
                <span aria-hidden="true" className={styles.processes}>{text.processes}</span>
                <span aria-hidden="true" className={styles.systems}>{text.systems}</span>
                <span aria-hidden="true" className={styles.sap}>SAP</span>
            </figure>
        </section>
        <section id="services" className={styles.projects} aria-labelledby="project-title">
            <div className={styles.columns + ' ' + styles.shell}>
                <div><p className={styles.tag}>{text.services}</p><h2 id="project-title">{text.question}</h2></div>
                <div className={styles.rows}>{text.work.map(([title, description], index) =>
                    <Link key={title} className={styles.row} href={withLocale(servicePaths[index], lang)}>
                        <div><h3>{title}</h3><p>{description}</p></div><ArrowUpRight aria-hidden="true" />
                    </Link>)}</div>
            </div>
        </section>
        <section className={styles.solution} aria-labelledby="featured-product">
            <div className={styles.columns + ' ' + styles.shell}>
                <div><p className={styles.tag}>{text.featured}</p><h2 id="featured-product">M·AI</h2></div>
                <div><p>{text.product}</p><Link href={withLocale('/products/apd', lang)}>{text.productLink}<ArrowUpRight aria-hidden="true" /></Link></div>
            </div>
        </section>
    </div>;
}
