import { Article } from "../arlicles/Article";
import { TitleOfSection } from "../titles-for-sections/TitleOfSection";
import { ArticlesList } from "../arlicles/ArticlesList";
import "./leftSideSection.css";

export function LeftSectionLanding() {
  return (
    <section className="left-side-section">
      <TitleOfSection title="All posts" />
      <ArticlesList />
      <Article
        title="Introducing to coding"
        shortDescription="Short description of Introducing to coding post."
        date="02.04.2024"
      />
    </section>
  );
}
