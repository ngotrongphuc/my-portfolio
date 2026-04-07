'use client';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../../ui/styles';
import { cn } from '../../utils/cn';
import { SectionWrapper } from '../SectionWrapper';
import { WorkTimeline } from '../WorkTimeline';

export const Work = () => {
  return (
    <SectionWrapper id="work">
      <section>
        <h1 className={cn(styles.sectionHeadText, 'mb-10')}>WORK EXPERIENCE</h1>
        <WorkTimeline />
      </section>
    </SectionWrapper>
  );
};
