'use client';
import SectionWrapper from '@/app/hoc/SectionWrapper';
import SkillCard from '../SkillCard';
import ComputerCanvas from '../canvas/ComputerCanvas';
import MoonCanvas from '../canvas/MoonCanvas';
import { introduction, skills } from '@/app/utils/constants';
import { Skill } from '@/app/utils/types';
import styles from '@/app/ui/styles';
import ElevatedButton from '../ElevatedButton';

const About = () => {
  return (
    <section>
      <h1 className={`${styles.sectionHeadText} mb-4`}>INTRODUCTION</h1>
      <p className={`${styles.sectionSubText} mb-10`}>{introduction}</p>
      <div className="flex flex-wrap flex-col xs:flex-row items-center xs:items-start space-y-8 xs:space-y-0 space-x-0 xs:space-x-8">
        <ElevatedButton onClick={alert}>Preview My CV</ElevatedButton>
        <ElevatedButton onClick={alert}>Download My CV</ElevatedButton>
      </div>
      <ComputerCanvas />
      <div className="flex flex-wrap gap-10">
        {skills.map((item: Skill, index: number) => (
          <SkillCard {...item} index={index} key={item.title} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(About, 'about');
