import { HeroSection } from "../components/hero-section-for-landing-page/HeroSection";
import { LeftSectionLanding } from "../components/sections-landing/LeftSectionLanding";
import { RightSectionLanding } from "../components/sections-landing/RightSectionLanding";
import "./landingPage.css";

export function LandingPage() {
  return (
    <main>
      <HeroSection />
      <div className="flex-content">
        <LeftSectionLanding />
        <RightSectionLanding />
      </div>
    </main>
  );
}
