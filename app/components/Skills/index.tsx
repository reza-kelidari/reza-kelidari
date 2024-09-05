import Card from "@/components/Card";
import styles from "./styles.module.scss";
import Image from "next/image";
import { SkillsList } from "@/static/Skills";

/**
 * Renders a grid of skills
 *
 * @returns {JSX.Element}
 */
export default function Skills(): JSX.Element {
  return (
    <Card title={["مهارت‌های", "من"]}>
      <div className={styles.list}>
        {Object.values(SkillsList).map((item, index) => (
          <Image
            key={index}
            src={item.iconPath}
            alt={item.name}
            height={50}
            width={50}
            className={styles.item}
          />
        ))}
      </div>
    </Card>
  );
}
