"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full h-20 xl:h-28 fixed top-0 z-50 flex items-center justify-between px-8 bg-black/70 backdrop-blur-lg">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image src="/media/logo.21e0c5de.png" alt="logo" width={112} height={96} className="w-16 h-16 xl:w-28 xl:h-24" />
          </Link>
          <span className="block w-4 h-4 rounded-full bg-[#c6ff3a] ml-2 mt-8" />
        </div>
        {/* Navigation */}
        <ul className="flex-1 flex justify-center items-center gap-8 text-white font-bold text-base xl:text-lg">
          <li><Link href="/" className="hover:text-[#c6ff3a] transition">HOME</Link></li>
          <li><Link href="/projects" className="hover:text-[#c6ff3a] transition">PROJECTS</Link></li>
          <li><Link href="/pricing-plan" className="hover:text-[#c6ff3a] transition">PRICING PLAN</Link></li>
          <li><Link href="/blogs" className="hover:text-[#c6ff3a] transition">BLOGS</Link></li>
          <li className="relative group flex items-center gap-2 cursor-pointer">
            <span>SERVICES</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"></path></svg>
            <div className="absolute top-10 left-0 min-w-[15rem] bg-white text-black rounded shadow-lg max-h-0 overflow-hidden group-hover:max-h-[45rem] duration-300">
              <ul className="py-1">
                <li><Link href="/services/website-development" className="block hover:bg-black/80 hover:text-white p-2.5 mx-2 rounded-md">WEBSITE DEVELOPMENT</Link></li>
                <li><Link href="/services/app-development" className="block hover:bg-black/80 hover:text-white p-2.5 mx-2 rounded-md">ANDROID & IOS DEVELOPMENT</Link></li>
                <li><Link href="/services/digital-marketing" className="block hover:bg-black/80 hover:text-white p-2.5 mx-2 rounded-md">DIGITAL MARKETING</Link></li>
                <li><Link href="/services/graphic-designing" className="block hover:bg-black/80 hover:text-white p-2.5 mx-2 rounded-md">GRAPHIC DESIGNING</Link></li>
                <li><Link href="/services/social-media-marketing" className="block hover:bg-black/80 hover:text-white p-2.5 mx-2 rounded-md">SOCIAL MEDIA MARKETING</Link></li>
                <li><Link href="/services/content-writing" className="block hover:bg-black/80 hover:text-white p-2.5 mx-2 rounded-md">CONTENT WRITING</Link></li>
                <li><Link href="/services/search-engine-optimization" className="block hover:bg-black/80 hover:text-white p-2.5 mx-2 rounded-md">SEARCH ENGINE OPTIMIZATION</Link></li>
                <li><Link href="/services/software-development" className="block hover:bg-black/80 hover:text-white p-2.5 mx-2 rounded-md">SOFTWARE DEVELOPMENT</Link></li>
                <li><Link href="/services/cyber-security" className="block hover:bg-black/80 hover:text-white p-2.5 mx-2 rounded-md">CYBER SECURITY</Link></li>
                <li><Link href="/services/e-commerce" className="block hover:bg-black/80 hover:text-white p-2.5 mx-2 rounded-md">E-COMMERCE</Link></li>
                <li><Link href="/services/illustrations" className="block hover:bg-black/80 hover:text-white p-2.5 mx-2 rounded-md">ILLUSTRATIONS</Link></li>
                <li><Link href="/services/video-animation" className="block hover:bg-black/80 hover:text-white p-2.5 mx-2 rounded-md">VIDEO ANIMATION</Link></li>
                <li><Link href="/services/point-of-sale" className="block hover:bg-black/80 hover:text-white p-2.5 mx-2 rounded-md">POINT OF SALE (POS)</Link></li>
              </ul>
            </div>
          </li>
          <li><Link href="/about" className="hover:text-[#c6ff3a] transition">ABOUT US</Link></li>
        </ul>
        {/* Contact Us Button and Dots Icon */}
        <div className="flex items-center gap-6">
          <Link href="/contact" className="bg-[#c6ff3a] text-black font-bold px-8 py-3 rounded-full shadow hover:bg-[#bff747] transition text-lg">Contact Us</Link>
          <button
            className="w-10 h-10 rounded-full bg-[#c6ff3a] flex items-center justify-center cursor-pointer focus:outline-none"
            aria-label="Open contact info"
            onClick={() => setOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-grip w-7 h-7">
              <circle cx="12" cy="5" r="1"></circle>
              <circle cx="19" cy="5" r="1"></circle>
              <circle cx="5" cy="5" r="1"></circle>
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
              <circle cx="12" cy="19" r="1"></circle>
              <circle cx="19" cy="19" r="1"></circle>
              <circle cx="5" cy="19" r="1"></circle>
            </svg>
          </button>
      </div>
    </nav>
      {/* Contact Sidebar/Modal */}
      {open && (
        <div className="fixed inset-0 z-[9999] flex justify-end">
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/70 transition-opacity" onClick={() => setOpen(false)} />
          {/* Sidebar */}
          <aside className="relative w-full max-w-sm bg-[#181818] h-full shadow-2xl p-8 flex flex-col items-center text-white animate-slideInRight overflow-y-auto">
            <button
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-700 transition"
              aria-label="Close contact info"
              onClick={() => setOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col gap-12 w-full mt-12">
              {/* Phone */}
              <div className="flex flex-col items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 24 24" stroke="#c6ff3a" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.72 3.06a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.99.35 2.01.59 3.06.72A2 2 0 0 1 22 16.92z" />
                </svg>
                <div className="text-lg font-bold mt-2">Phone</div>
                <div className="text-base">(309) 8855–314</div>
              </div>
              <hr className="w-full border-gray-700 my-2" />
              {/* Email */}
              <div className="flex flex-col items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 24 24" stroke="#c6ff3a" strokeWidth="2">
                  <rect x="2" y="5" width="20" height="14" rx="2" /><path d="M22 7l-10 6L2 7" />
                </svg>
                <div className="text-lg font-bold mt-2">Email</div>
                <div className="text-base">contact@acciobyte.com</div>
              </div>
              <hr className="w-full border-gray-700 my-2" />
              {/* Address */}
              <div className="flex flex-col items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 24 24" stroke="#c6ff3a" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.418 0-8-3.582-8-8 0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.418-3.582 8-8 8zm0-11a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                </svg>
                <div className="text-lg font-bold mt-2">Address</div>
                <div className="text-base text-center">123 Creative Lane London, SW1A 1AA United Kingdom</div>
              </div>
              <hr className="w-full border-gray-700 my-2" />
              {/* Stay Connected */}
              <div className="flex flex-col items-center gap-4 mt-4">
                <div className="text-xl font-bold mb-2">Stay Connected</div>
                <div className="flex gap-6">
                  {/* Facebook */}
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-white hover:border-[#c6ff3a] transition">
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" />
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-white hover:border-[#c6ff3a] transition">
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="6" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="1.5" />
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-white hover:border-[#c6ff3a] transition">
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <path d="M7 10v7M12 10v7M7 7h.01M12 7h.01M17 10v7M17 7h.01" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}
      {/* Sidebar animation */}
      <style jsx global>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slideInRight {
          animation: slideInRight 0.3s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>
    </>
  );
}
