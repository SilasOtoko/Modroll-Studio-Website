import styles from './CardArt.module.scss';

// Hand-drawn SVG accent art: a pip die (kind="die") or an arcane ring around a
// symbol (kind="sigil"). Used on the "What we're about" cards on Home.
const gold = 'var(--color-primary)';
const ember = 'var(--color-ember)';

export default function CardArt({ kind = 'die', symbol = '✦', size = 64 }) {
  if (kind === 'sigil') {
    return (
      <svg
        className={styles.emblem}
        width={size}
        height={size}
        viewBox="0 0 64 64"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="32" cy="32" r="26" fill="none" stroke={gold} strokeWidth="1.5" opacity="0.55" />
        <circle cx="32" cy="32" r="21" fill="none" stroke={gold} strokeWidth="1" opacity="0.35" strokeDasharray="4 6" />
        <text x="32" y="40" textAnchor="middle" fontSize="22" fill={gold} fontFamily="Georgia, serif">
          {symbol}
        </text>
      </svg>
    );
  }

  return (
    <svg
      className={styles.emblem}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="12" y="12" width="40" height="40" rx="8" fill="#33230f" stroke={gold} strokeWidth="2.5" transform="rotate(12 32 32)" />
      <circle cx="24" cy="24" r="4" fill={gold} />
      <circle cx="32" cy="34" r="4" fill={gold} />
      <circle cx="40" cy="44" r="4" fill={ember} />
    </svg>
  );
}
