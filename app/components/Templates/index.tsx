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
    <section className={styles.templates} id="templates">
      <Card title="نمونه‌کار های" vertical>
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
                    <a href={template.demo} target="_blank">
                      <span>دمو</span>

                      <Image
                        src="icons/arrow-up-left.svg"
                        height={20}
                        width={20}
                        alt="Arrow"
                      />
                    </a>
                  )}

                  <a href={template.github} target="_blank">
                    <span>گیتهاب</span>

                    <Image
                      src="icons/github.svg"
                      height={20}
                      width={20}
                      alt="Arrow"
                    />
                  </a>
                </div>
              </div>

              <div className={styles.details}>
                <h3 className={styles.name}>{template.name}</h3>

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
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
