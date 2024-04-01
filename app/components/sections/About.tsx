'use client';
import SectionWrapper from '@/app/hoc/SectionWrapper';
import SkillCard from '../SkillCard';
import ComputerCanvas from '../canvas/ComputerCanvas';
import MoonCanvas from '../canvas/MoonCanvas';
import { introduction, skills } from '@/app/utils/constants';
import { Skill } from '@/app/utils/types';
import styles from '@/app/ui/styles';

const About = () => {
  return (
    <section>
      <h1 className={styles.sectionHeadText}>INTRODUCTION</h1>
      <p className={styles.sectionSubText}>{introduction}</p>
      <div className="flex flex-wrap gap-x-14 gap-y-20">
        {skills.map((item: Skill, index: number) => (
          <SkillCard {...item} index={index} key={item.title} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(About, 'about');
