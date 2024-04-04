'use client';
import SectionWrapper from '@/app/hoc/SectionWrapper';
import styles from '@/app/ui/styles';
import { projects } from '@/app/utils/constants';
import { Project } from '@/app/utils/types';
import ProjectCard from '../ProjectCard';

const Projects = () => {
  return (
    <section>
      <h1 className={`${styles.sectionHeadText} mb-10`}>PROJECTS</h1>
      <div className="flex flex-wrap gap-10">
        {projects.map((item: Project) => (
          <ProjectCard {...item} key={item.name} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Projects, 'projects');
