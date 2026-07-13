const steps = [
  {
    icon: '📲',
    title: 'הורידו את האפליקציה',
    description: 'מתקינים את ClickSim מ-App Store או מ-Google Play, ונרשמים בכמה שניות.',
  },
  {
    icon: '💳',
    title: 'בחרו חבילה ושלמו',
    description: 'בוחרים יעד ונפח גלישה, ומשלמים בתשלום מאובטח בתוך האפליקציה.',
  },
  {
    icon: '🌐',
    title: 'התחברו וגלשו',
    description: 'ה-eSIM מותקן ישירות מהאפליקציה, והאינטרנט מופעל אוטומטית עם הנחיתה.',
  },
];

const Steps = () => (
  <section id="steps" className="bg-white py-20">
    <div className="container mx-auto px-4">
      <h2 className="mb-16 text-center text-3xl font-bold text-gray-900">
        eSIM פעיל בשלושה שלבים
      </h2>

      <ol className="relative mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-12 -z-10 hidden h-0.5 -translate-y-1/2 bg-blue-100 md:block"
        />

        {steps.map((step, index) => (
          <li key={step.title} className="flex flex-col items-center bg-white p-4 text-center">
            <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-4xl shadow-sm">
              <span aria-hidden="true">{step.icon}</span>
              <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                {index + 1}
              </span>
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">{step.title}</h3>
            <p className="max-w-xs text-gray-600">{step.description}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Steps;
