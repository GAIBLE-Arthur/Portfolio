import type { Locale } from "@/lib/i18n";

export const site = {
  name: "Arthur Gaible",
  // TEMP placeholder domain — update once a custom domain is assigned.
  url: "https://arthur-gaible.example.com",
  email: "agaiblepro@gmail.com",
  phone: "+33 7 81 87 69 99",
  phoneHref: "+33781876999",
} as const;

interface SiteText {
  title: string;
  description: string;
}

const siteText: Record<Locale, SiteText> = {
  en: {
    title: "Arthur Gaible | Data & Analytics",
    description: "Portfolio — data systems, analytics and modelling.",
  },
  fr: {
    title: "Arthur Gaible | Data & Analytics",
    description: "Portfolio — systèmes data, analytics et modélisation.",
  },
};

export function getSiteText(locale: Locale): SiteText {
  return siteText[locale];
}
