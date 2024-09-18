import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { NextUIProvider } from "@nextui-org/system";

export default function Home() {
  return (
    <NextUIProvider>
      <div>
        <section id="home">
          <Header />
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="projects">
          <TapeSection />
          <ProjectsSection />
          <TestimonialsSection />
        </section>
        <section id="contact">
          <ContactSection />
          <Footer />
        </section>
      </div>
    </NextUIProvider>
  );
}
