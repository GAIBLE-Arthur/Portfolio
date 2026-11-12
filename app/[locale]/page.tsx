import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import { site, certifications, getContent, type Entry } from "@/data/content";
import { Cover } from "./covers";

function Logo({ domain, name, dark = false }: { domain: string; name: string; dark?: boolean }) {
  return (
    <span
      className={`flex h-9 w-9 shrink-0 items-center justify-center border ${dark ? "border-border-dark bg-on-dark" : "border-border bg-white"}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
        alt={name}
        width={20}
        height={20}
        loading="lazy"
        className="h-5 w-5 object-contain"
      />
    </span>
  );
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`mb-3 font-mono text-xs uppercase tracking-widest2 ${dark ? "text-accent" : "text-accent-strong"}`}>
      {children}
    </p>
  );
}

function Title({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <h2 className={`text-3xl font-semibold tracking-tightest sm:text-4xl ${dark ? "text-on-dark" : "text-ink"}`}>
      {children}
    </h2>
  );
}

function Experience({ entries }: { entries: Entry[] }) {
  return (
    <div className="mt-12 flex flex-col gap-px border border-border bg-border">
      {entries.map((entry) => (
        <div key={entry.title} className="flex gap-5 bg-paper p-6 sm:p-8">
          {entry.logo && <Logo domain={entry.logo} name={entry.org} />}
          <div className="min-w-0 flex-1">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="text-lg font-semibold">
                {entry.title} <span className="font-normal text-muted">— {entry.org}</span>
              </h3>
              {entry.period && (
                <p className="shrink-0 font-mono text-xs uppercase tracking-widest2 text-muted">{entry.period}</p>
              )}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{entry.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Projects({ entries }: { entries: Entry[] }) {
  return (
    <div className="mt-12 grid grid-cols-1 gap-px border border-border-dark bg-border-dark sm:grid-cols-2">
      {entries.map((entry) => {
        const body = (
          <>
            {entry.cover && <Cover name={entry.cover} />}
            <div className="flex flex-1 flex-col p-6">
              <span className="mb-4 font-mono text-[0.65rem] uppercase tracking-widest2 text-accent">{entry.org}</span>
              <h3 className="mb-3 text-lg font-semibold text-on-dark">{entry.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-on-dark-muted">{entry.text}</p>
              {entry.url && (
                <span
                  aria-hidden="true"
                  className="mt-5 border-t border-border-dark pt-3 text-right font-mono text-xs text-on-dark-muted transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              )}
            </div>
          </>
        );
        const cls = "group flex h-full flex-col bg-surface transition-colors";
        return entry.url ? (
          <a key={entry.title} href={entry.url} target="_blank" rel="noopener noreferrer" className={`${cls} hover:bg-surface-alt`}>
            {body}
          </a>
        ) : (
          <div key={entry.title} className={cls}>
            {body}
          </div>
        );
      })}
    </div>
  );
}

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = getContent(locale);
  const nav = [
    { href: "#experience", label: t.labels.experience },
    { href: "#projects", label: t.labels.projects },
    { href: "#certifications", label: t.labels.certifications },
    { href: "#contact", label: t.labels.contact },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-paper/95 backdrop-blur">
        <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6 lg:px-10">
          <span className="font-mono text-xs uppercase tracking-widest2">{site.name}</span>
          <div className="flex items-center gap-8">
            <div className="hidden items-center gap-8 md:flex">
              {nav.map((link) => (
                <a key={link.href} href={link.href} className="text-sm font-medium transition-colors hover:text-accent">
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-1 font-mono text-xs uppercase md:border-l md:border-border md:pl-6">
              {locales.map((l, i) => (
                <span key={l} className="flex items-center gap-1">
                  {i > 0 && <span className="opacity-50">/</span>}
                  <Link
                    href={`/${l}`}
                    aria-current={l === locale ? "page" : undefined}
                    className={l === locale ? "px-1 py-1" : "px-1 py-1 opacity-60 hover:opacity-100"}
                  >
                    {l.toUpperCase()}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="bg-surface py-28 text-on-dark sm:py-36">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <Eyebrow dark>{t.tagline}</Eyebrow>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tightest sm:text-7xl">{site.name}</h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-on-dark-muted sm:text-lg">{t.about}</p>
            <p className="mt-10 font-mono text-xs uppercase tracking-widest2 text-on-dark-muted">{t.languages}</p>
          </div>
        </section>

        <section id="experience" className="scroll-mt-16 bg-paper py-24 sm:py-28">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <Eyebrow>01</Eyebrow>
            <Title>{t.labels.experience}</Title>
            <Experience entries={t.experience} />
          </div>
        </section>

        <section id="projects" className="scroll-mt-16 bg-surface py-24 sm:py-28">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <Eyebrow dark>02</Eyebrow>
            <Title dark>{t.labels.projects}</Title>
            <Projects entries={t.projects} />
          </div>
        </section>

        <section id="certifications" className="scroll-mt-16 bg-paper py-24 sm:py-28">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <Eyebrow>03</Eyebrow>
            <Title>{t.labels.certifications}</Title>
            <div className="mt-12 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
              {certifications.map((cert) => (
                <a
                  key={cert.title}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-paper px-5 py-4 transition-colors hover:bg-ink hover:text-on-dark"
                >
                  <Logo domain={cert.logo} name={cert.issuer} />
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium">{cert.title}</span>
                    <span className="mt-1 block font-mono text-xs uppercase tracking-widest2 text-muted group-hover:text-on-dark-muted">
                      {cert.issuer}
                      {cert.date && ` · ${cert.date}`}
                    </span>
                  </span>
                  <span aria-hidden="true" className="text-accent">
                    ↗
                  </span>
                </a>
              ))}
              {certifications.length % 2 === 1 && <div aria-hidden="true" className="hidden bg-paper md:block" />}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-16 bg-ink py-24 text-on-dark sm:py-28">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <Eyebrow dark>04</Eyebrow>
            <Title dark>{t.labels.contact}</Title>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex items-center gap-2 bg-on-dark px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-accent hover:text-on-dark"
              >
                {site.email}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widest2 text-on-dark-muted transition-colors hover:text-on-dark"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border-dark bg-ink py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 font-mono text-xs uppercase tracking-widest2 text-on-dark-muted sm:flex-row lg:px-10">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>{t.tagline}</span>
        </div>
      </footer>
    </>
  );
}
