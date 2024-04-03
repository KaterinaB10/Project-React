import "./titleOfSection.css";

export function TitleOfSection(props) {
  return (
    <div className="title-section-container">
      <h1>{props.title}</h1>
      <div className="title-line"></div>
    </div>
  );
}
