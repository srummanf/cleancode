import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "pixel-retroui/dist/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clean Code",
  description:
    "Clean Code is a retro themed website for preaching about Clean Code .",
  
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
