import Link from 'next/link';
import { ArrowRight, ArrowUpRight, FileText, Braces, Network } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { getApdContent } from '@/lib/i18n/services/apdProduct';
import ProcessIllustration from './ProcessIllustration';
import styles from './Marketing.module.css';
import AiaWordmark from './AiaWordmark';

export default function ApdPage({ lang }: { lang: string }) {
    const en = lang === 'en';
    const t = getApdContent(lang);
    const icons = [FileText, Braces, Network];
    return <div className={styles.site}>
        <section className={styles.hero + ' ' + styles.productHero}>
            <div className={styles.wrap}>
                <nav className={styles.breadcrumb} aria-label={en ? 'Breadcrumb' : 'Sayfa yolu'}><Link href={'/' + lang}>{en ? 'Home' : 'Ana sayfa'}</Link><span aria-hidden="true">/</span><span aria-current="page">AIA</span></nav>
                <div className={styles.heroGrid}>
                    <div className={styles.heroCopy}>
                        <div className={styles.productSignature}><AiaWordmark /><span>BTP SOLUTION</span></div>
                        <h1>{en ? 'AI-Powered' : 'SAP için'}<br /><em>{en ? 'Invoice Automation' : 'Yapay Zekâ Destekli'}</em><br />{en ? 'for SAP' : 'Fatura Otomasyonu'}</h1>
                        <p className={styles.lead}>{en ? 'AIA brings our AI development and SAP expertise together around incoming invoices. We are building it around the way your business works, with a vision that reaches beyond the invoice.' : 'AIA, gelen faturaları anlamak ve SAP muhasebe süreçleriyle buluşturmak için geliştirdiğimiz yapay zekâ çözümü. İşletmenizin çalışma biçimini merkeze alan, faturanın ötesine uzanan bir vizyonla.'}</p>
                        <div className={styles.actions}><a href="#contact-form" className={styles.primary}>{en ? 'Discuss AIA' : 'AIA için görüşelim'}<ArrowUpRight aria-hidden="true" /></a><a href="#apd-features" className={styles.textLink}>{en ? 'Explore the approach' : 'Yaklaşımımızı keşfedin'}<ArrowRight aria-hidden="true" /></a></div>
                    </div>
                    <ProcessIllustration lang={lang} />
                </div>
            </div>
        </section>

        <section className={styles.invoiceSection} id="apd-features">
            <div className={styles.wrap}>
                <div className={styles.sectionHead}>
                    <div><p className={styles.eyebrow}>{en ? 'FIRST USE CASE / INCOMING INVOICES' : 'İLK KULLANIM ALANI / GELEN FATURALAR'}</p><h2>{en ? 'We write the AI.' : 'Sizin muhasebenize'}<br /><em>{en ? 'Around your accounting.' : 'yapay zekâ yazıyoruz.'}</em></h2></div>
                    <p>{en ? 'An invoice carries more than numbers. We bring together document data, accounting knowledge and SAP expertise in one product approach.' : 'Bir fatura, rakamlardan daha fazlasını taşır. Belgedeki veriyi, muhasebe bilgisini ve SAP uzmanlığını aynı ürün yaklaşımında bir araya getiriyoruz.'}</p>
                </div>
                <div className={styles.pillars}>{t.pillars.map(([title, body], i) => { const Icon = icons[i]; return <article key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{body}</p></article>; })}</div>
            </div>
        </section>

        <section className={styles.visionSection}>
            <div className={styles.wrap + ' ' + styles.visionGrid}>
                <div><p className={styles.eyebrow}>{en ? 'A BIGGER PRODUCT VISION' : 'DAHA GENİŞ BİR ÜRÜN VİZYONU'}</p><h2>{en ? 'An invoice is' : 'Fatura, hikâyenin'}<br /><em>{en ? 'just the beginning.' : 'başlangıcı.'}</em></h2><p>{en ? 'Our first focus is incoming invoice processing. Our ambition is to bring AI into more of the work accounting teams do every day.' : 'İlk odağımız gelen fatura işleme. Hedefimiz, yapay zekâyı muhasebe ekiplerinin günlük işlerinde daha geniş bir alana taşımak.'}</p></div>
                <div className={styles.visionTrack}>
                    <div><span>{en ? 'FIRST FOCUS' : 'İLK ODAK'}</span><h3>{en ? 'Incoming invoices' : 'Gelen faturalar'}</h3><p>{en ? 'Document data, accounting logic and the SAP workflow.' : 'Belge verisi, muhasebe mantığı ve SAP iş akışı.'}</p></div>
                    <div><span>{en ? 'THE DIRECTION AHEAD' : 'GELECEĞE BAKIŞ'}</span><h3>{en ? 'AI across accounting' : 'Muhasebenin farklı iş akışları'}</h3><p>{en ? 'A vision to grow the product into new accounting scenarios.' : 'Yeni muhasebe senaryolarına doğru genişletmeyi hedeflediğimiz bir ürün.'}</p></div>
                </div>
            </div>
        </section>

        <section className={styles.section}>
            <div className={styles.wrap + ' ' + styles.faqGrid}>
                <div><p className={styles.eyebrow}>{en ? 'LET’S GET TO KNOW EACH OTHER' : 'BİRBİRİMİZİ TANIYALIM'}</p><h2>{en ? 'Your business.' : 'Sizin işiniz.'}<br /><em>{en ? 'Your questions.' : 'Sizin sorularınız.'}</em></h2><Link className={styles.textLink} href={'/' + lang + '/services/sap-consulting/financial-solutions'}>{en ? 'Our SAP finance expertise' : 'SAP finans uzmanlığımız'}<ArrowUpRight aria-hidden="true" /></Link></div>
                <div className={styles.faq}>{t.faq.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
            </div>
        </section>

        <section className={styles.formSection}>
            <div className={styles.wrap + ' ' + styles.formGrid}>
                <div className={styles.formIntro}>
                    <p className={styles.eyebrow}>AIA</p>
                    <h2>{en ? 'Tell us about' : 'Muhasebenizin'}<br /><em>{en ? 'your accounting.' : 'işini konuşalım.'}</em></h2>
                    <p>{en ? 'Share the work that takes your team’s time. Let’s talk about the AI we can build for your business.' : 'Ekibinizin zamanını alan işleri anlatın. İşletmeniz için geliştirebileceğimiz yapay zekâyı birlikte konuşalım.'}</p>
                    <a className={styles.textLink} href="mailto:info@btpsolution.com">info@btpsolution.com<ArrowUpRight aria-hidden="true" /></a>
                </div>
                <ContactForm lang={lang} purpose="apd" tone="light" />
            </div>
        </section>
    </div>;
}
