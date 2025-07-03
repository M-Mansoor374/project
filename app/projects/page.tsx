import Image from "next/image";
import ProjectsGrid from "../components/ProjectsGrid";
import ProjectsHeader from "../components/ProjectsHeader";

const categories = [
  "All",
  "App Development",
  "Website Development",
  "Branding",
  "Illustration",
  "Logo",
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <ProjectsHeader />
    </main>
  );
} 