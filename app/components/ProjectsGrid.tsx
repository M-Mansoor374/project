"use client";
import Image from "next/image";

const projects = [
  { title: "App Project 1", image: "/media/app1.f22ab53c.jpg", category: "App Development" },
  { title: "App Project 2", image: "/media/app2.dc5f3f98.jpg", category: "App Development" },
  { title: "App Project 3", image: "/media/app3.b71cfec0.jpg", category: "App Development" },
  { title: "App Project 4", image: "/media/app4.26566439.jpg", category: "App Development" },
  { title: "App Project 5", image: "/media/app5.9e9bbbf9.jpg", category: "App Development" },
  { title: "App Project 6", image: "/media/app6.496624cd.jpg", category: "App Development" },
  { title: "App Project 7", image: "/media/app7.96df06d3.png", category: "App Development" },
  { title: "App Project 8", image: "/media/app8.487642bb.png", category: "App Development" },
  { title: "App Project 9", image: "/media/app9.8254715f.png", category: "App Development" },
  { title: "App Project 10", image: "/media/app10.18305315.png", category: "App Development" },
  { title: "Web Project 1", image: "/media/web1.e0bad25d.png", category: "Website Development" },
  { title: "Web Project 2", image: "/media/web2.bd177f2f.png", category: "Website Development" },
  { title: "Web Project 3", image: "/media/web3.ba0f4c79.png", category: "Website Development" },
  { title: "Web Project 4", image: "/media/web4.cfb4692c.png", category: "Website Development" },
  { title: "Web Project 5", image: "/media/web5.c392f488.png", category: "Website Development" },
  { title: "Branding 1", image: "/media/brand1.dfa651cc.jpg", category: "Branding" },
  { title: "Branding 2", image: "/media/brand2.d1f71700.jpg", category: "Branding" },
  { title: "Branding 3", image: "/media/brand3.28211a2a.jpg", category: "Branding" },
  { title: "Branding 4", image: "/media/brand4.10af7f83.jpg", category: "Branding" },
  { title: "Branding 5", image: "/media/brand5.c55a7981.jpg", category: "Branding" },
  { title: "Branding 6", image: "/media/brand6.cdca95b7.jpg", category: "Branding" },
  { title: "Illustration 1", image: "/media/illust1.24e81448.jpg", category: "Illustration" },
  { title: "Illustration 2", image: "/media/illust2.cfe4514d.jpg", category: "Illustration" },
  { title: "Illustration 3", image: "/media/illust3.6d6e87e6.jpg", category: "Illustration" },
  { title: "Illustration 4", image: "/media/illust4.6ade4e8c.jpg", category: "Illustration" },
  { title: "Illustration 5", image: "/media/illust5.fe244939.jpg", category: "Illustration" },
  { title: "Illustration 6", image: "/media/illust6.c6cddd0b.jpg", category: "Illustration" },
  { title: "Logo 1", image: "/media/logo1.ef6ba7a1.jpg", category: "Logo" },
  { title: "Logo 2", image: "/media/logo2.32f2f645.jpg", category: "Logo" },
  { title: "Logo 3", image: "/media/logo3.dc9a9ac4.jpg", category: "Logo" },
  { title: "Logo 4", image: "/media/logo4.6efb44d2.jpg", category: "Logo" },
  { title: "Logo 5", image: "/media/logo5.4d3b74a4.jpg", category: "Logo" },
  { title: "Logo 6", image: "/media/logo6.a59cfe2a.jpg", category: "Logo" },
];

interface ProjectsGridProps {
  selectedCategory: string;
}

export default function ProjectsGrid({ selectedCategory }: ProjectsGridProps) {
  const filtered = selectedCategory === "All" ? projects : projects.filter(p => p.category === selectedCategory);

  return (
    <section className="container mx-auto px-4 pb-24">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {filtered.map((project, idx) => (
          <div
            key={idx}
            className="group cursor-pointer relative rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-full h-72">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={idx < 3}
              />
              <div className="absolute top-6 right-6">
                <span className="px-4 py-2 bg-white/40 backdrop-blur-3xl rounded-full text-white text-sm">
                  {project.category}
                </span>
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                <div className="w-20 h-20 border border-white hover:bg-[#c6ff3a] rounded-full flex items-center justify-center transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-8 h-8 text-white group-hover:text-black">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 