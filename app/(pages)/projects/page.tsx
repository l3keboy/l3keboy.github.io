import SectionHero from "@/components/pages/projects/SectionHero";
import SectionProjectsDisplay from "@/components/pages/projects/SectionProjectsDisplay";

export default function Projects() {
  return (
    <div className="flex flex-col gap-12">
      <SectionHero />
      <SectionProjectsDisplay />
    </div>
  );
}
