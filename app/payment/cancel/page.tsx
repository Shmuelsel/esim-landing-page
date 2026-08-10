import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'התשלום בוטל',
  robots: { index: false, follow: false },
};

export default function PaymentCancelPage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-16">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg ring-1 ring-slate-200">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-9 w-9 stroke-slate-500"
            fill="none"
            strokeWidth={3}
            strokeLinecap="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </div>

        <h1 className="mb-3 text-2xl font-bold text-slate-900">התשלום בוטל</h1>
        <p className="mb-7 leading-relaxed text-slate-600">
          לא בוצע חיוב. אפשר לחזור לאפליקציה ולנסות שוב מתי שתרצה.
        </p>

        <a
          href="esimapp://payment/cancel"
          className="block rounded-xl bg-blue-700 px-6 py-4 text-lg font-bold text-white transition hover:bg-blue-800"
        >
          חזרה ל‑ClickSim
        </a>
      </div>
    </main>
  );
}
