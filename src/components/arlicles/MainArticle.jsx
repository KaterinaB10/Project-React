import { Link } from "react-router-dom";
import { useState } from "react";
import "./article.css";

export function Article(props) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="article-container"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="article-container-main">
        <h1 className={hover ? "article-title-hovered" : "article-title"}>
          {props.title}
        </h1>
        <p className="article-description">{props.shortDescription}</p>
        <img
          src={props.imageUrl} // Use the imageUrl prop passed from parent component
          alt="Article Image"
          className="article-image"
        />
      </div>
      <div className="article-container-additional">
        <p className="article-date">{props.date}</p>
        <Link
          className={hover ? "read-more-button-hovered" : "read-more-button"}
        >
          Read more...
        </Link>
      </div>
    </div>
  );
}