import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/data/site";
import { getContactText } from "@/data/contact";
import type { Locale } from "@/lib/i18n";

export function ContactSection({ locale }: { locale: Locale }) {
  const t = getContactText(locale);

  return (
    <section id="contact" className="bg-paper py-24 sm:py-28">
      <div className="container-nera">
        <SectionHeader title={t.title} />
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <a
            href={`mailto:${site.email}`}
            className="border border-ink px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-on-dark"
          >
            {site.email}
          </a>
          <a href={`tel:${site.phoneHref}`} className="text-sm font-medium text-muted transition-colors hover:text-ink">
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
