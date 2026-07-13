import Hero from '@/components/home/Hero';
import Steps from '@/components/home/Steps';
import PricingGrid from '@/components/home/PricingGrid';
import CompatibilityCheck from '@/components/home/CompatibilityCheck';
import DownloadCta from '@/components/home/DownloadCta';

export default function Home() {
  return (
    <>
      <Hero />
      <Steps />
      <PricingGrid />
      <CompatibilityCheck />
      <DownloadCta />
    </>
  );
}
