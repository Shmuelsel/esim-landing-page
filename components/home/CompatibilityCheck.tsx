"use client";

import React, { useState, useRef, useEffect } from 'react';
import { supportedPhones } from '@/data/phones';

const CompatibilityCheck = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false); // האם הרשימה פתוחה?
  const [result, setResult] = useState<null | boolean>(null);
  
  // סינון המכשירים לפי מה שהמשתמש הקליד
  const filteredPhones = supportedPhones.filter(phone => 
    phone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // פונקציה שמטפלת בהקלדה
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsOpen(true); // לפתוח את הרשימה כשמקלידים
    
    // איפוס התוצאה בזמן הקלדה
    if (value === '') {
      setResult(null);
    }
  };

  // פונקציה שמטפלת בבחירה מהרשימה
  const handleSelectPhone = (phone: string) => {
    setSearchTerm(phone); // עדכון השדה לשם המלא
    setResult(true);      // הצגת הודעת הצלחה
    setIsOpen(false);     // סגירת הרשימה
  };

  return (
    <section id="compatibility" className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
          האם המכשיר שלי תומך ב-eSIM?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* צד ימין: בדיקת "קסם" מהירה */}
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 h-full">
            <h3 className="text-xl font-bold mb-4 text-gray-800">⚡ הבדיקה הכי מהירה (מומלץ)</h3>
            <p className="text-gray-600 mb-6">
              זו הדרך הוודאית ביותר לדעת אם המכשיר שלך תומך:
            </p>
            
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span>
                <span className="text-gray-700">כנס לחייגן הטלפון וחייג: <b dir="ltr" className="text-lg text-gray-900">*#06#</b></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span>
                <span className="text-gray-700">אם מופיע לך על המסך קוד בשם <b className="text-gray-900">EID</b> - המכשיר שלך תומך! ✅</span>
              </li>
            </ol>
          </div>

          {/* צד שמאל: חיפוש חכם עם רשימה נפתחת */}
          {/* צד שמאל: מותגים + עזרה (החלק המרגיע) */}
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col h-full">
            <h3 className="text-xl font-bold mb-4 text-gray-800">תמיכה בכל המכשירים החדשים</h3>
            <p className="text-gray-500 mb-6">אנחנו תומכים ברוב המכשירים מהשנים האחרונות של המותגים המובילים:</p>
            
            {/* גריד מותגים מהיר */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-3 rounded-xl text-center font-bold text-gray-700 shadow-sm border border-gray-100">Apple 🍏</div>
              <div className="bg-white p-3 rounded-xl text-center font-bold text-gray-700 shadow-sm border border-gray-100">Samsung 📱</div>
              <div className="bg-white p-3 rounded-xl text-center font-bold text-gray-700 shadow-sm border border-gray-100">Google G</div>
              <div className="bg-white p-3 rounded-xl text-center font-bold text-gray-700 shadow-sm border border-gray-100">Xiaomi / Other</div>
            </div>

            {/* כפתור עזרה - לוקח את כל הגובה שנשאר */}
            <div className="mt-auto pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-3 text-sm">עדיין לא בטוחים? אנחנו כאן.</p>
              <a 
                href="https://wa.me/972524329287?text=היי אני רוצה לבדוק אם המכשיר שלי תומך ב-eSIM" // שנה למספר שלך
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-lg shadow-green-100"
              >
                <span>שאל/י אותנו בוואצאפ</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompatibilityCheck;