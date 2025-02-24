import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "pixel-retroui/dist/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clean Code",
  description:
    "A modern React component library for creating beautiful pixel-perfect retro interfaces. Build nostalgic UIs with TypeScript and Tailwind support.",
  metadataBase: new URL("https://www.retroui.io"),
  keywords: [
    "react",
    "ui library",
    "pixel art",
    "retro design",
    "react components",
    "tailwindcss",
    "typescript",
    "pixel perfect",
    "retro ui",
    "pixel ui",
  ],
  authors: [{ name: "RetroUI Team" }],
  creator: "RetroUI Team",
  publisher: "RetroUI",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.retroui.io",
    siteName: "Retro UI",
    title: "Retro UI - Build Pixel-Perfect React Interfaces",
    description:
      "Create beautiful retro-styled interfaces with our React component library. Pixel-perfect design meets modern development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Retro UI - React Component Library",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Retro UI - Pixelated React Components",
    description:
      "Build nostalgic interfaces with our pixel-perfect React component library",
    images: ["https://www.retroui.io/twitter-image.png"], // Full URL
    creator: "@duckwhocodes",
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
  verification: {
    google: "MXm7iq4vzEvSALdsCJ0-M-9v3wQ90Zk2swxR4c5y7hA",
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
