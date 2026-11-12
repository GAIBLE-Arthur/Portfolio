import type { Locale } from "@/lib/i18n";

export const site = {
  name: "Arthur Gaible",
  email: "agaiblepro@gmail.com",
  github: "https://github.com/GAIBLE-Arthur",
} as const;

export interface Entry {
  title: string;
  org: string;
  period?: string;
  text: string;
  url?: string;
  /** Organisation domain, used to show its logo. */
  logo?: string;
  /** Key of the illustrated cover drawn in app/[locale]/covers.tsx. */
  cover?: "thesis" | "pharma" | "electricity" | "vertex" | "aura";
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  url: string;
  logo: string;
}

interface Content {
  tagline: string;
  about: string;
  languages: string;
  labels: {
    experience: string;
    projects: string;
    certifications: string;
    contact: string;
  };
  experience: Entry[];
  projects: Entry[];
}

const content: Record<Locale, Content> = {
  fr: {
    tagline: "Data & Analytics",
    about:
      "Je construis des systèmes data de bout en bout, de la donnée brute à la décision : modélisation, pipelines et reporting.",
    languages: "Français (natif), anglais (courant), italien (courant)",
    labels: {
      experience: "Expérience",
      projects: "Projets",
      certifications: "Certifications",
      contact: "Contact",
    },
    experience: [
      {
        title: "Commodity Analyst",
        org: "GE Vernova",
        logo: "gevernova.com",
        period: "07/2025 – 09/2026",
        text: "Modèle de données commun sur 3 000 références, pipeline ETL avec catégorisation ML dans Dataiku (4M+ composants/an), reporting Power BI multi-sites.",
      },
      {
        title: "Buyer Assistant",
        org: "Eurenco",
        logo: "eurenco.com",
        period: "03/2023 – 09/2024",
        text: "Achat d'un logiciel SRM (−40 % sur le prix), cadre d'achats laboratoire multi-sites (300 k€ d'économies estimées sur 10 ans).",
      },
    ],
    projects: [
      {
        title: "Gouvernance data-driven multi-sites",
        org: "Mémoire, Palantir Foundry",
        cover: "thesis",
        url: "https://app.notion.com/p/416fe51e040d8110ae9ed30f50aea33b",
        text: "Comment les ontologies data renforcent la décision corporate sans supprimer l'autonomie des sites. Terrain : GE Vernova.",
      },
      {
        title: "Pharma — Biotech Analytics",
        org: "Fabric, dbt, Power BI",
        text: "5 sources, 10 modèles dbt en trois couches, tableau de bord en DirectQuery.",
        url: "https://app.notion.com/p/38cfe51e040d817da7cec1d8326724c0",
        cover: "pharma",
      },
      {
        title: "Global Electricity Analytics",
        org: "Fabric, T-SQL, Power BI",
        text: "Données Ember Climate, 215 pays de 2000 à 2024.",
        url: "https://app.notion.com/p/38cfe51e040d8113a3f3c4296d689bff",
        cover: "electricity",
      },
      {
        title: "Palantir Vertex",
        org: "Foundry, Ontology",
        text: "Détection de réseaux suspects par graphes ontologiques.",
        url: "https://www.notion.so/35dfe51e040d8033a363dbbc326a523a",
        cover: "vertex",
      },
      {
        title: "AURA Energy Consumption",
        org: "SQLite, Power BI",
        text: "Mix électrique Auvergne-Rhône-Alpes sur 11 ans (RTE éco2mix).",
        url: "https://www.notion.so/35dfe51e040d80ba905cd575fb14d76a",
        cover: "aura",
      },
    ],
  },
  en: {
    tagline: "Data & Analytics",
    about:
      "I build end-to-end data systems, from raw data to decisions: modelling, pipelines and reporting.",
    languages: "French (native), English (fluent), Italian (fluent)",
    labels: {
      experience: "Experience",
      projects: "Projects",
      certifications: "Certifications",
      contact: "Contact",
    },
    experience: [
      {
        title: "Commodity Analyst",
        org: "GE Vernova",
        logo: "gevernova.com",
        period: "07/2025 – 09/2026",
        text: "Common data model over 3,000 references, ETL pipeline with ML categorisation in Dataiku (4M+ components/year), multi-site Power BI reporting.",
      },
      {
        title: "Buyer Assistant",
        org: "Eurenco",
        logo: "eurenco.com",
        period: "03/2023 – 09/2024",
        text: "SRM software purchase (−40% on price), multi-site lab procurement framework (€300k estimated savings over 10 years).",
      },
    ],
    projects: [
      {
        title: "Data-driven governance in multi-site groups",
        org: "Thesis, Palantir Foundry",
        cover: "thesis",
        url: "https://app.notion.com/p/416fe51e040d8110ae9ed30f50aea33b",
        text: "How data ontologies strengthen corporate decision-making without removing site autonomy. Fieldwork: GE Vernova.",
      },
      {
        title: "Pharma — Biotech Analytics",
        org: "Fabric, dbt, Power BI",
        text: "5 sources, 10 dbt models in three layers, DirectQuery dashboard.",
        url: "https://app.notion.com/p/38cfe51e040d817da7cec1d8326724c0",
        cover: "pharma",
      },
      {
        title: "Global Electricity Analytics",
        org: "Fabric, T-SQL, Power BI",
        text: "Ember Climate data, 215 countries from 2000 to 2024.",
        url: "https://app.notion.com/p/38cfe51e040d8113a3f3c4296d689bff",
        cover: "electricity",
      },
      {
        title: "Palantir Vertex",
        org: "Foundry, Ontology",
        text: "Detecting suspicious networks with ontological graphs.",
        url: "https://www.notion.so/35dfe51e040d8033a363dbbc326a523a",
        cover: "vertex",
      },
      {
        title: "AURA Energy Consumption",
        org: "SQLite, Power BI",
        text: "Auvergne-Rhône-Alpes electricity mix over 11 years (RTE éco2mix).",
        url: "https://www.notion.so/35dfe51e040d80ba905cd575fb14d76a",
        cover: "aura",
      },
    ],
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
    url: "https://www.credly.com/users/gaible-arthur",
    logo: "www.sap.com",
  },
  {
    title: "Joule Studio Developer",
    issuer: "SAP",
    date: "11/2026",
    url: "https://www.credly.com/users/gaible-arthur",
    logo: "www.sap.com",
  },
  {
    title: "Power BI Data Analyst Associate (PL-300)",
    issuer: "Microsoft",
    logo: "microsoft.com",
    date: "06/2026",
    url: "https://learn.microsoft.com/fr-fr/users/arthurgaible-2502/transcript/d58gcjz13xogxzd",
  },
  {
    title: "ML Practitioner",
    issuer: "Dataiku",
    logo: "dataiku.com",
    date: "11/2026",
    url: "https://verify.skilljar.com/c/4b4oorh26cmw",
  },
  {
    title: "Advanced Designer",
    issuer: "Dataiku",
    logo: "dataiku.com",
    date: "03/2026",
    url: "https://verify.skilljar.com/c/bpspdycapdb4",
  },
  {
    title: "Foundry Aware",
    issuer: "Palantir",
    logo: "palantir.com",
    date: "03/2026",
    url: "https://verify.skilljar.com/c/o735s266d4gg",
  },
  {
    title: "Data Science Essentials with Python",
    issuer: "Cisco",
    date: "02/2026",
    logo: "cisco.com",
    url: "https://www.credly.com/badges/92f5f5f5-500e-42d6-abd5-1af7b452266c",
  },
];
