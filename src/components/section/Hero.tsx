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
                WAHAT AL DAQA
              </div>
            </Reveal>

            <Reveal delay={400}>
              <h1 className={styles.title}>
                BUILD. IMPROVE. MAINTAIN.
              </h1>
            </Reveal>

            <Reveal delay={600}>
              <h2 className={styles.subheading}>
                YOUR TRUSTED TECHNICAL SERVICES PARTNER IN DUBAI
              </h2>
            </Reveal>

            <Reveal delay={800}>
              <div className={styles.description}>
                <p>
                  Residential &bull; Commercial &bull; Property Management
                </p>
                <p>
                  Comprehensive property maintenance, renovation, interior, fabrication and technical services for villas, apartments, offices, shops and commercial properties across Dubai.
                </p>
              </div>
            </Reveal>

            <Reveal delay={1000}>
              <div className={styles.actions}>
                <Button href="#services" variant="primary">
                  REQUEST A QUOTATION
                </Button>
                <Button href="#contact" variant="outline">
                  EXPLORE SERVICES
                </Button>
              </div>
            </Reveal>

            <Reveal delay={1200}>
              <div className={styles.smallText}>
                Your property. Our solution.
              </div>
            </Reveal>
          </div>

          {/* Right: Accordion Gallery */}
          <Reveal delay={600}>
            <div className={styles.wrapper}>
              <div style={{ backgroundImage: "url(/images/wad-villa-exterior.webp)" }}></div>
              <div style={{ backgroundImage: "url(/images/wad-living-room.webp)" }}></div>
              <div style={{ backgroundImage: "url(/images/wad-modular-kitchen.webp)" }}></div>
              <div style={{ backgroundImage: "url(/images/wad-office-interior.webp)" }}></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
