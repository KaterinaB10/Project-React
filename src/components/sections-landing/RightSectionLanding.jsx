import { TitleOfSection } from "../titles-for-sections/TitleOfSection";
import { PopularArticleCard } from "../popular-article-card/PopularArticleCard";
import "./rightSideSection.css";

export function RightSectionLanding() {
  return (
    <section className="right-side-section">
      <TitleOfSection title="Popular posts" />
      <PopularArticleCard />
    </section>
  );
}
