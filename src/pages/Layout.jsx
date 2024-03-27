import { Outlet } from "react-router-dom";
import { NavBar } from "../components/nav-bar/NavBar";
import { Footer } from "../components/footer/Footer";

export function Layout() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
    //perhaps will be changed
  );
}
