import glyph from '../../assets/modroll-glyph-small.svg';
import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <span className={styles.logo}>
      <img className={styles.glyph} src={glyph} alt="" width="28" height="28" aria-hidden="true" />
      <span className={styles.wordmark}>
        Modroll <span className={styles.sub}>Studio</span>
      </span>
    </span>
  );
}
