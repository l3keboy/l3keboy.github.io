import SectionHero from "@/components/pages/projects/slug/SectionHero";
import SectionProjectDetails from "@/components/pages/projects/slug/SectionProjectDetails";
import { siteSettings } from "@/utils/config/siteSettings";
import { notFound } from "next/navigation";

export default async function ProjectSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // #region Get project
  const project = siteSettings.projects.filter((x) => x.slug === slug)[0];
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
