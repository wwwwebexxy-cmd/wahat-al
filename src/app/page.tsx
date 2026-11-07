import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/section/Hero";
import About from "@/components/section/About";
import Services from "@/components/section/Services";
import Projects from "@/components/section/Projects";
import WhyChooseUs from "@/components/section/WhyChooseUs";
import CTA from "@/components/section/CTA";
import Contact from "@/components/section/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyChooseUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
