import type { Metadata } from "next";
import { Allura } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: "400",
});

const themeScript = `
  (function () {
    try {
      const savedTheme = localStorage.getItem("portfolio-theme");
      const theme = savedTheme || "light";
      document.documentElement.dataset.theme = theme;
    } catch (error) {}
  })();
`;

export const metadata: Metadata = {
  title: "Yulna | Frontend Developer",
  description: "Yuliana's developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
      </head>

      <body className={allura.variable}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
