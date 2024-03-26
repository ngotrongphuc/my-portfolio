'use client';
import SectionWrapper from '@/app/hoc/SectionWrapper';
import WorkCard from '../WorkCard';
import { companies } from '@/app/utils/constants';

const Work = () => {
  return (
    <section className="bg-slate-500">
      <h1 className="text-5xl font-bold">WORK EXPERIENCE</h1>
      {/* <div className="grid grid-cols-2 gap-x-16 gap-y-14">
      {companies.map((item) => (
        <WorkCard {...item} key={item.name} />
      ))}
      </div> */}
    </section>
  );
};

export default SectionWrapper(Work, 'work');
