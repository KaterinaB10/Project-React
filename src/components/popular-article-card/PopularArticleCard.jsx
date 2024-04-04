import { Link } from "react-router-dom";
import { useState } from "react";
import arrowReadMore from "../../assets/images/arrow-read-more.svg";
import arrowReadMoreHover from "../../assets/images/arrow-read-more-hover.svg";
import articleImage from "../../assets/images/Image-article.svg";
import "./popularArticleCard.css";

export function PopularArticleCard() {
  const [hover, setHover] = useState(false);

  return (
    <section
      className="popular-article-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="popular-article-image-container">
        <img src={articleImage} alt="" />
      </div>
      <div className="popular-article-info-container">
        <div className="popular-article-title-container">
          <h1
            className={
              hover ? "popular-article-title-hovered" : "popular-article-title"
            }
          >
            Introducing to coding
          </h1>
          <p>Short description of Introducing to coding post.</p>
        </div>
        <div className="popular-article-additional-container">
          <p>03.04.2024</p>
          <Link to="/about-us" className="read-more-link">
            <img
              src={hover ? arrowReadMoreHover : arrowReadMore}
              alt=""
              className="read-more-img"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
