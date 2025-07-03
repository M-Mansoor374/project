import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white text-base font-semibold mt-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="flex flex-col items-start">
            <Link href="/">
              <Image src="/media/logo1.38d8183e.png" alt="logo" width={112} height={112} className="w-28 h-28 mb-3" />
            </Link>
            <p className="mb-3">14 West Street Wakefield WF2 8UA England</p>
            <a href="tel:+447861402051" className="hover:text-[#D4FF4D] block">+447861402051</a>
            <a href="mailto:contact@acciobyte.com" className="hover:text-[#D4FF4D] block">contact@acciobyte.com</a>
          </div>
          {/* Popular Services */}
          <div>
            <h2 className="text-lg font-bold my-8 leading-10">Popular Services</h2>
            <ul>
              <li><Link href="/services/website-development" className="block hover:text-[#D4FF4D] my-1">Website Development</Link></li>
              <li><Link href="/services/app-development" className="block hover:text-[#D4FF4D] my-1">Android & iOS Development</Link></li>
              <li><Link href="/services/digital-marketing" className="block hover:text-[#D4FF4D] my-1">Digital Marketing</Link></li>
              <li><Link href="/services/graphic-designing" className="block hover:text-[#D4FF4D] my-1">Graphic Designing</Link></li>
              <li><Link href="/services/social-media-marketing" className="block hover:text-[#D4FF4D] my-1">Social Media Marketing</Link></li>
              <li><Link href="/services/content-writing" className="block hover:text-[#D4FF4D] my-1">Content Writing</Link></li>
              <li><Link href="/services/search-engine-optimization" className="block hover:text-[#D4FF4D] my-1">Search Engine Optimization</Link></li>
              <li><Link href="/services/software-development" className="block hover:text-[#D4FF4D] my-1">Software Development</Link></li>
              <li><Link href="/services/cyber-security" className="block hover:text-[#D4FF4D] my-1">Cyber Security</Link></li>
              <li><Link href="/services/e-commerce" className="block hover:text-[#D4FF4D] my-1">E-Commerce</Link></li>
              <li><Link href="/services/illustrations" className="block hover:text-[#D4FF4D] my-1">Illustrations</Link></li>
              <li><Link href="/services/video-animation" className="block hover:text-[#D4FF4D] my-1">Video Animation</Link></li>
              <li><Link href="/services/point-of-sale" className="block hover:text-[#D4FF4D] my-1">Point of Sale (POS)</Link></li>
            </ul>
          </div>
          {/* Useful Links */}
          <div>
            <h2 className="text-lg font-bold my-8 leading-10">Useful Links</h2>
            <ul>
              <li><Link href="/" className="block hover:text-[#D4FF4D] my-1">Home</Link></li>
              <li><Link href="/projects" className="block hover:text-[#D4FF4D] my-1">Project</Link></li>
              <li><Link href="/services" className="block hover:text-[#D4FF4D] my-1">Services</Link></li>
              <li><Link href="/about" className="block hover:text-[#D4FF4D] my-1">About Us</Link></li>
              <li><Link href="/contact" className="block hover:text-[#D4FF4D] my-1">Contact Us</Link></li>
              <li><Link href="/privacy-and-policy" className="block hover:text-[#D4FF4D] my-1">Privacy Policy</Link></li>
              <li><Link href="/terms-and-condition" className="block hover:text-[#D4FF4D] my-1">Terms of Services</Link></li>
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h2 className="text-lg font-bold my-8 leading-10">Subscribe Our Newsletter</h2>
            <form className="space-y-4 lg:space-y-2 px-0">
              <div className="space-y-2">
                <input
                  className="flex h-9 w-full border border-gray-600 px-3 py-1 text-base shadow-sm transition-colors placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4FF4D] bg-white rounded mb-3 text-gray-800"
                  placeholder="your_email@example.com"
                  name="email"
                  type="email"
                  autoComplete="email"
                />
              </div>
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4FF4D] shadow hover:bg-[#D4FF4D]/90 h-9 px-4 py-2 w-full bg-[#D4FF4D] text-black font-semibold"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="w-full h-px my-8 bg-gray-700" />
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} — Acciobyte All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
} 