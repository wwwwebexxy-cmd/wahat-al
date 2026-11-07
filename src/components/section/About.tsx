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
                  Building Better Spaces Through Experience & Expertise
                </p>
                
                <p className={styles.paragraph}>
                  Al Ejaba Al Sareea Technical Services L.L.C. is a professional technical services and interior design company with a portfolio of successful projects in the Middle East. Our experience and passion for creativity give us the skills to meet and exceed our clients&apos; expectations.
                </p>

                <p className={styles.paragraph}>
                  We bring our clients&apos; imagination to life through design, technical consultation and skilled workmanship. Our approach is built around strong relationships, innovative solutions and quality work delivered with attention to budget requirements.
                </p>
              </div>
            </Reveal>

            {/* Highlights Grid */}
            <Reveal delay={400}>
              <div className={styles.featuresGrid}>
                <div>
                  <div className={styles.featureNum}>EXPERIENCE</div>
                  <p className={styles.featureDesc}>A portfolio of successful projects across different property and project types.</p>
                </div>
                <div>
                  <div className={styles.featureNum}>CREATIVITY</div>
                  <p className={styles.featureDesc}>Transforming client ideas and imagination into practical spaces.</p>
                </div>
                <div>
                  <div className={styles.featureNum}>SKILLED TEAM</div>
                  <p className={styles.featureDesc}>Experienced teams for technical, interior and maintenance requirements.</p>
                </div>
                <div>
                  <div className={styles.featureNum}>RELIABLE SUPPORT</div>
                  <p className={styles.featureDesc}>Dedicated maintenance and facility-management support after project completion.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}