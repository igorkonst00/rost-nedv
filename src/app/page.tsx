import { AboutSection } from "@/components/about-section/about-section";
import { CategoriesSection } from "@/components/categories-section/categories-section";
import { ContactSection } from "@/components/contact-section/contact-section";
import { HeroSection } from "@/components/hero-section/hero-section";
import { QuizSection } from "@/components/quiz-section/quiz-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <AboutSection />
      <QuizSection />
      <ContactSection />
    </main>
  );
}
