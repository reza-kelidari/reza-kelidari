import { ReactNode } from "react";
import styles from "./styles.module.scss";

export default function Card({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.titleBar}>
        <h1 className={styles.title}>{title}</h1>
        <h1 className={styles.title}>من</h1>
      </div>
      {children}
    </div>
  );
}
