import { Link } from "react-router-dom";
import { useState } from "react";
import articleImage from "../../assets/images/Main-article-image.svg";
import articles from "../../articlesData.json";
import "./mainArticles.css";

export function MainArticle() {
  const [hover, setHover] = useState(false);

  const article = articles.articles[2];

  return (
    <div className="article-main-container">
      <div
        className="articles-main"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        key={article.id}
      >
        <div className="article-container-main">
          <h1 className={hover ? "article-title-hovered" : "article-title"}>
            {article.title}
          </h1>
          <p className="article-description">{article.description}</p>
          <div className="image-main-container">
            <img
              src={articleImage}
              alt="Article Image"
              className="article-image"
            />
          </div>
        </div>
        <div className="article-container-additional">
          <p className="article-date">{article.createdAt}</p>
          <Link
            className={hover ? "read-more-button-hovered" : "read-more-button"}
          >
            Read more...
          </Link>
        </div>
      </div>
    </div>
  );
}
