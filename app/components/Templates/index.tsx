import Card from "@/components/Card";
import { TemplatesList } from "@/static/Templates";
import Image from "next/image";

/**
 * Renders a grid of template projects for Home page
 *
 * @returns {JSX.Element}
 */
export default function Templates(): JSX.Element {
  return (
    <Card title={["نمونه‌کارهای", "من"]} vertical id="templates">
      <div className="grid sm:grid-cols-2 gap-8">
        {TemplatesList.map((template, index) => (
          <div
            className="flex flex-col gap-4 rounded-3xl overflow-hidden shadow-md sm:hover:shadow-lg shadow-zinc-300 hover:shadow-zinc-300 dark:shadow-zinc-800 hover:dark:shadow-zinc-800 group"
            key={index}
          >
            <div className="relative flex flex-col gap-4">
              <Image
                src={template.imagePath}
                alt={template.name}
                width={350}
                height={175}
                className="object-cover transition-all w-full h-auto sm:group-hover:blur-sm"
              />

              <div className="sm:absolute flex transition-all sm:opacity-0 sm:group-hover:opacity-100 justify-center gap-8 w-full h-fit inset-0 m-auto">
                {template.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    className="flex items-center gap-2 bg-zinc-300 dark:bg-zinc-950 hover:shadow-md sm:hover:shadow-zinc-400 sm:hover:dark:shadow-zinc-950 transition-all py-2 px-4 rounded-full"
                  >
                    <span>{link.name}</span>

                    <Image
                      src={link.icon}
                      height={20}
                      width={20}
                      alt={link.name}
                      className="dark:invert"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between px-4">
              <h4 className="text-lg">{template.name}</h4>

              <div className="flex flex-row-reverse">
                {template.tools.map((tool, index) => (
                  <div
                    key={index}
                    className="border-2 rounded-full object-cover h-10 w-10 border-zinc-300 dark:border-zinc-700 overflow-hidden bg-zinc-100 dark:bg-zinc-800 grid place-content-center -ms-4 sm:group-hover:-ms-2 transition-all"
                  >
                    <Image
                      src={tool.iconPath}
                      alt={tool.name}
                      width={25}
                      height={25}
                    />
                  </div>
                ))}
              </div>
            </div>

            <p className="p-4 text-justify">{template.desc}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
