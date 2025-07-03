import Image from 'next/image';

export default function WhyChooseUsSection() {
  return (
    <section className="relative min-h-screen overflow-hidden py-20 bg-black">
      <div className="container relative mx-auto z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center mb-7">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Image src="/media/asterisk_default.4355d764.png" alt="Astrivix Asteric" width={20} height={20} className="w-5 h-5" />
              <span className="text-white uppercase tracking-wider font-semibold">WHY CHOOSE</span>
            </div>
            <h2 className="text-4xl lg:text-5xl leading-normal text-white font-light">
              Expertise for <span className="text-[#86c232] font-semibold">your digital</span><br />growth journey
            </h2>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mt-8 lg:mt-0">
            Our dedicated team is committed to understanding your unique needs, ensuring that we provide innovative strategies that drive results. With a focus on quality and integrity.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-12">
          <div className="space-y-12">
            {/* Data-Driven Approach */}
            <div className="relative p-8 rounded-3xl bg-transparent border border-gray-800 overflow-hidden group cursor-pointer transition-all duration-300 hover:bg-[#151515]">
              <div className="absolute inset-0 transition-transform duration-700 ease-in-out bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-transparent opacity-60" />
              <div className="relative z-10">
                <h3 className="text-white text-xl lg:text-2xl font-semibold mb-4">Data-Driven Approach</h3>
                <p className="text-gray-400 leading-relaxed">We leverage data and insights to make informed decisions that lead to more effective and efficient solutions.</p>
              </div>
            </div>
            {/* Competitive Pricing */}
            <div className="relative p-8 rounded-3xl bg-transparent border border-gray-800 overflow-hidden group cursor-pointer transition-all duration-300 hover:bg-[#151515]">
              <div className="absolute inset-0 transition-transform duration-700 ease-in-out bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-transparent opacity-60" />
              <div className="relative z-10">
                <h3 className="text-white text-xl lg:text-2xl font-semibold mb-4">Competitive Pricing</h3>
                <p className="text-gray-400 leading-relaxed">We offer our top-quality services at competitive prices, providing you with great value for your investment.</p>
              </div>
            </div>
            {/* Ethical Business Practices */}
            <div className="relative p-8 rounded-3xl bg-transparent border border-gray-800 overflow-hidden group cursor-pointer transition-all duration-300 hover:bg-[#151515]">
              <div className="absolute inset-0 transition-transform duration-700 ease-in-out bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-transparent opacity-60" />
              <div className="relative z-10">
                <h3 className="text-white text-xl lg:text-2xl font-semibold mb-4">Ethical Business Practices</h3>
                <p className="text-gray-400 leading-relaxed">We maintain the highest level of professionalism and ethical standards in all our business dealings.</p>
              </div>
            </div>
          </div>
          <div className="lg:sticky lg:top-20 space-y-8">
            <div className="image-container group relative w-full h-full rounded-3xl overflow-hidden">
              <Image src="/media/whyus.fe999c9a.png" alt="Business meeting" width={600} height={600} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-20 -right-32 z-0 hidden lg:block">
          <Image src="/media/hex.eced7c60.png" alt="Astrivix Sphere Image" width={320} height={320} className="w-80 h-80 animate-spin-slow" />
        </div>
      </div>
    </section>
  );
} 