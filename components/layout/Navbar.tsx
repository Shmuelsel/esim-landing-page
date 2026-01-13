import React from 'react';

const Navbar = () => {
  return (
    // z-50 מבטיח שהתפריט יהיה מעל הכל
    // backdrop-blur יוצר אפקט זכוכית יוקרתי
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* לוגו */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">🇮🇱</span>
          <a href="#" className="text-xl font-bold text-gray-900 tracking-tight">
            eSIM Israel
          </a>
        </div>

        {/* תפריט למסכים גדולים (מוסתר במובייל) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-blue-600 transition-colors">דף הבית</a>
          <a href="#steps" className="hover:text-blue-600 transition-colors">איך זה עובד?</a>
          <a href="#pricing" className="hover:text-blue-600 transition-colors">חבילות גלישה</a>
        </div>

        {/* כפתור הנעה לפעולה */}
        <div>
          <a 
            href="https://wa.me/972524329287"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-md shadow-blue-200 flex items-center gap-2"
          >
            <span>בוואצאפ</span>
            <span className="hidden sm:inline">24/7</span> {/* מוסתר במסכים ממש קטנים */}
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;