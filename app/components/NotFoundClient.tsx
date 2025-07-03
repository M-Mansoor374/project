"use client";
import Header from "./Header";
import Footer from "./Footer";

export default function NotFoundClient() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center pt-40 pb-20">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold mb-4 border-r pr-6 border-gray-400 dark:border-gray-600">404</h1>
          <h2 className="text-xl font-normal">This page could not be found.</h2>
        </div>
      </main>
      <Footer />
    </div>
  );
} 