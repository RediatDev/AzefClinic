import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import styles from "./Services.module.css";
import { FaHeart } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { FaDisease } from "react-icons/fa6";
import { LuNotebookPen } from "react-icons/lu";
import { FaMicroscope } from "react-icons/fa6";
import { FaWheelchair } from "react-icons/fa";


const services = [
  {
    icon: FaHeart,
    title: "Cardiovascular Care",
    description:
      "Comprehensive heart health management, including hypertension, cholesterol management, and cardiac risk assessment.",
  },
  {
    icon: FaDisease,
    title: "Chronic Disease Management",
    description:
      "Expert care for diabetes, thyroid disorders, and other chronic conditions requiring ongoing attention.",
  },
  {
    icon: GiMedicines,
    title: "Preventive Medicine",
    description:
      "Proactive health screenings, vaccinations, and lifestyle counseling to keep you healthy.",
  },
  {
    icon: LuNotebookPen,
    title: "Health Assessments",
    description:
      "Complete physical examinations and health evaluations for all stages of adult life.",
  },
  {
    icon: FaMicroscope,
    title: "Diagnostic Services",
    description:
      "On-site laboratory testing and diagnostic procedures for accurate, timely results.",
  },
  {
    icon: FaWheelchair,
    title: "Personalized Care",
    description:
      "Tailored treatment plans that consider your unique medical history and health goals.",
  },
];

function Services() {
  const [headerRef, headerVisible] = useScrollAnimation({ once: true });
  const [gridRef, gridVisible] = useScrollAnimation({
    once: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div
          ref={headerRef}
          className={`${styles.header} ${
            headerVisible ? styles.fadeIn : styles.fadeOut
          }`}
        >
          <h2 className={styles.title}>
            Comprehensive Internal Medicine Services
          </h2>
          <p className={styles.description}>
            We offer a full range of internal medicine services to meet your
            healthcare needs
          </p>
        </div>

        <div
          ref={gridRef}
          className={`${styles.grid} ${
            gridVisible ? styles.fadeIn : styles.fadeOut
          }`}
        >
          {services?.map((service, index) => (
            <div
              key={index}
              className={styles.card}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>
                  <service.icon size={30} color="#158080" />
                </span>
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
