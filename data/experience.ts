import type { Locale } from "@/lib/i18n";

interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}

interface ExperienceText {
  title: string;
  entries: ExperienceEntry[];
}

const experienceText: Record<Locale, ExperienceText> = {
  en: {
    title: "Where this was built in the field",
    entries: [
      {
        role: "Commodity Analyst",
        company: "GE Vernova",
        period: "07/2025 – 09/2026",
        location: "France",
        bullets: [
          "Built a common data model covering 3,000 references (20 categories, 45 sub-categories), enabling Tier-2 analysis across 15 subcontractors.",
          "Designed an ETL pipeline in Dataiku with automated ML-based categorisation, processing 4M+ components/year and giving visibility on ~€8M of annual spend.",
          "Developed and deployed a Power BI semantic model and reporting solution for unified spend tracking across sites.",
          "Automated the consolidation of 7 supplier pricelists via Power Query.",
          "Built pricing grids and supported tier-2 supplier negotiations across sites.",
        ],
      },
      {
        role: "Buyer Assistant",
        company: "Eurenco",
        period: "03/2023 – 09/2024",
        location: "France & Belgium",
        bullets: [
          "Led the purchasing strategy and negotiation for an SRM software acquisition — 40% price reduction.",
          "Co-built a lab procurement framework through cross-site audits, estimated at €300k in savings over 10 years.",
          "Export Assistant assignment at the Belgian site (Summer 2023).",
        ],
      },
    ],
  },
  fr: {
    title: "Expériences",
    entries: [
      {
        role: "Commodity Analyst",
        company: "GE Vernova",
        period: "07/2025 – 09/2026",
        location: "France",
        bullets: [
          "Construction d'un modèle de données commun couvrant 3 000 références (20 catégories, 45 sous-catégories), permettant une analyse Tier-2 sur 15 sous-traitants.",
          "Conception d'un pipeline ETL dans Dataiku avec catégorisation automatisée par Machine Learning, traitant plus de 4M de composants/an et donnant une visibilité sur ~8M€ de dépenses annuelles.",
          "Développement et déploiement d'un modèle sémantique Power BI et d'un reporting unifié du suivi des dépenses entre sites.",
          "Automatisation de la consolidation de 7 pricelists fournisseurs via Power Query.",
          "Construction de grilles de prix et appui aux négociations avec les fournisseurs tier-2 sur l'ensemble des sites.",
        ],
      },
      {
        role: "Buyer Assistant",
        company: "Eurenco",
        period: "03/2023 – 09/2024",
        location: "France & Belgique",
        bullets: [
          "Pilotage de la stratégie d'achat et de la négociation pour l'acquisition d'un logiciel SRM — 40% de réduction de prix.",
          "Co-construction d'un cadre d'achats laboratoire via des audits multi-sites, estimé à 300k€ d'économies sur 10 ans.",
          "Mission Export Assistant sur le site belge (été 2023).",
        ],
      },
    ],
  },
};

export function getExperienceText(locale: Locale): ExperienceText {
  return experienceText[locale];
}
