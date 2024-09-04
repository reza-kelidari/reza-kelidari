import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.scss";

const vazirmatn = Vazirmatn({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "رضا کلیدری",
  description:
    "رزومه ی شخصی من، شامل مشخصات من، نمونه کار های من، مهارت های من، روش های ارتباط با من، و...",
  authors: [{ name: "رضا کلیدری", url: "https://github.com/reza-kelidari" }],
  keywords: [
    "رضا کلیدری",
    "برنامه نویس",
    "front-end",
    "فرانت اند",
    "استخدام برنامه نویس",
    "طراحی سایت",
    "سایت",
    "سئو",
    "سایت فروشگاهی",
    "سایت فروش",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className={vazirmatn.className}>{children}</body>
    </html>
  );
}
