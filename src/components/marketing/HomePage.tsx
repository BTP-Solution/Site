import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import ProcessIllustration from './ProcessIllustration';
import styles from './Marketing.module.css';

export default function HomePage({ lang }: { lang: string }) {
    const en = lang === 'en';
    const href = (path: string) => '/' + lang + path;
    const services = en ? [
        { title: 'AI built for your business', description: 'We develop AI around your processes, data and the work your team does every day.', links: [['AI & machine learning', '/services/ai-data-solutions/ai-ml'], ['Data & analytics', '/services/ai-data-solutions']] },
        { title: 'SAP consulting', description: 'Bring your business and your SAP landscape together with expertise across finance, supply chain and operations.', links: [['Financial solutions', '/services/sap-consulting/financial-solutions'], ['All SAP consulting services', '/services/sap-consulting']] },
        { title: 'Software development', description: 'From a business need to a working application. We build SAP extensions, interfaces and software for your teams.', links: [['SAP BTP', '/services/tech-development/sap-btp'], ['ABAP, RAP / CAP', '/services/tech-development/abap-rap-cap'], ['Fiori & SAPUI5', '/services/tech-development/fiori-sapui5']] },
        { title: 'Integration & automation', description: 'Connect SAP with the applications behind your business, from banking and e-invoicing to your wider system landscape.', links: [['E-transformation', '/services/integration-solutions/e-donusum'], ['Banking & fintech', '/services/integration-solutions/banka-fintech'], ['All integration services', '/services/integration-solutions']] },
    ] : [
        { title: 'Size özel yapay zekâ', description: 'İş süreçlerinizi, verilerinizi ve ekibinizin günlük işlerini merkeze alan yapay zekâ geliştiriyoruz.', links: [['Yapay zekâ ve makine öğrenimi', '/services/ai-data-solutions/ai-ml'], ['Veri ve analitik çözümleri', '/services/ai-data-solutions']] },
        { title: 'SAP danışmanlığı', description: 'Finanstan tedarik zincirine, iş süreçlerinizi ve SAP altyapınızı aynı uzmanlıkla ele alıyoruz.', links: [['Finansal çözümler', '/services/sap-consulting/financial-solutions'], ['Tüm SAP danışmanlık hizmetleri', '/services/sap-consulting']] },
        { title: 'Yazılım geliştirme', description: 'İş ihtiyacınızı çalışan bir uygulamaya dönüştürüyoruz. SAP geliştirmeleri, arayüzler ve ekibinize özel yazılımlar üretiyoruz.', links: [['SAP BTP', '/services/tech-development/sap-btp'], ['ABAP, RAP / CAP', '/services/tech-development/abap-rap-cap'], ['Fiori ve SAPUI5', '/services/tech-development/fiori-sapui5']] },
        { title: 'Entegrasyon ve otomasyon', description: 'SAP ile işinizin diğer sistemlerini buluşturuyoruz. Banka, e-dönüşüm ve uygulamalarınız arasında bağlantılar kuruyoruz.', links: [['E-dönüşüm', '/services/integration-solutions/e-donusum'], ['Banka ve fintech', '/services/integration-solutions/banka-fintech'], ['Tüm entegrasyon hizmetleri', '/services/integration-solutions']] },
    ];
    return <div className={styles.site}>
        <section className={styles.hero}>
            <div className={styles.wrap + ' ' + styles.heroGrid}>
                <div className={styles.heroCopy}>
                    <p className={styles.eyebrow}>{en ? 'SAP EXPERTISE. CUSTOM AI.' : 'SAP UZMANLIĞI. SİZE ÖZEL YAPAY ZEKÂ.'}</p>
                    <h1>{en ? 'Your business.' : 'İşinize özel'}<br /><em>{en ? 'Your AI.' : 'yapay zekâ.'}</em></h1>
                    <p className={styles.lead}>{en ? 'We bring SAP expertise together with AI and software built around your business. From accounting to operations, we develop solutions for the way you work.' : 'SAP deneyimimizi, işletmeniz için geliştirdiğimiz yapay zekâ ve yazılımlarla birleştiriyoruz. Muhasebeden operasyonlara, işinize uygun çözümler üretiyoruz.'}</p>
                    <div className={styles.actions}>
                        <Link className={styles.primary} href={href('/products/apd')}>{en ? 'Explore AIA' : 'AIA’yı keşfedin'}<ArrowUpRight aria-hidden="true" /></Link>
                        <Link className={styles.textLink} href={href('/contact')}>{en ? 'Let’s talk about your project' : 'Projenizi konuşalım'}<ArrowRight aria-hidden="true" /></Link>
                    </div>
                </div>
                <ProcessIllustration lang={lang} />
            </div>
        </section>
        <div className={styles.platforms}><div className={styles.wrap + ' ' + styles.platformsInner}>
            <p>{en ? 'Our technology focus' : 'Teknoloji odağımız'}</p>
            <ul><li>SAP S/4HANA</li><li>RISE with SAP</li><li>SAP Cloud</li><li>SAP BTP</li><li>ABAP / RAP / CAP</li><li>Fiori / SAPUI5</li></ul>
        </div></div>

        <section className={styles.productSection}>
            <div className={styles.wrap}>
                <div className={styles.productSpotlight}>
                    <div>
                        <p className={styles.eyebrow}>{en ? 'MEET AIA / INVOICE AUTOMATION' : 'AIA İLE TANIŞIN / FATURA OTOMASYONU'}</p>
                        <h2>{en ? 'It starts with an invoice.' : 'Bir faturayla başlar.'}<br /><em>{en ? 'Think beyond it.' : 'Muhasebenin geleceğine uzanır.'}</em></h2>
                        <p>{en ? 'With AIA, we are developing AI for incoming invoices and SAP accounting. Invoices are our first focus; our product vision reaches into the wider work of accounting teams.' : 'AIA ile gelen faturalar ve SAP muhasebe süreçleri için yapay zekâ geliştiriyoruz. İlk odağımız faturalar; vizyonumuz muhasebe ekiplerinin farklı iş akışlarına uzanan bir ürün.'}</p>
                        <Link href={href('/products/apd')} className={styles.lightLink}>{en ? 'Discover the product' : 'Ürünü keşfedin'}<ArrowUpRight aria-hidden="true" /></Link>
                    </div>
                    <div className={styles.productFocus}>
                        <div><span>{en ? 'FIRST USE CASE' : 'İLK KULLANIM ALANI'}</span><h3>{en ? 'Incoming invoices' : 'Gelen faturalar'}</h3><p>{en ? 'AI for invoice data and SAP accounting workflows.' : 'Fatura verisi ve SAP muhasebe süreçleri için yapay zekâ.'}</p></div>
                        <div><span>{en ? 'OUR VISION' : 'ÜRÜN VİZYONUMUZ'}</span><h3>{en ? 'A wider role in accounting' : 'Muhasebenin farklı iş akışları'}</h3><p>{en ? 'A product direction that grows beyond one document type.' : 'Tek bir belge türünün ötesine geçmeyi hedefleyen bir ürün yaklaşımı.'}</p></div>
                    </div>
                </div>
            </div>
        </section>

        <section className={styles.section} id="services">
            <div className={styles.wrap}>
                <div className={styles.sectionHead}>
                    <div><p className={styles.eyebrow}>{en ? 'WHAT WE BUILD TOGETHER' : 'BİRLİKTE NELER YAPIYORUZ?'}</p><h2>{en ? 'From your business need' : 'İş ihtiyacınızdan'}<br /><em>{en ? 'to your next solution.' : 'çalışan çözümlere.'}</em></h2></div>
                    <p>{en ? 'AI, SAP consulting and software development. One team to connect the pieces.' : 'Yapay zekâ, SAP danışmanlığı ve yazılım geliştirme. Birbirini tamamlayan uzmanlıklar, aynı ekipte.'}</p>
                </div>
                <div className={styles.serviceRows}>{services.map((service, i) => <article className={styles.serviceRow} key={service.title}>
                    <span className={styles.serviceIndex}>0{i + 1}</span><h3>{service.title}</h3>
                    <div><p>{service.description}</p><ul>{service.links.map(([label, path]) => <li key={path}><Link href={href(path)}>{label}<ArrowUpRight aria-hidden="true" /></Link></li>)}</ul></div>
                </article>)}</div>
                <Link href={href('/services')} className={styles.allServices}>{en ? 'Explore all services' : 'Tüm hizmetleri inceleyin'}<ArrowRight aria-hidden="true" /></Link>
            </div>
        </section>

        <section className={styles.expertiseSection}>
            <div className={styles.wrap + ' ' + styles.expertiseGrid}>
                <p className={styles.eyebrow}>BTP SOLUTION</p>
                <div><h2>{en ? 'You know your business.' : 'Siz işinizi biliyorsunuz.'}<br /><em>{en ? 'We build the technology for it.' : 'Biz onun teknolojisini geliştiriyoruz.'}</em></h2>
                    <p>{en ? 'We are an Istanbul-based SAP consulting and technology company. We work with your teams to turn process knowledge into software and AI that fits your business.' : 'İstanbul merkezli bir SAP danışmanlık ve teknoloji şirketiyiz. Ekibinizle birlikte çalışıyor, süreç bilgisini işletmenize uygun yazılım ve yapay zekâ çözümlerine dönüştürüyoruz.'}</p>
                    <Link href={href('/about')} className={styles.textLink}>{en ? 'Get to know BTP Solution' : 'BTP Solution’ı tanıyın'}<ArrowUpRight aria-hidden="true" /></Link>
                </div>
            </div>
        </section>
        <section className={styles.contact}>
            <div className={styles.wrap + ' ' + styles.contactInner}>
                <div><p className={styles.eyebrow}>{en ? 'LET’S BUILD TOGETHER' : 'BİRLİKTE GELİŞTİRELİM'}</p><h2>{en ? 'What should AI do' : 'Yapay zekâ sizin için'}<br /><em>{en ? 'for your business?' : 'ne yapsın?'}</em></h2></div>
                <div><p>{en ? 'Tell us about your business. Let’s discuss the AI, software or SAP project you have in mind.' : 'İşinizi anlatın. İhtiyacınız olan yapay zekâyı, yazılımı veya SAP projesini birlikte konuşalım.'}</p><Link href={href('/contact')} className={styles.primary}>{en ? 'Talk to our team' : 'Ekibimizle görüşün'}<ArrowUpRight aria-hidden="true" /></Link></div>
            </div>
        </section>
    </div>;
}
