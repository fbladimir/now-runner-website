import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import UserTypes from '@/components/UserTypes';
import UseCases from '@/components/UseCases';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HowItWorks />
      <UserTypes />
      <UseCases />
    </main>
  );
}
