import "./App.css";
import "@radix-ui/themes/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { LandingPage } from "./pages/LandingPage";
import { AboutUsPage } from "./pages/about-us-page/AboutUsPage";
import { LoginPage } from "./pages/login-page/LoginPage";
import { SignUpPage } from "./pages/sign-up-page/SignUpPage";
import { ArticlesPage } from "./pages/articles/ArticlesPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Theme } from "@radix-ui/themes";

function App() {
  return (
    <Theme>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/article/:id" element={<ArticlesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Theme>
  );
}
//if we have enough time, then we will make NotFoundPage

export default App;
