import StoreButtons from '@/components/ui/StoreButtons';

const trustSignals = [
  '⚡ התקנה מיידית',
  '🔒 תשלום מאובטח באפליקציה',
  '📱 למכשירים התומכים ב-eSIM',
];

const Hero = () => (
  <section className="overflow-hidden bg-white">
    <div className="container mx-auto px-4 py-16 lg:py-24">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
        <div className="z-10 w-full text-center lg:w-1/2 lg:text-right">
          <p className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
            ✈️ טסים לחו״ל בקרוב?
          </p>

          <h1 className="mb-6 text-4xl leading-tight font-extrabold text-gray-900 lg:text-6xl">
            אינטרנט בחו״ל
            <br />
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              במחיר של קפה
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-lg text-lg leading-relaxed text-gray-600 lg:mx-0">
            הפסיקו לשלם הון על חבילות גלישה. מורידים את האפליקציה, בוחרים חבילה, וה-eSIM מותקן תוך
            דקות — עם המספר הישראלי שלכם פעיל כרגיל.
          </p>

          <StoreButtons className="justify-center lg:justify-start" />

          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500 lg:justify-start">
            {trustSignals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </div>

        <div className="relative w-full lg:w-1/2">
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 rounded-full bg-blue-100 opacity-50 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 -mb-20 -ml-20 h-80 w-80 rounded-full bg-cyan-100 opacity-50 blur-3xl"
          />

          <div className="relative mx-auto max-w-sm -rotate-2 rounded-3xl border-4 border-white bg-linear-to-br from-gray-900 to-gray-800 p-6 shadow-2xl transition-transform duration-500 hover:rotate-0">
            <div className="mb-8 flex items-center justify-between">
              <div className="h-1 w-12 rounded bg-gray-600" />
              <span className="font-bold text-white">4G/5G</span>
            </div>
            <div className="mb-8 space-y-4">
              <div className="flex h-24 items-center justify-center rounded-2xl bg-blue-500 text-2xl font-bold text-white">
                DATA ROAMING
              </div>
              <div className="h-4 w-3/4 rounded bg-gray-700" />
              <div className="h-4 w-1/2 rounded bg-gray-700" />
            </div>
            <p className="text-center text-sm text-gray-400">eSIM Active</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
