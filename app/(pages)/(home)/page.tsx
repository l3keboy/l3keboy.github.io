import SectionAbout from "@/components/pages/home/SectionAbout";
import SectionHero from "@/components/pages/home/SectionHero";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <SectionHero />
      <SectionAbout />
    </div>
  );
}
