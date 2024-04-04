import articles from "../../articlesData.json";
import { Article } from "./Article";
import "./articlesList.css";

export function ArticlesList() {
  return (
    <ul className="articles-list">
      {articles.articles.map((article) => {
        return (
          <li key={article.id}>
            <Article
              title={article.title}
              shortDescription={article.description}
              date={article.createdAt}
            />
          </li>
        );
      })}
    </ul>
  );
}
