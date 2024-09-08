import React, { ReactNode } from "react";
import Image from "next/image";
import { Vazirmatn } from "next/font/google";
import { ButtonProps } from "./types";

const vazirmatn = Vazirmatn({ subsets: ["latin"] });

/**
 * Renders a customized button, also supports icon
 *
 * @returns {JSX.Element}
 */
export default function Button({ children, icon }: ButtonProps): JSX.Element {
  return (
    <button
      className={`flex gap-4 bg-zinc-300 dark:bg-zinc-700 px-8 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-zinc-400 dark:hover:shadow-zinc-800 ${vazirmatn.className}`}
    >
      <span className="text-lg">{children}</span>
      {icon && (
        <Image
          src={icon}
          alt="icon"
          width={25}
          height={25}
          className="dark:invert"
        />
      )}
    </button>
  );
}
