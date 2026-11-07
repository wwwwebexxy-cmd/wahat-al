import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.section}>
      {/* Background elements */}
      <div className={styles.gridBackdrop} />
      <div className={styles.gradientBackdrop} />

      <div className={styles.heroContent}>
        <div className={styles.heroGrid}>
          {/* Text Content */}
          <div className={styles.textContent}>
            <Reveal delay={200}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                AL EJABA AL SAREEA
              </div>
            </Reveal>

            <Reveal delay={400}>
              <h1 className={styles.title}>
                TECHNICAL SERVICES L.L.C.
              </h1>
            </Reveal>

            <Reveal delay={600}>
              <h2 className={styles.subheading}>
                GENERAL MAINTENANCE &bull; INTERIOR DESIGN &bull; DECORATION &bull; TURNKEY FIT-OUT
              </h2>
            </Reveal>

            <Reveal delay={800}>
              <div className={styles.description}>
                <p>
                  Professional technical and interior solutions designed around your needs.
                </p>
                <p>
                  We provide quality-focused maintenance, interior design, decoration, technical and turnkey fit-out solutions for residential and commercial spaces.
                </p>
              </div>
            </Reveal>

            <Reveal delay={1000}>
              <div className={styles.actions}>
                <Button href="#services" variant="primary">
                  EXPLORE SERVICES
                </Button>
                <Button href="#contact" variant="outline">
                  CONTACT US
                </Button>
              </div>
            </Reveal>

            <Reveal delay={1200}>
              <div className={styles.smallText}>
                Design &bull; Build &bull; Maintain
              </div>
            </Reveal>
          </div>

          {/* Right: Accordion Gallery */}
          <Reveal delay={600}>
            <div className={styles.wrapper}>
              <div style={{ backgroundImage: "url(/images/hero-image1.png)" }}></div>
              <div style={{ backgroundImage: "url(/images/hero-image2.png)" }}></div>
              <div style={{ backgroundImage: "url(/images/hero-image3.png)" }}></div>
              <div style={{ backgroundImage: "url(/images/hero-image4.png)" }}></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
