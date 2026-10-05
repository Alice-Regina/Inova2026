import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Statistics from '@/components/Statistics';
import Schedule from '@/components/Schedule';
import Speakers from '@/components/Speakers';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import EmpresasParceiras from '@/components/EmpresasParceiras';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#081E13' }}>
      <Header />
      <Hero />
      <About />
      <Statistics />
      <Schedule />
      <Speakers />
      <EmpresasParceiras />
      <CTA />
      <Footer />
    </div>
  );
}