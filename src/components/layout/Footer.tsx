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
              <img src="/images/wad-logo.webp" alt="Wahat Al Daqa Technical Services" className={styles.logoImg} />
              <div className={styles.logoText}>
                <div className={styles.brandTitle}>{site.name}</div>
                <p className={styles.brandLegalName}>TECHNICAL SERVICES L.L.C.</p>
              </div>
            </div>
            <p className={styles.tagline}>
              BUILD. IMPROVE. MAINTAIN.
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

          {/* Service area and contact */}
          <div className={styles.serviceArea}>
            <div className={styles.heading}>SERVICE AREA & CONTACT</div>
            <p className={styles.legalName}>{site.address}</p>
            <a className={styles.footerContactLink} href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">
              WhatsApp: {site.phone}
            </a>
            <a className={styles.footerContactLink} href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className={styles.footerContactLink} href={site.url}>
              {site.url.replace(/^https?:\/\//, "")}
            </a>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <span>
            &copy; {new Date().getFullYear()} {site.legalName}. All Rights Reserved.
          </span>
        </div>
      </Container>
    </footer>
  );
}
