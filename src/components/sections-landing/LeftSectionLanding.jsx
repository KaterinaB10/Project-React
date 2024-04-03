import { Article } from "../components/arlicles/Article";
import { TitleOfSection } from "../components/titles-for-sections/TitleOfSection";

export function LeftSectionLanding() {
  return (
    <section className="left-side-section">
      <TitleOfSection title="All posts" style={{ width: "736px" }} />
      <Article
        title="Introducing to coding"
        shortDescription="Short description of Introducing to coding post."
        date="02.04.2024"
      />
    </section>
  );
}
