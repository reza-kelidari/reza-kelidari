import styles from "./page.module.scss";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <main className={styles.home}>
      <Hero />
      <About />
    </main>
  );
}
