import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCardGrid } from "@/components/ProjectCardGrid";
import { getProjectsText } from "@/data/projects";
import { getUiText } from "@/data/ui";
import type { Locale } from "@/lib/i18n";

export function ProjectsSection({ locale }: { locale: Locale }) {
  const t = getProjectsText(locale);
  const ui = getUiText(locale);

  return (
    <section id="projects" className="bg-surface py-24 sm:py-28">
      <div className="container-nera">
        <SectionHeader eyebrow={t.eyebrow} title={t.title} theme="dark" />
        <div className="mt-14">
          <ProjectCardGrid cards={t.cards} closeLabel={ui.closeLabel} />
        </div>
      </div>
    </section>
  );
}
