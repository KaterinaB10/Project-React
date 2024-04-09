import { TitleOfSection } from "../titles-for-sections/TitleOfSection";
import { PopularArticleCard } from "../popular-article-card/PopularArticleCard";
import { ArticlesPopularList } from "../arlicles/ArticlesPopularList";
import "./rightSideSection.css";

export function RightSectionLanding() {
  return (
    <section className="right-side-section">
      <TitleOfSection title="Popular posts" />
      <ArticlesPopularList />
    </section>
  );
}
