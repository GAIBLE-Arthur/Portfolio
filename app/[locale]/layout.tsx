import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { locales, isLocale } from "@/lib/i18n";
import { site, getContent } from "@/data/content";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  return {
    title: `${site.name} | Certifications`,
    description: getContent(params.locale).intro,
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();

  return (
    <html lang={params.locale} className={`${inter.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
