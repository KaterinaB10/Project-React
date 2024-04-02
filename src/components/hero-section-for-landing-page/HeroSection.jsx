import "./heroSection.css";
import heroImage from "../../assets/images/Main-image.svg";

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-title-container">
          <h1>Welcome to Blog for Developers-Beginners</h1>
          <p>
            Our platform offers practical advises on a wide range of topics for
            front-end developers that just start their way in coding.
          </p>
        </div>
        <div className="hero-image-container">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </section>
  );
}
