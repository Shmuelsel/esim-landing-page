import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

// 2. הגדרת הפונט
const heebo = Heebo({ subsets: ["hebrew", "latin"] });

export const metadata: Metadata = {
  title: "eSIM Israel - גלישה בחו״ל",
  description: "חבילות גלישה בחו״ל במחירים משתלמים",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <Navbar />
      <body className={heebo.className}>{children}</body>
      <Footer />
    </html>
  );
}