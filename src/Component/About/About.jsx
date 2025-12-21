import { useScrollAnimation } from "../../hooks/useScrollAnimation"
import styles from "./About.module.css"
import { GrCertificate } from "react-icons/gr";
import { FaUserGroup } from "react-icons/fa6";
import { IoIosAlarm } from "react-icons/io";
import { VscWorkspaceTrusted } from "react-icons/vsc";


const features = [
  {
    icon: GrCertificate ,
    title: "Board Certified",
    description: "Our physicians are board-certified in internal medicine with years of experience",
  },
  {
    icon: FaUserGroup,
    title: "Patient-Centered",
    description: "We prioritize building lasting relationships with our patients",
  },
  {
    icon: IoIosAlarm,
    title: "Timely Care",
    description: "Same-day appointments available for urgent medical needs",
  },
  {
    icon: VscWorkspaceTrusted,
    title: "Trusted Practice",
    description: "Serving the community with integrity and excellence",
  },
]

function About() {
  const [contentRef, contentVisible] = useScrollAnimation({ once: true })
  const [gridRef, gridVisible] = useScrollAnimation({ once: true, threshold: 0.1 })

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <div ref={contentRef} className={`${styles.content} ${contentVisible ? styles.fadeIn : styles.fadeOut}`}>
            <h2 className={styles.title}>Why Choose Azef Internal Medicine?</h2>
            <p className={styles.description}>
              At Azef Internal Medicine Speciality Clinic, we believe in treating the whole person, not just symptoms.
              Our approach combines evidence-based medicine with compassionate care, ensuring you receive the attention
              and expertise you deserve.
            </p>
            <p className={styles.description}>
              Whether you need routine preventive care, management of chronic conditions, or diagnosis of complex
              medical issues, our team is here to support your health journey every step of the way.
            </p>
          </div>

          <div ref={gridRef} className={`${styles.grid} ${gridVisible ? styles.fadeIn : styles.fadeOut}`}>
            {features.map((feature, index) => (
              <div key={index} className={styles.card} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={styles.iconWrapper}>
                  {/* <span className={styles.icon}>{feature.icon}</span> */}
                          <feature.icon size={30} color="#158080" />
                </div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
