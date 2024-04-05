'use client'
import { skills } from '@/app/utils/constants';
import SkillCard from '../SkillCard';
import { Skill } from '@/app/utils/types';
import styles from '@/app/ui/styles';
import SectionWrapper from '@/app/hoc/SectionWrapper';

const Skills = () => {
  return (
    <section>
      <h1 className={`${styles.sectionHeadText} mb-10`}>SKILLS</h1>
      <div className="flex flex-wrap gap-10">
        {skills.map((item: Skill, index: number) => (
          <SkillCard {...item} index={index} key={item.title} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Skills, 'skills');
