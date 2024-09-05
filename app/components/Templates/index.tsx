import Card from "@/components/Card";
import styles from "./styles.module.scss";
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
      <div className={styles.list}>
        {TemplatesList.map((template, index) => (
          <div className={styles.item} key={index}>
            <div className={styles.container}>
              <Image
                src={template.imagePath}
                alt={template.name}
                width={350}
                height={175}
                className={styles.banner}
              />

              <div className={styles.links}>
                {template.demo && (
                  <a
                    href={template.demo}
                    target="_blank"
                    className={styles.link}
                  >
                    <span>دمو</span>

                    <Image
                      src="icons/arrow-up-left.svg"
                      height={20}
                      width={20}
                      alt="Arrow"
                      className={styles.icon}
                    />
                  </a>
                )}

                <a
                  href={template.github}
                  target="_blank"
                  className={styles.link}
                >
                  <span>گیتهاب</span>

                  <Image
                    src="icons/github.svg"
                    height={20}
                    width={20}
                    alt="Github"
                    className={styles.icon}
                  />
                </a>
              </div>
            </div>

            <div className={styles.details}>
              <h4 className={styles.name}>{template.name}</h4>

              <div className={styles.tools}>
                {template.tools.map((tool, index) => (
                  <Image
                    src={tool.iconPath}
                    alt={tool.name}
                    key={index}
                    width={50}
                    height={50}
                    className={styles.icon}
                  />
                ))}
              </div>
            </div>

            <p className={styles.desc}>{template.desc}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
