import React from "react";
import { useState } from "react";
import styles from "./Login.module.css";
import SF_logo from "../assets/SF_logo.png";
import apple_logo from "../assets/apple_logo.png";
import google_logo from "../assets/google_logo.png";
import X_logo from "../assets/X_logo.png";
import Apple_blue from "../assets/Apple_blue.png";
import Google_blue from "../assets/Google_blue.png";
import X_blue from "../assets/X_blue.png"

const LoginForm = () => {
  const [isAppleHovered, setAppleHovered] = useState(false);
const [isGoogleHovered, setGoogleHovered] = useState(false);
const [isXHovered, setXHovered] = useState(false);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={SF_logo} alt="Spotify" className={styles.logo} />
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>LIFE IS WASTED ON THE LIVING</h1>
        <p className={styles.signin}>Sign in<br />with</p>
        <div className={styles.buttonGroup}>
    <button
      onMouseEnter={() => setAppleHovered(true)}
      onMouseLeave={() => setAppleHovered(false)}
      className={styles.iconButton}
      >
        
      <img
        src={isAppleHovered ? Apple_blue : apple_logo}
        alt="Allpe"/>
    </button>
          <button 
          onMouseEnter={() => setGoogleHovered(true)}
          onMouseLeave={() => setGoogleHovered(false)}
          className={styles.iconButton}>
            <img src={isGoogleHovered ? Google_blue : google_logo} alt="Google" />
          </button>
          <button 
          onMouseEnter={() => setXHovered(true)}
          onMouseLeave={() => setXHovered(false)}
          className={styles.iconButton}>
            <img src={isXHovered ? X_blue : X_logo} alt="X" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default LoginForm;