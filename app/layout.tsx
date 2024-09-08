import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "رضا کلیدری | توسعه دهنده فرانت اند",
  description:
    "سلام، من رضا کلیدری هستم و این رزومه ی شخصی من هستش، شامل مشخصات من، نمونه کار های من، مهارت های من، روش های ارتباط با من، و...",
  authors: [{ name: "رضا کلیدری", url: "https://github.com/reza-kelidari" }],
  keywords: [
    "رضا کلیدری",
    "کلیدری",
    "رضا",
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
  other: {
    "google-site-verification": "Z0S9zls7euBvZaDeMnR8X8JxUYKWHjEKiIULDXhTcz8",
  },
  robots: "all",
  openGraph: {
    type: "website",
    title: "رضا کلیدری | توسعه دهنده فرانت اند",
    description:
      "سلام، من رضا کلیدری هستم و این رزومه ی شخصی من هستش، شامل مشخصات من، نمونه کار های من، مهارت های من، روش های ارتباط با من، و...",
    url: "https://reza-kelidari.github.io/reza-kelidari",
    images: "https://reza-kelidari.github.io/reza-kelidari/images/logo.png",
    countryName: "iran",
    locale: "fa",
    siteName: "رضا کلیدری | توسعه دهنده فرانت اند",
  },
  twitter: {
    title: "رضا کلیدری | توسعه دهنده فرانت اند",
    description:
      "سلام، من رضا کلیدری هستم و این رزومه ی شخصی من هستش، شامل مشخصات من، نمونه کار های من، مهارت های من، روش های ارتباط با من، و...",
    site: "https://reza-kelidari.github.io/reza-kelidari",
    creator: "رضا کلیدری",
    images: "https://reza-kelidari.github.io/reza-kelidari/images/logo.png",
  },
  icons: "https://reza-kelidari.github.io/reza-kelidari/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>{children}</body>
    </html>
  );
}
