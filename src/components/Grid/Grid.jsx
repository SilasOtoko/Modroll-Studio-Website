import styles from './Grid.module.scss';

export default function Grid({ children, cols = 3, gap = 'md' }) {
  return (
    <div className={`${styles.grid} ${styles[gap]}`} style={{ '--grid-cols': cols }}>
      {children}
    </div>
  );
}
