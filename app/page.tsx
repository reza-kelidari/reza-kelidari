import Image from "next/image";
import styles from "./page.module.scss";
import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.hero}>
        <Image
          src="/images/logo.png"
          alt="Profile"
          width={200}
          height={200}
          className={styles.profile}
        />

        <div className={styles.container}>
          <h3 className={styles.welcome}>سلام 👋</h3>
          <h1 className={styles.title}>من رضا کلیدری هستم</h1>
          <h2 className={styles.subTitle}>
            توسعه دهنده‌ی تازه‌کار Front-End 👨‍💻
          </h2>

          <br />

          <Link href="#templates">
            <Button icon="/icons/arrow_up_left.svg">نمونه‌کار ها</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
