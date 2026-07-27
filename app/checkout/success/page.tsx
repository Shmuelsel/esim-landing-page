import type { Metadata } from 'next';
import Link from 'next/link';
import StoreButtons from '@/components/ui/StoreButtons';
import { mailtoUrl, siteConfig } from '@/config/site';

const { support } = siteConfig;

export const metadata: Metadata = {
  title: 'ההזמנה התקבלה',
  robots: { index: false, follow: false },
};

export default function CheckoutSuccessPage() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto max-w-2xl px-4 text-center">
        <span className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-4xl">
          ✅
        </span>

        <h1 className="mb-3 text-3xl font-bold text-gray-900">ההזמנה התקבלה, תודה!</h1>

        <p className="mb-8 leading-relaxed text-gray-600">
          התשלום אושר. קוד ההתקנה של ה-eSIM נשלח לכתובת הדוא״ל שהזנתם ויהיה זמין גם באפליקציה —
          בדרך כלל תוך מספר דקות, ולכל היותר בתוך 24 שעות. אם ההודעה לא הגיעה, כדאי לבדוק את תיקיית
          דואר הזבל (Spam).
        </p>

        <div className="mb-8 rounded-2xl border border-gray-100 bg-white p-6 text-right shadow-md">
          <h2 className="mb-3 text-lg font-bold text-gray-900">מה עכשיו?</h2>
          <ol className="list-decimal space-y-2 pr-5 leading-relaxed text-gray-700">
            <li>התקינו את האפליקציה והתחברו עם כתובת הדוא״ל שאיתה הזמנתם.</li>
            <li>סרקו את קוד ה-QR או הפעילו התקנה ישירה מתוך האפליקציה.</li>
            <li>
              הפעילו את החבילה עם הנחיתה ביעד — התוקף מתחיל בהפעלה הראשונה ברשת, לא במועד הרכישה.
            </li>
          </ol>
        </div>

        <div className="mb-10">
          <StoreButtons className="justify-center" />
        </div>

        <p className="text-sm leading-relaxed text-gray-500">
          שאלה או תקלה?{' '}
          <a href={mailtoUrl} className="font-semibold text-blue-600 hover:underline">
            {support.email}
          </a>{' '}
          · {support.hours} · זמן מענה {support.responseTime}.
          <br />
          <Link href="/support" className="font-semibold text-blue-600 hover:underline">
            עמוד שירות הלקוחות
          </Link>
        </p>
      </div>
    </div>
  );
}
