import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.gridBackdrop} />
      <Container className={styles.container}>
        <Reveal>
          <div className={styles.eyebrow}>READY TO START YOUR PROJECT?</div>
          <h2 className={styles.title}>
            LET&apos;S TURN YOUR IDEA INTO REALITY.
          </h2>
        </Reveal>
        
        <Reveal delay={200}>
          <div className={styles.description}>
            <p>
              Whether you are planning an interior transformation, fit-out project, maintenance work, landscaping project or technical service requirement, Al Ejaba Al Sareea is ready to help.
            </p>
            <p>
              We bring together design, technical expertise and skilled workmanship to deliver solutions built around your requirements.
            </p>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className={styles.actions}>
            <Button href="#contact" variant="primary">
              GET IN TOUCH
            </Button>
            <Button href="#services" variant="outline">
              EXPLORE OUR SERVICES
            </Button>
          </div>
        </Reveal>

        <Reveal delay={600}>
          <div className={styles.shortCta}>
            Have a project in mind? Let&apos;s discuss it.
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
