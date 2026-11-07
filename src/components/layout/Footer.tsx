import { navLinks, site } from "@/data/site";
import Container from "@/components/ui/Container";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brandSection}>
            <div className={styles.logoContainer}>
              <img src="/images/alejaba_logo_200x200.png" alt="Al Ejaba Logo" className={styles.logoImg} />
              <div className={styles.logoText}>
                <div className={styles.brandTitle}>AL EJABA AL SAREEA</div>
                <p className={styles.legalName}>TECHNICAL SERVICES L.L.C.</p>
              </div>
            </div>
            <p className={styles.tagline}>
              General Maintenance | Interior Design | Decoration | Turnkey Fit-Out Solutions
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className={styles.heading}>QUICK LINKS</div>
            <ul className={styles.list}>
              {navLinks.map((link) => (
                <li key={link.href} className={styles.listItem}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Associate Company */}
          <div className={styles.associateContainer}>
            <div className={styles.heading}>OUR ASSOCIATE COMPANY</div>
            <img
              src="/images/our-associate-company.png"
              alt="Our Associate Company"
              className={styles.associateImg}
            />
          </div>
        </div>

        <div className={styles.bottomBar}>
          <span>
            © 2026 Al Ejaba Al Sareea Technical Services L.L.C. All Rights Reserved.
          </span>
        </div>
      </Container>
    </footer>
  );
}