import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Qualification from "@/components/qualification/Qualification";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Qualification />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}