import Link from 'next/link';

export default function PrivacyAndPolicyPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="!w-full bg-cover bg-center bg-black" style={{ backgroundImage: 'url(/media/bg.0f5970d1.png)' }}>
        <div className="w-full h-full flex items-center justify-center py-32 xl:py-48 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/media/Inner_bg.23beb686.jpg)' }}>
          <div className="flex flex-col justify-center items-center gap-8 font-semibold text-white">
            <span className="text-5xl xl:text-7xl text-center">Privacy <span className="text-[#D4FF4D]">&amp; Policy</span></span>
            <nav aria-label="breadcrumb">
              <ul className="flex items-center space-x-2 text-lg font-semibold text-white py-1.5 px-2">
                <li><Link className="hover:underline" href="/">Home</Link></li>
                <li className="flex items-center"><span className="mx-2">*</span><span className="text-[#D4FF4D]">Privacy &amp; Policy</span></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto py-16 px-4 max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-[#D4FF4D]">Our Commitment to Your Privacy</h2>
        <p className="mb-4 text-gray-300">
          This Privacy Policy describes how we collect, use, and protect your personal information when you use our website and services. By accessing or using our site, you agree to the terms of this policy.
        </p>
        <h3 className="text-2xl font-semibold mt-8 mb-2">Information We Collect</h3>
        <ul className="list-disc list-inside mb-4 text-gray-300">
          <li>Personal identification information (Name, email address, phone number, etc.)</li>
          <li>Usage data and cookies</li>
          <li>Other information you provide via forms or contact</li>
        </ul>
        <h3 className="text-2xl font-semibold mt-8 mb-2">How We Use Your Information</h3>
        <ul className="list-disc list-inside mb-4 text-gray-300">
          <li>To provide and maintain our services</li>
          <li>To communicate with you</li>
          <li>To improve our website and offerings</li>
          <li>To comply with legal obligations</li>
        </ul>
        <h3 className="text-2xl font-semibold mt-8 mb-2">How We Protect Your Information</h3>
        <p className="mb-4 text-gray-300">
          We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet is 100% secure.
        </p>
        <h3 className="text-2xl font-semibold mt-8 mb-2">Your Rights</h3>
        <ul className="list-disc list-inside mb-4 text-gray-300">
          <li>You have the right to access, update, or delete your personal information.</li>
          <li>You may opt out of receiving marketing communications at any time.</li>
        </ul>
        <h3 className="text-2xl font-semibold mt-8 mb-2">Changes to This Policy</h3>
        <p className="mb-4 text-gray-300">
          We may update our Privacy Policy from time to time. We encourage you to review this page periodically for any changes.
        </p>
        <h3 className="text-2xl font-semibold mt-8 mb-2">Contact Us</h3>
        <p className="mb-4 text-gray-300">
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contact@acciobyte.com" className="text-[#D4FF4D] underline">contact@acciobyte.com</a>.
        </p>
      </div>
    </div>
  );
} 