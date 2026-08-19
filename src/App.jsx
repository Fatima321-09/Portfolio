import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import AppEffects from "./components/AppEffects";
import { projects } from "./data/projects";

function App() {
  return (
    <div>
      <AppEffects />
      <Navbar />
      <Hero projectsCount={projects.length} />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
