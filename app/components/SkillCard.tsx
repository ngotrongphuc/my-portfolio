'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Tilt } from 'react-tilt';
import { styles } from '../ui/styles';
import { cn } from '../utils/cn';
import { fadeIn } from '../utils/motions';
import { Skill } from '../utils/types';

/** Props for `SkillCard`. Index controls the stagger of the fade-in. */
type SkillCardProps = Skill & { index: number };

const tiltOptions = {
  reverse: false,
  max: 25,
  perspective: 1000,
  scale: 1.05,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: 'cubic-bezier(.03,.98,.52,.99)',
};

export const SkillCard = ({
  title,
  icon,
  description,
  index,
}: SkillCardProps) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.25, 0.5)}
      className="w-full xs:w-[260px]"
    >
      <Tilt
        options={tiltOptions}
        className="h-full bg-gradient-to-br from-teal-400 to-purple-500 rounded-3xl hover:shadow-card p-[1px]"
      >
        <div className={cn('h-full shadow-none', styles.styledCard)}>
          <h2 className="text-xl font-medium text-center">{title}</h2>
          <Image
            src={`/skills/${icon}`}
            alt={title}
            width={50}
            height={50}
            className="size-[50px] justify-self-center justify-center m-auto my-6 object-contain"
          />
          <p className="font-light text-sm leading-6">{description}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};
