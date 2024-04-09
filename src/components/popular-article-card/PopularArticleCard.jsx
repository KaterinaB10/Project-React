import { Link } from "react-router-dom";
import { useState } from "react";
import arrowReadMore from "../../assets/images/arrow-read-more.svg";
import arrowReadMoreHover from "../../assets/images/arrow-read-more-hover.svg";
import articleImage from "../../assets/images/Image-article.svg";
import "./popularArticleCard.css";

export function PopularArticleCard(props) {
  const [hover, setHover] = useState(false);

  return (
    <section
      className="popular-article-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="popular-article-image-container">
        <img src={props.img} alt="" />
      </div>
      <div className="popular-article-info-container">
        <div className="popular-article-title-container">
          <h1
            className={
              hover ? "popular-article-title-hovered" : "popular-article-title"
            }
          >
            {props.title}
          </h1>
          <p>{props.shortDescription}</p>
        </div>
        <div className="popular-article-additional-container">
          <p>{props.date}</p>
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
