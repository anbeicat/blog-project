/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-25 18:52:20
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-05-25 19:00:28
 * @description: 
 * @FilePath: /qiao-portfolio-blog/app/layout.tsx
 */
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Qiao Portfolio Blog",
  description: "Frontend Developer Portfolio built with Next.js and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-gray-50 text-gray-900">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}