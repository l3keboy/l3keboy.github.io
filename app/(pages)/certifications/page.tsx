import SectionCertificatesDisplay, {
  type ISectionCertificatesDisplayParams,
} from "@/components/pages/certifications/SectionCertificatesDisplay";
import SectionHero from "@/components/pages/certifications/SectionHero";

// Interfaces
type CertificationsPageProps = {
  searchParams: Promise<ISectionCertificatesDisplayParams>;
};

export default async function Certifications({
  searchParams,
}: CertificationsPageProps) {
  const params = await searchParams;

  return (
    <div className="flex flex-col gap-12">
      <SectionHero />
      <SectionCertificatesDisplay
        company={params.company}
        highlight={params.highlight}
        sortBy={params.sortBy}
        sortDirection={params.sortDirection}
      />
    </div>
  );
}
