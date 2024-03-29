import { Outlet } from "react-router-dom";
import { NavBar } from "../components/nav-bar/NavBar";

export function Layout() {
  return (
    <>
      <header className="header">
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
    //perhaps will be changed
  );
}
