import Card from "@/components/Card";
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
      <div
        className="grid grid-cols-3 gap-10 sm:gap-8 place-items-center max-sm:pb-4"
        dir="ltr"
      >
        {Object.values(SkillsList).map((item, index) => (
          <Image
            key={index}
            src={item.iconPath}
            alt={item.name}
            height={50}
            width={50}
            className="h-14 w-14 transition-all hover:scale-110 dark:brightness-50 dark:saturate-0 dark:invert"
          />
        ))}
      </div>
    </Card>
  );
}
