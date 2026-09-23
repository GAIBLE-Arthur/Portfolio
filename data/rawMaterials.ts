import type { Locale } from "@/lib/i18n";
import type { ProjectCard } from "@/data/projects";

interface Stat {
  value: string;
  label: string;
}

interface FeaturedAnalysis {
  eyebrow: string;
  title: string;
  quote: string;
  paragraphs: string[];
  facts: [string, string][];
  linkLabel: string;
  linkUrl: string;
}

interface RawMaterialsText {
  eyebrow: string;
  title: string;
  stats: Stat[];
  cards: ProjectCard[];
  featured: FeaturedAnalysis;
}

const rawMaterialsText: Record<Locale, RawMaterialsText> = {
  en: {
    eyebrow: "Critical Raw Materials",
    title: "Know your upstream chain",
    stats: [
      { value: "90%", label: "Global niobium extracted in Brazil" },
      { value: "+5.8%", label: "Market CAGR 2025–2033" },
      { value: "$1.5B", label: "CMOC acquisition of Catalão" },
      { value: "2011", label: "EU criticality — uninterrupted" },
    ],
    cards: [
      {
        id: "bresil",
        tag: "Niobium, Geopolitics",
        title: "Brazil: The 41st dependency",
        description:
          "CBMM's global monopoly, the Araxá mine, OTC administered prices. Why Western dependency is structural, and why it doesn't make headlines.",
        meta: "Report, ~4,500 words",
        detail: {
          kv: [
            ["Subject", "Brazilian niobium monopoly"],
            ["Format", "Research report, ~4,500 words"],
            ["Sources", "Academic, institutional (EU/JRC), OTC"],
            ["Language", "French"],
          ],
          body: [
            "Niobium is 90% extracted in Brazil, primarily via the open-pit Araxá mine (83% of global niobium), operated by CBMM. Listed as a critical metal by the EU and US since 2011, it nevertheless makes no headlines, unlike Chinese rare earths.",
            "This study examines the mechanism of comfortable dependency: an OTC-administered price kept artificially low by CBMM, a perception of Brazil as a non-conflictual partner, and the absence of public listing masking real volumes.",
          ],
          linkLabel: "Read on Notion",
          linkUrl: "https://www.notion.so/35dfe51e040d800ca9caf26568d2163c",
        },
      },
      {
        id: "chine",
        tag: "Niobium, Strategy",
        title: "China: caught in dependency",
        description:
          "China produces no niobium, but secured 15% of CBMM and acquired the Catalão mine for $1.5B. Analysis of Chinese supply strategies.",
        meta: "Analysis note",
        detail: {
          kv: [
            ["Subject", "Chinese supply strategy"],
            ["Format", "Geopolitical analysis note"],
            ["Language", "French"],
          ],
          body: [
            "China has no significant niobium deposits, but rather than competing with Brazil, it chose to invest directly. In 2011, a Chinese consortium acquired 15% of CBMM. The Catalão mine (2nd largest producer) was also acquired by CMOC for $1.5B, giving Beijing a direct share of global production while leaving Europe and the US as mere customers.",
          ],
          linkLabel: "Read on Notion",
          linkUrl: "https://www.notion.so/35dfe51e040d80bfaae7d09d91595497",
        },
      },
      {
        id: "analyse",
        tag: "Niobium, Modelling, Risk",
        title: "Costs, risks & market structure",
        description:
          "Production cost structure (open-pit vs underground), market risk modelling, and geopolitical concentration risk analysis. Quantitative model.",
        meta: "Quant. & qual. analysis",
        detail: {
          kv: [
            ["Subject", "Market & geopolitical risk modelling"],
            ["Format", "Quantitative and qualitative analysis"],
            ["Tools", "Financial modelling, OTC sources"],
            ["Language", "French"],
          ],
          body: [
            "This analysis covers the production cost structure of niobium and the implications for the economic viability of alternatives.",
            "It includes market risk modelling (administered price vs potential volatility in a crisis) and a geopolitical concentration risk assessment: probability, response time, substitution options.",
          ],
          linkLabel: "Read on Notion",
          linkUrl: "https://www.notion.so/35dfe51e040d80ec9301c81c5b2c0ac5",
        },
      },
    ],
    featured: {
      eyebrow: "Main analysis",
      title: "The comfortable dependency",
      quote: "Sitting on a logistical time bomb",
      paragraphs: [
        "Niobium illustrates a singular form of geopolitical risk: comfortable dependency. Unlike Chinese rare earths whose threat is regularly brandished, Brazilian niobium makes no noise.",
        "This absence of friction has anaesthetised the vigilance of defence and high-technology industries. Dependency on the 41st element is not a geological fatality, but the result of an economic trade-off that sacrificed sovereignty on the altar of price stability.",
      ],
      facts: [
        ["Main mine", "Araxá, Minas Gerais"],
        ["World share", "83%"],
        ["Pricing", "OTC — administered price"],
        ["Price FeNb", "~$45–50 / kg"],
        ["Reserves", "> 200 years"],
        ["EU criticality", "Since 2011 — CRMA"],
        ["Chinese share CBMM", "15%"],
      ],
      linkLabel: "Read the full analysis",
      linkUrl: "https://www.notion.so/Sommaire-g-n-ral-analyse-Niobium-364fe51e040d809e907ce99074968209",
    },
  },
  fr: {
    eyebrow: "Matières premières critiques",
    title: "Connaître sa chaîne amont",
    stats: [
      { value: "90%", label: "Niobium mondial extrait au Brésil" },
      { value: "+5,8%", label: "CAGR marché 2025–2033" },
      { value: "1,5 Md$", label: "Rachat Catalão par CMOC" },
      { value: "2011", label: "Criticité UE — ininterrompue" },
    ],
    cards: [
      {
        id: "bresil",
        tag: "Niobium, Géopolitique",
        title: "Brésil : la 41ème dépendance",
        description:
          "Monopole mondial de la CBMM, mine d'Araxá, prix administrés OTC. Pourquoi la dépendance occidentale est structurelle, et pourquoi elle ne fait pas les grands titres.",
        meta: "Rapport, ~4 500 mots",
        detail: {
          kv: [
            ["Sujet", "Monopole brésilien du niobium"],
            ["Format", "Rapport de recherche, ~4 500 mots"],
            ["Sources", "Académiques, institutionnelles (UE/JRC), OTC"],
            ["Langue", "Français"],
          ],
          body: [
            "Le niobium est extrait à 90% par le Brésil, principalement via la mine à ciel ouvert d'Araxá (83% du niobium mondial), opérée par la CBMM. Classé métal critique par l'UE et les États-Unis depuis 2011, il ne fait pourtant pas les grands titres, contrairement aux terres rares chinoises.",
            "Cette étude examine le mécanisme de la dépendance confortable : un prix administré OTC maintenu artificiellement bas par la CBMM, une perception du Brésil comme partenaire non conflictuel, et l'absence de cotation publique masquant les volumes réels.",
          ],
          linkLabel: "Lire sur Notion",
          linkUrl: "https://www.notion.so/35dfe51e040d800ca9caf26568d2163c",
        },
      },
      {
        id: "chine",
        tag: "Niobium, Stratégie",
        title: "Chine : sous le coup de la dépendance",
        description:
          "La Chine ne produit pas de niobium, mais a sécurisé 15% de la CBMM et racheté la mine de Catalão pour 1,5 Md$. Analyse des stratégies d'approvisionnement chinoises.",
        meta: "Note d'analyse",
        detail: {
          kv: [
            ["Sujet", "Stratégie d'approvisionnement chinoise"],
            ["Format", "Note d'analyse géopolitique"],
            ["Langue", "Français"],
          ],
          body: [
            "La Chine ne possède pas de gisement de niobium significatif sur son sol, mais plutôt que de chercher à concurrencer le Brésil, elle a choisi d'y investir directement. En 2011, un consortium chinois rachète 15% des parts de la CBMM. La mine de Catalão (2ème productrice mondiale) passe du britannique Anglo American au groupe CMOC pour 1,5 Md$, laissant l'Europe et les États-Unis en position de simples clients.",
          ],
          linkLabel: "Lire sur Notion",
          linkUrl: "https://www.notion.so/35dfe51e040d80bfaae7d09d91595497",
        },
      },
      {
        id: "analyse",
        tag: "Niobium, Modélisation, Risque",
        title: "Coûts, risques & structure de marché",
        description:
          "Structure de coûts de production (open-pit vs souterrain), modélisation du risque marché, et analyse du risque géopolitique de concentration. Modèle quantitatif.",
        meta: "Analyse quant. & qual.",
        detail: {
          kv: [
            ["Sujet", "Modélisation risque marché & géopolitique"],
            ["Format", "Analyse quantitative et qualitative"],
            ["Outils", "Modélisation financière, sources OTC"],
            ["Langue", "Français"],
          ],
          body: [
            "Cette analyse porte sur la structure de coûts de production du niobium et sur les implications pour la viabilité économique des alternatives.",
            "Elle inclut une modélisation du risque marché (prix administré vs volatilité potentielle en cas de crise) et une évaluation du risque géopolitique de concentration : probabilité, délai de réponse, options de substitution.",
          ],
          linkLabel: "Lire sur Notion",
          linkUrl: "https://www.notion.so/35dfe51e040d80ec9301c81c5b2c0ac5",
        },
      },
    ],
    featured: {
      eyebrow: "Analyse principale",
      title: "La dépendance confortable",
      quote: "Assis sur une bombe à retardement logistique",
      paragraphs: [
        "Le niobium illustre une forme singulière de risque géopolitique : celle de la dépendance confortable. Contrairement aux terres rares chinoises dont la menace est régulièrement brandie, le niobium brésilien ne fait pas de bruit.",
        "Cette absence de friction a anesthésié la vigilance des industries de défense et de haute technologie. La dépendance au 41ème élément n'est pas une fatalité géologique, mais le résultat d'un arbitrage économique qui a sacrifié la souveraineté sur l'autel de la stabilité des prix.",
      ],
      facts: [
        ["Mine principale", "Araxá, Minas Gerais"],
        ["Part mondiale", "83%"],
        ["Cotation", "OTC — prix administré"],
        ["Prix FeNb", "~$45–50 / kg"],
        ["Réserves", "> 200 ans"],
        ["Criticité UE", "Depuis 2011 — CRMA"],
        ["Part chinoise CBMM", "15%"],
      ],
      linkLabel: "Lire l'analyse complète",
      linkUrl: "https://www.notion.so/Sommaire-g-n-ral-analyse-Niobium-364fe51e040d809e907ce99074968209",
    },
  },
};

export function getRawMaterialsText(locale: Locale): RawMaterialsText {
  return rawMaterialsText[locale];
}
