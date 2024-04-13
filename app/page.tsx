'use client';
import { useEffect } from 'react';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Work from './components/sections/Work';
import emailjs from '@emailjs/browser';

export default function Home() {
  useEffect(() => {
    fetch('http://ip-api.com/json/')
      .then((response) => response.json())
      .then((data) => {
        emailjs
          .send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
            process.env.NEXT_PUBLIC_EMAILJS_IP_LOG_TEMPLATE_ID as string,
            data,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
          )
          .then(null, (error: any) => {
            console.error('Error sending IP data', error);
          });
      })
      .catch((error) => {
        console.error('Error fetching IP data:', error);
      });
  }, []);

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
