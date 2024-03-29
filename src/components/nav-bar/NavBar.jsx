import { NavButtons } from "./NavButtons";
import { Logo } from "./Logo";
import "./navBar.css";
import { ThemeSwitcher } from "../theme-switcher/ThemeSwitcher";

export function NavBar() {
  return (
    <div className="fixed-navbar">
      <Logo />
      <div className="buttons-container">
        <NavButtons />
        <ThemeSwitcher />
      </div>
    </div>
  );
}
