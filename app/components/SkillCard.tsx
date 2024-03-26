'use client';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Skill } from '../utils/types';
import { fadeIn } from '../utils/motions';

const SkillCard = ({
  title,
  icon,
  description,
  index,
}: Skill & { index: number }) => {
  return (
    <motion.div variants={fadeIn('right', 'spring', index * 0.25, 0.5)}>
      <Tilt className="w-[250px] h-[250px] bg-gradient-to-br from-teal-400 to-purple-500 rounded-3xl hover:shadow-card p-[1px]">
        <div className="h-full bg-gray-900 rounded-3xl p-6">
          <h2 className="text-2xl font-medium text-center">{title}</h2>
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
