import Hero from '@/components/home/Hero';
import PricingGrid from '@/components/home/PricingGrid';
import Steps from '@/components/home/Steps';
import CompatibilityCheck from '@/components/home/CompatibilityCheck';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Steps />
      <CompatibilityCheck />
      <PricingGrid />
    </main>
  );
}