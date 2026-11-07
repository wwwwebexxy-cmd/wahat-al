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
            HAVE A PROJECT IN MIND?
          </h2>
        </Reveal>
        
        <Reveal delay={200}>
          <div className={styles.description}>
            <p>
              Tell us what you need. We can review your requirement and contact you about the next steps.
            </p>
            <p>
              From a small repair to a complete property improvement, we aim to provide dependable service and quality workmanship.
            </p>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className={styles.actions}>
            <Button href="#contact" variant="primary">
              REQUEST A QUOTATION
            </Button>
            <Button href="#services" variant="outline">
              EXPLORE OUR SERVICES
            </Button>
          </div>
        </Reveal>

        <Reveal delay={600}>
          <div className={styles.shortCta}>
            BUILD. IMPROVE. MAINTAIN.
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
