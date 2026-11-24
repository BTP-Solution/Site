import { FileText, ArrowUpRight } from 'lucide-react';
import styles from './Marketing.module.css';
import AiaWordmark from './AiaWordmark';

export default function ProcessIllustration({ lang }: { lang: string }) {
    const en = lang === 'en';
    return <figure className={styles.aiVisual} aria-label={en ? 'Incoming invoices, AIA and SAP' : 'Gelen fatura, AIA ve SAP'}>
        <div className={styles.orbit} aria-hidden="true" />
        <div className={styles.orbitInner} aria-hidden="true" />
        <svg className={styles.connections} viewBox="0 0 520 480" fill="none" aria-hidden="true">
            <path d="M120 150C120 230 260 140 260 250S415 290 415 355" stroke="#9fb6d2" strokeWidth="1.5" />
            <path d="M60 360C150 360 140 250 260 250S350 120 450 120" stroke="#b8cbe0" strokeWidth="1" strokeDasharray="4 7" />
            <circle cx="60" cy="360" r="5" fill="#3463ac" /><circle cx="450" cy="120" r="5" fill="#3463ac" />
        </svg>
        <div className={styles.invoicePaper}>
            <div className={styles.paperTop}><FileText size={22} strokeWidth={1.3} /><ArrowUpRight size={16} /></div>
            <strong>{en ? 'Incoming invoice' : 'Gelen fatura'}</strong>
            <span>{en ? 'Your business data' : 'İşletmenizin verisi'}</span>
            <div className={styles.paperLines} aria-hidden="true"><i /><i /><i /></div>
        </div>
        <div className={styles.aiCore}><AiaWordmark inverse /><small>{en ? 'BUILT AROUND YOU' : 'SİZİN İŞİNİZE ÖZEL'}</small></div>
        <div className={styles.sapNode}><span>SAP</span><small>{en ? 'Your business system' : 'İş sisteminiz'}</small></div>
        <figcaption className={styles.visualLabel}>{en ? 'INVOICE AUTOMATION FOR SAP' : 'SAP İÇİN FATURA OTOMASYONU'}<span>BTP SOLUTION</span></figcaption>
    </figure>;
}
