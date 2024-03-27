'use client';
import Image from 'next/image';
import EarthCanvas from '../canvas/EarthCanvas';
import ComputerCanvas from '../canvas/ComputerCanvas';
import { useRef, useState } from 'react';
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline';
import { Transition } from '@headlessui/react';
import ElevatedButton from '../ElevatedButton';
import MoonCanvas from '../canvas/MoonCanvas';
import ScrollButton from '../ScrollButton';
import styles from '@/app/ui/styles';
import { heroSubText, heroTaglineText } from '@/app/utils/constants';

const Hero = () => {
  const backgroundAudioRef = useRef<HTMLAudioElement>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [isShowing, setIsShowing] = useState(false);

  const toggleAudio = () => {
    setIsAudioPlaying(!backgroundAudioRef.current?.paused);
    if (isAudioPlaying) {
      backgroundAudioRef.current?.pause();
      setIsAudioPlaying(false);
    } else {
      backgroundAudioRef.current?.play();
      setIsAudioPlaying(true);
    }
  };

  return (
    <section className="h-screen bg-hero-pattern bg-cover bg-no-repeat bg-center pt-24 p-6">
      <audio loop id="backgroundAudio" ref={backgroundAudioRef}>
        <source src="/background-music.mp3" type="audio/mp3" />
      </audio>
      {isAudioPlaying ? (
        <SpeakerWaveIcon
          className="w-12 h-12 cursor-pointer scale-x-[-1] absolute right-6"
          onClick={toggleAudio}
        />
      ) : (
        <SpeakerXMarkIcon
          className="w-12 h-12 cursor-pointer scale-x-[-1] absolute right-6"
          onClick={toggleAudio}
        />
      )}
      <MoonCanvas className="float-right mt-12 mr-20 hidden md:block" />
      <hgroup className="w-fit flex flex-col">
        <h1 className={`${styles.heroHeadText}`}>
          Hi, I&apos;m <span className=" text-yellow-500">Phuc</span>
        </h1>
        <h2 className={`${styles.heroSubText}`}>{heroSubText}</h2>
        <p className={`${styles.heroTaglineText} max-w-[600px]`}>
          {heroTaglineText}
        </p>
        <ElevatedButton className="self-center mt-20">
          Contact me
        </ElevatedButton>
      </hgroup>
      <ScrollButton />
    </section>
  );
};

export default Hero;
