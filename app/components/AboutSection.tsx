import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="relative min-h-screen py-20 lg:py-40 overflow-visible bg-black">
      <div className="container relative mx-auto z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-24 h-fit self-start text-center lg:text-start">
            <div className="w-full text-[#86c232] text-lg font-bold flex items-center justify-center lg:justify-start gap-4 my-9">
              <Image src="/media/asterisk_default.4355d764.png" alt="Acciobyte Asteric Image" width={20} height={20} className="w-5 h-5" />
              <h4>ABOUT AGENCY</h4>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">Crafting <span className="text-[#86c232] font-bold">unique digital</span></h2>
            <p className="md:text-5xl lg:text-6xl text-white mb-8">experiences that elevate your brand</p>
            <Link href="/contact" className="mt-4 flex justify-center lg:justify-start gap-4 group">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#86c232] disabled:pointer-events-none disabled:opacity-50 text-white shadow hover:bg-[#86c232]/90 h-9 bg-gray-600 px-7 rounded-full lg:text-lg font-bold">Contact Us</button>
              <span className="w-14 h-14 rounded-full flex items-center justify-center bg-[#86c232] transform -rotate-45 transition-all duration-300 ease-in-out group-hover:rotate-0 group-hover:bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right text-2xl text-black rounded-full"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </span>
            </Link>
          </div>
          <div className="relative z-10 space-y-8">
            <div className="hidden lg:block absolute -left-8 top-0 w-[2px] h-full bg-white/20" />
            {/* Mission */}
            <div className="relative flex gap-6 group cursor-pointer">
              <div className="hidden lg:block absolute -left-10 top-1/2 w-8 h-8 rounded-full -translate-y-1/2">
                <Image src="/media/dot.5c102e3c.svg" alt="Acciobyte Dot Service" width={32} height={32} />
              </div>
              <div className="flex flex-col gap-5">
                <Image src="/media/mission.25c4c757.svg" alt="Acciobyte Service Icon" width={80} height={80} className="w-20 h-20 bg-[#86c232] rounded-lg p-3" />
                <h3 className="text-white text-xl lg:text-3xl font-bold mb-2 group-hover:text-[#86c232] transition-colors">Your Success, Our Mission</h3>
                <p className="text-white text-justify leading-relaxed lg:text-lg">We measure our success through the achievements of our clients. With a results-driven approach and a commitment to quality, we deliver digital solutions that create meaningful impact.</p>
              </div>
            </div>
            {/* Creators */}
            <div className="relative flex gap-6 group cursor-pointer">
              <div className="hidden lg:block absolute -left-10 top-1/2 w-8 h-8 rounded-full -translate-y-1/2">
                <Image src="/media/dot.5c102e3c.svg" alt="Acciobyte Dot Service" width={32} height={32} />
              </div>
              <div className="flex flex-col gap-5">
                <Image src="/media/creators.da5dacdb.svg" alt="Acciobyte Service Icon" width={80} height={80} className="w-20 h-20 bg-[#86c232] rounded-lg p-3" />
                <h3 className="text-white text-xl lg:text-3xl font-bold mb-2 group-hover:text-[#86c232] transition-colors">Creators Of Digital Excellence</h3>
                <p className="text-white text-justify leading-relaxed lg:text-lg">Driven by innovation and excellence, we reimagine digital possibilities. Our team builds solutions that not only fulfill your vision but also elevate your brand to the next level.</p>
              </div>
            </div>
            {/* Innovation */}
            <div className="relative flex gap-6 group cursor-pointer">
              <div className="hidden lg:block absolute -left-10 top-1/2 w-8 h-8 rounded-full -translate-y-1/2">
                <Image src="/media/dot.5c102e3c.svg" alt="Acciobyte Dot Service" width={32} height={32} />
              </div>
              <div className="flex flex-col gap-5">
                <Image src="/media/innovation.257d9eb9.svg" alt="Acciobyte Service Icon" width={80} height={80} className="w-20 h-20 bg-[#86c232] rounded-lg p-3" />
                <h3 className="text-white text-xl lg:text-3xl font-bold mb-2 group-hover:text-[#86c232] transition-colors">Innovating the digital landscape</h3>
                <p className="text-white text-justify leading-relaxed lg:text-lg">At the core of our agency is a commitment to excellence and creativity. We specialize in crafting digital solutions that not only meet your needs but also exceed your brand.</p>
              </div>
            </div>
            {/* Brands */}
            <div className="relative flex gap-6 group cursor-pointer">
              <div className="hidden lg:block absolute -left-10 top-1/2 w-8 h-8 rounded-full -translate-y-1/2">
                <Image src="/media/dot.5c102e3c.svg" alt="Acciobyte Dot Service" width={32} height={32} />
              </div>
              <div className="flex flex-col gap-5">
                <Image src="/media/brands.6176527f.svg" alt="Acciobyte Service Icon" width={80} height={80} className="w-20 h-20 bg-[#86c232] rounded-lg p-3" />
                <h3 className="text-white text-xl lg:text-3xl font-bold mb-2 group-hover:text-[#86c232] transition-colors">Helping Brands Thrive Online</h3>
                <p className="text-white text-justify leading-relaxed lg:text-lg">Our goal is simple: empower brands to grow and succeed in the digital world. Through strong client partnerships and custom strategies, we deliver results that matter.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-20 -left-32 z-0 hidden lg:block">
          <Image src="/media/sphere.4b56a70e.png" alt="Acciobyte Sphere Image" width={384} height={384} className="w-96 h-96 animate-spin-slow" />
        </div>
      </div>
    </section>
  );
} 