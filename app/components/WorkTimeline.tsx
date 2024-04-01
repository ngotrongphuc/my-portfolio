import { SpeakerWaveIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { companies } from '../utils/constants';
import TextWithLink from './TextWithLink';
import { useInView } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Company } from '../utils/types';

const WorkTimelineItem = ({
  name,
  logo,
  position,
  time,
  description,
  index,
}: Company & { index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <div key={index} ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        visible={isInView}
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#111827' }}
        // contentArrowStyle={{ borderRight: '7px solid  #111827' }}
        date={time}
        iconClassName="flex justify-center items-center bg-white"
        icon={
          <Image src={`/companies/${logo}`} alt={name} width={50} height={50} />
        }
      >
        <h3 className="vertical-timeline-element-title text-xl font-bold">
          {position}
        </h3>
        <h4 className="vertical-timeline-element-subtitle font-medium text-gray-300">
          {name}
        </h4>
        {Array.isArray(description) ? (
          <ul className="list-disc pl-6">
            {description.map((item, index) => (
              <li key={index} className="pt-2 first:pt-6">
                <TextWithLink>{item}</TextWithLink>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="list-disc pl-6">
            <li className="pt-2 first:pt-6">
              <TextWithLink>{description}</TextWithLink>
            </li>
          </ul>
        )}
      </VerticalTimelineElement>
    </div>
  );
};

const WorkTimeline = () => {
  return (
    <VerticalTimeline>
      {companies.map((item, index) => (
        <WorkTimelineItem {...item} index={index} key={index} />
      ))}
    </VerticalTimeline>
  );
};

export default WorkTimeline;
