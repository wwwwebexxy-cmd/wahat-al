"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.container}>
      <header
        className={`${styles.header} ${scrolled ? styles.headerScrolled : styles.headerTop}`}
      >
        <div className={styles.inner}>
          <a href="#home" className={styles.logo}>
            <img src="/images/alejaba_logo_200x200.png" alt="Al Ejaba Logo" className={styles.logoImg} />
            <div className={styles.logoText}>
              {site.name}
              <span className={styles.llc}>
                TECHNICAL SERVICES L.L.C.
              </span>
            </div>
          </a>

          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.link}
              >
                {link.label}
              </a>
            ))}
          </nav>


          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className={styles.menuBtn}
          >
            <span className={`${styles.bar} ${open ? styles.barOpenTop : ""}`} />
            <span className={`${styles.bar} ${open ? styles.barOpenBottom : ""}`} />
          </button>
        </div>

        {open && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileNav}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={styles.mobileLink}
                >
                  {link.label}
                </a>
              ))}

            </div>
          </div>
        )}
      </header>
    </div>
  );
}