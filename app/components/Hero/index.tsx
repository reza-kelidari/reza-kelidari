import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/logo.png"
        alt="Profile"
        width={200}
        height={200}
        className={styles.profile}
        loading="eager"
      />

      <div className={styles.container}>
        <h3 className={styles.welcome}>سلام 👋</h3>
        <h1 className={styles.title}>من رضا کلیدری هستم</h1>
        <h2 className={styles.subTitle}>توسعه دهنده‌ی تازه‌کار Front-End 👨‍💻</h2>

        <br />

        <Link href="#templates">
          <Button icon="/icons/arrow-up-left.svg">نمونه‌کار ها</Button>
        </Link>
      </div>
    </section>
  );
}
