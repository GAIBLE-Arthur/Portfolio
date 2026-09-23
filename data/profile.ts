import type { Locale } from "@/lib/i18n";

interface Skill {
  name: string;
  items: string;
}

interface Certification {
  title: string;
  issuer: string;
  url: string;
}

interface ProfileText {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  photoAlt: string;
  skillsLabel: string;
  skills: Skill[];
  certificationsLabel: string;
}

const profileText: Record<Locale, ProfileText> = {
  en: {
    eyebrow: "Profile",
    title: "A hybrid procurement and data profile",
    paragraphs: [
      "A hybrid profile combining data tool expertise (Palantir Foundry, SQL, Power BI, Microsoft Fabric) and market intelligence.",
      "Results-oriented, comfortable in complex environments and strategic supply chains.",
    ],
    photoAlt: "Arthur Gaible",
    skillsLabel: "Skills",
    skills: [
      { name: "Procurement", items: "Procurement centralisation, GE Vernova" },
      { name: "Data", items: "Excel, Dataiku, SQL, Microsoft Fabric, Power BI, Palantir" },
      { name: "Markets", items: "Critical raw materials, NPV analysis, risk modelling" },
      { name: "Languages", items: "French (native), English (fluent), Italian (fluent)" },
    ],
    certificationsLabel: "Certifications",
  },
  fr: {
    eyebrow: "Profil",
    title: "Un profil hybride achats et data",
    paragraphs: [
      "Profil hybride alliant maîtrise des outils data (Palantir Foundry, SQL, Power BI, Microsoft Fabric) et intelligence des marchés.",
      "Orienté résultats, à l'aise dans les environnements complexes et les chaînes d'approvisionnement stratégiques.",
    ],
    photoAlt: "Arthur Gaible",
    skillsLabel: "Compétences",
    skills: [
      { name: "Achats", items: "Centralisation achats, GE Vernova" },
      { name: "Data", items: "Excel, Dataiku, SQL, Microsoft Fabric, Power BI, Palantir" },
      { name: "Marchés", items: "Matières premières critiques, analyse VAN, risk modelling" },
      { name: "Langues", items: "Français (natif), anglais (courant), italien (courant)" },
    ],
    certificationsLabel: "Certifications",
  },
};

export function getProfileText(locale: Locale): ProfileText {
  return profileText[locale];
}

// Certification verification links are locale-independent.
export const certifications: Certification[] = [
  {
    title: "Power BI — PL-300",
    issuer: "Microsoft",
    url: "https://learn.microsoft.com/fr-fr/users/arthurgaible-2502/transcript/d58gcjz13xogxzd",
  },
  {
    title: "Advanced Designer",
    issuer: "Dataiku",
    url: "https://verify.skilljar.com/c/sgrkh24eicc6",
  },
  {
    title: "AIP Aware",
    issuer: "Palantir Foundry",
    url: "https://verify.skilljar.com/c/o735s266d4gg",
  },
  {
    title: "Python Fundamentals",
    issuer: "Cisco",
    url: "https://www.credly.com/badges/92f5f5f5-500e-42d6-abd5-1af7b452266c",
  },
];
