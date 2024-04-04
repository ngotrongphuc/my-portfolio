import { useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { companies } from '../utils/constants';
import { Company } from '../utils/types';
import TextWithLink from './TextWithLink';
import UrlWrapper from './UrlWrapper';

const WorkTimelineItem = ({
  name,
  logo,
  position,
  time,
  description,
  url,
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
        <ul className="list-disc pt-5 pl-5 space-y-2">
          {Array.isArray(description) ? (
            description.map((item, index) => (
              <li key={index}>
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
