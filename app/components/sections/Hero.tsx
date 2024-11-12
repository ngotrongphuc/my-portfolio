'use client';
import styles from '@/app/ui/styles';
import { heroDescriptionText, heroSubText } from '@/app/utils/constants';
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline';
import { useRef, useState } from 'react';
import ElevatedButton from '../ElevatedButton';
import ScrollButton from '../ScrollButton';
import MoonCanvas from '../canvas/MoonCanvas';

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
    <section className="h-screen bg-hero bg-cover bg-no-repeat bg-center pt-24 p-6">
      <audio loop id="backgroundAudio" ref={backgroundAudioRef}>
        <source src="/background-music.mp3" type="audio/mp3" />
      </audio>
      {isAudioPlaying ? (
        <SpeakerWaveIcon
          className="size-6 sm:size-8 md:size-10 cursor-pointer scale-x-[-1] absolute right-6"
          onClick={toggleAudio}
        />
      ) : (
        <SpeakerXMarkIcon
          className="size-6 sm:size-8 md:size-10 lg:size-12 cursor-pointer scale-x-[-1] absolute right-6"
          onClick={toggleAudio}
        />
      )}
      <div className="flex justify-between flex-col-reverse xs:flex-row">
        <hgroup className="max-w-full sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%]">
          <h1 className={styles.heroHeadText}>
            Hi, I&apos;m <span className=" text-yellow-500">Phuc</span>
          </h1>
          <h2 className={styles.heroSubText}>{heroSubText}</h2>
          <p className={`${styles.heroDescriptionText}`}>
            {heroDescriptionText}
          </p>
          <div className="justify-center flex mt-10 xs:mt-20 xs:max-w-[70%]">
            <ElevatedButton href="/#contact">Contact me</ElevatedButton>
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

export default Hero;
