import { TitleOfSection } from "../titles-for-sections/TitleOfSection";
import { SearchInput } from "../search-input/SearchInput";
import { ArticlesList } from "../arlicles/ArticlesList";
import { TagButtons } from "../tag-buttons/TagButtons";
import { MainArticle } from "../arlicles/MainArticle";
import articles from "../../articlesData.json";
import "./leftSideSection.css";

export function LeftSectionLanding() {
  return (
    <section className="left-side-section">
      <SearchInput />
      <TagButtons />
      <MainArticle />
      <TitleOfSection title="All posts" />
      <ArticlesList />
    </section>
  );
}
