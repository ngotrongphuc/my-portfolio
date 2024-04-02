'use client';
import SectionWrapper from '@/app/hoc/SectionWrapper';
import { companies } from '@/app/utils/constants';
import { Company } from '@/app/utils/types';
import styles from '@/app/ui/styles';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkTimeline from '../WorkTimeline';

const Work = () => {
  return (
    <section>
      <h1 className={`${styles.sectionHeadText} mb-10`}>WORK EXPERIENCE</h1>
      <WorkTimeline />
    </section>
  );
};

export default SectionWrapper(Work, 'work');
