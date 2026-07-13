'use client';

import { useState } from 'react';
import { categories, packages, type Category } from '@/data/packages';
import ProductCard from '@/components/pricing/ProductCard';

const PricingGrid = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('europe-usa');
  const visiblePackages = packages.filter((pkg) => pkg.category === activeCategory);

  return (
    <section id="pricing" className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">חבילות גלישה</h2>
          <p className="text-gray-600">
            בחרו את היעד שלכם. כל המחירים בשקלים חדשים, לתשלום חד־פעמי, והרכישה מתבצעת באפליקציה.
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <div
            role="tablist"
            aria-label="קטגוריות חבילות"
            className="inline-flex rounded-xl border border-gray-200 bg-white p-1 shadow-sm"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-lg px-6 py-2.5 text-sm font-bold transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visiblePackages.map((pkg) => (
            <ProductCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-gray-500">
          החבילות תקפות מרגע הפעלת ה-eSIM ולמשך מספר הימים הנקוב. הכיסוי והמהירות תלויים ברשתות
          הסלולר המקומיות ביעד. פרטים מלאים בתקנון ובמדיניות הביטולים וההחזרים.
        </p>
      </div>
    </section>
  );
};

export default PricingGrid;
