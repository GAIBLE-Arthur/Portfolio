import type { Locale } from "@/lib/i18n";

interface ContactText {
  eyebrow: string;
  title: string;
  emailLabel: string;
  phoneLabel: string;
}

const contactText: Record<Locale, ContactText> = {
  en: {
    eyebrow: "Contact",
    title: "Get in touch",
    emailLabel: "Email",
    phoneLabel: "Phone",
  },
  fr: {
    eyebrow: "Contact",
    title: "Prendre contact",
    emailLabel: "Email",
    phoneLabel: "Téléphone",
  },
};

export function getContactText(locale: Locale): ContactText {
  return contactText[locale];
}
