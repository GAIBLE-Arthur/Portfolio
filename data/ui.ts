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
}

const uiText: Record<Locale, UiText> = {
  en: {
    navLinks: [
      { label: "Profile", href: "#profile" },
      { label: "Projects", href: "#projects" },
      { label: "Raw materials", href: "#raw-materials" },
      { label: "Contact", href: "#contact" },
    ],
    heroTag: "Procurement · Data Systems",
    heroName: "Arthur Gaible",
    heroSubtitle: "Building end-to-end data systems to give procurement real visibility over its markets.",
    footerTagline: "Procurement · Data Systems",
    detailsLabel: "Details",
    closeLabel: "Close",
  },
  fr: {
    navLinks: [
      { label: "Profil", href: "#profile" },
      { label: "Projets", href: "#projects" },
      { label: "Matières premières", href: "#raw-materials" },
      { label: "Contact", href: "#contact" },
    ],
    heroTag: "Achats · Systèmes data",
    heroName: "Arthur Gaible",
    heroSubtitle: "Concevoir des systèmes data bout-en-bout pour donner aux achats une vraie visibilité sur leurs marchés.",
    footerTagline: "Achats · Systèmes data",
    detailsLabel: "Détails",
    closeLabel: "Fermer",
  },
};

export function getUiText(locale: Locale): UiText {
  return uiText[locale];
}
