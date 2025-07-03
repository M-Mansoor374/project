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

export default function TermsAndConditionPage() {
  return (
    <main className="bg-black text-white pb-10">
      {/* Hero Section */}
      <section className="relative w-full h-[380px] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/media/hero_bg3.061ff69e.jpg"
            alt="Terms Hero Background"
            fill
            className="object-cover object-center opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl xl:text-7xl text-center font-bold text-white">
            Terms & <span className="text-[#c6ff3a]">Conditions</span>
          </h1>
          <nav aria-label="breadcrumb" className="mt-8">
            <ul className="flex items-center space-x-2 text-xl font-semibold text-white py-1.5 px-2">
              <li><Link className="hover:underline" href="/">Home</Link></li>
              <li className="flex items-center"><span className="mx-2 text-[#c6ff3a]">*</span><span className="text-[#c6ff3a]">Terms and condition</span></li>
            </ul>
          </nav>
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

      {/* Main Content */}
      <section className="max-w-3xl text-justify mx-auto space-y-6 bg-white/5 backdrop-blur-lg p-10 mt-10 rounded-[32px]">
        <p>Welcome to Acciobyte. These Terms and Conditions govern your use of our website and services. By accessing or using our platform, you agree to comply with these terms.</p>
        <h3 className="text-xl font-bold mt-6">1. Services</h3>
        <p>Acciobyte provides IT solutions, including software development, cybersecurity, cloud services, and other digital solutions. The services are offered as per agreed terms with clients.</p>
        <h3 className="text-xl font-bold mt-6">2. User Responsibilities</h3>
        <ul className="list-disc ml-5 space-y-2">
          <li>You agree to provide accurate information when using our services.</li>
          <li>You must not use our platform for illegal, fraudulent, or unethical purposes.</li>
          <li>Unauthorized copying, distribution, or modification of our software and content is strictly prohibited.</li>
        </ul>
        <h3 className="text-xl font-bold mt-6">3. Payment & Refunds</h3>
        <ul className="list-disc ml-5 space-y-2">
          <li>Payments must be made as per the agreed pricing and timelines.</li>
          <li>Refund policies vary by service and are detailed in specific service agreements.</li>
        </ul>
        <h3 className="text-xl font-bold mt-6">4. Intellectual Property</h3>
        <p>All content, logos, and software developed by Acciobyte remain the intellectual property of the company. Unauthorized reproduction or distribution is prohibited.</p>
        <h3 className="text-xl font-bold mt-6">5. Limitation of Liability</h3>
        <p>We are not responsible for any direct or indirect damages resulting from the use of our services, including but not limited to data loss, cyber threats, or service disruptions.</p>
        <h3 className="text-xl font-bold mt-6">6. Termination</h3>
        <p>We reserve the right to terminate services if users violate our terms or engage in malicious activities.</p>
        <h3 className="text-xl font-bold mt-6">7. Modifications to Terms</h3>
        <p>We may update these terms periodically. Continued use of our services after changes means you accept the revised terms.</p>
      </section>
    </main>
  );
} 