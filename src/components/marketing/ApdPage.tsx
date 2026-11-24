import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Info, Check } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { getApdContent } from '@/lib/i18n/services/apdProduct';
import ProcessIllustration from './ProcessIllustration';
import styles from './Marketing.module.css';

export default function ApdPage({ lang }: { lang: string }) {
    const en = lang === 'en';
    const t = getApdContent(lang);
    return <div className={styles.site}>
        <section className={`${styles.hero} ${styles.apdHero}`}>
            <div className={styles.wrap}>
                <nav className={styles.breadcrumb} aria-label={en ? 'Breadcrumb' : 'Sayfa yolu'}><Link href={`/${lang}`}>{en ? 'Home' : 'Ana sayfa'}</Link><span aria-hidden="true">/</span><span aria-current="page">APD Automation</span></nav>
                <div className={styles.heroGrid}>
                    <div>
                        <p className={styles.eyebrow}>{en ? 'APD / AUTOMATIC POSTING DOCUMENT' : 'APD / AUTOMATIC POSTING DOCUMENT'}</p>
                        <h1>{en ? 'Document automation.' : 'Belge otomasyonu.'}<br /><em>{en ? 'With a SAP perspective.' : 'SAP bakış açısıyla.'}</em></h1>
                        <p className={styles.lead}>{en ? 'We are developing APD to bring document processing and SAP posting into a connected workflow. Our focus is on reducing manual steps while considering the controls your process needs.' : 'Belge işleme ve SAP kayıt süreçlerini bir araya getirmek için APD’yi geliştiriyoruz. Odağımız, sürecin ihtiyaç duyduğu kontrolleri gözeterek manuel adımları azaltmak.'}</p>
                        <div className={styles.actions}><a href="#contact-form" className={styles.primary}>{en ? 'Discuss APD' : 'APD’yi birlikte değerlendirelim'}<ArrowRight aria-hidden="true" /></a><a href="#apd-features" className={styles.secondary}>{en ? 'View the scope' : 'Kapsamı inceleyin'}</a></div>
                        <p className={styles.note}>{t.stageTitle} · {en ? 'Not yet live in a customer system.' : 'Henüz müşteri sisteminde canlı değildir.'}</p>
                    </div>
                    <ProcessIllustration lang={lang} />
                </div>
                <aside className={styles.stageNotice}><Info aria-hidden="true" /><p><strong>{t.stageTitle}</strong>{t.stageDescription}</p></aside>
            </div>
        </section>
        <section className={`${styles.section} ${styles.sectionWhite}`}>
            <div className={styles.wrap}>
                <p className={styles.eyebrow}>{en ? 'THE PROCESS WE ARE WORKING TOWARDS' : 'ÜZERİNDE ÇALIŞTIĞIMIZ YAKLAŞIM'}</p>
                <div className={styles.sectionHead}><h2>{en ? 'A document is the start.' : 'Belge bir başlangıç.'}<br />{en ? 'The process is the whole picture.' : 'Asıl konu, sürecin bütünü.'}</h2><p>{en ? 'Data extraction, business rules and the SAP transaction need to be considered together. This is the proposed workflow behind APD.' : 'Veri okuma, iş kuralları ve SAP işlemi birlikte ele alınmalı. APD için hedeflediğimiz akışı bu üç adım oluşturuyor.'}</p></div>
                <div className={styles.steps}>{t.flow.map(([title, body], i) => <article className={styles.step} key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
            </div>
        </section>
        <section className={styles.section} id="apd-features">
            <div className={styles.wrap}>
                <p className={styles.eyebrow}>{en ? 'DEVELOPMENT SCOPE' : 'GELİŞTİRME KAPSAMI'}</p>
                <div className={styles.sectionHead}><h2>{en ? 'A clear scope.' : 'Kapsam açık.'}<br />{en ? 'A shared understanding.' : 'Beklenti ortak.'}</h2><p>{en ? 'Suitability starts with your documents, your SAP environment and your business rules.' : 'Uygunluğu belgeleriniz, SAP ortamınız ve iş kurallarınız üzerinden değerlendiriyoruz.'}</p></div>
                <table className={styles.scopeTable}>
                    <caption className="sr-only">{en ? 'APD development status and evaluation scope' : 'APD geliştirme durumu ve değerlendirme kapsamı'}</caption>
                    <thead><tr><th scope="col">{en ? 'Area' : 'Başlık'}</th><th scope="col">{en ? 'Status' : 'Durum'}</th><th scope="col">{en ? 'Scope' : 'Kapsam'}</th></tr></thead>
                    <tbody>{t.scope.map(([area, status, detail]) => <tr key={area}><td>{area}</td><td>{status}</td><td>{detail}</td></tr>)}</tbody>
                </table>
            </div>
        </section>
        <section className={`${styles.section} ${styles.dark}`}>
            <div className={`${styles.wrap} ${styles.split}`}>
                <div><p className={styles.eyebrow}>{en ? 'BUILT WITH A PROCESS PERSPECTIVE' : 'SÜREÇ ODAKLI ÜRÜN GELİŞTİRME'}</p><h2>{en ? 'What should we evaluate together?' : 'Birlikte neyi değerlendirelim?'}</h2><p>{en ? 'A useful evaluation needs a specific scenario. Start with the document flow that creates the most manual work for your team.' : 'Anlamlı bir değerlendirme için belirli bir senaryodan başlamak gerekir. Ekibinizin en çok manuel iş yaptığı belge akışını birlikte ele alalım.'}</p><Link href={`/${lang}/services/sap-consulting/financial-solutions`} className={styles.textLink}>{en ? 'Explore our financial consulting services' : 'Finansal danışmanlık hizmetlerimizi inceleyin'}<ArrowUpRight aria-hidden="true" /></Link></div>
                <ol className={styles.numberedList}>{(en ? [
                    ['An example document', 'Which data fields are needed? How much do formats and document quality vary?'],
                    ['An exception scenario', 'What should happen when an amount does not match, a field is missing or a document is duplicated?'],
                    ['A target SAP transaction', 'Which record is needed, which controls apply and how will the outcome be verified?'],
                ] : [
                    ['Bir örnek belge', 'Hangi alanlar gerekli? Formatlar ve belge kalitesi ne kadar değişiyor?'],
                    ['Bir istisna senaryosu', 'Tutar uyuşmadığında, alan eksik olduğunda veya belge tekrar geldiğinde ne olmalı?'],
                    ['Bir hedef SAP işlemi', 'Hangi kayıt oluşturulmalı, hangi kontroller uygulanmalı ve sonuç nasıl doğrulanmalı?'],
                ]).map(([title, body], i) => <li key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol>
            </div>
        </section>
        <section className={`${styles.section} ${styles.sectionWhite}`}>
            <div className={`${styles.wrap} ${styles.split}`}>
                <div><p className={styles.eyebrow}>{en ? 'YOUR QUESTIONS' : 'MERAK EDİLENLER'}</p><h2>{en ? 'Before we begin.' : 'Başlamadan önce.'}</h2><p>{en ? 'Product status, SAP compatibility and the next steps.' : 'Ürünün durumu, SAP uygunluğu ve sonraki adımlar.'}</p></div>
                <div className={styles.faq}>{t.faq.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
            </div>
        </section>
        <section className={styles.formSection}>
            <div className={`${styles.wrap} ${styles.split}`}>
                <div className={styles.formIntro}>
                    <p className={styles.eyebrow}>{en ? 'LET’S DISCUSS APD' : 'APD’Yİ BİRLİKTE KONUŞALIM'}</p>
                    <h2>{en ? 'Start with your document workflow.' : 'Sizin belge akışınızla başlayalım.'}</h2>
                    <p>{en ? 'Tell us about your process and SAP environment. Let’s clarify the current product scope and the next evaluation step.' : 'Sürecinizi ve SAP ortamınızı paylaşın. Ürünün güncel kapsamını ve bir sonraki değerlendirme adımını birlikte netleştirelim.'}</p>
                    <ul>{(en ? ['Your current document workflow', 'SAP environment and target transaction', 'Scope and evaluation criteria'] : ['Mevcut belge akışınız', 'SAP ortamı ve hedef işlem', 'Kapsam ve değerlendirme ölçütleri']).map(item => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
                    <p className={styles.note}>{t.stageDescription}</p>
                </div>
                <ContactForm lang={lang} purpose="apd" tone="light" />
            </div>
        </section>
    </div>;
}
