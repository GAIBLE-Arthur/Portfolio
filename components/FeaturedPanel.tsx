import { Reveal } from "@/components/ui/Reveal";

interface FeaturedPanelProps {
  eyebrow: string;
  title: string;
  quote: string;
  tags?: string[];
  paragraphs: string[];
  facts: [string, string][];
  linkLabel?: string;
  linkUrl?: string;
}

export function FeaturedPanel({ eyebrow, title, quote, tags, paragraphs, facts, linkLabel, linkUrl }: FeaturedPanelProps) {
  return (
    <div className="bg-ink py-20 text-on-dark sm:py-24">
      <div className="container-nera">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest2 text-accent">{eyebrow}</p>
          <h2 className="max-w-2xl text-2xl font-semibold tracking-tightest sm:text-3xl">{title}</h2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal delay={80}>
            {tags && tags.length > 0 && (
              <div className="mb-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-border-dark px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-widest2 text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <p className="mb-5 text-lg italic leading-snug text-on-dark">&ldquo;{quote}&rdquo;</p>
            <div className="space-y-4 text-sm leading-relaxed text-on-dark-muted">
              {paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {linkLabel && linkUrl && (
              <a
                href={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest2 text-accent transition-all hover:gap-3"
              >
                {linkLabel}
                <span aria-hidden="true">→</span>
              </a>
            )}
          </Reveal>

          <Reveal delay={160} className="flex flex-col gap-px bg-border-dark">
            {facts.map(([k, v]) => (
              <div key={k} className="flex items-center justify-between bg-surface px-5 py-3.5">
                <span className="font-mono text-xs uppercase tracking-widest2 text-on-dark-muted">{k}</span>
                <span className="text-sm font-medium text-on-dark">{v}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </div>
  );
}
