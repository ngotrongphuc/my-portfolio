'use client';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { COMPANIES } from '../utils/constants';
import { Company } from '../utils/types';
import { TextWithLink } from './TextWithLink';
import { UrlWrapper } from './UrlWrapper';

/** Props for `WorkTimelineItem`. Index is used as React key + a11y label. */
type WorkTimelineItemProps = Company & { index: number };

const WorkTimelineItem = ({
  name,
  logo,
  position,
  time,
  description,
  url,
  index,
}: WorkTimelineItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <div key={index} ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        visible={isInView}
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#111827' }}
        date={time}
        iconClassName="flex justify-center items-center bg-white"
        icon={
          <Image
            src={logo}
            alt={name}
            width={50}
            height={50}
            className="size-[50px]"
          />
        }
      >
        <h3 className="vertical-timeline-element-title text-xl font-bold">
          {position}
        </h3>
        <h4 className="vertical-timeline-element-subtitle font-medium text-gray-300">
          {name}
        </h4>
        <ul className="list-disc pt-5 pl-5 space-y-2">
          {Array.isArray(description) ? (
            description.map((item, idx) => (
              <li key={idx}>
                <TextWithLink>{item}</TextWithLink>
              </li>
            ))
          ) : (
            <li>
              <TextWithLink>{description}</TextWithLink>
            </li>
          )}
          {url && (
            <li>
              <UrlWrapper name={name}>{url}</UrlWrapper>
            </li>
          )}
        </ul>
      </VerticalTimelineElement>
    </div>
  );
};

export const WorkTimeline = () => {
  return (
    <VerticalTimeline>
      {COMPANIES.map((item, index) => (
        <WorkTimelineItem {...item} index={index} key={index} />
      ))}
    </VerticalTimeline>
  );
};
