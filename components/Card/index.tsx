import { CardProps } from "./types";

export default function Card({ children, title, vertical, id }: CardProps) {
  return (
    <section
      className={`flex max-sm:flex-col items-center gap-10 sm:gap-20 p-8 sm:p-16 bg-zinc-100 dark:bg-zinc-900 rounded-3xl w-full sm:max-w-3xl sm:w-auto ${
        vertical && "flex-col"
      }`}
      id={id}
    >
      <div
        className={`flex max-sm:flex-row gap-2 ${
          vertical ? "flex-row items-center" : "flex-col"
        }`}
      >
        {title.map((item, index) => (
          <h2 key={index} className="text-3xl md:text-4xl">
            {item}
          </h2>
        ))}
      </div>
      {children}
    </section>
  );
}
