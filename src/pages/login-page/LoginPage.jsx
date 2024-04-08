import { HeroLoginPage } from "../../components/hero-section-login-page/HeroLoginPage";
import mainImg from "../../assets/images/Main-image-dark.svg";
import styles from "./loginPage.module.css";

export function LoginPage() {
  return (
    <div>
      <HeroLoginPage />
      <div className={styles.containerStyle}>
        <div className={styles.infoBoxStyle}>
          <h1>Login</h1>
          <h2>Choose login options below:</h2>
          <button>Sign in with Google</button>
          <div>
            <p>Email</p>
            <input type="email" />
          </div>
          <div>
            <p>Password</p>
            <input type="password" />
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.imageContainerStyle}>
            <img src={mainImg} alt="" />
          </div>
          <h2 className={styles.rightSectionText}>
            Be a part of our community!
          </h2>
        </div>
      </div>
    </div>
  );
}
