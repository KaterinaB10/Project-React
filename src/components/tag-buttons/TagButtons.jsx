import articles from "../../articlesData.json";
import "./tagButtons.css";

export function TagButtons() {
  const uniqueTags = new Set();

  articles.articles.forEach((article) => {
    article.tagList.forEach((tag) => {
      uniqueTags.add(tag);
    });
  });

  const uniqueTagList = Array.from(uniqueTags);

  return (
    <div className="tag-buttons-container">
      <ul className="buttons-list">
        {uniqueTagList.map((tag, index) => (
          <li key={index}>
            <button className="tag-btn">#{tag}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
