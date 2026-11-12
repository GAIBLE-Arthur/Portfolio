import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import { site, certifications, getContent, type Entry } from "@/data/content";
import { Cover } from "./covers";

function Logo({ domain, name }: { domain: string; name: string }) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
        alt={name}
        width={24}
        height={24}
        loading="lazy"
        className="h-6 w-6 object-contain"
      />
    </span>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-16">
      <h2 className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-accent">
        <span aria-hidden="true" className="h-px w-6 bg-warm" />
        {title}
      </h2>
      {children}
    </section>
  );
}

function Experience({ entries }: { entries: Entry[] }) {
  return (
    <ul className="space-y-4">
      {entries.map((entry) => (
        <li key={entry.title} className="flex gap-4 rounded-xl border border-line bg-white p-5">
          {entry.logo && <Logo domain={entry.logo} name={entry.org} />}
          <div className="min-w-0 flex-1">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <p className="font-semibold">
                {entry.title}
                <span className="font-normal text-muted"> · {entry.org}</span>
              </p>
              {entry.period && (
                <p className="shrink-0 text-sm tabular-nums text-accent">{entry.period}</p>
              )}
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{entry.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Projects({ entries }: { entries: Entry[] }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2">
      {entries.map((entry) => {
        const body = (
          <>
            {entry.cover && <Cover name={entry.cover} />}
            <div className="p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-warm">{entry.org}</p>
              <p className="mt-1.5 font-semibold group-hover:text-accent">{entry.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{entry.text}</p>
            </div>
          </>
        );
        const cardClass = "group block h-full overflow-hidden rounded-xl border border-line bg-white transition-shadow";
        return (
          <li key={entry.title}>
            {entry.url ? (
              <a href={entry.url} target="_blank" rel="noopener noreferrer" className={`${cardClass} hover:shadow-md`}>
                {body}
              </a>
            ) : (
              <div className={cardClass}>{body}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = getContent(locale);

  return (
    <>
      <header className="bg-gradient-to-br from-accent-soft via-white to-warm-soft">
        <div className="mx-auto max-w-3xl px-6 pb-14 pt-8">
          <nav aria-label="Language" className="flex justify-end gap-3 text-sm">
            {locales.map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                aria-current={l === locale ? "page" : undefined}
                className={l === locale ? "font-semibold text-accent" : "text-muted hover:text-accent"}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
            <Image
              src="/images/founder.png"
              alt={site.name}
              width={112}
              height={112}
              priority
              className="h-28 w-28 rounded-full object-cover object-top ring-4 ring-white"
            />
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">{site.name}</h1>
              <p className="mt-1 font-medium text-accent">{t.tagline}</p>
            </div>
          </div>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed">{t.about}</p>
          <p className="mt-3 text-sm text-muted">{t.languages}</p>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 pb-24">
        <Section title={t.labels.experience}>
          <Experience entries={t.experience} />
        </Section>

        <Section title={t.labels.projects}>
          <Projects entries={t.projects} />
        </Section>

        <Section title={t.labels.certifications}>
          <ul className="grid gap-3 sm:grid-cols-2">
            {certifications.map((cert) => (
              <li key={cert.title}>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-center gap-4 rounded-xl border border-line bg-white p-4 transition-shadow hover:shadow-md"
                >
                  <Logo domain={cert.logo} name={cert.issuer} />
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold group-hover:text-accent">{cert.title}</span>
                    <span className="mt-0.5 block text-xs text-muted">
                      {cert.issuer}
                      {cert.date && ` · ${cert.date}`}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <Section title={t.labels.contact}>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
            >
              {site.email}
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-line bg-white px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              GitHub
            </a>
          </div>
        </Section>
      </main>
    </>
  );
}
