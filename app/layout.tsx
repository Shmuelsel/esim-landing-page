import type { Metadata } from 'next';
import { Heebo } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AccessibilityWidget from '@/components/accessibility/AccessibilityWidget';
import { siteConfig } from '@/config/site';

const heebo = Heebo({ subsets: ['hebrew', 'latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — eSIM לחו״ל`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} — eSIM לחו״ל`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'he_IL',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.className} bg-white text-gray-900 antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-70 focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:font-bold focus:text-white"
        >
          דילוג לתוכן הראשי
        </a>
        <Navbar />
        {/* pt-16 clears the fixed navbar */}
        <main id="main-content" className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
        <AccessibilityWidget />
      </body>
    </html>
  );
}
