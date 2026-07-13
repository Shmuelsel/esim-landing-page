import type { Metadata } from 'next';
import Link from 'next/link';
import { legalLinks, mailtoUrl, mailtoWithSubject, siteConfig, supportTopics } from '@/config/site';

const { business, support } = siteConfig;

export const metadata: Metadata = {
  title: 'יצירת קשר ושירות לקוחות',
  description: `דרכי יצירת קשר עם שירות הלקוחות של ${siteConfig.name}.`,
};

const quickAnswers = [
  {
    question: 'ה-eSIM לא מתחבר ביעד',
    answer: 'ודאו ש״נדידת נתונים״ (Data Roaming) פעילה עבור קו ה-eSIM, ובצעו הפעלה מחדש של המכשיר.',
  },
  {
    question: 'לא קיבלתי את קוד ההתקנה',
    answer: 'קוד ההתקנה זמין תמיד באפליקציה, תחת ״החבילות שלי״. בדקו גם את תיקיית הספאם בדוא״ל.',
  },
  {
    question: 'איך אדע אם המכשיר שלי תומך?',
    answer: 'חייגו *#06# בחייגן. אם מופיע קוד EID — המכשיר תומך ב-eSIM.',
  },
];

export default function SupportPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16">
      <header className="mb-10 border-b border-gray-100 pb-6">
        <h1 className="mb-2 text-3xl font-bold text-gray-900 lg:text-4xl">
          יצירת קשר ושירות לקוחות
        </h1>
        <p className="text-gray-600">
          אנחנו כאן לפני הטיסה, במהלכה ואחריה. נשמח לעזור בכל שאלה על חבילות, התקנה או חיוב.
        </p>
      </header>

      <section className="mb-12 rounded-2xl border border-blue-100 bg-blue-50 p-6 text-center">
        <h2 className="mb-2 text-lg font-bold text-gray-900">📧 פנייה בדוא״ל</h2>
        <a
          href={mailtoUrl}
          className="text-xl font-bold text-blue-600 hover:underline sm:text-2xl"
        >
          {support.email}
        </a>
        <p className="mt-3 text-sm text-gray-600">
          {support.hours} · זמן מענה: {support.responseTime}
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-gray-900">במה נוכל לעזור?</h2>
        <p className="mb-4 text-gray-600">
          בחרו את נושא הפנייה — ייפתח אצלכם מייל חדש עם הנושא המתאים, מוכן לשליחה.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {supportTopics.map(({ label, description, subject }) => (
            <a
              key={subject}
              href={mailtoWithSubject(subject)}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-colors hover:border-blue-200 hover:bg-blue-50"
            >
              <h3 className="mb-1 font-bold text-blue-600">{label}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-gray-900">לפני שפונים — תשובות מהירות</h2>
        <div className="space-y-2">
          {quickAnswers.map(({ question, answer }) => (
            <details
              key={question}
              className="rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm"
            >
              <summary className="cursor-pointer font-semibold text-gray-800">{question}</summary>
              <p className="mt-3 text-gray-600">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mb-12 rounded-2xl border border-gray-100 bg-gray-50 p-6">
        <h2 className="mb-4 text-xl font-bold text-gray-900">פרטי העסק</h2>
        <dl className="space-y-2 text-gray-700">
          <div className="flex gap-2">
            <dt className="font-semibold">שם העסק:</dt>
            <dd>{business.legalName}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-semibold">סוג העסק:</dt>
            <dd>{business.type}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-semibold">מספר עוסק:</dt>
            <dd>{business.registrationNumber}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-semibold">כתובת:</dt>
            <dd>{business.address}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-semibold">שעות פעילות:</dt>
            <dd>{support.hours}</dd>
          </div>
        </dl>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold text-gray-900">מידע משפטי</h2>
        <ul className="space-y-2">
          {legalLinks
            .filter((link) => link.href !== '/support')
            .map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-semibold text-blue-600 hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
}
