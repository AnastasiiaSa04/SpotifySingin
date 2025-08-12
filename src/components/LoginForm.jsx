import styles from "./Login.module.css";
import SF_logo from "../assets/SF_logo.png";
import AppleIcon from "./icons/AppleIcon";
import GoogleIcon from "./icons/GoogleIcon";
import XIcon from "./icons/XIcon";

const LoginForm = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={SF_logo} alt="Spotify" className={styles.logo} />
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>LIFE IS WASTED ON THE LIVING</h1>
        <p className={styles.signin}>Sign in<br />with</p>
        <div className={styles.buttonGroup}>
          <button className={styles.iconButton}>
            <AppleIcon />
          </button>
          <button className={styles.iconButton}>
            <GoogleIcon />
          </button>
          <button className={styles.iconButton}>
            <XIcon />
          </button>
        </div>
      </main>
    </div>
  );
};

export default LoginForm;