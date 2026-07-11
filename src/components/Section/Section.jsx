import styles from './Section.module.scss';

export default function Section({ title, lead, width = 'lg', children }) {
  return (
    <section className={`${styles.section} ${styles[width]}`}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {lead && <p className={styles.lead}>{lead}</p>}
      {children}
    </section>
  );
}
