import articles from "../../articlesData.json";
import { PopularArticleCard } from "../popular-article-card/PopularArticleCard";
import style from "./articlesPopularList.module.css";

export function ArticlesPopularList() {
  return (
    <div className={style.container}>
      <ul className={style.list}>
        {articles.articles.map((article) => {
          if (article.favorited === true) {
            return (
              <li key={article.id}>
                <PopularArticleCard
                  img={article.image}
                  title={article.title}
                  shortDescription={article.description}
                  date={article.createdAt}
                />
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
