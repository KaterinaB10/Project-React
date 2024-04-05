import { useState } from "react";
import articles from "../../articlesData.json";
import { Article } from "./Article";
import "./articlesList.css";

export function ArticlesList() {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 7;
  const lastIndex = currentPage * articlesPerPage;
  const firstIndex = lastIndex - articlesPerPage;
  const articlesCount = articles.articles.slice(firstIndex, lastIndex);
  const numberOfPages = Math.ceil(articles.articles.length / articlesPerPage);
  const numbers = [...Array(numberOfPages + 1).keys()].slice(1);

  return (
    <div className="articles-list-container">
      <ul className="articles-list">
        {articlesCount.map((article) => {
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
      <div className="articles-list-nav">
        <ul>
          {numbers.map((n, i) => (
            <li
              className={`page-number ${
                currentPage === n ? "active" : "non-active"
              }`}
              key={i}
            >
              <a href="#" onClick={() => changeCurrentPage(n)}>
                {n}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  function changeCurrentPage(id) {
    setCurrentPage(id);
  }
}
