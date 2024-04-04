import { Link } from "react-router-dom";
import arrowReadMore from "../../assets/images/arrow-read-more.svg";
import articleImage from "../../assets/images/Image-article.svg";
import "./popularArticleCard.css";

export function PopularArticleCard() {
  return (
    <section className="popular-article-card">
      <div className="popular-article-image-container">
        <img src={articleImage} alt="" />
      </div>
      <div className="popular-article-info-container">
        <div className="popular-article-title-container">
          <h1>Introducing to coding</h1>
          <p>Short description of Introducing to coding post.</p>
        </div>
        <div className="popular-article-additional-container">
          <p>03.04.2024</p>
          <Link to="/about-us" className="read-more-link">
            <img src={arrowReadMore} alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
}
