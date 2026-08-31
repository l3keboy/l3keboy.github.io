import SectionHero from "@/components/pages/projects/SectionHero";
import SectionProjectsDisplay, {
  type ISectionProjectDisplayParams,
} from "@/components/pages/projects/SectionProjectsDisplay";

// Interfaces
type ProjectsPageProps = {
  searchParams: Promise<ISectionProjectDisplayParams>;
};

export default async function Projects({ searchParams }: ProjectsPageProps) {
  const params = await searchParams;

  return (
    <div className="flex flex-col gap-12">
      <SectionHero />
      <SectionProjectsDisplay
        highlight={params.highlight}
        technology={params.technology}
        type={params.type}
      />
    </div>
  );
}
