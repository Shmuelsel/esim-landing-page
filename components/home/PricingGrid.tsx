"use client"; // חובה! כי אנחנו משתמשים ב-useState

import React, { useState } from 'react';
import { packages, Category } from '@/data/packages';
import ProductCard from '@/components/ProductCard';

export default function PricingGrid() {
  const [activeTab, setActiveTab] = useState<Category>('europe&usa');

  const filteredPackages = packages.filter((pkg) => pkg.category === activeTab);

  const tabs: { id: Category; label: string }[] = [
    { id: 'europe&usa', label: 'אירופה וארה"ב' },
    { id: 'global', label: '🌍 כל העולם' },
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">חבילות גלישה מומלצות</h2>
          <p className="text-gray-600">
            בחרו את היעד שלכם וקבלו את ההצעות המשתלמות ביותר
          </p>
        </div>

        {/* --- אזור הטאבים (הכפתורים) --- */}
        <div className="flex justify-center gap-4 mb-12">
          <div className="bg-white p-1 rounded-xl shadow-sm border border-gray-200 inline-flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md' // עיצוב כפתור פעיל
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900' // עיצוב כפתור רגיל
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* --- הגריד של החבילות המסוננות --- */}
        {/* הוספתי אנימציה קטנה (animate-fade-in) שתעבוד אם תוסיף keyframe ב-css, אבל גם בלי זה יעבוד מעולה */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {filteredPackages.map((pkg) => (
            <ProductCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* הודעה אם אין חבילות (למקרה חירום) */}
        {filteredPackages.length === 0 && (
          <div className="text-center text-gray-500 py-10">
            לא נמצאו חבילות בקטגוריה זו כרגע.
          </div>
        )}

      </div>
    </section>
  );
}