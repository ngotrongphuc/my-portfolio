import Image from 'next/image';
import ComputerCanvas from './components/canvas/ComputerCanvas';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Work from './components/sections/Work';
import Contact from './components/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Work />
      <Contact />
      {/* <ComputerCanvas /> */}
      {/* <video id="backgroundMusic" controls autoPlay loop>
        <source src="/interstellar_theme.mp3" type="audio/mpeg" />
      </video> */}
      {/* asd */}
    </div>
  );
}
