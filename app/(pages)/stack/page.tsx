import SectionHero from "@/components/pages/stack/SectionHero";
import SectionStackDisplay from "@/components/pages/stack/SectionStackDisplay";

export default function Stack() {
  return (
    <div className="flex flex-col gap-12">
      <SectionHero />
      <SectionStackDisplay />
    </div>
  );
}
