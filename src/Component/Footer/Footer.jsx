import styles from "./Footer.module.css"
import logo from '../../assets/logo.png'
import QR from '../../assets/location.png'
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <img src={logo} alt="Azef Internal Medicine Speciality Clinic" className={styles.logo} />
            <p className={styles.tagline}>
              Providing comprehensive internal medicine care with compassion and expertise.
            </p>
          </div>

          <div>
            <h3 className={styles.heading}>Quick Links</h3>
            <ul className={styles.list}>
              <li>
                <a href="/#home">Home</a>
              </li>
              <li>
                <a href="/#services">Services</a>
              </li>
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <a href="/#contact">Contact</a>
              </li>
              <li>
                <a href="/jobs">Careers</a>
              </li>
            </ul>
          </div>

          <div  >
            <h3 className={styles.heading}>Scan for location</h3>
            {/* <ul className={styles.list}>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">HIPAA Notice</a>
              </li>
            </ul> */}
            <img className={styles.QR}  src={QR} alt="" />

          </div>
          
        </div>

        <div className={styles.copyright}>
          <p>© {new Date().getFullYear()} Azef Internal Medicine Speciality Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
