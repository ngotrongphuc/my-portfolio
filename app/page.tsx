import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Work from './components/sections/Work';

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen">
      <Hero />
      <About />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}
