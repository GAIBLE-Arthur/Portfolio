import type { Locale } from "@/lib/i18n";

export const site = {
  name: "Arthur Gaible",
  email: "agaiblepro@gmail.com",
  github: "https://github.com/GAIBLE-Arthur",
} as const;

export interface Certification {
  title: string;
  issuer: string;
  /** Issue date, MM/YYYY. */
  date?: string;
  /** Expiry date, MM/YYYY, when the certification expires. */
  expires?: string;
  url: string;
  /** Issuer domain, used to show its logo. */
  logo: string;
}

interface Content {
  title: string;
  intro: string;
  verify: string;
  expires: string;
  contact: string;
}

const content: Record<Locale, Content> = {
  fr: {
    title: "Certifications",
    intro: "SAP, Microsoft, Dataiku, Palantir et Cisco. Chaque certification renvoie à sa page de vérification officielle.",
    verify: "Vérifier",
    expires: "expire",
    contact: "Contact",
  },
  en: {
    title: "Certifications",
    intro: "SAP, Microsoft, Dataiku, Palantir and Cisco. Each certification links to its official verification page.",
    verify: "Verify",
    expires: "expires",
    contact: "Contact",
  },
};

export function getContent(locale: Locale): Content {
  return content[locale];
}

export const certifications: Certification[] = [
  {
    title: "SAP S/4HANA Cloud Private Edition — Sourcing and Procurement",
    issuer: "SAP",
    date: "11/2026",
    expires: "11/2027",
    url: "https://www.credly.com/users/gaible-arthur",
    logo: "www.sap.com",
  },
  {
    title: "Joule Studio Developer",
    issuer: "SAP",
    date: "11/2026",
    expires: "11/2027",
    url: "https://www.credly.com/users/gaible-arthur",
    logo: "www.sap.com",
  },
  {
    title: "Power BI Data Analyst Associate (PL-300)",
    issuer: "Microsoft",
    date: "06/2026",
    expires: "06/2027",
    url: "https://learn.microsoft.com/fr-fr/users/arthurgaible-2502/transcript/d58gcjz13xogxzd",
    logo: "microsoft.com",
  },
  {
    title: "ML Practitioner",
    issuer: "Dataiku",
    date: "11/2026",
    url: "https://verify.skilljar.com/c/4b4oorh26cmw",
    logo: "dataiku.com",
  },
  {
    title: "Advanced Designer",
    issuer: "Dataiku",
    date: "03/2026",
    url: "https://verify.skilljar.com/c/bpspdycapdb4",
    logo: "dataiku.com",
  },
  {
    title: "Foundry Aware",
    issuer: "Palantir",
    date: "03/2026",
    expires: "03/2028",
    url: "https://verify.skilljar.com/c/o735s266d4gg",
    logo: "palantir.com",
  },
  {
    title: "Data Science Essentials with Python",
    issuer: "Cisco",
    date: "02/2026",
    url: "https://www.credly.com/badges/92f5f5f5-500e-42d6-abd5-1af7b452266c",
    logo: "cisco.com",
  },
];
