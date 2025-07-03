import Image from 'next/image';
import Link from 'next/link';

export default function FeaturesSection() {
  return (
    <section className="lg:py-20 bg-black">
      <div className="container mx-auto relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="h-fit self-start text-center lg:text-start">
            <div className="w-full text-[#86c232] text-lg font-bold flex items-center justify-center lg:justify-start gap-4 my-9">
              <Image src="/media/asterisk_default.4355d764.png" alt="Astrivix Asteric Image" width={20} height={20} className="w-5 h-5" />
              <h4>FEATURES</h4>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">Innovative <span className="text-[#86c232] font-bold">features</span></h2>
            <p className="md:text-5xl lg:text-6xl text-white mb-8">for your digital success</p>
          </div>
          <div className="relative">
            <div className="relative flex flex-col gap-6 lg:py-24 group cursor-pointer">
              <div className="flex flex-col gap-5">
                <p className="text-white text-center lg:text-justify leading-relaxed lg:text-lg">Our digital services empower brands with innovative strategies and solutions for sustainable growth and engagement.</p>
              </div>
              <Link href="/about" className="mt-4 flex justify-center lg:justify-start gap-4 group">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#86c232] disabled:pointer-events-none disabled:opacity-50 text-white shadow hover:bg-[#86c232]/90 h-9 bg-gray-600 px-7 rounded-full lg:text-lg font-bold">Learn More</button>
                <span className="w-14 h-14 rounded-full flex items-center justify-center bg-[#86c232] transform -rotate-45 transition-all duration-300 ease-in-out group-hover:rotate-0 group-hover:bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right text-2xl text-black rounded-full"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* Features Grid */}
        <div className="grid md:grid-cols-5 gap-6 mt-10 lg:mt-0">
          {/* Custom Branding Solutions */}
          <div className="bg-[#222]/40 backdrop-blur-lg p-10 rounded-[32px] overflow-hidden group hover:bg-[#151515] transition-colors duration-300 col-span-5 lg:col-span-3">
            <div className="relative overflow-hidden rounded-[32px]">
              <Image src="/media/cbs.e73564e5.jpg" alt="Custom Branding Solutions" width={1000} height={320} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-8">
              <h3 className="text-white text-2xl font-semibold mb-3">Custom Branding Solutions</h3>
              <p className="text-gray-400">Unique brand identity development, including logos, color palettes.</p>
            </div>
          </div>
          {/* Data-Driven Digital Marketing */}
          <div className="bg-[#222]/40 backdrop-blur-lg p-10 rounded-[32px] overflow-hidden group hover:bg-[#151515] transition-colors duration-300 col-span-5 lg:col-span-2">
            <div className="relative overflow-hidden rounded-[32px]">
              <Image src="/media/dddm.b39136e5.jpg" alt="Data-Driven Digital Marketing" width={1000} height={320} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-8">
              <h3 className="text-white text-2xl font-semibold mb-3">Data-Driven Digital Marketing</h3>
              <p className="text-gray-400">Strategies combining SEO, PPC, content marketing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 