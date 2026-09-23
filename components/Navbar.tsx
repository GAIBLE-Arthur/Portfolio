"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getUiText } from "@/data/ui";
import { locales, withLocale, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Navbar({ locale }: { locale: Locale }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const t = getUiText(locale);

  function pathForLocale(target: Locale): string {
    const rest = pathname?.replace(new RegExp(`^/(${locales.join("|")})`), "") ?? "";
    return withLocale(target, rest === "" ? "/" : rest);
  }

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-border bg-paper/95 backdrop-blur">
      <nav aria-label="Primary" className="container-nera flex h-16 items-center justify-end">
        <div className="hidden items-center gap-8 lg:flex">
          {t.navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-ink transition-colors hover:text-accent">
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-1 border-l border-border pl-6 font-mono text-xs uppercase text-ink">
            {locales.map((target, i) => (
              <span key={target} className="flex items-center gap-1">
                {i > 0 && <span className="opacity-50">/</span>}
                <Link
                  href={pathForLocale(target)}
                  aria-current={target === locale ? "true" : undefined}
                  className={cn("px-1 py-1", target === locale ? "text-ink" : "opacity-60 hover:opacity-100")}
                >
                  {target.toUpperCase()}
                </Link>
              </span>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? t.closeLabel : "Menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className={cn("h-px w-6 bg-ink transition-transform duration-300", mobileOpen && "translate-y-[6.5px] rotate-45")} />
          <span className={cn("h-px w-6 bg-ink transition-opacity duration-300", mobileOpen && "opacity-0")} />
          <span className={cn("h-px w-6 bg-ink transition-transform duration-300", mobileOpen && "-translate-y-[6.5px] -rotate-45")} />
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-paper lg:hidden">
          <div className="container-nera flex flex-col gap-1 py-4">
            {t.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-2 py-2.5 text-base font-medium text-ink"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-2 px-2 pt-2 font-mono text-xs uppercase text-ink">
              {locales.map((target, i) => (
                <span key={target} className="flex items-center gap-1">
                  {i > 0 && <span className="opacity-50">/</span>}
                  <Link href={pathForLocale(target)} onClick={() => setMobileOpen(false)}>
                    {target.toUpperCase()}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
