'use client';
import { styles } from '../../ui/styles';
import { cn } from '../../utils/cn';
import { PROJECTS } from '../../utils/constants';
import { ProjectCard } from '../ProjectCard';
import { SectionWrapper } from '../SectionWrapper';

export const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <section>
        <h1 className={cn(styles.sectionHeadText, 'mb-10')}>PROJECTS</h1>
        <div className="flex flex-wrap gap-10">
          {PROJECTS.map((item) => (
            <ProjectCard {...item} key={item.name} />
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
};
