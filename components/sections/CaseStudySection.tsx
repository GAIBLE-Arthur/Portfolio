import { FeaturedPanel } from "@/components/FeaturedPanel";
import { getProjectsText } from "@/data/projects";
import type { Locale } from "@/lib/i18n";

export function CaseStudySection({ locale }: { locale: Locale }) {
  const t = getProjectsText(locale).featured;

  return (
    <FeaturedPanel
      title={t.title}
      quote={t.quote}
      tags={t.tags}
      paragraphs={t.paragraphs}
      facts={t.facts}
    />
  );
}
