'use client';
import SectionWrapper from '@/app/hoc/SectionWrapper';
import WorkCard from '../CompanyCard';
import { companies, workExperience } from '@/app/utils/constants';
import { Company } from '@/app/utils/types';

const Work = () => {
  return (
    <section>
      <h1 className="text-5xl font-bold">WORK EXPERIENCE</h1>
      <p className="max-w-full md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] text-lg text-gray-300 pt-4 pb-16">
        {workExperience}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-14 justify-items-center sm:justify-items-start">
        {companies.map((item: Company) => (
          <WorkCard {...item} key={item.name} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Work, 'work');
