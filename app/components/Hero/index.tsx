import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";
import Button from "@/components/Button";

/**
 * Renders first section of Home page, contains
 * a profile iamge and welcome text
 *
 * @returns {JSX.Element}
 */
export default function Hero(): JSX.Element {
  return (
    <section className={styles.hero}>
      <Image
        src="images/logo.png"
        alt="Profile"
        width={200}
        height={200}
        className={styles.profile}
        loading="eager"
      />

      <div className={styles.container}>
        <h3 className={styles.welcome}>سلام 👋</h3>
        <h1 className={styles.title}>من رضا کلیدری هستم</h1>
        <h2 className={styles.subTitle}>
          یه توسعه دهنده‌ی تازه‌کار Front-End 👨‍💻
        </h2>

        <br />

        <Link href="#templates" className={styles.link}>
          <Button icon="icons/arrow-up-left.svg">نمونه‌کار ها</Button>
        </Link>
      </div>
    </section>
  );
}
