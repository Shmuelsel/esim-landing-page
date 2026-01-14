import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* צד ימין - הטקסט וההנעה לפעולה */}
          <div className="w-full lg:w-1/2 text-center lg:text-right z-10">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full">
              ✈️ טסים לחו"ל בקרוב?
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              אינטרנט בחו"ל <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                במחיר של קפה
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              הפסיקו לשלם הון על חבילות גלישה. התחברו ל-eSIM דיגיטלי תוך 2 דקות, שמרו על המספר הישראלי שלכם בוואצאפ, וגילשו בחופשיות.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#pricing" 
                className="px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 transform hover:-translate-y-1"
              >
                מצא חבילה ליעד שלך 👇
              </a>
              <a 
                href="https://wa.me/972524329287" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-lg font-bold text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all border border-gray-200 flex items-center justify-center gap-2"
              >
                <span>שאל אותנו בוואצאפ</span>
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-1">⚡ התקנה מיידית</span>
              <span className="flex items-center gap-1">🔒 תשלום מאובטח</span>
              <span className="flex items-center gap-1">📱 עבור מכשירים תומכים esim</span>
            </div>
          </div>

          {/* צד שמאל - ויזואל/תמונה */}
          <div className="w-full lg:w-1/2 relative">
            {/* אלמנט דקורטיבי ברקע */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>
            
            {/* כאן נשים תמונה אמיתית בהמשך. כרגע זה פלייס-הולדר מעוצב */}
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-6 transform rotate-[-2deg] hover:rotate-0 transition-all duration-500 mx-auto max-w-sm border-4 border-white">
              <div className="flex justify-between items-center mb-8">
                <div className="w-12 h-1 bg-gray-600 rounded"></div>
                <div className="text-white font-bold">4G/5G</div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="h-24 bg-blue-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                  DATA ROAMING
                </div>
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                <div className="h-4 bg-gray-700 rounded w-1/2"></div>
              </div>
              <div className="text-center text-gray-400 text-sm">
                eSIM Active
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;