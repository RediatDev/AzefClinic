"use client";

import { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <img src={logo} alt="Azef Internal Medicine Speciality Clinic" />
          </div>

          <nav className={`${styles.nav} ${styles.desktopNav}`}>
            <Link to="/#home">Home</Link>
            <Link to="/#services">Services</Link>
            <Link to="/#about">About</Link>
            <Link to="/#contact">Contact</Link>
            <Link to="/jobs">Careers</Link>
            <Link  className={styles.ctaButton} to="/#contact">
              Book Appointment
            </Link>
          </nav>

          <button
            className={styles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className={styles.mobileNav}>
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>
              Home
            </a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>
              Services
            </a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>
              About
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </a>
            <button className={styles.ctaButton}>Book Appointment</button>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
