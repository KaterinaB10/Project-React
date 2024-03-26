import { NavButtons } from "./NavButtons";
import { Logo } from "./Logo";
import "./navBar.css";

export function NavBar() {
  return (
    <div className="fixed-navbar">
      <Logo />
      <NavButtons />
    </div>
  );
}
