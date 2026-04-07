'use client';
import dynamic from 'next/dynamic';
import { useEffect, useRef } from 'react';
import { styles } from '../../ui/styles';
import { cn } from '../../utils/cn';
import { HERO_DESCRIPTION_TEXT, HERO_SUB_TEXT } from '../../utils/constants';
import { ElevatedButton } from '../ElevatedButton';
import { ScrollButton } from '../ScrollButton';

const MoonCanvas = dynamic(
  () => import('../canvas/MoonCanvas').then((mod) => mod.MoonCanvas),
  {
    ssr: false,
    loading: () => <div className="size-40 sm:size-60 lg:size-80" />,
  },
);

export const Hero = () => {
  const backgroundAudioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = backgroundAudioRef.current;
    if (!audio) return;

    const events = ['pointerdown', 'keydown', 'touchstart', 'scroll'] as const;
    const start = () => {
      audio.play().catch(() => {});
    };

    // Try autoplay; fall back to first user gesture if blocked.
    audio.play().catch(() => {
      events.forEach((e) =>
        window.addEventListener(e, start, { once: true, passive: true }),
      );
    });

    return () => {
      events.forEach((e) => window.removeEventListener(e, start));
    };
  }, []);

  return (
    <section className="relative h-screen bg-hero bg-cover bg-no-repeat bg-center pt-24 p-6">
      <audio loop ref={backgroundAudioRef} preload="auto">
        <source src="/background-music.mp3" type="audio/mp3" />
      </audio>
      <div className="flex justify-between flex-col-reverse xs:flex-row">
        <hgroup className="max-w-full sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%]">
          <h1 className={styles.heroHeadText}>
            Hi, I&apos;m <span className="text-yellow-500">Phuc</span>
          </h1>
          <h2 className={styles.heroSubText}>{HERO_SUB_TEXT}</h2>
          <p className={cn(styles.heroDescriptionText)}>
            {HERO_DESCRIPTION_TEXT}
          </p>
          <div className="justify-center flex mt-10 xs:mt-20 xs:max-w-[70%]">
            <ElevatedButton
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView()
              }
            >
              Contact me
            </ElevatedButton>
          </div>
        </hgroup>
        <div className="flex justify-center p-6 pt-0 xs:pt-12 px-4 sm:px-8 md:px-10 lg:px-20">
          <MoonCanvas className="size-40 sm:size-60 lg:size-80" />
        </div>
      </div>
      <ScrollButton />
    </section>
  );
};
