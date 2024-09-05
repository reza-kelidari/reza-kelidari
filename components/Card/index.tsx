import styles from "./styles.module.scss";
import { CardProps } from "./types";

export default function Card({ children, title, vertical, id }: CardProps) {
  return (
    <section
      className={`${styles.card} ${vertical && styles.vertical}`}
      id={id}
    >
      <div className={styles.titleBar}>
        {title.map((item, index) => (
          <h2 key={index} className={styles.title}>
            {item}
          </h2>
        ))}
      </div>
      {children}
    </section>
  );
}
