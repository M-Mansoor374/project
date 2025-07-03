import Image from "next/image";
import Link from 'next/link';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import FeaturesSection from './components/FeaturesSection';
import ProcessSection from './components/ProcessSection';
import Hero from './components/Hero';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      <Hero />
      {/* Main Content Placeholder - About, Services, Features, etc. */}
      <section className="container mx-auto py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Welcome to Acciobyte</h2>
        {/* Add more sections here as you migrate content */}
      </section>
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <FeaturesSection />
      <ProcessSection />
      {/* Footer placeholder - will be replaced with a component */}
    </main>
  );
}
