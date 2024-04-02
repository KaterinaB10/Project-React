import { Article } from "../components/arlicles/Article";
import { HeroSection } from "../components/hero-section-for-landing-page/HeroSection";
import "./landingPage.css";

export function LandingPage() {
  return (
    <main>
      <HeroSection />
      <Article
        title="Introducing to coding"
        shortDescription="Short description of Introducing to coding post."
        date="02.04.2024"
      />
    </main>
  );
}
