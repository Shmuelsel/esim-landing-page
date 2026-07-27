import Link from 'next/link';
import type { Package } from '@/data/packages';

const CheckIcon = () => (
  <svg
    className="ml-2 h-5 w-5 shrink-0 text-green-500"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ProductCard = ({ pkg }: { pkg: Package }) => (
  <div
    className={`relative flex flex-col rounded-2xl bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-2xl ${
      pkg.isPopular ? 'border-2 border-blue-500' : 'border border-gray-100'
    }`}
  >
    {pkg.isPopular && (
      <p className="absolute -top-3 right-1/2 translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
        המשתלם ביותר
      </p>
    )}

    <div className="mb-6 text-center">
      <span className="mb-3 block text-5xl" aria-hidden="true">
        {pkg.flag}
      </span>
      <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
      <p className="mt-1 text-sm text-gray-500">{pkg.coverage}</p>
    </div>

    <div className="mb-6 text-center">
      <span className="text-4xl font-extrabold text-gray-900">{pkg.data}</span>
      <span className="mt-1 block text-gray-500">למשך {pkg.days} ימים</span>
    </div>

    <ul className="mb-8 flex-1 space-y-3">
      {pkg.features.map((feature) => (
        <li key={feature} className="flex items-center text-sm text-gray-600">
          <CheckIcon />
          {feature}
        </li>
      ))}
    </ul>

    <div className="mt-auto text-center">
      <p className="mb-4">
        <span className="text-3xl font-bold text-gray-900">₪{pkg.price}</span>
        <span className="mr-1 text-sm text-gray-500">חד־פעמי</span>
      </p>

      <Link
        href={`/checkout?package=${pkg.id}`}
        className={`block w-full rounded-xl px-6 py-3 text-center font-bold transition-colors ${
          pkg.isPopular
            ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 hover:bg-blue-700'
            : 'border border-gray-200 bg-gray-50 text-gray-800 hover:bg-gray-100'
        }`}
      >
        רכישה מאובטחת
      </Link>
    </div>
  </div>
);

export default ProductCard;
