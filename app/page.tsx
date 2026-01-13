import Hero from '@/components/home/Hero';
import PricingGrid from '@/components/home/PricingGrid';
import Steps from '@/components/home/Steps';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Steps />
      <PricingGrid />
    </main>
  );
}