import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Layers3, Code2, Network } from 'lucide-react';
import ProcessIllustration from './ProcessIllustration';
import styles from './Marketing.module.css';

export default function HomePage({ lang }: { lang: string }) {
    const en = lang === 'en';
    const href = (path: string) => `/${lang}${path}`;
    const services = en ? [
        { title: 'SAP consulting', description: 'Start with the business process. Shape your SAP project around your operations, your teams and your priorities.', icon: Layers3, links: [['Supply chain & manufacturing', '/services/sap-consulting/supply-chain'], ['Financial solutions', '/services/sap-consulting/financial-solutions'], ['Process analysis & project management', '/services/sap-consulting/process-analysis'], ['All SAP consulting services', '/services/sap-consulting']] },
        { title: 'Technology & development', description: 'Bring your business needs into the application. Develop interfaces, extensions and workflows across your SAP landscape.', icon: Code2, links: [['SAP BTP solutions', '/services/tech-development/sap-btp'], ['ABAP, RAP / CAP development', '/services/tech-development/abap-rap-cap'], ['Fiori & SAPUI5 interfaces', '/services/tech-development/fiori-sapui5'], ['All development services', '/services/tech-development']] },
        { title: 'Integration & automation', description: 'Connect the systems behind your processes. Plan the flow between SAP, banking, e-transformation and other business applications.', icon: Network, links: [['E-transformation', '/services/integration-solutions/e-donusum'], ['Banking & fintech integration', '/services/integration-solutions/banka-fintech'], ['API & system integration', '/services/integration-solutions/api-integration'], ['All integration services', '/services/integration-solutions']] },
    ] : [
        { title: 'SAP danışmanlığı', description: 'İş sürecinden başlıyoruz. SAP projenizi operasyonunuza, ekibinize ve önceliklerinize göre birlikte şekillendiriyoruz.', icon: Layers3, links: [['Tedarik zinciri ve üretim', '/services/sap-consulting/supply-chain'], ['Finansal çözümler', '/services/sap-consulting/financial-solutions'], ['Süreç analizi ve proje yönetimi', '/services/sap-consulting/process-analysis'], ['Tüm SAP danışmanlık hizmetleri', '/services/sap-consulting']] },
        { title: 'Teknoloji ve geliştirme', description: 'İş ihtiyacını uygulamaya taşıyoruz. SAP altyapınız için arayüzler, geliştirmeler ve iş akışları tasarlıyoruz.', icon: Code2, links: [['SAP BTP çözümleri', '/services/tech-development/sap-btp'], ['ABAP, RAP / CAP geliştirme', '/services/tech-development/abap-rap-cap'], ['Fiori ve SAPUI5 arayüzleri', '/services/tech-development/fiori-sapui5'], ['Tüm geliştirme hizmetleri', '/services/tech-development']] },
        { title: 'Entegrasyon ve otomasyon', description: 'Süreçlerinizin arkasındaki sistemleri bir araya getiriyoruz. SAP, banka, e-dönüşüm ve iş uygulamaları arasındaki akışı planlıyoruz.', icon: Network, links: [['E-dönüşüm', '/services/integration-solutions/e-donusum'], ['Banka ve fintech entegrasyonları', '/services/integration-solutions/banka-fintech'], ['API ve sistem entegrasyonları', '/services/integration-solutions/api-integration'], ['Tüm entegrasyon hizmetleri', '/services/integration-solutions']] },
    ];
    const approach = en ? [
        ['Understand the process', 'We discuss the current workflow, bottlenecks and business priorities.'],
        ['Define the scope', 'We clarify the systems, responsibilities and expected deliverables together.'],
        ['Develop and validate', 'We plan development, testing and rollout around the agreed scope.'],
    ] : [
        ['Süreci anlarız', 'Mevcut iş akışını, darboğazları ve iş önceliklerini birlikte ele alırız.'],
        ['Kapsamı netleştiririz', 'Sistemleri, sorumlulukları ve beklenen çıktıları birlikte tanımlarız.'],
        ['Geliştirir ve doğrularız', 'Geliştirme, test ve devreye alma adımlarını belirlenen kapsama göre planlarız.'],
    ];
    return <div className={styles.site}>
        <section className={styles.hero}>
            <div className={`${styles.wrap} ${styles.heroGrid}`}>
                <div>
                    <p className={styles.eyebrow}>{en ? 'SAP CONSULTING & PRODUCT DEVELOPMENT' : 'SAP DANIŞMANLIĞI & ÜRÜN GELİŞTİRME'}</p>
                    <h1>{en ? 'SAP expertise.' : 'SAP deneyimi.'}<br /><em>{en ? 'Built into' : 'Ürüne dönüşen'}<br />{en ? 'solutions.' : 'uzmanlık.'}</em></h1>
                    <p className={styles.lead}>{en ? 'Consulting, integration and software development. We work with you on SAP processes and bring that experience into APD, our document automation product in development.' : 'Danışmanlık, entegrasyon ve yazılım geliştirme. SAP süreçleriniz için birlikte çalışıyor, bu birikimi belge otomasyonu ürünümüz APD’ye taşıyoruz.'}</p>
                    <div className={styles.actions}>
                        <Link className={styles.primary} href={href('/products/apd')}>{en ? 'Explore APD' : 'APD’yi inceleyin'}<ArrowRight aria-hidden="true" /></Link>
                        <Link className={styles.secondary} href={href('/contact')}>{en ? 'Discuss your SAP project' : 'SAP projenizi konuşalım'}</Link>
                    </div>
                    <p className={styles.note}>{en ? 'APD is in development. Let’s evaluate its scope together.' : 'APD geliştirme aşamasında. Kapsamını birlikte değerlendirelim.'}</p>
                </div>
                <ProcessIllustration lang={lang} />
            </div>
        </section>
        <div className={styles.platforms}>
            <div className={`${styles.wrap} ${styles.platformsInner}`}>
                <p>{en ? 'Our technology focus' : 'Teknoloji odağımız'}</p>
                <ul><li>SAP S/4HANA</li><li>SAP BTP</li><li>ABAP / RAP / CAP</li><li>Fiori / SAPUI5</li></ul>
            </div>
        </div>
        <section className={`${styles.section} ${styles.sectionWhite}`}>
            <div className={`${styles.wrap} ${styles.split}`}>
                <div>
                    <p className={styles.eyebrow}>{en ? '01 / OUR PRODUCT' : '01 / ÜRÜNÜMÜZ'}</p>
                    <h2>{en ? 'From SAP experience to document automation.' : 'SAP birikiminden belge otomasyonuna.'}</h2>
                    <p>{en ? 'Document workflows involve more than reading data. Business rules, reviews and the SAP record all matter. We are developing APD with this wider process in mind.' : 'Belge süreçleri, veriyi okumaktan daha fazlasını içerir. İş kuralları, kontroller ve SAP kaydı bir bütündür. APD’yi bu süreci birlikte ele almak için geliştiriyoruz.'}</p>
                    <Link className={styles.textLink} href={href('/products/apd')}>{en ? 'Discover our APD approach' : 'APD yaklaşımımızı keşfedin'}<ArrowUpRight aria-hidden="true" /></Link>
                </div>
                <div className={styles.feature}>
                    <span className={styles.status}>{en ? 'In development' : 'Geliştirme aşamasında'}</span>
                    <h3>APD Automation</h3>
                    <p>{en ? 'Our product initiative for document processing and SAP posting. The goal: reduce manual steps while making review and exception handling part of the process.' : 'Belge işleme ve SAP kayıt süreçleri için geliştirdiğimiz ürün. Hedefimiz, manuel adımları azaltırken kontrol ve istisna yönetimini sürecin parçası yapmak.'}</p>
                    <p className={styles.note}>{en ? 'Not yet live in a customer system. Suitability depends on the scenario and scope.' : 'Henüz müşteri sisteminde canlı değildir. Uygunluk, senaryo ve kapsam üzerinden değerlendirilir.'}</p>
                    <Link className={styles.textLink} href={href('/products/apd#apd-features')}>{en ? 'View development scope' : 'Geliştirme kapsamını inceleyin'}<ArrowRight aria-hidden="true" /></Link>
                </div>
            </div>
        </section>
        <section className={styles.section} id="services">
            <div className={styles.wrap}>
                <p className={styles.eyebrow}>{en ? '02 / HOW WE CAN HELP' : '02 / HİZMETLERİMİZ'}</p>
                <div className={styles.sectionHead}>
                    <h2>{en ? 'Your process.' : 'İş sürecinizden'}<br />{en ? 'Our starting point.' : 'başlıyoruz.'}</h2>
                    <p>{en ? 'From process consulting to application development, find the expertise your SAP project needs.' : 'Süreç danışmanlığından uygulama geliştirmeye, SAP projenizin ihtiyaç duyduğu uzmanlığı bir araya getiriyoruz.'}</p>
                </div>
                <div className={styles.serviceGrid}>{services.map(service => <article className={styles.service} key={service.title}>
                    <service.icon aria-hidden="true" /><h3>{service.title}</h3><p>{service.description}</p>
                    <ul>{service.links.map(([label, path]) => <li key={path}><Link href={href(path)}>{label}<ArrowUpRight aria-hidden="true" /></Link></li>)}</ul>
                </article>)}</div>
                <div className={styles.serviceBottom}>
                    <Link href={href('/services/ai-data-solutions')} className={styles.textLink}>{en ? 'Data, AI & analytics solutions' : 'Veri, yapay zekâ ve analitik çözümleri'}<ArrowUpRight aria-hidden="true" /></Link>
                    <Link href={href('/services')} className={styles.textLink}>{en ? 'Explore all services' : 'Tüm hizmetleri inceleyin'}<ArrowRight aria-hidden="true" /></Link>
                </div>
            </div>
        </section>
        <section className={`${styles.section} ${styles.dark}`}>
            <div className={`${styles.wrap} ${styles.split}`}>
                <div>
                    <p className={styles.eyebrow}>{en ? '03 / BTP SOLUTION' : '03 / BTP SOLUTION'}</p>
                    <h2>{en ? 'Process knowledge.' : 'Süreci bilen.'}<br />{en ? 'Engineering perspective.' : 'Çözümü geliştiren.'}</h2>
                    <p>{en ? 'We are an Istanbul-based SAP consulting and technology company. We bring process consulting, integration and software development into the same conversation.' : 'İstanbul merkezli bir SAP danışmanlık ve teknoloji şirketiyiz. Süreç danışmanlığını, entegrasyonu ve yazılım geliştirmeyi aynı masada buluşturuyoruz.'}</p>
                    <Link href={href('/about')} className={styles.textLink}>{en ? 'Get to know BTP Solution' : 'BTP Solution’ı tanıyın'}<ArrowUpRight aria-hidden="true" /></Link>
                </div>
                <ol className={styles.numberedList}>
                    {(en ? [
                        ['Business and technology together', 'Discuss business requirements alongside the systems and applications that support them.'],
                        ['A clear, shared scope', 'Make the work, dependencies and expected outputs visible before implementation.'],
                        ['A product development perspective', 'APD brings our interest in repeatable document workflows into a focused product initiative.'],
                    ] : [
                        ['İş ve teknoloji birlikte', 'İş ihtiyacını, onu destekleyen sistemler ve uygulamalarla birlikte ele alırız.'],
                        ['Açık ve ortak bir kapsam', 'Yapılacak işi, bağımlılıkları ve beklenen çıktıları uygulama öncesinde görünür hale getiririz.'],
                        ['Ürün geliştirme yaklaşımı', 'Tekrarlanan belge süreçlerine yönelik çalışmalarımızı APD ile odaklı bir ürüne taşıyoruz.'],
                    ]).map(([title, body], i) => <li key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}
                </ol>
            </div>
        </section>
        <section className={`${styles.section} ${styles.sectionWhite}`}>
            <div className={styles.wrap}>
                <p className={styles.eyebrow}>{en ? '04 / WORKING TOGETHER' : '04 / BİRLİKTE ÇALIŞMAK'}</p>
                <div className={styles.sectionHead}><h2>{en ? 'A clear next step.' : 'Bir sonraki adım net olsun.'}</h2><p>{en ? 'Every project starts by understanding what needs to change.' : 'Her proje, neyin değişmesi gerektiğini anlamakla başlar.'}</p></div>
                <div className={styles.steps}>{approach.map(([title, body], i) => <article className={styles.step} key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
            </div>
        </section>
        <section className={styles.contact}>
            <div className={`${styles.wrap} ${styles.contactInner}`}>
                <div><h2>{en ? 'Let’s start with your process.' : 'Sizin sürecinizle başlayalım.'}</h2><p>{en ? 'Discuss a SAP project or explore whether APD’s development scope fits your document workflows.' : 'SAP projenizi konuşalım veya APD’nin geliştirme kapsamının belge süreçlerinize uygunluğunu birlikte değerlendirelim.'}</p></div>
                <div className={styles.actions}><Link href={href('/contact')} className={styles.primary}>{en ? 'Talk to our team' : 'Ekibimizle görüşün'}<ArrowRight aria-hidden="true" /></Link></div>
            </div>
        </section>
    </div>;
}
