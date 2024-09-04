import Card from "@/components/Card";
import styles from "./styles.module.scss";
import Image from "next/image";
import { skillsList } from "@/static/Skills";

export default function Skills() {
  return (
    <section className={styles.skills}>
      <Card title="مهارت‌های">
        <div className={styles.list}>
          {Object.values(skillsList).map((item, index) => (
            <Image
              key={index}
              src={item.iconName}
              alt={item.name}
              height={50}
              width={50}
            />
          ))}
        </div>
      </Card>
    </section>
  );
}
