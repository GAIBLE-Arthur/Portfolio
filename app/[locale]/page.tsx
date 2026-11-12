import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import { site, certifications, getContent } from "@/data/content";

function Logo({ domain, name }: { domain: string; name: string }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-border bg-white">
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

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = getContent(locale);

  return (
    <>
      <header className="border-b border-border-dark bg-surface">
        <nav aria-label="Primary" className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 lg:px-10">
          <span className="font-mono text-xs uppercase tracking-widest2 text-on-dark">{site.name}</span>
          <div className="flex items-center gap-1 font-mono text-xs uppercase text-on-dark">
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
        </nav>
      </header>

      <main>
        <section className="bg-surface pb-20 pt-20 text-on-dark sm:pb-24 sm:pt-28">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest2 text-accent">
              {certifications.length} · {site.name}
            </p>
            <h1 className="text-5xl font-semibold leading-[1.02] tracking-tightest sm:text-7xl">{t.title}</h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-on-dark-muted sm:text-lg">{t.intro}</p>
          </div>
        </section>

        <section className="bg-paper py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <ul className="flex flex-col gap-px border border-border bg-border">
              {certifications.map((cert) => (
                <li key={cert.title}>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-5 bg-paper px-5 py-5 transition-colors hover:bg-ink hover:text-on-dark sm:px-8"
                  >
                    <Logo domain={cert.logo} name={cert.issuer} />
                    <span className="min-w-0 flex-1">
                      <span className="block font-medium sm:text-lg">{cert.title}</span>
                      <span className="mt-1 block font-mono text-xs uppercase tracking-widest2 text-muted group-hover:text-on-dark-muted">
                        {cert.issuer}
                        {cert.date && ` · ${cert.date}`}
                        {cert.expires && ` · ${t.expires} ${cert.expires}`}
                      </span>
                    </span>
                    <span className="hidden shrink-0 font-mono text-xs uppercase tracking-widest2 text-accent sm:inline">
                      {t.verify} ↗
                    </span>
                    <span aria-hidden="true" className="text-accent sm:hidden">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="bg-ink py-10 text-on-dark">
        <div className="mx-auto flex max-w-5xl flex-col justify-between gap-4 px-6 sm:flex-row sm:items-center lg:px-10">
          <a
            href={`mailto:${site.email}`}
            className="group inline-flex items-center gap-2 self-start bg-on-dark px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-accent hover:text-on-dark"
          >
            {site.email}
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest2 text-on-dark-muted">
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-on-dark">
              GitHub ↗
            </a>
            <span>© {new Date().getFullYear()} {site.name}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
