import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import { Language } from "@/types/language";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Charlie Henin - Full Stack Developer",
  description:
    "Professional portfolio of Charlie Henin, Full Stack Developer with 7+ years of experience in React, Node.js, and modern web technologies.",
  keywords: [
    "Charlie Henin",
    "Full Stack Developer",
    "React",
    "Node.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Charlie Henin" }],
  creator: "Charlie Henin",
  publisher: "Charlie Henin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.charliehenin.com",
    title: "Charlie Henin - Full Stack Developer",
    description:
      "Professional portfolio of Charlie Henin, Full Stack Developer with 7+ years of experience in React, Node.js, and modern web technologies.",
    siteName: "Charlie Henin Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Charlie Henin - Full Stack Developer",
    description:
      "Professional portfolio of Charlie Henin, Full Stack Developer with 7+ years of experience in React, Node.js, and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps): React.JSX.Element => {
  return (
    <html lang={Language.EN} className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <LanguageProvider>
          <Navigation />
          <main className="min-h-screen">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
};

export default RootLayout;
