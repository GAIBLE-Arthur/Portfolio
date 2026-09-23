import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { getExperienceText } from "@/data/experience";
import type { Locale } from "@/lib/i18n";

export function ExperienceSection({ locale }: { locale: Locale }) {
  const t = getExperienceText(locale);

  return (
    <section id="experience" className="bg-paper py-24 sm:py-28">
      <div className="container-nera">
        <SectionHeader title={t.title} />

        <div className="mt-14 flex flex-col gap-px border border-border bg-border">
          {t.entries.map((entry, i) => (
            <Reveal key={entry.company} delay={i * 80} className="bg-paper p-6 sm:p-8">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="text-lg font-semibold text-ink">
                  {entry.role} <span className="font-normal text-muted">— {entry.company}</span>
                </h3>
                <p className="font-mono text-xs uppercase tracking-widest2 text-muted">
                  {entry.period} · {entry.location}
                </p>
              </div>
              <ul className="mt-4 space-y-2">
                {entry.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="mt-14">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest2 text-accent-strong">{t.educationLabel}</p>
          <div className="flex flex-col gap-px border border-border bg-border">
            {t.education.map((edu) => (
              <div key={edu.degree} className="bg-paper p-5">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <p className="text-sm font-medium text-ink">{edu.degree}</p>
                  <p className="font-mono text-xs uppercase tracking-widest2 text-muted">{edu.period}</p>
                </div>
                <p className="mt-1 text-sm text-muted">{edu.school}</p>
                {edu.note && <p className="mt-2 text-sm italic leading-relaxed text-muted">{edu.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
