import React from 'react';

const Steps = () => {
  const steps = [
    {
      icon: "🔍",
      title: "בחר חבילה",
      desc: "מצא את היעד שלך ברשימה ובחר את נפח הגלישה המתאים לך."
    },
    {
      icon: "📩",
      title: "קבל QR Code",
      desc: "מיד לאחר התשלום תקבל קוד QR ישירות למייל ולוואצאפ."
    },
    {
      icon: "🌐",
      title: "סרוק וגלוש",
      desc: "סרוק את הקוד בהגדרות המכשיר, והאינטרנט יופעל אוטומטית בנחיתה."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
          איך מתחברים תוך 2 דקות?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {/* קו מחבר ברקע (מופיע רק בדסקטופ) */}
          <div className="hidden md:block absolute top-12 right-0 left-0 h-0.5 bg-blue-100 -z-10 transform -translate-y-1/2"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center bg-white p-4">
              <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center text-4xl mb-6 shadow-sm border border-blue-100 relative">
                {step.icon}
                {/* מספר השלב */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-600 max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;