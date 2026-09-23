import type { Locale } from "@/lib/i18n";

interface NavLink {
  label: string;
  href: string;
}

interface UiText {
  navLinks: NavLink[];
  heroTag: string;
  heroName: string;
  heroSubtitle: string;
  footerTagline: string;
  detailsLabel: string;
  closeLabel: string;
  technology: { eyebrow: string; title: string };
}

const uiText: Record<Locale, UiText> = {
  en: {
    navLinks: [
      { label: "Profile", href: "#profile" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
    heroTag: "Data & Analytics",
    heroName: "Arthur Gaible",
    heroSubtitle: "Building end-to-end data systems, from raw data to the decisions they inform.",
    footerTagline: "Data & Analytics",
    detailsLabel: "Details",
    closeLabel: "Close",
    technology: { eyebrow: "Technology", title: "Tools used day to day" },
  },
  fr: {
    navLinks: [
      { label: "Profil", href: "#profile" },
      { label: "Expérience", href: "#experience" },
      { label: "Projets", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
    heroTag: "Data & Analytics",
    heroName: "Arthur Gaible",
    heroSubtitle: "Concevoir des systèmes data bout-en-bout, de la donnée brute à la décision.",
    footerTagline: "Data & Analytics",
    detailsLabel: "Détails",
    closeLabel: "Fermer",
    technology: { eyebrow: "Technologie", title: "Outils utilisés au quotidien" },
  },
};

export function getUiText(locale: Locale): UiText {
  return uiText[locale];
}
