'use client';
import SectionWrapper from '@/app/hoc/SectionWrapper';
import styles from '@/app/ui/styles';
import ProjectCard from '../ProjectCard';
import { projects } from '@/app/utils/constants';
import { Project } from '@/app/utils/types';

const Projects = () => {
  return (
    <section>
      <h1 className={styles.sectionHeadText}>PROJECTS</h1>
      <div className="flex flex-wrap gap-10">
        {projects.map((item: Project) => (
          <ProjectCard {...item} key={item.name} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Projects, 'projects');
