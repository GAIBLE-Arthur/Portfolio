import { Reveal } from "@/components/ui/Reveal";
import { getUiText } from "@/data/ui";
import type { Locale } from "@/lib/i18n";

export function Hero({ locale }: { locale: Locale }) {
  const t = getUiText(locale);

  return (
    <section className="bg-surface py-28 text-on-dark sm:py-32">
      <div className="container-nera">
        <Reveal delay={80}>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tightest sm:text-6xl">
            {t.heroName}
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-on-dark-muted sm:text-lg">{t.heroSubtitle}</p>
        </Reveal>
      </div>
    </section>
  );
}
