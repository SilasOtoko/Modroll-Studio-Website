import styles from './Footer.module.scss';

export default function Footer({ text, links = [] }) {
  return (
    <footer className={styles.footer}>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      {text && <p className={styles.text}>{text}</p>}
    </footer>
  );
}
