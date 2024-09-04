import React, { ReactNode } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Vazirmatn } from "next/font/google";
import { ButtonProps } from "./types";

const vazirmatn = Vazirmatn({ subsets: ["latin"] });

/**
 * Renders a customized button, also supports icon
 *
 * @returns {JSX.Element}
 */
export default function Button({
  children,
  icon,
}: ButtonProps): JSX.Element {
  return (
    <button className={`${styles.button} ${vazirmatn.className}`}>
      <span className={styles.text}>{children}</span>
      {icon && <Image src={icon} alt="icon" width={25} height={25} />}
    </button>
  );
}
