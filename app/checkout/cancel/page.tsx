import type { Metadata } from 'next';
import Link from 'next/link';
import { mailtoUrl, siteConfig } from '@/config/site';

const { support } = siteConfig;

export const metadata: Metadata = {
  title: 'התשלום לא הושלם',
  robots: { index: false, follow: false },
};

export default function CheckoutCancelPage() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto max-w-2xl px-4 text-center">
        <span className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-4xl">
          ⚠️
        </span>

        <h1 className="mb-3 text-3xl font-bold text-gray-900">התשלום לא הושלם</h1>

        <p className="mb-8 leading-relaxed text-gray-600">
          ההזמנה בוטלה או שהתשלום לא אושר, ולא בוצע כל חיוב. אפשר לחזור ולנסות שוב — הפרטים שמילאתם
          לא נשמרו, כך שיהיה צורך למלא אותם מחדש.
        </p>

        <div className="mb-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/checkout"
            className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white shadow-lg shadow-blue-200 transition-colors hover:bg-blue-700"
          >
            חזרה להשלמת ההזמנה
          </Link>
          <Link
            href="/#pricing"
            className="rounded-xl border border-gray-200 bg-white px-6 py-3 font-bold text-gray-800 transition-colors hover:bg-gray-100"
          >
            חזרה לחבילות הגלישה
          </Link>
        </div>

        <p className="text-sm leading-relaxed text-gray-500">
          התשלום נדחה שוב? נשמח לעזור —{' '}
          <a href={mailtoUrl} className="font-semibold text-blue-600 hover:underline">
            {support.email}
          </a>{' '}
          · {support.hours}.
        </p>
      </div>
    </div>
  );
}
