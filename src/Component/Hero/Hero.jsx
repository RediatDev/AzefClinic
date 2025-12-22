import styles from "./Hero.module.css";
import { GiStethoscope } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
function Hero() {
  let navigate = useNavigate();

  let handleClick = (e) => {
    e.preventDefault();
    navigate("/#contact2");
  };

  let handleClickLearn = (e) => {
    e.preventDefault();
    navigate("/#learnMore");
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Your Partner in Health and Wellness</h1>
          <p className={styles.description}>
            Azef Internal Medicine Speciality Clinic provides comprehensive,
            compassionate care for adults. Our experienced team is dedicated to
            your long-term health and well-being.
          </p>
          <div className={styles.buttons}>
            <button onClick={handleClick} className={styles.primaryButton}>
              Schedule a Visit
            </button>
            <button onClick={handleClickLearn} className={styles.secondaryButton}>Learn More</button>
          </div>

          <div className={styles.iconContainer}>
            <div className={styles.iconGlow}></div>
            <GiStethoscope size={150} color="#158080" />
            {/* <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
              />
            </svg> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
