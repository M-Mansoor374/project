import Image from 'next/image';

function PricingFeature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-5 h-5 rounded-full border-2 border-[#D4FF4D] flex items-center justify-center flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4FF4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
          <path d="M20 6 9 17l-5-5"></path>
        </svg>
      </div>
      <span className="text-white text-base">{text}</span>
    </div>
  );
}

export default function PricingPlanPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="!w-full bg-cover bg-center bg-black" style={{ backgroundImage: 'url(/media/bg.0f5970d1.png)' }}>
        <div className="w-full h-full flex items-center justify-center py-32 xl:py-48 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/media/Inner_bg.23beb686.jpg)' }}>
          <div className="flex flex-col justify-center items-center gap-8 font-semibold text-white">
            <span className="text-5xl xl:text-7xl">Our<span className="inline-block w-3 h-3 bg-[#D4FF4D] rounded-full align-middle mx-2"></span><span className="text-[#D4FF4D]">Pricing</span></span>
            <nav aria-label="breadcrumb">
              <ul className="flex items-center space-x-2 text-lg font-semibold text-white py-1.5 px-2">
                <li><a className="hover:underline" href="/">Home</a></li>
                <li className="flex items-center"><span className="mx-2">*</span><span className="text-[#D4FF4D]">Pricing plan</span></li>
              </ul>
            </nav>
          </div>
        </div>
        {/* Service Bar */}
        <div className="relative w-full overflow-x-auto py-3 bg-[#D4FF4D] whitespace-nowrap">
          <div className="flex items-center space-x-8 w-max px-8">
            {['IOS/Android App Development','Website Development','Digital Marketing','Graphic Designing','Content Writing','Search Engine Optimization (SEO)','Point of Sale (POS)','Cyber Security','IOS/Android App Development','Website Development','Digital Marketing','Graphic Designing','Content Writing','Search Engine Optimization (SEO)','Point of Sale (POS)','Cyber Security'].map((service, i) => (
              <div key={i} className="flex items-center justify-center gap-2">
                <span className="whitespace-nowrap text-xl font-bold text-black">{service}</span>
                <span className="flex justify-center items-center"><Image src="/media/asteric.3e45eb6d.png" alt="Asteric" width={24} height={24} className="w-4 h-4" /></span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Pricing cards can go here */}
      <div className="container mx-auto py-20">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Bronze League */}
          <div className="bg-[#111] rounded-[32px] p-6 xl:p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="flex flex-col gap-4 xl:flex-row justify-between items-start mb-12">
                <div>
                  <h3 className="text-3xl text-white mb-2">Bronze League</h3>
                  <p className="text-gray-400">Our popular Plan for small teams.</p>
                </div>
                <div className="text-right"><span className="text-[#D4FF4D] text-5xl font-medium">$449.00</span><span className="text-gray-400 text-lg">/per month</span></div>
              </div>
              <div className="relative overflow-y-auto h-72 mb-12 pr-2">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="Logo Design" />
                  <PricingFeature text="5 Logo Concepts" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="3 Dedicated Designers" />
                  <PricingFeature text="Icon Design" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="Stationary" />
                  <PricingFeature text="Business Card, Letterhead, Envelope" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="MS Word Letterhead" />
                  <PricingFeature text="Website" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="5 Pages Static Website" />
                  <PricingFeature text="Team of Expert Designers & Developers" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="5 Stock Photos + 3 Banner Designs" />
                  <PricingFeature text="Complete W3C Certified HTML" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="Complete Deployment" />
                  <PricingFeature text="Social Media" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="Facebook Page Design" />
                  <PricingFeature text="Value Added Services" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="All Final File Formats" />
                  <PricingFeature text="Dedicated Account Manager" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="100% Ownership Rights" />
                  <PricingFeature text="100% Satisfaction Guarantee" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="100% Unique Design Guarantee" />
                  <PricingFeature text="100% Money Back Guarantee" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="NOTE: Add CMS for Additional $150" />
                  <PricingFeature text="Add Mobile Responsive for Additional $99" />
                </div>
              </div>
            </div>
            <button className="w-full bg-[#D4FF4D] text-black font-semibold rounded-full py-4 px-8 text-lg hover:bg-[#D4FF4D]/90 transition-colors" tabIndex={0}>Get Started</button>
          </div>
          {/* Silver League */}
          <div className="bg-[#111] rounded-[32px] p-6 xl:p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="flex flex-col gap-4 xl:flex-row justify-between items-start mb-12">
                <div>
                  <h3 className="text-3xl text-white mb-2">Silver League</h3>
                  <p className="text-gray-400">Advanced features and reporting</p>
                </div>
                <div className="text-right"><span className="text-[#D4FF4D] text-5xl font-medium">$999.99</span><span className="text-gray-400 text-lg">/per month</span></div>
              </div>
              <div className="relative overflow-y-auto h-72 mb-12 pr-2">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="Logo Design" />
                  <PricingFeature text="10 Logo Concepts" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="5 Dedicated Designers" />
                  <PricingFeature text="Icon Design" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="Stationary" />
                  <PricingFeature text="Business Card, Letterhead, Envelope, Fax Template" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="MS Word Letterhead" />
                  <PricingFeature text="Website" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="10 Unique Pages Website" />
                  <PricingFeature text="Content Management System (CMS)" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="Mobile Responsive" />
                  <PricingFeature text="Team of Expert Designers & Developers" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="8 Stock images" />
                  <PricingFeature text="5 Banner Designs" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="Jquery Sliders" />
                  <PricingFeature text="Free Google Friendly Sitemap" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="Complete W3C Certified HTML" />
                  <PricingFeature text="Complete Deployment" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="Facebook Page Design" />
                  <PricingFeature text="Twitter Page Design" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="All Final File Formats" />
                  <PricingFeature text="Dedicated Account Manager" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="100% Ownership Rights" />
                  <PricingFeature text="100% Satisfaction Guarantee" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="100% Unique Design Guarantee" />
                  <PricingFeature text="100% Money Back Guarantee" />
                </div>
              </div>
            </div>
            <button className="w-full bg-[#D4FF4D] text-black font-semibold rounded-full py-4 px-8 text-lg hover:bg-[#D4FF4D]/90 transition-colors" tabIndex={0}>Get Started</button>
          </div>
          {/* Gold League */}
          <div className="bg-[#111] rounded-[32px] p-6 xl:p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="flex flex-col gap-4 xl:flex-row justify-between items-start mb-12">
                <div>
                  <h3 className="text-3xl text-white mb-2">Gold League</h3>
                  <p className="text-gray-400">Gold for idea to existence and premium quality</p>
                </div>
                <div className="text-right"><span className="text-[#D4FF4D] text-5xl font-medium">$1399.99</span><span className="text-gray-400 text-lg">/per month</span></div>
              </div>
              <div className="relative overflow-y-auto h-72 mb-12 pr-2">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="Logo Design" />
                  <PricingFeature text="Unlimited Logo Concepts" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="8 Dedicated Designers" />
                  <PricingFeature text="Icon Design" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="Stationary" />
                  <PricingFeature text="2 Free Custom Stationary Designs" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="MS Word Letterhead (Letterhead, Envelope, Business Card, Invoice)" />
                  <PricingFeature text="Company Profile Design (4 pages)" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="Trifold Brochure Design" />
                  <PricingFeature text="Presentation Folder Design" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="Website" />
                  <PricingFeature text="Up to 15 Unique Pages Website" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="Conceptual and Dynamic Liquid Website" />
                  <PricingFeature text="Content Management System (CMS)" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="Team of Expert Designers & Developers" />
                  <PricingFeature text="Mobile Responsive" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="Online Reservation/Appointment Tool (Optional)" />
                  <PricingFeature text="Online Payment Integration (Optional)" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="Custom Forms" />
                  <PricingFeature text="Lead Capturing Forms (Optional)" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="Striking Hover Effects" />
                  <PricingFeature text="Social Media Integration" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="Search Engine Submission" />
                  <PricingFeature text="15 Stock Images" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="8 Unique Banner Designs" />
                  <PricingFeature text="Jquery Sliders" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="Free Google Friendly Sitemap" />
                  <PricingFeature text="Complete W3C Certified HTML" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="Facebook Page Design" />
                  <PricingFeature text="Twitter Page Design" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="YouTube Page Design" />
                  <PricingFeature text="Google+ Page Design" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="All Final File Formats" />
                  <PricingFeature text="Dedicated Account Manager" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="100% Ownership Rights" />
                  <PricingFeature text="100% Satisfaction Guarantee" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  <PricingFeature text="100% Unique Design Guarantee" />
                  <PricingFeature text="100% Money Back Guarantee" />
                </div>
              </div>
            </div>
            <button className="w-full bg-[#D4FF4D] text-black font-semibold rounded-full py-4 px-8 text-lg hover:bg-[#D4FF4D]/90 transition-colors" tabIndex={0}>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
} 