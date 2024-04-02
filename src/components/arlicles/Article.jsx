export function Article(props) {
  return (
    <div className="article-container">
      <div className="article-container-main">
        <h1>{props.title}</h1>
        <p>{props.shortDescription}</p>
      </div>
      <div className="article-container-additional">
        <p>{props.date}</p>
        <button>read more...</button>
      </div>
    </div>
  );
}
