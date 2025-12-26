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
            {/* <Link to="/#services">Services</Link> */}
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            {/* <Link to="/#about">About</Link> */}
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
            <Link to="/#home" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/services" onClick={() => setMobileMenuOpen(false)}>
              Services
            </Link>
            {/* <Link to="/#services" onClick={() => setMobileMenuOpen(false)}>
              Services
            </Link> */}
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            {/* <Link to="/#about" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link> */}
            <Link to="/#contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <Link to="/jobs" onClick={() => setMobileMenuOpen(false)}>
              Careers
            </Link>
            <Link to="/#contact" className={styles.ctaButtonM}>Book Appointment</Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
