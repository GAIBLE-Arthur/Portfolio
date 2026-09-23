import type { Locale } from "@/lib/i18n";

export interface ProjectCard {
  id: string;
  tag: string;
  title: string;
  description: string;
  meta: string;
  detail: {
    kv: [string, string][];
    body: string[];
    linkLabel: string;
    linkUrl: string;
  };
}

interface FeaturedCaseStudy {
  title: string;
  quote: string;
  tags: string[];
  paragraphs: string[];
  facts: [string, string][];
}

interface ProjectsText {
  title: string;
  cards: ProjectCard[];
  featured: FeaturedCaseStudy;
}

const projectsText: Record<Locale, ProjectsText> = {
  en: {
    title: "Projects",
    cards: [
      {
        id: "aura",
        tag: "SQL, SQLite, Power BI",
        title: "AURA Energy Consumption",
        description:
          "Analysis of the electricity mix in the Auvergne-Rhône-Alpes region over 11 years (2013–2024). RTE éco2mix data processed via SQLite, Power BI dashboard.",
        meta: "SQL, SQLite, Power BI, 11 years of data",
        detail: {
          kv: [
            ["Subject", "Industrial energy consumption"],
            ["Tools", "SQL, SQLite, Power BI"],
            ["Data", "RTE éco2mix 2013–2024"],
            ["Format", "Dashboard + analysis"],
          ],
          body: [
            "Analysis of the electricity mix in the Auvergne-Rhône-Alpes region over 11 years via SQLite and Power BI. Nuclear structurally dominant at +70%, strong hydraulic seasonality, thermal inversely correlated with nuclear availability.",
          ],
          linkLabel: "View project",
          linkUrl: "https://www.notion.so/35dfe51e040d80ba905cd575fb14d76a",
        },
      },
      {
        id: "palantir",
        tag: "Palantir, Foundry, Ontology",
        title: "Palantir Vertex — Relationship graphs",
        description:
          "Detecting suspicious networks via ontological graphs in Palantir Foundry, cross-referencing financial transactions and communications between at-risk entities.",
        meta: "Palantir Foundry, Ontology, Graph analysis",
        detail: {
          kv: [
            ["Subject", "Network detection via ontological graphs"],
            ["Tools", "Palantir Foundry / Vertex"],
            ["Format", "Pipeline + ontological modelling"],
          ],
          body: [
            "Building a cleaning pipeline and modelling ontological objects in Palantir Foundry. Using Vertex to cross-reference financial transactions and communications between at-risk entities to detect suspicious networks.",
          ],
          linkLabel: "View project",
          linkUrl: "https://www.notion.so/35dfe51e040d8033a363dbbc326a523a",
        },
      },
      {
        id: "pharma",
        tag: "Microsoft Fabric, dbt Cloud, Power BI",
        title: "Pharma — Biotech Analytics Pipeline",
        description:
          "End-to-end pipeline on pharma/biotech data: 5 CSV sources (6,328 rows) ingested into a Fabric Warehouse, transformed through 10 dbt models, visualised in Power BI.",
        meta: "Fabric, dbt Cloud, T-SQL, Power BI",
        detail: {
          kv: [
            ["Sources", "5 CSV — 6,328 rows"],
            ["Stack", "Microsoft Fabric, dbt Cloud, T-SQL, Power BI"],
            ["dbt models", "10 (5 staging, 2 intermediate, 3 marts)"],
            ["Ingestion", "Warehouse Copy job (T-SQL, zero Spark)"],
            ["Visualisation", "DirectQuery → Power BI Service"],
          ],
          body: [
            "End-to-end data pipeline on the pharma and biotech industry. Five heterogeneous sources (FDA approvals, clinical trials, biotech funding, disease burden, pharma financials) are loaded into a Microsoft Fabric Warehouse via a T-SQL Copy job.",
            "Ten dbt models structured in three layers transform raw data into analytical tables: R&D efficiency by company (RANK() window functions), therapy area landscape, VC/M&A deal trends. Automated data quality tests. Power BI dashboard published via DirectQuery.",
          ],
          linkLabel: "View project on Notion",
          linkUrl: "https://app.notion.com/p/38cfe51e040d817da7cec1d8326724c0",
        },
      },
      {
        id: "energy",
        tag: "Microsoft Fabric, Power BI, SQL",
        title: "Global Electricity Analytics",
        description:
          "Fabric pipeline on global electricity data from Ember Climate (215 countries, 2000–2024): Dataflow Gen2 → Warehouse T-SQL → Power BI dashboard.",
        meta: "Fabric, Dataflow Gen2, T-SQL, Power BI",
        detail: {
          kv: [
            ["Source", "Ember Climate — 215 countries, 2000–2024"],
            ["Stack", "Fabric, Dataflow Gen2, T-SQL, Power BI"],
            ["Tables", "mix_mondial_2024, renouvelables_vs_fossiles, top_nucleaire"],
            ["Mode", "DirectQuery → Power BI Service"],
          ],
          body: [
            "Data pipeline on global electricity data from Ember Climate (215 countries, 2000–2024, ~500k rows). Ingested via Dataflow Gen2 into a Fabric Warehouse, then modelled into three analytical tables using native T-SQL.",
            "Power BI Service dashboard published in DirectQuery: top nuclear producers 2024, global energy mix by source, Clean/Fossil/Renewables trend over 25 years, KPI cards for solar/wind/nuclear.",
          ],
          linkLabel: "View project on Notion",
          linkUrl: "https://app.notion.com/p/38cfe51e040d8113a3f3c4296d689bff",
        },
      },
    ],
    featured: {
      title: "Data-driven governance in multi-site organisations",
      quote: "How data ontologies redefine corporate decision power",
      tags: ["Palantir Foundry", "Data ontologies", "GE Vernova", "Multi-site"],
      paragraphs: [
        "This research paper, conducted in the field at GE Vernova, examines how centralising data strengthens corporate decision-making power over distributed operations — without destroying local site autonomy.",
        "Ontological modelling in Palantir Foundry forms the backbone of the approach: by structuring the organisation's core objects into a coherent graph, it enables leadership to move from consolidation to active governance.",
      ],
      facts: [
        ["Context", "GE Vernova — fieldwork"],
        ["Platform", "Palantir Foundry"],
        ["Approach", "Data ontologies"],
        ["Stakes", "Centralisation vs autonomy"],
        ["Scope", "Multi-site groups"],
        ["Language", "EN"],
      ],
    },
  },
  fr: {
    title: "Projets",
    cards: [
      {
        id: "aura",
        tag: "SQL, SQLite, Power BI",
        title: "AURA Energy Consumption",
        description:
          "Analyse du mix électrique de la région Auvergne-Rhône-Alpes sur 11 ans (2013–2024). Données RTE éco2mix traitées via SQLite, dashboard Power BI.",
        meta: "SQL, SQLite, Power BI, 11 ans de données",
        detail: {
          kv: [
            ["Sujet", "Consommation énergétique industrielle"],
            ["Outils", "SQL, SQLite, Power BI"],
            ["Données", "RTE éco2mix 2013–2024"],
            ["Format", "Dashboard + analyse"],
          ],
          body: [
            "Analyse du mix électrique de la région Auvergne-Rhône-Alpes sur 11 ans via SQLite et Power BI. Nucléaire structurellement dominant à +70%, saisonnalité hydraulique forte, thermique en corrélation inverse avec la disponibilité nucléaire.",
          ],
          linkLabel: "Voir le projet",
          linkUrl: "https://www.notion.so/35dfe51e040d80ba905cd575fb14d76a",
        },
      },
      {
        id: "palantir",
        tag: "Palantir, Foundry, Ontologie",
        title: "Palantir Vertex — Graphes de relations",
        description:
          "Détection de réseaux suspects via graphes ontologiques dans Palantir Foundry, en croisant transactions financières et communications entre entités à risque.",
        meta: "Palantir Foundry, Ontologie, Graph analysis",
        detail: {
          kv: [
            ["Sujet", "Détection de réseaux via graphes ontologiques"],
            ["Outils", "Palantir Foundry / Vertex"],
            ["Format", "Pipeline + modélisation ontologique"],
          ],
          body: [
            "Construction d'un pipeline de nettoyage et modélisation des objets ontologiques dans Palantir Foundry. Utilisation de Vertex pour croiser transactions financières et communications entre entités à risque et détecter des réseaux suspects.",
          ],
          linkLabel: "Voir le projet",
          linkUrl: "https://www.notion.so/35dfe51e040d8033a363dbbc326a523a",
        },
      },
      {
        id: "pharma",
        tag: "Microsoft Fabric, dbt Cloud, Power BI",
        title: "Pharma — Biotech Analytics Pipeline",
        description:
          "Pipeline end-to-end sur données pharma/biotech : 5 sources CSV (6 328 lignes) ingérées dans un Warehouse Fabric, transformées via dbt, visualisées dans Power BI.",
        meta: "Fabric, dbt Cloud, T-SQL, Power BI",
        detail: {
          kv: [
            ["Sources", "5 CSV — 6 328 lignes"],
            ["Stack", "Microsoft Fabric, dbt Cloud, T-SQL, Power BI"],
            ["Modèles dbt", "10 (5 staging, 2 intermediate, 3 marts)"],
            ["Ingestion", "Copy job Warehouse (T-SQL, zéro Spark)"],
            ["Visualisation", "DirectQuery → Power BI Service"],
          ],
          body: [
            "Pipeline data complet sur l'industrie pharma et biotech. Cinq sources hétérogènes (approbations FDA, essais cliniques, financement biotech, charge de morbidité, données financières des laboratoires) sont chargées dans un Warehouse Microsoft Fabric via Copy job en T-SQL pur.",
            "Dix modèles dbt structurés en trois couches transforment les données brutes jusqu'aux tables analytiques : efficacité R&D par entreprise (RANK() window functions), panorama thérapeutique par indication, tendances deals VC/M&A. Tests data quality automatisés. Dashboard Power BI publié en DirectQuery.",
          ],
          linkLabel: "Voir le projet sur Notion",
          linkUrl: "https://app.notion.com/p/38cfe51e040d817da7cec1d8326724c0",
        },
      },
      {
        id: "energy",
        tag: "Microsoft Fabric, Power BI, SQL",
        title: "Global Electricity Analytics",
        description:
          "Pipeline Fabric sur les données électriques mondiales Ember Climate (215 pays, 2000–2024) : Dataflow Gen2 → Warehouse T-SQL → dashboard Power BI.",
        meta: "Fabric, Dataflow Gen2, T-SQL, Power BI",
        detail: {
          kv: [
            ["Source", "Ember Climate — 215 pays, 2000–2024"],
            ["Stack", "Fabric, Dataflow Gen2, T-SQL, Power BI"],
            ["Tables", "mix_mondial_2024, renouvelables_vs_fossiles, top_nucleaire"],
            ["Mode", "DirectQuery → Power BI Service"],
          ],
          body: [
            "Pipeline data sur les données électriques mondiales Ember Climate (215 pays, 2000–2024, ~500k lignes). Ingestion via Dataflow Gen2 dans un Fabric Warehouse, puis modélisation en trois tables analytiques via SQL natif T-SQL.",
            "Dashboard Power BI Service publié en DirectQuery : top producteurs nucléaires 2024, mix énergétique mondial par source, évolution Clean/Fossil/Renewables sur 25 ans, KPI cartes solaire/éolien/nucléaire.",
          ],
          linkLabel: "Voir le projet sur Notion",
          linkUrl: "https://app.notion.com/p/38cfe51e040d8113a3f3c4296d689bff",
        },
      },
    ],
    featured: {
      title: "Gouvernance data-driven en environnement multi-sites",
      quote: "Comment les ontologies data redéfinissent le pouvoir de décision corporate",
      tags: ["Palantir Foundry", "Ontologies data", "GE Vernova", "Multi-site"],
      paragraphs: [
        "Ce mémoire de recherche, conduit sur le terrain de GE Vernova, examine comment la centralisation de la donnée renforce le pouvoir de décision corporate sur des opérations distribuées — sans détruire l'autonomie locale des sites.",
        "La modélisation ontologique dans Palantir Foundry constitue l'épine dorsale de la démarche : en structurant les objets clés de l'organisation en un graphe cohérent, elle permet à la direction de passer de la consolidation à la gouvernance active.",
      ],
      facts: [
        ["Cadre", "GE Vernova — terrain"],
        ["Plateforme", "Palantir Foundry"],
        ["Approche", "Ontologies data"],
        ["Enjeu", "Centralisation vs autonomie"],
        ["Contexte", "Groupes multi-sites"],
        ["Langue", "EN"],
      ],
    },
  },
};

export function getProjectsText(locale: Locale): ProjectsText {
  return projectsText[locale];
}
