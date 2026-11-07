import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/services";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <Container>
        <div className={styles.header}>
          <Reveal>
            <SectionTitle eyebrow="SERVICES" title="WHAT WE DO" />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.introText}>
              <p className={styles.subtitle}>Complete Property Solutions Under One Roof.</p>
              <p className={styles.description}>
                Whether you are improving a home, preparing a rental property, upgrading an office or arranging ongoing maintenance, we can help with a wide range of property services across Dubai.
              </p>
            </div>
          </Reveal>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 100}>
              <div className={styles.serviceCard}>
                {service.image && (
                  <div className={styles.cardImageWrapper}>
                    <img src={service.image} alt={service.title} className={styles.cardImage} />
                    <div className={styles.imageOverlay}></div>
                  </div>
                )}
                <div className={styles.cardHeader}>
                  <h3 className={styles.title}>{service.title}</h3>
                </div>
                <div className={styles.cardReveal}>
                  <div className={styles.cardHeaderReveal}>
                    <h3 className={styles.titleReveal}>{service.title}</h3>
                  </div>
                  <div className={styles.cardBody}>
                    <p className={styles.desc}>{service.description}</p>
                    {service.points && service.points.length > 0 && (
                      <ul className={styles.pointsList}>
                        {service.points.map((point) => (
                          <li key={point} className={styles.point}>
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
