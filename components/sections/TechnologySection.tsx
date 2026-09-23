import { SectionHeader } from "@/components/SectionHeader";
import { TechnologyItem } from "@/components/TechnologyItem";
import { getTechnologies } from "@/data/technologies";
import { getUiText } from "@/data/ui";
import type { Locale } from "@/lib/i18n";

export function TechnologySection({ locale }: { locale: Locale }) {
  const technologies = getTechnologies(locale);
  const t = getUiText(locale).technology;

  return (
    <section className="bg-surface py-24 text-on-dark sm:py-28">
      <div className="container-nera">
        <SectionHeader title={t.title} theme="dark" />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {technologies.map((tech) => (
            <TechnologyItem key={tech.name} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
