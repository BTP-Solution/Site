import styles from './Marketing.module.css';

export default function AiaWordmark({ inverse = false }: { inverse?: boolean }) {
    return <span className={styles.wordmark + (inverse ? ' ' + styles.wordmarkInverse : '')} role="img" aria-label="AIA">
        <span aria-hidden="true">A</span><span aria-hidden="true">I</span><span aria-hidden="true">A</span>
    </span>;
}
