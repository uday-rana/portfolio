import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav>
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <About />
        <Footer />
      </Nav>
    </main>
  );
}
