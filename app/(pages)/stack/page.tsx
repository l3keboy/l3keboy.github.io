import { Reveal } from "@/components/common/Reveal";
import SectionHero from "@/components/pages/stack/SectionHero";
import SectionStackDisplay from "@/components/pages/stack/SectionStackDisplay";

export default function Stack() {
  return (
    <div className="flex flex-col gap-12">
      <Reveal>
        <SectionHero />
      </Reveal>
      <Reveal>
        <SectionStackDisplay />
      </Reveal>
    </div>
  );
}
