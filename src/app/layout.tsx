import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Космический калькулятор веса",
  description: "Рассчет веса на разных космических объектах",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta
          name="google-site-verification"
          content="pXS8zYShfWLuN_tmybHS6HmVl7otjJjoXSzq5q7ipp8"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Theme
          appearance="dark"
          accentColor="crimson"
          grayColor="sand"
          radius="large"
          scaling="95%"
        >
          {children}
        </Theme>
      </body>
    </html>
  );
}
