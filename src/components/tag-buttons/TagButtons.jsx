import { useState } from "react";
import articles from "../../articlesData.json";
import { Article } from "../arlicles/Article";
import "./tagButtons.css";

export function TagButtons() {
  const [hoveredTag, setHoveredTag] = useState(null);
  const [activeTag, setActiveTag] = useState(null);
  const [filteredArticles, setFilteredArticles] = useState([]);

  // for creating just buttons with categories from json file

  const uniqueTags = new Set();

  articles.articles.forEach((article) => {
    article.tagList.forEach((tag) => {
      uniqueTags.add(tag);
    });
  });

  const uniqueTagList = Array.from(uniqueTags);

  // for creating function to show filtered articles
  const fetchArticles = (tag) => {
    if (!tag) {
      return [];
    } else {
      const results = articles.articles.filter((article) =>
        article.tagList.includes(tag)
      );
      setFilteredArticles(results);
    }
  };

  const handleButtonClick = (tag) => {
    setActiveTag(tag);
    fetchArticles(tag);
  };

  const handleMouseEnter = (tag) => {
    setHoveredTag(tag);
  };

  const handleMouseLeave = () => {
    setHoveredTag(null);
  };

  ///////////////////////////////////////////////////////
  return (
    <div>
      <div className="tag-buttons-container">
        <ul className="buttons-list">
          {uniqueTagList.map((tag, index) => (
            <li key={index}>
              <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={
                  activeTag === tag
                    ? "active-tag"
                    : hoveredTag === tag
                    ? "hovered-tag"
                    : "tag-btn"
                }
                onClick={() => handleButtonClick(tag)}
              >
                #{tag}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <ul className="search-results">
        {filteredArticles.map((result) => (
          <li key={result.id}>
            <Article
              title={result.title}
              shortDescription={result.description}
              date={result.createdAt}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
