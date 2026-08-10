import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'התשלום התקבל',
  robots: { index: false, follow: false },
};

export default function PaymentSuccessPage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-16">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg ring-1 ring-slate-200">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-10 w-10 stroke-emerald-600"
            fill="none"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>

        <h1 className="mb-3 text-2xl font-bold text-slate-900">התשלום התקבל</h1>
        <p className="mb-7 leading-relaxed text-slate-600">מעבירים אותך חזרה לאפליקציה.</p>

        <a
          href="esimapp://payment/success"
          className="block rounded-xl bg-blue-700 px-6 py-4 text-lg font-bold text-white transition hover:bg-blue-800"
        >
          פתיחת ClickSim
        </a>

        <p className="mt-5 text-sm leading-relaxed text-slate-500">
          החבילה שלך מופקת ברגעים אלה ותופיע במסך &rlm;&quot;החבילות שלי&quot;. אין צורך לשלם שוב.
        </p>
      </div>
    </main>
  );
}
