import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import UserTypes from '@/components/UserTypes';
import UseCases from '@/components/UseCases';
import CitiesMap from '@/components/CitiesMap';
import FAQ from '@/components/FAQ';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F4F5F7]">
      <Header />
      <Hero />
      <HowItWorks />
      <UserTypes />
      <UseCases />
      <CitiesMap />
      <FAQ />
    </main>
  );
}
