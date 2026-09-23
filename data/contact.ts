import type { Locale } from "@/lib/i18n";

interface ContactText {
  title: string;
  emailLabel: string;
  phoneLabel: string;
}

const contactText: Record<Locale, ContactText> = {
  en: {
    title: "Get in touch",
    emailLabel: "Email",
    phoneLabel: "Phone",
  },
  fr: {
    title: "Prendre contact",
    emailLabel: "Email",
    phoneLabel: "Téléphone",
  },
};

export function getContactText(locale: Locale): ContactText {
  return contactText[locale];
}
