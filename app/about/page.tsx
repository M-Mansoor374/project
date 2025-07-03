import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="!w-full bg-cover bg-center bg-black" style={{ backgroundImage: 'url(/media/bg.0f5970d1.png)' }}>
        <div className="w-full h-full flex items-center justify-center py-48 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/media/Inner_bg.23beb686.jpg)' }}>
          <div className="flex flex-col justify-center items-center gap-8 font-semibold text-white">
            <span className="text-5xl xl:text-7xl">About <span className="text-default">us</span></span>
            <nav aria-label="breadcrumb">
              <ul className="container flex items-center space-x-2 text-18 font-semibold text-white py-1.5 px-2">
                <li><a className="hover:underline" href="/">Home</a></li>
                <li className="flex items-center"><span className="mx-2">*</span><span className="text-default">About</span></li>
              </ul>
            </nav>
          </div>
        </div>
        {/* Service Bar */}
        <div className="relative w-full overflow-hidden py-3 bg-default">
          <div className="flex items-center space-x-8 w-max">
            {['IOS/Android App Development','Website Development','Digital Marketing','Graphic Designing','Content Writing','Search Engine Optimization (SEO)','Point of Sale (POS)','Cyber Security','IOS/Android App Development','Website Development','Digital Marketing','Graphic Designing','Content Writing','Search Engine Optimization (SEO)','Point of Sale (POS)','Cyber Security'].map((service, i) => (
              <div key={i} className="flex items-center justify-center gap-6">
                <span className="whitespace-nowrap text-xl font-bold text-black">{service}</span>
                <span className="flex justify-center items-center"><Image src="/media/asteric.3e45eb6d.png" alt="Asteric" width={16} height={16} className="w-4 h-4" /></span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Agency Intro Section */}
      <section className="relative min-h-screen py-20 lg:py-40 overflow-visible">
        <div className="container relative mx-auto !z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-24 h-fit self-start text-center lg:text-start">
              <div className="w-full text-default text-18 font-bold flex items-center justify-center lg:justify-start gap-4 my-9">
                <Image src="/media/asterisk_default.4355d764.png" alt="Asteric" width={20} height={20} className="w-5 h-5" />
                <h4>ABOUT AGENCY</h4>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">Crafting <span className="text-default font-bold">unique digital</span></h2>
              <p className="md:text-5xl lg:text-6xl text-white mb-8">experiences that elevate your brand</p>
              <a className="mt-4 flex justify-center lg:justify-start gap-4 group" href="/contact">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground shadow hover:bg-primary/90 h-9 bg-gray-600 p-7 rounded-full lg:!text-18 font-bold">Contact Us</button>
                <span className="w-14 h-14 rounded-full flex items-center justify-center bg-default transform -rotate-45 transition-all duration-300 ease-in-out group-hover:rotate-0 group-hover:bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right text-22 !text-black rounded-full"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </span>
              </a>
            </div>
            {/* Features */}
            <div className="relative z-10 space-y-8">
              <div className="hidden lg:block absolute -left-[30px] top-0 w-[2px] h-full bg-white/20"></div>
              {[
                {
                  icon: '/media/mission.25c4c757.svg',
                  title: 'Your Success, Our Mission',
                  desc: 'We measure our success through the achievements of our clients. With a results-driven approach and a commitment to quality, we deliver digital solutions that create meaningful impact.'
                },
                {
                  icon: '/media/creators.da5dacdb.svg',
                  title: 'Creators Of Digital Excellence',
                  desc: 'Driven by innovation and excellence, we reimagine digital possibilities. Our team builds solutions that not only fulfill your vision but also elevate your brand to the next level.'
                },
                {
                  icon: '/media/innovation.257d9eb9.svg',
                  title: 'Innovating the digital landscape',
                  desc: 'At the core of our agency is a commitment to excellence and creativity. We specialize in crafting digital solutions that not only meet your needs but also exceed your brand.'
                },
                {
                  icon: '/media/brands.6176527f.svg',
                  title: 'Helping Brands Thrive Online',
                  desc: 'Our goal is simple: empower brands to grow and succeed in the digital world. Through strong client partnerships and custom strategies, we deliver results that matter.'
                }
              ].map((feature, i) => (
                <div key={i} className="relative flex gap-6 group cursor-pointer">
                  <div className="hidden lg:block absolute -left-[40px] top-1/2 w-8 h-8 rounded-full -translate-y-1/2">
                    <Image src="/media/dot.5c102e3c.svg" alt="Dot" width={32} height={32} />
                  </div>
                  <div className="flex flex-col gap-5">
                    <Image src={feature.icon} alt="Service Icon" width={80} height={80} className="w-20 h-20 bg-default rounded-lg p-3" />
                    <h3 className="text-white text-xl lg:text-3xl font-bold mb-2 group-hover:text-default transition-colors">{feature.title}</h3>
                    <p className="text-white text-justify leading-relaxed lg:text-lg">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-20 -left-32 z-0">
          <Image src="/media/sphere.4b56a70e.png" alt="Sphere" width={384} height={384} className="w-96 h-96 animate-spin-slow" />
        </div>
      </section>
      {/* More sections (Features, Team, Why Choose Us, Testimonials, CTA) would follow here, following the same pattern. */}
    </div>
  );
} 