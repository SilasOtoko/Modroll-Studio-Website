import { useEffect, useRef, useState } from 'react';
import styles from './FadeInOnScroll.module.scss';

// Flips a `shown` class when the element first scrolls into view — the CSS
// transition in the module does the animating. Used on cards and roadmap steps.
const visibleAmount = 0.15;
const triggerMargin = '0px 0px -40px'; // don't trigger in the viewport's bottom 40px

export default function FadeInOnScroll({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: visibleAmount, rootMargin: triggerMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const base = shown ? `${styles.reveal} ${styles.shown}` : styles.reveal;
  const classes = className ? `${base} ${className}` : base;

  return (
    <div ref={ref} className={classes} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}
