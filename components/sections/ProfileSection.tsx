import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { getProfileText, certifications } from "@/data/profile";
import type { Locale } from "@/lib/i18n";

export function ProfileSection({ locale }: { locale: Locale }) {
  const t = getProfileText(locale);

  return (
    <section id="profile" className="bg-paper py-24 sm:py-28">
      <div className="container-nera grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <Reveal className="order-2 max-w-sm lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden border border-border bg-graphite">
            <Image
              src="/images/founder.jpg"
              alt={t.photoAlt}
              fill
              sizes="(min-width: 1024px) 384px, 100vw"
              className="object-cover object-top"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeader eyebrow={t.eyebrow} title={t.title} />
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
            {t.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-10">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest2 text-accent-strong">{t.skillsLabel}</p>
            <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
              {t.skills.map((skill) => (
                <div key={skill.name} className="bg-paper p-4">
                  <p className="mb-1 font-mono text-xs uppercase tracking-widest2 text-muted">{skill.name}</p>
                  <p className="text-sm text-ink">{skill.items}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest2 text-accent-strong">
              {t.certificationsLabel}
            </p>
            <div className="flex flex-col gap-px border border-border bg-border">
              {certifications.map((cert) => (
                <a
                  key={cert.title}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-paper px-4 py-3 transition-colors hover:bg-ink hover:text-on-dark"
                >
                  <span>
                    <span className="block text-sm font-medium">{cert.title}</span>
                    <span className="mt-0.5 block font-mono text-xs uppercase tracking-widest2 text-muted">
                      {cert.issuer}
                    </span>
                  </span>
                  <span aria-hidden="true" className="text-accent">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
