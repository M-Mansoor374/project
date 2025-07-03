import Head from 'next/head';
import NotFoundClient from './components/NotFoundClient';

export default function NotFound() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>404: This page could not be found.</title>
        <meta name="description" content="Acciobyte offers expert web and mobile app development, creative graphic design, and professional penetration testing services. Build secure, stunning, and high-performing digital solutions with our skilled team." />
        <meta name="author" content="Acciobyte" />
        <meta name="keywords" content="web development services,mobile app development,graphic design agency,penetration testing company,Next.js developers,TypeScript development,UI/UX design,cybersecurity services,Acciobyte,tailored software solutions" />
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
        <meta property="og:title" content="Acciobyte – Web, App, Design & Pen Testing Experts" />
        <meta property="og:description" content="Build stunning websites and apps, get custom graphics, and ensure cybersecurity with Acciobyte's full-service digital solutions." />
        <meta property="og:url" content="https://www.acciobyte.com" />
        <meta property="og:site_name" content="Acciobyte" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Acciobyte – Web, App, Design & Pen Testing Experts" />
        <meta name="twitter:description" content="Build stunning websites and apps, get custom graphics, and ensure cybersecurity with Acciobyte's full-service digital solutions." />
        <link rel="preload" href="/media/2b3f1035ed87a788-s.p.woff2" as="font" crossOrigin="" type="font/woff2" />
        <link rel="preload" as="image" href="/media/logo.21e0c5de.png" />
        <link rel="preload" as="image" href="/media/logo1.38d8183e.png" />
      </Head>
      <NotFoundClient />
    </>
  );
} 