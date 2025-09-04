
// app/components/ui/StarsBackground.tsx
import styles from '@/app/styles/stars.module.css';

const StarsBackground = () => {
  return (
    // This container ensures the stars cover the entire parent element.
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div className={styles.stars1}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>
      <div className={styles.stars4}></div>
      <div className={styles.stars5}></div>
      <div className={styles.stars6}></div>
    </div>
  );
};

export default StarsBackground;