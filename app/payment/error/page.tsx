import type { Metadata } from 'next';
import { mailtoUrl, siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'התשלום לא הושלם',
  robots: { index: false, follow: false },
};

export default function PaymentErrorPage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-16">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg ring-1 ring-slate-200">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-9 w-9 stroke-red-600"
            fill="none"
            strokeLinecap="round"
          >
            <circle cx="12" cy="12" r="9" strokeWidth={2} />
            <path d="M12 8v5M12 17h.01" strokeWidth={3} />
          </svg>
        </div>

        <h1 className="mb-3 text-2xl font-bold text-slate-900">התשלום לא הושלם</h1>
        <p className="mb-7 leading-relaxed text-slate-600">
          לא בוצע חיוב. אפשר לחזור לאפליקציה ולנסות שוב, או בכרטיס אחר.
        </p>

        <a
          href="esimapp://payment/error"
          className="block rounded-xl bg-blue-700 px-6 py-4 text-lg font-bold text-white transition hover:bg-blue-800"
        >
          חזרה ל‑ClickSim
        </a>

        <p className="mt-5 text-sm leading-relaxed text-slate-500">
          אם הבעיה חוזרת, כתבו לנו:{' '}
          <a href={mailtoUrl} className="text-blue-700 underline">
            {siteConfig.support.email}
          </a>
        </p>
      </div>
    </main>
  );
}
