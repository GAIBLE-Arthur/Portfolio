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
    title: "Arthur Gaible | Procurement & Data Systems",
    description: "Portfolio — data systems, analytics and strategic procurement.",
  },
  fr: {
    title: "Arthur Gaible | Achats & systèmes data",
    description: "Portfolio — systèmes data, analytics et achats stratégiques.",
  },
};

export function getSiteText(locale: Locale): SiteText {
  return siteText[locale];
}
