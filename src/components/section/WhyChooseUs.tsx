import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import styles from "./WhyChooseUs.module.css";

const reasons = [
  { title: "QUALITY WORKMANSHIP", body: "We pay attention to workmanship, finishing and the details that make a difference." },
  { title: "RELIABLE SERVICE", body: "Property maintenance calls for dependable communication and responsible execution." },
  { title: "ONE-STOP SOLUTION", body: "Access maintenance, renovation, interiors, fabrication and technical services through one partner." },
  { title: "CLEAR QUOTATIONS", body: "Quotations are prepared around the agreed scope, requirements and site conditions." },
  { title: "PROFESSIONAL EXECUTION", body: "We coordinate work according to project requirements and keep communication clear." },
  { title: "CUSTOMER SATISFACTION", body: "We focus on understanding customer requirements and delivering practical solutions." },
  { title: "ATTENTION TO FINISHING", body: "We consider the quality and finish details that matter in a completed space." },
  { title: "PRACTICAL SOLUTIONS", body: "From a single repair to property improvement, we shape the work around your needs." },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className={styles.section}>
      <Container>
        <div className={styles.header}>
          <Reveal>
            <SectionTitle eyebrow="WHY CHOOSE US" title="WHY CHOOSE WAHAT AL DAQA?" dark />
          </Reveal>
          <Reveal delay={200}>
            <p className={styles.headerDesc}>
              We combine practical solutions, professional workmanship and clear communication for residential and commercial requirements.
            </p>
          </Reveal>
        </div>

        <div className={styles.cardsGrid}>
            {reasons.map((reason, i) => (
              <Reveal key={i} delay={(i % 2) * 100} className={styles.cardReveal}>
                <div className={styles.reasonCard}>
                  <div className={styles.cardContent}>
                    <h3 className={styles.reasonTitle}>{reason.title}</h3>
                    <p className={styles.reasonBody}>{reason.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
      </Container>
    </section>
  );
}
