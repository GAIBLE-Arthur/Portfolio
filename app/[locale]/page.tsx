import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import { site, certifications, getContent, type Entry } from "@/data/content";

const linkClass = "underline decoration-line underline-offset-4 transition-colors hover:decoration-ink";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="mb-4 text-xs font-medium uppercase tracking-wider text-muted">{title}</h2>
      {children}
    </section>
  );
}

function EntryList({ entries }: { entries: Entry[] }) {
  return (
    <ul className="divide-y divide-line">
      {entries.map((entry) => (
        <li key={entry.title} className="py-4 first:pt-0">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
            <p className="font-medium">
              {entry.url ? (
                <a href={entry.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {entry.title}
                </a>
              ) : (
                entry.title
              )}
              <span className="font-normal text-muted"> · {entry.org}</span>
            </p>
            {entry.period && <p className="shrink-0 text-sm tabular-nums text-muted">{entry.period}</p>}
          </div>
          <p className="mt-1 text-sm leading-relaxed text-muted">{entry.text}</p>
        </li>
      ))}
    </ul>
  );
}

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = getContent(locale);

  return (
    <main className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <header className="flex items-start justify-between gap-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">{site.name}</h1>
          <p className="mt-1 text-muted">{t.tagline}</p>
        </div>
        <nav aria-label="Language" className="flex gap-3 text-sm">
          {locales.map((l) => (
            <Link
              key={l}
              href={`/${l}`}
              aria-current={l === locale ? "page" : undefined}
              className={l === locale ? "text-ink" : "text-muted hover:text-ink"}
            >
              {l.toUpperCase()}
            </Link>
          ))}
        </nav>
      </header>

      <p className="mt-10 leading-relaxed">{t.about}</p>
      <p className="mt-3 text-sm text-muted">{t.languages}</p>

      <Section title={t.labels.experience}>
        <EntryList entries={t.experience} />
      </Section>

      <Section title={t.labels.projects}>
        <EntryList entries={t.projects} />
      </Section>

      <Section title={t.labels.certifications}>
        <ul className="divide-y divide-line">
          {certifications.map((cert) => (
            <li key={cert.title} className="flex items-baseline justify-between gap-4 py-3 first:pt-0">
              <a href={cert.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {cert.title}
              </a>
              <span className="shrink-0 text-sm tabular-nums text-muted">
                {cert.issuer}
                {cert.date && ` · ${cert.date}`}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title={t.labels.contact}>
        <p className="flex flex-wrap gap-x-6 gap-y-2">
          <a href={`mailto:${site.email}`} className={linkClass}>
            {site.email}
          </a>
          <a href={site.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
            GitHub
          </a>
        </p>
      </Section>
    </main>
  );
}
