import styles from "./FloatingContact.module.css";
import { site } from "@/data/site";
// import Icon from "./Icon";

export default function FloatingContact() {
  return (
    <div className={styles.container}>
      <a
        href={`tel:${site.phone2.replace(/\s+/g, '')}`}
        className={`${styles.button} ${styles.phoneBtn}`}
        aria-label="Call us"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
        </svg>
      </a>
      
      <a
        href={`https://wa.me/${site.whatsapp}`}
        className={`${styles.button} ${styles.whatsappBtn}`}
        aria-label="WhatsApp us"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.71.46 3.36 1.34 4.8L2 22l5.44-1.43c1.4.81 3.01 1.25 4.6 1.25 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2m5.46 14.18c-.23.65-1.33 1.25-1.93 1.35-.51.09-1.16.14-3.32-.75-2.61-1.08-4.28-3.73-4.42-3.91-.12-.18-1.05-1.4-1.05-2.67 0-1.27.67-1.9.91-2.15.22-.24.51-.31.67-.31.18 0 .34 0 .49.01.16 0 .37-.06.58.45.21.52.7 1.7.76 1.83.06.12.1.27.01.44-.08.18-.12.31-.24.44-.13.12-.27.27-.37.38-.12.12-.25.26-.11.5.14.24.62 1.03 1.34 1.67.92.83 1.69 1.08 1.93 1.2.23.12.37.1.51-.06.14-.15.61-.7.77-.94.16-.24.32-.2.53-.12.21.08 1.34.63 1.57.75.23.12.38.18.44.28.05.11.05.6-.18 1.25z" />
        </svg>
      </a>
    </div>
  );
}
