import { Reveal } from "@/components/common/Reveal";
import SectionAbout from "@/components/pages/home/SectionAbout";
import SectionCertificationHighlights from "@/components/pages/home/SectionCertificationHighlights";
import SectionHero from "@/components/pages/home/SectionHero";
import SectionProjectHighlights from "@/components/pages/home/SectionProjectsHightlights";
import SectionStack from "@/components/pages/home/SectionStack";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <Reveal>
        <SectionHero />
      </Reveal>
      <Reveal>
        <SectionAbout />
      </Reveal>
      <Reveal>
        <SectionStack />
      </Reveal>
      <Reveal>
        <SectionProjectHighlights />
      </Reveal>
      <Reveal>
        <SectionCertificationHighlights />
      </Reveal>
    </div>
  );
}
