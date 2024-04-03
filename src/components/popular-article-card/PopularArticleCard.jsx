import { Link } from "react-router-dom";
import "./popularArticleCard.css";

export function PopularArticleCard() {
  return (
    <div className="popular-article-card">
      <div className="popular-article-image-container">
        <img src="" alt="" />
      </div>
      <div className="popular-article-title-container">
        <h1>Introducing to coding</h1>
        <p>Short description of Introducing to coding post.</p>
      </div>
      <div className="popular-article-additional-container">
        <p>03.04.2024</p>
        <Link>R</Link>
      </div>
    </div>
  );
}
