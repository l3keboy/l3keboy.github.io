import SectionHero from "@/components/pages/projects/slug/SectionHero";
import SectionProjectDetails from "@/components/pages/projects/slug/SectionProjectDetails";
import { ProjectService } from "@/services/ProjectService";
import { notFound } from "next/navigation";

export default async function ProjectSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // #region Get projects
  const project = ProjectService.getProjectBySlug(slug);
  // #endregion

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-12">
      <SectionHero project={project} />
      <SectionProjectDetails project={project} />
    </div>
  );
}
