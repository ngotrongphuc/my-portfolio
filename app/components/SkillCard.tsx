'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Tilt } from 'react-tilt';
import styles from '../ui/styles';
import { fadeIn } from '../utils/motions';
import { Skill } from '../utils/types';

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 25, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.05, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
};

const SkillCard = ({
  title,
  icon,
  description,
  index,
}: Skill & { index: number }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.25, 0.5)}
      className="w-full xs:w-[260px]"
    >
      <Tilt
        options={defaultOptions}
        className="h-full bg-gradient-to-br from-teal-400 to-purple-500 rounded-3xl hover:shadow-card p-[1px]"
      >
        <div className={`h-full ${styles.styledCard} shadow-none`}>
          <h2 className="text-xl font-medium text-center">{title}</h2>
          <Image
            src={`/skills/${icon}`}
            alt={title}
            width={50}
            height={50}
            className="justify-self-center justify-center m-auto my-6 object-contain"
          />
          <p className="font-light text-sm leading-6">{description}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default SkillCard;
