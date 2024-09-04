import Card from "@/components/Card";
import styles from "./styles.module.scss";
import Image from "next/image";
import { SkillType } from "@/app/api/skills/types";

export default async function Skills() {
  const skillsData = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/skills"
  );
  const skills: SkillType[] = await skillsData.json();

  return (
    <section className={styles.skills}>
      <Card title="مهارت‌های">
        <div className={styles.list}>
          {skills.map((skill: SkillType) => (
            <Image src={skill.icon} alt={skill.name} height={50} width={50} />
          ))}
        </div>
      </Card>
    </section>
  );
}
