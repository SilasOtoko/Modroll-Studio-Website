import styles from './Badge.module.scss';

export default function Badge({ children, tone = 'default' }) {
  const className = tone === 'default' ? styles.badge : `${styles.badge} ${styles[tone]}`;
  return <span className={className}>{children}</span>;
}
