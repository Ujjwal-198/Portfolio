import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import TechStack from "@/components/TechStack";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,_#000_0%,_#0f0f2d_40%,_transparent_100%),radial-gradient(ellipse_at_center,_#4f46e5_0%,_#1e1b4b_50%,_#000_80%)]">
      <Hero className="bg-transparent" />
      <TechStack className="bg-black/40 backdrop-blur-sm" />
      <ProjectsSection className="bg-black/50" />
      <CTA className="bg-black/70" />
    </div>

  );
}
