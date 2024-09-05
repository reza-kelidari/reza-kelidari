import styles from "./styles.module.scss";
import { CardProps } from "./types";

export default function Card({ children, title, vertical }: CardProps) {
  return (
    <section className={`${styles.card} ${vertical && styles.vertical}`}>
      <div className={styles.titleBar}>
        {title.map((item) => (
          <h1 className={styles.title}>{item}</h1>
        ))}
      </div>
      {children}
    </section>
  );
}
