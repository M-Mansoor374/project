"use client";
import Image from "next/image";
import ProjectsGrid from "./ProjectsGrid";
import { useState } from "react";

const categories = [
  "All",
  "App Development",
  "Website Development",
  "Branding",
  "Illustration",
  "Logo",
];

export default function ProjectsHeader() {
  const [selected, setSelected] = useState("All");

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-screen h-[100vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/media/hero_bg3.061ff69e.jpg"
            alt="Projects Hero Background"
            fill
            className="object-cover object-center opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Our <span className="text-[#c6ff3a]">Projects</span>
          </h1>
          <div className="flex items-center mt-8 text-lg md:text-xl font-medium">
            <span className="text-white/90">Home</span>
            <span className="mx-2 text-[#c6ff3a]">*</span>
            <span className="text-[#c6ff3a]">Projects</span>
          </div>
          <span className="mt-3 block w-4 h-4 rounded-full bg-[#c6ff3a] mx-auto" />

          {/* Filter Bar in Header */}
          <div className="flex flex-wrap gap-6 mt-16 justify-center w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-10 py-3 rounded-full font-bold text-lg transition-all duration-200 shadow ${selected === cat ? "bg-[#c6ff3a] text-black" : "bg-[#232323] text-white hover:bg-[#c6ff3a] hover:text-black"}`}
                onClick={() => setSelected(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Projects Grid and Filter (Client Component) */}
      <ProjectsGrid selectedCategory={selected} />
    </>
  );
} 