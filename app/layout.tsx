import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "pixel-retroui/dist/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clean Code Guide",
  description:
    "A guide to writing clean, readable, and maintainable code. Learn best practices, principles, and tips for better coding.",
  metadataBase: new URL("https://codeclean.vercel.app/"),
  keywords: [
    "clean code",
    "coding best practices",
    "software development",
    "code readability",
    "refactoring",
    "design principles",
    "DRY",
    "SOLID",
    "KISS",
    "YAGNI",
    "maintainable code",
  ],
  authors: [{ name: "Shaikh Rumman Fardeen" }],
  creator: "Shaikh Rumman Fardeen",
  publisher: "Clean Code Guide",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codeclean.vercel.app/",
    siteName: "Clean Code Guide",
    title: "Clean Code Guide - Write Better, Maintainable Code",
    description:
      "Master clean coding principles like DRY, SOLID, KISS, and YAGNI. Improve code readability and maintainability.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Clean Code Guide - Best Practices for Developers",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.ico" sizes="any" />
      <body className={`${inter.className} h-full overflow-y-auto`}>
        <div className="relative min-h-screen bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
          {children}
        </div>
      </body>
    </html>
  );
}
