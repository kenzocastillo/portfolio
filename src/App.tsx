import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import { About } from "./Components/About";
import { Experience } from "./Components/Experience";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import { Project } from "./Components/Project";

export default function App() {
  return (
    <div className="bg-white text-neutral-900">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Project />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
