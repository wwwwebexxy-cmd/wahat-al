"use client";

import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { carouselSlides } from "@/data/projects";
import styles from "./Projects.module.css";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Responsive cards setup
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };
    
    // Initial call
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = carouselSlides.length;
  // Calculate max index depending on visible cards
  const maxIndex = Math.max(0, totalSlides - cardsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  // Auto slide
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, cardsToShow]); // Re-run if cardsToShow changes to use updated maxIndex

  return (
    <section id="projects" className={styles.section}>
      <Container>
        <div className={styles.header}>
          <Reveal>
            <SectionTitle eyebrow="PROJECT TYPES" title="WORK WE SUPPORT" />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.introText}>
              <p>Explore the residential, commercial, interior and outdoor project types we support across Dubai.</p>
              <p>Each requirement is reviewed against the property, agreed scope and site conditions.</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={400}>
          <div 
            className={styles.carouselContainer}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={styles.carouselWrapper}>
              <div 
                className={styles.carouselInner} 
                style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
              >
                {carouselSlides.map((slide) => (
                  <div 
                    key={slide.id} 
                    className={styles.carouselSlide}
                    style={{ flex: `0 0 ${100 / cardsToShow}%` }}
                  >
                    <div className={styles.slideCard}>
                      <div 
                        className={styles.slideImage} 
                        style={{ backgroundImage: `url('${slide.image}')` }}
                      >
                      </div>
                      <div className={styles.slideContent}>
                        <h3 className={styles.slideTitle}>{slide.title}</h3>
                        <p className={styles.slideDesc}>{slide.description}</p>
                        <div className={styles.slideAction}>
                          <Button onClick={() => slide.image && setSelectedImage(slide.image)} variant="primary">
                            VIEW EXAMPLE
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.carouselControls}>
              <button 
                className={styles.arrowButton} 
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                &larr;
              </button>
              
              <div className={styles.pagination}>
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    className={`${styles.dot} ${currentIndex === idx ? styles.dotActive : ''}`}
                    onClick={() => goToSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button 
                className={styles.arrowButton} 
                onClick={nextSlide}
                aria-label="Next slide"
              >
                &rarr;
              </button>
            </div>
          </div>
        </Reveal>
      </Container>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className={styles.modalOverlay} onClick={() => setSelectedImage(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setSelectedImage(null)} aria-label="Close image">
              &times;
            </button>
            <img src={selectedImage} alt="Project view" className={styles.modalImage} />
          </div>
        </div>
      )}
    </section>
  );
}
