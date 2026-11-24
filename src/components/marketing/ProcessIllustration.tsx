import { ArrowRight, FileText, ScanLine, Database } from 'lucide-react';
import styles from './Marketing.module.css';

/** An explicitly illustrative product direction, never a live product screenshot. */
export default function ProcessIllustration({ lang }: { lang: string }) {
    const en = lang === 'en';
    return <figure className={styles.visual} aria-label={en ? 'Illustrative APD workflow: document, review, SAP' : 'Temsili APD akışı: belge, kontrol, SAP'}>
        <div className={styles.visualTop}>
            <span>BTP SOLUTION / {en ? 'PRODUCT DEVELOPMENT' : 'ÜRÜN GELİŞTİRME'}</span>
            <span className={styles.status}>{en ? 'In development' : 'Geliştirme aşamasında'}</span>
        </div>
        <div className={styles.visualWord}>APD<span style={{ color: '#8eafd5' }}>.</span></div>
        <p className={styles.visualSub}>Automatic Posting Document</p>
        <div className={styles.flow}>
            <div className={styles.flowStep}><FileText aria-hidden="true" /><span>{en ? 'Document' : 'Belge'}</span></div>
            <ArrowRight className={styles.flowArrow} aria-hidden="true" />
            <div className={styles.flowStep}><ScanLine aria-hidden="true" /><span>{en ? 'Review' : 'Kontrol'}</span></div>
            <ArrowRight className={styles.flowArrow} aria-hidden="true" />
            <div className={styles.flowStep}><Database aria-hidden="true" /><span>SAP</span></div>
        </div>
        <figcaption className={styles.visualBottom}>
            <span>{en ? 'Proposed workflow · illustrative diagram' : 'Hedeflenen akış · temsili gösterim'}</span>
            <span>{en ? 'From document to process' : 'Belgeden sürece'}</span>
        </figcaption>
    </figure>;
}
