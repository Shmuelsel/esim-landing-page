'use client';

import { useState } from 'react';
import Link from 'next/link';
import { packages, type Package } from '@/data/packages';
import { countries } from '@/data/countries';
import { siteConfig } from '@/config/site';

const fieldClass =
  'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none';

const Field = ({
  id,
  label,
  hint,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-1.5">
    <label htmlFor={id} className="block text-sm font-bold text-gray-800">
      {label} <span className="text-red-500">*</span>
    </label>
    {children}
    {hint && (
      <p id={`${id}-hint`} className="text-xs text-gray-500">
        {hint}
      </p>
    )}
  </div>
);

const CheckoutForm = ({ initialPackage }: { initialPackage: Package }) => {
  const [packageId, setPackageId] = useState(initialPackage.id);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selected = packages.find((pkg) => pkg.id === packageId) ?? initialPackage;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const data = new FormData(event.currentTarget);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          packageId,
          firstName: data.get('firstName'),
          lastName: data.get('lastName'),
          phone: data.get('phone'),
          country: data.get('country'),
          email: data.get('email'),
          termsAccepted,
        }),
      });

      const payload = await response.json();

      if (!response.ok) {
        setError(payload.error ?? 'אירעה שגיאה. נסו שוב.');
        setIsSubmitting(false);
        return;
      }

      // Grow's payment URL expires after 10 minutes, so leave immediately.
      window.location.href = payload.url;
    } catch {
      setError('לא הצלחנו להתחבר לשירות התשלומים. בדקו את החיבור לאינטרנט ונסו שוב.');
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-[1fr_20rem] lg:items-start">
      <div className="space-y-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-md md:p-8">
        <div className="space-y-1.5">
          <label htmlFor="package" className="block text-sm font-bold text-gray-800">
            החבילה הנרכשת <span className="text-red-500">*</span>
          </label>
          <select
            id="package"
            name="package"
            value={packageId}
            onChange={(event) => setPackageId(event.target.value)}
            className={fieldClass}
          >
            {packages.map((pkg) => (
              <option key={pkg.id} value={pkg.id}>
                {pkg.flag} {pkg.name} — {pkg.data} ל-{pkg.days} ימים — ₪{pkg.price}
              </option>
            ))}
          </select>
        </div>

        <fieldset className="space-y-6 border-t border-gray-100 pt-6">
          <legend className="sr-only">פרטי המזמין</legend>

          <div className="grid gap-6 md:grid-cols-2">
            <Field id="firstName" label="שם פרטי">
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                autoComplete="given-name"
                className={fieldClass}
              />
            </Field>

            <Field id="lastName" label="שם משפחה">
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                autoComplete="family-name"
                className={fieldClass}
              />
            </Field>

            <Field id="phone" label="טלפון נייד" hint="ללא קידומת בינלאומית, לדוגמה 0521234567">
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                inputMode="numeric"
                pattern="^0[0-9\-\s]{8,12}$"
                autoComplete="tel-national"
                aria-describedby="phone-hint"
                className={fieldClass}
              />
            </Field>

            <Field id="country" label="מדינה">
              <select
                id="country"
                name="country"
                required
                defaultValue="ישראל"
                autoComplete="country-name"
                className={fieldClass}
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field
            id="email"
            label="כתובת דוא״ל"
            hint="לכתובת זו יישלחו קוד ההתקנה של ה-eSIM והחשבונית."
          >
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              aria-describedby="email-hint"
              className={fieldClass}
            />
          </Field>
        </fieldset>

        <div className="border-t border-gray-100 pt-6">
          <div className="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              checked={termsAccepted}
              onChange={(event) => setTermsAccepted(event.target.checked)}
              className="mt-1 h-5 w-5 shrink-0 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="terms" className="text-sm leading-relaxed text-gray-700">
              קראתי ואני מאשר/ת את{' '}
              <Link
                href="/terms"
                target="_blank"
                className="font-bold text-blue-600 underline hover:text-blue-700"
              >
                התקנון ותנאי השימוש
              </Link>{' '}
              ואת{' '}
              <Link
                href="/refund"
                target="_blank"
                className="font-bold text-blue-600 underline hover:text-blue-700"
              >
                מדיניות הביטולים וההחזרים
              </Link>
              , לרבות העובדה שמדובר במוצר דיגיטלי שאינו ניתן לביטול לאחר הפקת קוד ה-QR.{' '}
              <span className="text-red-500">*</span>
            </label>
          </div>
        </div>

        {error && (
          <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {error}
          </p>
        )}
      </div>

      <aside className="space-y-4 rounded-2xl border border-gray-100 bg-gray-50 p-6 lg:sticky lg:top-24">
        <h2 className="text-lg font-bold text-gray-900">סיכום ההזמנה</h2>

        <dl className="space-y-2 border-b border-gray-200 pb-4 text-sm text-gray-600">
          <div className="flex justify-between gap-4">
            <dt>חבילה</dt>
            <dd className="text-left font-medium text-gray-900">
              {selected.flag} {selected.name}
            </dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>נפח גלישה</dt>
            <dd className="font-medium text-gray-900">{selected.data}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>תוקף</dt>
            <dd className="font-medium text-gray-900">{selected.days} ימים</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>כיסוי</dt>
            <dd className="text-left font-medium text-gray-900">{selected.coverage}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>אספקה</dt>
            <dd className="font-medium text-gray-900">מיידית, ללא עלות</dd>
          </div>
        </dl>

        <div className="flex items-baseline justify-between">
          <span className="font-bold text-gray-900">סה״כ לתשלום</span>
          <span className="text-3xl font-extrabold text-gray-900">₪{selected.price}</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-200 transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:shadow-none"
        >
          {isSubmitting ? 'מעבירים לתשלום…' : 'מעבר לתשלום מאובטח'}
        </button>

        <p className="text-center text-xs leading-relaxed text-gray-500">
          התשלום מתבצע בעמוד מאובטח של חברת הסליקה Grow, בתקן PCI-DSS.
          <br />
          {siteConfig.name} אינה שומרת את פרטי כרטיס האשראי.
        </p>
      </aside>
    </form>
  );
};

export default CheckoutForm;
