import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Portfolio from '@/components/sections/portfolio';
import Services from '@/components/sections/services';
import Testimonials from '@/components/sections/testimonials';
import Process from '@/components/sections/process';
import Loyalty from '@/components/sections/loyalty';
import Payment from '@/components/sections/payment';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Portfolio />
        <Services />
        <Payment />
        <Testimonials />
        <Process />
        <Loyalty />
      </main>
      <Footer />
    </div>
  );
}
