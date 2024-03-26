'use client';
import SectionWrapper from '@/app/hoc/SectionWrapper';
import SkillCard from '../SkillCard';
import ComputerCanvas from '../canvas/ComputerCanvas';
import MoonCanvas from '../canvas/MoonCanvas';
import { introduction, skills } from '@/app/utils/constants';
import { Skill } from '@/app/utils/types';

const About = () => {
  return (
    <section>
      <h1 className="text-5xl font-bold">INTRODUCTION</h1>
      <p className="max-w-full md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] text-lg text-gray-300 pt-4 pb-[60px]">
        {introduction}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-16 gap-y-14 justify-items-center sm:justify-items-start">
        {skills.map((item: Skill, index: number) => (
          <SkillCard {...item} index={index} key={item.title} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(About, 'about');
