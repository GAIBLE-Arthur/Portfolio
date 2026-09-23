import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCardGrid } from "@/components/ProjectCardGrid";
import { FeaturedPanel } from "@/components/FeaturedPanel";
import { Reveal } from "@/components/ui/Reveal";
import { getRawMaterialsText } from "@/data/rawMaterials";
import { getUiText } from "@/data/ui";
import type { Locale } from "@/lib/i18n";

export function RawMaterialsSection({ locale }: { locale: Locale }) {
  const t = getRawMaterialsText(locale);
  const ui = getUiText(locale);

  return (
    <section id="raw-materials">
      <div className="bg-paper py-24 sm:py-28">
        <div className="container-nera">
          <SectionHeader eyebrow={t.eyebrow} title={t.title} />

          <Reveal delay={80} className="mt-12 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
            {t.stats.map((stat) => (
              <div key={stat.label} className="bg-paper p-5">
                <p className="text-2xl font-semibold tracking-tightest text-ink sm:text-3xl">{stat.value}</p>
                <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-widest2 text-muted">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>

      <div className="bg-surface py-4 sm:py-6">
        <div className="container-nera">
          <ProjectCardGrid cards={t.cards} closeLabel={ui.closeLabel} />
        </div>
      </div>

      <FeaturedPanel
        eyebrow={t.featured.eyebrow}
        title={t.featured.title}
        quote={t.featured.quote}
        paragraphs={t.featured.paragraphs}
        facts={t.featured.facts}
        linkLabel={t.featured.linkLabel}
        linkUrl={t.featured.linkUrl}
      />
    </section>
  );
}
