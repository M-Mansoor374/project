import Image from "next/image";
import Link from "next/link";

const marqueeServices = [
  "IOS/Android App Development",
  "Website Development",
  "Digital Marketing",
  "Graphic Designing",
  "Content Writing",
  "Search Engine Optimization (SEO)",
  "Point of Sale (POS)",
  "Cyber Security",
];

const services = [
  {
    title: "Website Development",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity w-10 h-10 text-[#c6ff3a] stroke-[1.5]">
        <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
      </svg>
    ),
    desc: "We build responsive, fast, and secure websites tailored to your brand's needs. Whether it's an eCommerce store, a corporate website, or a custom web application, we deliver top-notch solutions.",
  },
  {
    title: "Digital Marketing",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-ellipsis w-10 h-10 text-[#c6ff3a] stroke-[1.5]">
        <circle cx="12" cy="12" r="10" />
        <path d="M17 12h.01" />
        <path d="M12 12h.01" />
        <path d="M7 12h.01" />
      </svg>
    ),
    desc: "Enhance your online presence with our result-driven digital marketing services, including social media management, PPC, email marketing, and brand growth strategies.",
  },
  {
    title: "Graphic Designing",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-diamond w-10 h-10 text-[#c6ff3a] stroke-[1.5]">
        <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" />
      </svg>
    ),
    desc: "Our creative design team provides professional branding, UI/UX design, logo design, brochures, and other visuals that make your business stand out in a competitive market.",
  },
  {
    title: "Content Writing",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-ellipsis w-10 h-10 text-[#c6ff3a] stroke-[1.5]">
        <circle cx="12" cy="12" r="10" />
        <path d="M17 12h.01" />
        <path d="M12 12h.01" />
        <path d="M7 12h.01" />
      </svg>
    ),
    desc: "Engage your audience with high-quality, SEO-friendly content. Our expert writers craft compelling blog posts, website content, product descriptions, and marketing copy to boost your brand's visibility.",
  },
  {
    title: "Search Engine Optimization (SEO)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-ellipsis w-10 h-10 text-[#c6ff3a] stroke-[1.5]">
        <circle cx="12" cy="12" r="10" />
        <path d="M17 12h.01" />
        <path d="M12 12h.01" />
        <path d="M7 12h.01" />
      </svg>
    ),
    desc: "Get found on search engines and increase organic traffic with our SEO services, including keyword research, on-page optimization, technical SEO, and link-building strategies.",
  },
  {
    title: "Software Development",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-ellipsis w-10 h-10 text-[#c6ff3a] stroke-[1.5]">
        <circle cx="12" cy="12" r="10" />
        <path d="M17 12h.01" />
        <path d="M12 12h.01" />
        <path d="M7 12h.01" />
      </svg>
    ),
    desc: "We offer tailored software solutions to help businesses automate workflows, manage data efficiently, and improve operational efficiency through innovative applications.",
  },
  {
    title: "Social Media Marketing",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-ellipsis w-10 h-10 text-[#c6ff3a] stroke-[1.5]">
        <circle cx="12" cy="12" r="10" />
        <path d="M17 12h.01" />
        <path d="M12 12h.01" />
        <path d="M7 12h.01" />
      </svg>
    ),
    desc: "Engage with your audience and build a strong online presence with targeted social media campaigns on platforms like Facebook, Instagram, Twitter, LinkedIn, and TikTok.",
  },
  {
    title: "Illustration",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-ellipsis w-10 h-10 text-[#c6ff3a] stroke-[1.5]">
        <circle cx="12" cy="12" r="10" />
        <path d="M17 12h.01" />
        <path d="M12 12h.01" />
        <path d="M7 12h.01" />
      </svg>
    ),
    desc: "Custom illustrations tailored to your brand's storytelling needs, including vector designs, book illustrations, character design, and marketing graphics.",
  },
  {
    title: "Video Animation",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-ellipsis w-10 h-10 text-[#c6ff3a] stroke-[1.5]">
        <circle cx="12" cy="12" r="10" />
        <path d="M17 12h.01" />
        <path d="M12 12h.01" />
        <path d="M7 12h.01" />
      </svg>
    ),
    desc: "Bring your ideas to life with motion graphics, explainer videos, 2D/3D animations, and promotional videos designed to captivate and engage your audience.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[380px] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/media/hero_bg3.061ff69e.jpg"
            alt="Services Hero Background"
            fill
            className="object-cover object-center opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Our <span className="text-[#c6ff3a]">Services</span>
          </h1>
          <div className="flex items-center mt-8 text-lg md:text-xl font-medium">
            <Link href="/" className="text-white/90 hover:underline">Home</Link>
            <span className="mx-2 text-[#c6ff3a]">*</span>
            <span className="text-[#c6ff3a]">Services</span>
          </div>
          <span className="mt-3 block w-4 h-4 rounded-full bg-[#c6ff3a] mx-auto" />
        </div>
      </section>

      {/* Marquee/Service Bar */}
      <section className="relative w-full overflow-hidden py-3 bg-[#c6ff3a]">
        <div className="flex items-center space-x-8 w-max animate-marquee">
          {marqueeServices.concat(marqueeServices).map((service, idx) => (
            <div key={idx} className="flex items-center justify-center gap-3">
              <span className="whitespace-nowrap text-xl font-bold text-black">{service}</span>
              <Image src="/media/asteric.3e45eb6d.png" alt="Asteric" width={16} height={16} className="w-4 h-4" />
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative cursor-pointer bg-[#18181b] rounded-[32px] p-8 hover:bg-black transition-colors duration-300 shadow-lg"
            >
              <div className="flex justify-between items-start mb-20">
                {service.icon}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-6 h-6 text-[#c6ff3a] group-hover:text-white group-hover:rotate-[45deg] transition-all duration-300">
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </div>
              <h3 className="text-white text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="leading-relaxed text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-20">
          <p className="text-white text-xl">Let&apos;s make something great work together. <Link className="text-[#c6ff3a] hover:underline underline-offset-4" href="/contact">Get Free Quote</Link></p>
        </div>
      </section>
    </main>
  );
}

// Add this to your global CSS (app/globals.css):
// .animate-marquee { animation: marquee 40s linear infinite; }
// @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } 