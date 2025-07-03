'use client';
import { Typewriter } from 'react-simple-typewriter';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-black overflow-hidden" style={{ backgroundImage: 'url(/media/bg.0f5970d1.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Floating Geometric Shape */}
      <div className="absolute top-0 right-0 z-20 w-48 md:w-64 lg:w-80 xl:w-[420px] pointer-events-none">
        <img src="/media/sec1.d2123dfe.png" alt="Geometric Shape" className="w-full h-auto" />
      </div>
      {/* Logo in Hero */}
      <div className="absolute top-6 left-6 z-30 flex items-start">
        <img src="/media/logo.21e0c5de.png" alt="logo" width={110} height={110} className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] object-contain" />
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center w-full max-w-5xl px-6 py-16 md:py-32 mx-auto">
        <h1 className="font-sans font-extrabold tracking-tight leading-[1.1] mb-4 text-left text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] flex flex-wrap items-center">
          <span>Innovative solutions for&nbsp;</span>
          <span className="font-extrabold text-lime-400 inline-block min-w-[220px]">
            <Typewriter
              words={[
                'Digital Marketing',
                'Brand Strategy',
                'Web Design',
                'Social Media',
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={0}
            />
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mb-10 font-sans font-normal">
          At our Creative Digital Agency, we bring your ideas to life by crafting engaging, impactful digital experiences that captivate audiences and drive results. From innovative web design to compelling content and cutting-edge digital strategies.
        </p>
        <div className="flex flex-row items-center gap-4 mt-2">
          <Link href="/contact" className="px-8 py-4 bg-[#232323] text-white font-bold rounded-full hover:bg-[#333] transition text-lg shadow font-sans">
            Get In Touch
          </Link>
          <Link href="#learn-more" className="px-8 py-4 bg-lime-400 text-black font-bold rounded-full hover:bg-lime-300 transition text-lg shadow font-sans flex items-center gap-2">
            Learn More <span className="text-2xl">→</span>
          </Link>
        </div>
      </div>
      {/* Overlay for subtle darkening */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
    </section>
  );
} 