import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Work from './components/sections/Work';

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen">
      <Hero />
      <About />
      <Skills />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}
