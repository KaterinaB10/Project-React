import { Outlet } from "react-router-dom";
import { NavBar } from "../components/nav-bar/NavBar";
import { UseTheme } from "../hooks/UseTheme";

export function Layout() {
  const { setTheme } = UseTheme("light");

  const handleLightThemeClick = () => {
    setTheme("light");
  };
  const handleDarkThemeClick = () => {
    setTheme("dark");
  };

  return (
    <>
      <header className="header">
        <NavBar />
      </header>
      <button onClick={handleLightThemeClick}>1</button>
      <button onClick={handleDarkThemeClick}>2</button>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
    //perhaps will be changed
  );
}
