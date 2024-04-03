import { HeroSection } from "../components/hero-section-for-landing-page/HeroSection";
import { LeftSectionLanding } from "../components/sections-landing/LeftSectionLanding";
import "./landingPage.css";

export function LandingPage() {
  return (
    <main>
      <HeroSection />
      <div className="flex-content">
        <LeftSectionLanding />
      </div>
    </main>
  );
}
