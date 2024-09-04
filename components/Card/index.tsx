import styles from "./styles.module.scss";
import { CardProps } from "./types";

export default function Card({ children, title, vertical }: CardProps) {
  return (
    <div className={`${styles.card} ${vertical && styles.vertical}`}>
      <div className={styles.titleBar}>
        <h1 className={styles.title}>{title}</h1>
        <h1 className={styles.title}>من</h1>
      </div>
      {children}
    </div>
  );
}
