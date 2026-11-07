import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <Container>
        <div className={styles.grid}>
          {/* Left Column: Overlapping Image and Title */}
          <div className={styles.leftCol}>
            <Reveal>
              <div className={styles.imageGridContainer}>
                <div className={styles.gridItem1}>
                  <SectionTitle eyebrow="ABOUT US" title="WHO WE ARE" />
                </div>
                <div className={styles.gridItem2}>
                  <div className={styles.imageWrapper} />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Content */}
          <div className={styles.rightCol}>
            <Reveal delay={200}>
              <div className={styles.content}>
                <p className={styles.statement}>
                  Your Property. Our Solution.
                </p>
                
                <p className={styles.paragraph}>
                  Wahat Al Daqa Technical Services L.L.C. provides property maintenance, renovation, interior, fabrication and technical services for villas, apartments, offices, shops and commercial properties across Dubai.
                </p>

                <p className={styles.paragraph}>
                  From a single repair to a complete property improvement project, we provide practical solutions with professional workmanship, clear communication and attention to quality and finishing.
                </p>
              </div>
            </Reveal>

            {/* Highlights Grid */}
            <Reveal delay={400}>
              <div className={styles.featuresGrid}>
                <div>
                  <div className={styles.featureNum}>RESIDENTIAL</div>
                  <p className={styles.featureDesc}>Maintenance and improvement for villas, apartments, homes and rental properties.</p>
                </div>
                <div>
                  <div className={styles.featureNum}>COMMERCIAL</div>
                  <p className={styles.featureDesc}>Technical and interior services for offices, shops and commercial properties.</p>
                </div>
                <div>
                  <div className={styles.featureNum}>QUALITY WORK</div>
                  <p className={styles.featureDesc}>Professional workmanship and attention to quality and finishing.</p>
                </div>
                <div>
                  <div className={styles.featureNum}>CLEAR COMMUNICATION</div>
                  <p className={styles.featureDesc}>Practical solutions and clear communication throughout the work.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
