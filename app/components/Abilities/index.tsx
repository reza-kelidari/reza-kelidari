import Card from "@/components/Card";
import { AbilitiesList } from "@/static/Abilities";

/**
 * Renders a list of my abilities for Home page
 *
 * @returns {JSX.Element}
 */
export default function Details(): JSX.Element {
  return (
    <Card title={["مهارت‌های", "فردی من"]}>
      <div className="flex flex-col gap-4 w-full">
        {AbilitiesList.map((item, index) => (
          <div key={index} className="flex items-center justify-between sm:gap-6">
            <span>{item.name}</span>
            <div className="w-36 rounded-full bg-zinc-300 dark:bg-zinc-800 p-1">
              <span
                className="h-2 bg-zinc-600 dark:bg-zinc-500 block rounded-full"
                style={{ width: `${item.percent}%` }}
              ></span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
