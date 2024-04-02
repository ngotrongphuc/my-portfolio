import Image from 'next/image';
import ComputerCanvas from './components/canvas/ComputerCanvas';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Work from './components/sections/Work';
import Contact from './components/sections/Contact';
import Projects from './components/sections/Projects';

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen">
      <Hero />
      <About />
      <Work />
      <Projects/>
      <Contact />
    </div>
  );
}
