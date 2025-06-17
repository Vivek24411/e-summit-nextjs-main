import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import UniteSection from '../components/UniteSection';
import VoicesSection from '../components/VoicesSection';
import WorkshopsSection from '../components/WorkshopsSection';
import GenesisSection from '../components/GenesisSection';
import MerchandiseSection from '../components/MerchandiseSection';
import PartnersSection from '../components/PartnersSection';
import MemorySection from '../components/MemorySection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>E-Summit 23 - Hi-Res Annual Design Convergence</title>
        <meta name="description" content="Join us ignite this spark of new beginnings, bringing visions to life through collective influence and shaping the future of design." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="app">
        <Header />
        <HeroSection />
        <UniteSection />
        <VoicesSection />
        <WorkshopsSection />
        <GenesisSection background="/images/ready-set-synergy-background.png" />
        <MerchandiseSection />
        <PartnersSection />
        <MemorySection />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
}