import Card from "@/components/Card";
import styles from "./styles.module.scss";
import { AbilitiesList } from "@/static/Abilities";

/**
 * Renders a list of my abilities for Home page
 *
 * @returns {JSX.Element}
 */
export default function Details(): JSX.Element {
  return (
    <Card title={["مهارت‌های", "فردی من"]}>
      <div className={styles.list}>
        {AbilitiesList.map((item, index) => (
          <div key={index} className={styles.item}>
            <span>{item.name}</span>
            <div className={styles.bar}>
              <span
                className={styles.line}
                style={{ width: `${item.percent}%` }}
              ></span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
