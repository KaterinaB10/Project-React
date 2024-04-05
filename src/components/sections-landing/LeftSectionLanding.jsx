import { TitleOfSection } from "../titles-for-sections/TitleOfSection";
import { ArticlesList } from "../arlicles/ArticlesList";
import "./leftSideSection.css";

export function LeftSectionLanding() {
  return (
    <section className="left-side-section">
      <TitleOfSection title="All posts" />
      <ArticlesList />
    </section>
  );
}
