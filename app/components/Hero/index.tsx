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
    <section className="w-full h-screen flex max-sm:flex-col items-center justify-center gap-12 -mb-20 sm:-mb-40">
      <Image
        src="images/logo.png"
        alt="Profile"
        width={200}
        height={200}
        loading="eager"
      />

      <div className="flex flex-col items-center justify-center gap-8">
        <h3 className="text-2xl opacity-50">سلام 👋</h3>
        <h1 className="text-4xl sm:text-5xl">من رضا کلیدری هستم</h1>
        <h2 className="text-xl sm:text-3xl opacity-50">
          یه توسعه دهنده‌ی تازه‌کار Front-End 👨‍💻
        </h2>

        <br />

        <Link href="#templates">
          <Button icon="icons/arrow-up-left.svg">نمونه‌کار ها</Button>
        </Link>
      </div>
    </section>
  );
}
