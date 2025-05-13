import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LLM in Math Modeling",
  description: "Insights on using Large Language Models for Mathematical Modeling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.className} bg-gray-100 text-gray-800`}>
        {children}
        <footer className="text-center p-4 text-sm text-gray-500 border-t border-gray-300 mt-8">
          © 2025 Manus AI. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

