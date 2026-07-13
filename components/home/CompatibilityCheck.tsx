import Link from 'next/link';
import { supportedPhones } from '@/data/phones';

const CompatibilityCheck = () => (
  <section id="compatibility" className="border-t border-gray-100 bg-white py-20">
    <div className="container mx-auto max-w-4xl px-4">
      <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
        האם המכשיר שלי תומך ב-eSIM?
      </h2>

      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
        <div className="h-full rounded-2xl border border-blue-100 bg-blue-50 p-8">
          <h3 className="mb-4 text-xl font-bold text-gray-800">⚡ הבדיקה המהירה</h3>
          <p className="mb-6 text-gray-600">זו הדרך הוודאית ביותר לדעת אם המכשיר שלכם תומך:</p>

          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                1
              </span>
              <span className="text-gray-700">
                היכנסו לחייגן הטלפון וחייגו:{' '}
                <b dir="ltr" className="text-lg text-gray-900">
                  *#06#
                </b>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                2
              </span>
              <span className="text-gray-700">
                אם מופיע על המסך קוד בשם <b className="text-gray-900">EID</b> — המכשיר תומך ב-eSIM ✅
              </span>
            </li>
          </ol>
        </div>

        <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-gray-50 p-8">
          <h3 className="mb-4 text-xl font-bold text-gray-800">מכשירים נתמכים</h3>
          <p className="mb-6 text-sm text-gray-500">
            רוב המכשירים מהשנים האחרונות של המותגים המובילים נתמכים. שימו לב שהמכשיר צריך להיות פתוח
            לכל הרשתות (Unlocked).
          </p>

          <div className="space-y-2">
            {supportedPhones.map(({ brand, models }) => (
              <details
                key={brand}
                className="rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm"
              >
                <summary className="cursor-pointer font-bold text-gray-700">{brand}</summary>
                <ul className="mt-3 space-y-1.5 text-sm text-gray-600" dir="ltr">
                  {models.map((model) => (
                    <li key={model}>{model}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>

          <div className="mt-auto border-t border-gray-200 pt-6 text-center">
            <p className="mb-3 text-sm text-gray-600">עדיין לא בטוחים?</p>
            <Link
              href="/support"
              className="block rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition-colors hover:bg-blue-700"
            >
              דברו עם שירות הלקוחות
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CompatibilityCheck;
