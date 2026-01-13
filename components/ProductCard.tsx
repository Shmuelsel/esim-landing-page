import React from 'react';
import { Package } from '@/data/packages';
import { generateWhatsAppLink } from '@/lib/whatsapp';

interface ProductCardProps {
  pkg: Package;
}

const ProductCard: React.FC<ProductCardProps> = ({ pkg }) => {
  const whatsappLink = generateWhatsAppLink(pkg);

  return (
    <div className={`relative flex flex-col p-6 bg-white rounded-2xl transition-all duration-300 ${pkg.isPopular ? 'border-2 border-blue-500 shadow-xl scale-105 z-10' : 'border border-gray-100 shadow-lg hover:shadow-xl'}`}>
      
      {/* תווית מומלץ */}
      {pkg.isPopular && (
        <div className="absolute -top-4 right-1/2 transform translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
          המשתלם ביותר
        </div>
      )}

      <div className="text-center mb-6">
        <span className="text-5xl mb-4 block">{pkg.flag}</span>
        <h3 className="text-xl font-bold text-gray-900">{pkg.region}</h3>
      </div>

      <div className="text-center mb-6">
        <span className="text-4xl font-extrabold text-gray-900">{pkg.data}</span>
        <span className="block text-gray-500 mt-1">למשך {pkg.days} ימים</span>
      </div>

      {/* רשימת פיצ'רים */}
      <ul className="space-y-3 mb-8 flex-1">
        {pkg.features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-gray-600 text-sm">
            <svg className="w-5 h-5 text-green-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <div className="flex items-end justify-center mb-4 gap-1">
          <span className="text-3xl font-bold text-gray-900">₪{pkg.price}</span>
        </div>
        
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full py-3 px-6 rounded-xl text-center font-bold transition-all ${
            pkg.isPopular 
              ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200' 
              : 'bg-gray-50 hover:bg-gray-100 text-gray-800 border border-gray-200'
          }`}
        >
          הזמן עכשיו
        </a>
      </div>
    </div>
  );
};

export default ProductCard;