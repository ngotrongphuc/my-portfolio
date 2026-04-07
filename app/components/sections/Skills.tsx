'use client';
import { styles } from '../../ui/styles';
import { cn } from '../../utils/cn';
import { SKILLS } from '../../utils/constants';
import { SectionWrapper } from '../SectionWrapper';
import { SkillCard } from '../SkillCard';

export const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <section>
        <h1 className={cn(styles.sectionHeadText, 'mb-10')}>SKILLS</h1>
        <div className="flex flex-wrap gap-10">
          {SKILLS.map((item, index) => (
            <SkillCard {...item} index={index} key={item.title} />
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
};
