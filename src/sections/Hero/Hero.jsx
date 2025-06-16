import styles from "./HeroStyles.module.css";
import heroImage from "../../assets/hero.jpeg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import instagramLight from "../../assets/instagram-light.svg";
import instagramDark from "../../assets/instagram-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const instagramIcon = theme === "light" ? instagramDark : instagramLight;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImage}
          alt="profile picture of Abey K Rajan"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Abey <br />K Rajan
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href="https://Instagram.com" target="blank">
            <img src={instagramIcon} alt="instagramIcon" />
          </a>
          <a href="https://github.com/abeyrajan7" target="blank">
            <img src={githubIcon} alt="githubIcom" />
          </a>
          <a href="https://www.linkedin.com/in/abey-k-rajan/" target="blank">
            <img src={linkedinIcon} alt="linkedinIcom" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion in developing full stack applications for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
