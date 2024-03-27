import { Link } from "react-router-dom";
import "./footer.css";

export function Footer() {
  return (
    <div className="footer-container">
      <Link to="/" className="footer-item">
        Home
      </Link>
      <Link to="/about-us" className="footer-item">
        About Us
      </Link>
      <Link to="" className="footer-item">
        Discord Community
      </Link>
    </div>
  );
}
