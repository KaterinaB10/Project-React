import { useState } from "react";
import articles from "../../articlesData.json";
import "./tagButtons.css";

export function TagButtons() {
  const [activeClass, setActiveClass] = useState(null);

  const uniqueTags = new Set();

  articles.articles.forEach((article) => {
    article.tagList.forEach((tag) => {
      uniqueTags.add(tag);
    });
  });

  const uniqueTagList = Array.from(uniqueTags);

  const [hover, setHover] = useState(null);

  return (
    <div className="tag-buttons-container">
      <ul className="buttons-list">
        {uniqueTagList.map((tag, index) => (
          <li key={index}>
            <button
              className={
                activeClass === tag
                  ? "active-tag"
                  : hover === tag
                  ? "hovered-tag"
                  : "tag-btn"
              }
              onMouseEnter={() => setHover(tag)}
              onMouseLeave={() => setHover(null)}
              onClick={() => setActiveClass(tag)}
            >
              #{tag}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
