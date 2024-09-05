import Card from "@/components/Card";
import styles from "./styles.module.scss";
import Image from "next/image";

/**
 * Renders a list of contact me details
 *
 * @returns {JSX.Element}
 */
export default function Contact(): JSX.Element {
  return (
    <Card title={["ارتباط", "با من"]}>
      <div className={styles.list}>
        <a href="mailto:re.kelidari@gmail.com" className={styles.item}>
          <div className={styles.titleBar}>
            <Image src="icons/email.svg" alt="Email" height={20} width={20} />
            <h4 className={styles.title}>ایمیل</h4>
          </div>
          <span className={styles.text}>re.kelidari@gmail.com</span>
        </a>

        <a href="tel:09938999748" className={styles.item}>
          <div className={styles.titleBar}>
            <Image src="icons/phone.svg" alt="Email" height={20} width={20} />
            <h4 className={styles.title}>تماس</h4>
          </div>
          <span className={styles.text}>0993 899 9748</span>
        </a>

        <a
          href="https://github.com/reza-kelidari/"
          target="_blank"
          className={styles.item}
        >
          <div className={styles.titleBar}>
            <Image src="icons/github.svg" alt="Email" height={20} width={20} />
            <h4 className={styles.title}>گیتهاب</h4>
          </div>
          <span className={styles.text}>@reza-kelidari</span>
        </a>

        <a
          href="https://www.linkedin.com/in/reza-kelidari/"
          target="_blank"
          className={styles.item}
        >
          <div className={styles.titleBar}>
            <Image
              src="icons/linkedin.svg"
              alt="Email"
              height={20}
              width={20}
            />
            <h4 className={styles.title}>لینکداین</h4>
          </div>
          <span className={styles.text}>@reza-kelidari</span>
        </a>
      </div>
    </Card>
  );
}
