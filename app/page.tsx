import styles from "./page.module.scss";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Templates from "./components/Templates";
import Abilities from "./components/Abilities";
import Contact from "./components/Contact";

/**
 * Renders home page of site
 *
 * @returns {JSX.Element}
 */
export default function Home(): JSX.Element {
  return (
    <main className={styles.home}>
      <Hero />
      <About />
      <Skills />
      <Templates />
      <Abilities />
      <Contact />
    </main>
  );
}
