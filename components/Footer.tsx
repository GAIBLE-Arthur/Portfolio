import { site } from "@/data/site";
import { getUiText } from "@/data/ui";
import type { Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const t = getUiText(locale);

  return (
    <footer className="border-t border-border bg-paper py-8">
      <div className="container-nera flex flex-col items-center justify-between gap-2 text-xs text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>{t.footerTagline}</span>
      </div>
    </footer>
  );
}
