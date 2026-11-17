import type { Metadata } from "next";
import { Allura } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-allura",
});

const themeScript = `
  try {
    const savedTheme = localStorage.getItem("portfolio-theme");
    document.documentElement.dataset.theme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : "dark";
  } catch {
    document.documentElement.dataset.theme = "dark";
  }
`;

export const metadata: Metadata = {
  title: "Yulna | Fullstack Developer",
  description: "Portfolio of Yulna, a developer.",
  icons: {
    icon: "/icons/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        id="theme-script"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: themeScript }}
      />
      <body className={allura.variable}>{children}</body>
    </html>
  );
}
