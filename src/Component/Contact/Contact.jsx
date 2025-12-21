import { useScrollAnimation } from "../../hooks/useScrollAnimation"
import styles from "./Contact.module.css"

import telegram from '../../assets/telegram.png'
import location from '../../assets/location.png'
import email from '../../assets/email.png'
import clock from '../../assets/clock.png'


function Contact() {
  const [headerRef, headerVisible] = useScrollAnimation({ once: true })
  const [formRef, formVisible] = useScrollAnimation({ once: true, threshold: 0.1 })
  const [infoRef, infoVisible] = useScrollAnimation({ once: true, threshold: 0.1 })

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div ref={headerRef} className={`${styles.header} ${headerVisible ? styles.fadeIn : styles.fadeOut}`}>
          <h2 className={styles.title}>Get in Touch</h2>
          <p className={styles.description}>Ready to take the next step in your healthcare journey? Contact us today</p>
        </div>

        <div className={styles.layout}>
          <div ref={formRef} className={` ${styles.formCard} ${formVisible ? styles.fadeIn : styles.fadeOut}`}>
            <h3 className={styles.formTitle}>Book Appointment</h3>
            <p className={styles.formDescription}>
              Fill out the form below and we'll get back to you as soon as possible
            </p>

            <form className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName">First Name</label>
                  <input id="firstName" type="text" placeholder="John" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="lastName">Last Name</label>
                  <input id="lastName" type="text" placeholder="Doe" />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="john.doe@example.com" />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="tel" placeholder="+2519-10-60..." />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="How can we help you?" rows={4}></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </form>
          </div>

          <div ref={infoRef} className={`${styles.infoCards} ${infoVisible ? styles.fadeIn : styles.fadeOut}`}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}><img className={styles.forLocation} src={location} alt="" /></div>
              <div>
                <h3 className={styles.infoTitle}>Location</h3>
                <p className={styles.infoText}>
                 Summit MedhaneAlem
                  <br />
               Behind Ola Gas Station 
                  <br />
                  Addis Ababa, Ethiopia
                </p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}><img className={styles.forLocation} src={telegram} alt="" /></div>
              <div>
                <h3 className={styles.infoTitle}>Telegram</h3>
                <p className={styles.infoText}>@AzefEthiopia</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}><img className={styles.forLocation} src={email} alt="" /></div>
              <div>
                <h3 className={styles.infoTitle}>Email</h3>
                <p className={styles.infoText}>azefethiopia@gmail.com</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}><img className={styles.forLocation} src={clock} alt="" /></div>
              <div>
                <h3 className={styles.infoTitle}>Hours</h3>
                <div className={styles.infoText}>
                  <p>Monday - sunday</p>
                  <p>24/7</p>
                  {/* <p>Sunday: Closed</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
