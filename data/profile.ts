import type { Locale } from "@/lib/i18n";

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
  languagesLabel: string;
  languages: string;
  certificationsLabel: string;
}

const profileText: Record<Locale, ProfileText> = {
  en: {
    eyebrow: "Profile",
    title: "An analytical, data-driven profile",
    paragraphs: [
      "A profile built around data tool expertise (Palantir Foundry, SQL, Power BI, Microsoft Fabric) and analytical modelling.",
      "Results-oriented, comfortable turning complex, messy data into structures other people can actually use.",
    ],
    photoAlt: "Arthur Gaible",
    languagesLabel: "Languages",
    languages: "French (native), English (fluent), Italian (fluent)",
    certificationsLabel: "Certifications",
  },
  fr: {
    eyebrow: "Profil",
    title: "Un profil analytique, orienté data",
    paragraphs: [
      "Un profil construit autour de la maîtrise des outils data (Palantir Foundry, SQL, Power BI, Microsoft Fabric) et de la modélisation analytique.",
      "Orienté résultats, à l'aise pour transformer des données complexes et disparates en structures exploitables.",
    ],
    photoAlt: "Arthur Gaible",
    languagesLabel: "Langues",
    languages: "Français (natif), anglais (courant), italien (courant)",
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
