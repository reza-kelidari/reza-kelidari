import styles from "./page.module.scss";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className={styles.home}>
      <Hero />
    </main>
  );
}
