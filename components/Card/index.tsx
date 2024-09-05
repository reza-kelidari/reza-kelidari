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
          <h1 key={index} className={styles.title}>
            {item}
          </h1>
        ))}
      </div>
      {children}
    </section>
  );
}
