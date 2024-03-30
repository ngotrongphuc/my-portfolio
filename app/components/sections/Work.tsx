'use client';
import SectionWrapper from '@/app/hoc/SectionWrapper';
import WorkCard from '../CompanyCard';
import { companies } from '@/app/utils/constants';
import { Company } from '@/app/utils/types';
import styles from '@/app/ui/styles';

const Work = () => {
  return (
    <section>
      <h1 className={styles.sectionHeadText}>WORK EXPERIENCE</h1>
      {/* <p className={styles.sectionSubText}></p> */}
      <div className="flex flex-wrap gap-10">
        {companies.map((item: Company) => (
          <WorkCard {...item} key={item.name} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Work, 'work');
