import React, { ReactNode } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Vazirmatn } from "next/font/google";

const vazirmatn = Vazirmatn({ subsets: ["latin"] });

export default function Button({
  children,
  icon,
}: {
  children: ReactNode;
  icon?: string;
}) {
  return (
    <button className={`${styles.button} ${vazirmatn.className}`}>
      <span className={styles.text}>{children}</span>
      {icon && <Image src={icon} alt="icon" width={25} height={25} />}
    </button>
  );
}
