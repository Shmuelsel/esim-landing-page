import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b border-gray-800 pb-8">
          
          {/* עמודה 1: אודות המותג */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">eSIM Israel 🇮🇱</h3>
            <p className="text-sm leading-relaxed max-w-xs">
              הדרך הקלה והמשתלמת ביותר לגלוש בחו"ל.
              בלי להחליף סים, בלי הפתעות בחשבון, ועם תמיכה אישית בעברית בוואצאפ.
            </p>
          </div>

          {/* עמודה 2: קישורים מהירים */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">ניווט מהיר</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">דף הבית</a></li>
              <li><a href="#pricing" className="hover:text-blue-400 transition-colors">חבילות גלישה</a></li>
              {/* שים לב: כאן הוספתי ID שצריך להוסיף לקומפוננטת Steps */}
              <li><a href="#steps" className="hover:text-blue-400 transition-colors">איך זה עובד?</a></li>
            </ul>
          </div>

          {/* עמודה 3: צור קשר */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">צריכים עזרה?</h4>
            <p className="text-sm mb-4">אנחנו זמינים לכל שאלה, לפני הטיסה וגם בחו"ל.</p>
            <a 
              href="https://wa.me/972524329287"
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg transition-colors text-sm font-bold"
            >
              <span>💬</span> דברו איתנו בוואצאפ
            </a>
          </div>
        </div>

        {/* זכויות יוצרים */}
        <div className="text-center text-xs text-gray-500 dir-rtl">
          © {currentYear} כל הזכויות שמורות ל-eSIM Israel.
        </div>
      </div>
    </footer>
  );
};

export default Footer;