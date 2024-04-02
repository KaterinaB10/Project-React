import "./article.css";

export function Article(props) {
  return (
    <div className="article-container">
      <div className="article-container-main">
        <h1 className="article-title">{props.title}</h1>
        <p className="article-description">{props.shortDescription}</p>
      </div>
      <div className="article-container-additional">
        <p className="article-date">{props.date}</p>
        <a className="read-more-button">Read more...</a>
      </div>
    </div>
  );
}
