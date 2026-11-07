import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import styles from "./WhyChooseUs.module.css";

const reasons = [
  { title: "EXPERIENCE YOU CAN TRUST", body: "Our portfolio and experience across different project types allow us to understand a wide range of technical and interior requirements." },
  { title: "CREATIVE APPROACH", body: "We combine creativity with technical consultation to transform ideas into practical and attractive spaces." },
  { title: "SKILLED WORKFORCE", body: "Our skilled teams handle interior, technical, maintenance and facility-management requirements." },
  { title: "CUSTOMER FOCUSED", body: "We value strong customer relationships and work around the specific needs of each client." },
  { title: "COMPLETE SOLUTIONS", body: "From interior design and decoration to fit-out, maintenance, MEP and landscaping, we provide a broad range of services." },
  { title: "MAINTENANCE SUPPORT", body: "Dedicated maintenance teams provide timely service support for completed projects." },
  { title: "TECHNICAL EXPERTISE", body: "Our teams undertake plumbing, electrical, mechanical and other technical maintenance works." },
  { title: "VALUE-FOCUSED", body: "We aim to provide innovative solutions and attractive environments while considering the client's budget." },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className={styles.section}>
      <Container>
        <div className={styles.header}>
          <Reveal>
            <SectionTitle eyebrow="WHY CHOOSE US" title="WHY CHOOSE AL EJABA?" dark />
          </Reveal>
          <Reveal delay={200}>
            <p className={styles.headerDesc}>
              We combine experience, creativity, and technical expertise to deliver outstanding results for every project.
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