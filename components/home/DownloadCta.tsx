import StoreButtons from '@/components/ui/StoreButtons';

const DownloadCta = () => (
  <section id="download" className="bg-gray-900 py-20">
    <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center">
      <h2 className="text-3xl font-bold text-white">מוכנים לטוס?</h2>
      <p className="max-w-xl text-gray-400">
        הורידו את האפליקציה, בחרו חבילה ושלמו בתשלום מאובטח. ה-eSIM שלכם יהיה מוכן עוד לפני שהגעתם
        לשדה התעופה.
      </p>
      <StoreButtons className="justify-center" />
    </div>
  </section>
);

export default DownloadCta;
