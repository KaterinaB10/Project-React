import { TitleOfSection } from "../titles-for-sections/TitleOfSection";
import { ArticlesList } from "../arlicles/ArticlesList";
import { SearchInput } from "../search-input/SearchInput";
import { MainArticle } from "../arlicles/MainArticle";
import "./leftSideSection.css";

export function LeftSectionLanding() {
  return (
    <section className="left-side-section">
      <SearchInput />
      <MainArticle />
      <TitleOfSection title="All posts" />
      <ArticlesList />
    </section>
  );
}
