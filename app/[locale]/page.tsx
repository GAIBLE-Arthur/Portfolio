import { isLocale, defaultLocale, type Locale } from "@/lib/i18n";
import { Hero } from "@/components/sections/Hero";
import { ProfileSection } from "@/components/sections/ProfileSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;

  return (
    <>
      <Hero locale={locale} />
      <ProfileSection locale={locale} />
      <ExperienceSection locale={locale} />
      <TechnologySection locale={locale} />
      <CaseStudySection locale={locale} />
      <ProjectsSection locale={locale} />
      <ContactSection locale={locale} />
    </>
  );
}
