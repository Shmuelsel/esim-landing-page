import type { Metadata } from 'next';
import CheckoutForm from '@/components/checkout/CheckoutForm';
import { packages } from '@/data/packages';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'השלמת הזמנה ותשלום',
  description: `השלמת ההזמנה ותשלום מאובטח עבור חבילות ה-eSIM של ${siteConfig.name}.`,
  // An order form has nothing to offer search engines, and indexing it invites
  // people into the funnel halfway through.
  robots: { index: false, follow: true },
};

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ package?: string }>;
}) {
  const { package: requested } = await searchParams;
  const initialPackage = packages.find((pkg) => pkg.id === requested) ?? packages[0];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <header className="mb-10">
          <h1 className="mb-2 text-3xl font-bold text-gray-900 lg:text-4xl">השלמת הזמנה</h1>
          <p className="text-gray-600">
            מלאו את הפרטים, אשרו את התקנון, והמשיכו לתשלום מאובטח. קוד ההתקנה של ה-eSIM יישלח
            לדוא״ל שתזינו מיד לאחר אישור התשלום.
          </p>
        </header>

        <CheckoutForm initialPackage={initialPackage} />
      </div>
    </div>
  );
}
