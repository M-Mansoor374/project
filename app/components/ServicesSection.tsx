import Image from 'next/image';
import Link from 'next/link';

export default function ServicesSection() {
  return (
    <section className="relative min-h-screen lg:py-20 overflow-visible bg-black">
      <div className="container relative mx-auto z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="h-fit self-start text-center lg:text-start">
            <div className="w-full text-[#86c232] text-lg font-bold flex items-center justify-center lg:justify-start gap-4 my-9">
              <Image src="/media/asterisk_default.4355d764.png" alt="Astrivix Asteric Image" width={20} height={20} className="w-5 h-5" />
              <h4>OUR SERVICES</h4>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">Our <span className="text-[#86c232] font-bold">digital services</span></h2>
            <p className="md:text-5xl lg:text-6xl text-white mb-8">to grow your brand</p>
          </div>
          <div className="relative">
            <div className="relative flex flex-col gap-6 lg:py-24 group cursor-pointer">
              <div className="flex flex-col gap-5">
                <p className="text-white text-center lg:text-justify leading-relaxed lg:text-lg">Join our creative community to collaborate, innovate, and thrive together. We welcome passionate individuals eager to make.</p>
              </div>
              <Link href="/services" className="mt-4 flex justify-center lg:justify-start gap-4 group">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#86c232] disabled:pointer-events-none disabled:opacity-50 text-white shadow hover:bg-[#86c232]/90 h-9 bg-gray-600 px-7 rounded-full lg:text-lg font-bold">All Services</button>
                <span className="w-14 h-14 rounded-full flex items-center justify-center bg-[#86c232] transform -rotate-45 transition-all duration-300 ease-in-out group-hover:rotate-0 group-hover:bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right text-2xl text-black rounded-full"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="container mx-auto py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Website Development */}
            <div className="group relative cursor-pointer bg-[#111] rounded-[32px] p-8 hover:bg-[#151515] transition-colors duration-300">
              <div className="flex justify-between items-start mb-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity w-10 h-10 text-[#86c232] stroke-[1.5]"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-6 h-6 text-[#86c232] group-hover:text-white group-hover:rotate-[45deg] transition-all duration-300"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
              </div>
              <h3 className="text-white text-2xl font-semibold mb-4">Website Development</h3>
              <p className="text-gray-400 leading-relaxed">We build responsive, fast, and secure websites tailored to your brand's needs. Whether it's an eCommerce store, a corporate website, or a custom web application, we deliver top-notch solutions.</p>
            </div>

            {/* Digital Marketing */}
            <div className="group relative cursor-pointer bg-[#111] rounded-[32px] p-8 hover:bg-[#151515] transition-colors duration-300">
              <div className="flex justify-between items-start mb-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-ellipsis w-10 h-10 text-[#86c232] stroke-[1.5]"><circle cx="12" cy="12" r="10"></circle><path d="M17 12h.01"></path><path d="M12 12h.01"></path><path d="M7 12h.01"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-6 h-6 text-[#86c232] group-hover:text-white group-hover:rotate-[45deg] transition-all duration-300"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
              </div>
              <h3 className="text-white text-2xl font-semibold mb-4">Digital Marketing</h3>
              <p className="text-gray-400 leading-relaxed">Enhance your online presence with our result-driven digital marketing services, including social media management, pay-per-click (PPC) advertising, email marketing, and brand growth strategies.</p>
            </div>

            {/* Graphic Designing */}
            <div className="group relative cursor-pointer bg-[#111] rounded-[32px] p-8 hover:bg-[#151515] transition-colors duration-300">
              <div className="flex justify-between items-start mb-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-diamond w-10 h-10 text-[#86c232] stroke-[1.5]"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-6 h-6 text-[#86c232] group-hover:text-white group-hover:rotate-[45deg] transition-all duration-300"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
              </div>
              <h3 className="text-white text-2xl font-semibold mb-4">Graphic Designing</h3>
              <p className="text-gray-400 leading-relaxed">Our creative design team provides professional branding, UI/UX design, logo design, brochures, and other visuals that make your business stand out in a competitive market.</p>
            </div>

            {/* Content Writing */}
            <div className="group relative cursor-pointer bg-[#111] rounded-[32px] p-8 hover:bg-[#151515] transition-colors duration-300">
              <div className="flex justify-between items-start mb-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-ellipsis w-10 h-10 text-[#86c232] stroke-[1.5]"><circle cx="12" cy="12" r="10"></circle><path d="M17 12h.01"></path><path d="M12 12h.01"></path><path d="M7 12h.01"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-6 h-6 text-[#86c232] group-hover:text-white group-hover:rotate-[45deg] transition-all duration-300"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
              </div>
              <h3 className="text-white text-2xl font-semibold mb-4">Content Writing</h3>
              <p className="text-gray-400 leading-relaxed">Engage your audience with high-quality, SEO-friendly content. Our expert writers craft compelling blog posts, website content, product descriptions, and marketing copy to boost your brand's visibility.</p>
            </div>

            {/* SEO */}
            <div className="group relative cursor-pointer bg-[#111] rounded-[32px] p-8 hover:bg-[#151515] transition-colors duration-300">
              <div className="flex justify-between items-start mb-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-ellipsis w-10 h-10 text-[#86c232] stroke-[1.5]"><circle cx="12" cy="12" r="10"></circle><path d="M17 12h.01"></path><path d="M12 12h.01"></path><path d="M7 12h.01"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-6 h-6 text-[#86c232] group-hover:text-white group-hover:rotate-[45deg] transition-all duration-300"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
              </div>
              <h3 className="text-white text-2xl font-semibold mb-4">Search Engine Optimization (SEO)</h3>
              <p className="text-gray-400 leading-relaxed">Get found on search engines and increase organic traffic with our SEO services, including keyword research, on-page optimization, technical SEO, and link-building strategies.</p>
            </div>

            {/* Software Development */}
            <div className="group relative cursor-pointer bg-[#111] rounded-[32px] p-8 hover:bg-[#151515] transition-colors duration-300">
              <div className="flex justify-between items-start mb-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-ellipsis w-10 h-10 text-[#86c232] stroke-[1.5]"><circle cx="12" cy="12" r="10"></circle><path d="M17 12h.01"></path><path d="M12 12h.01"></path><path d="M7 12h.01"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-6 h-6 text-[#86c232] group-hover:text-white group-hover:rotate-[45deg] transition-all duration-300"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
              </div>
              <h3 className="text-white text-2xl font-semibold mb-4">Software Development</h3>
              <p className="text-gray-400 leading-relaxed">We offer tailored software solutions to help businesses automate workflows, manage data efficiently, and improve operational efficiency through innovative applications.</p>
            </div>
          </div>
          
          <div className="text-center mt-20">
            <p className="text-white text-xl">Let's make something great work together. <Link className="text-[#86c232] hover:underline underline-offset-4" href="/pricing-plan">Get Free Quote</Link></p>
          </div>
        </div>
      </div>
    </section>
  );
} 