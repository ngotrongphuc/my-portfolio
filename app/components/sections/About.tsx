'use client';
import SectionWrapper from '@/app/hoc/SectionWrapper';
import styles from '@/app/ui/styles';
import { introduction, skills } from '@/app/utils/constants';
import { ModalRefType, Skill } from '@/app/utils/types';
import { useRef } from 'react';
import ElevatedButton from '../ElevatedButton';
import Modal from '../Modal';
import PDFViewer from '../PDFViewer';
import SkillCard from '../SkillCard';
import ComputerCanvas from '../canvas/ComputerCanvas';

const About = () => {
  const modalRef = useRef<ModalRefType>(null);

  const showModal = () => {
    modalRef.current?.show();
  };

  return (
    <section>
      <h1 className={`${styles.sectionHeadText} mb-4`}>INTRODUCTION</h1>
      <p className={`${styles.sectionSubText} mb-10`}>{introduction}</p>
      <div className="flex flex-wrap flex-col xs:flex-row items-center xs:items-start space-y-8 xs:space-y-0 space-x-0 xs:space-x-8">
        <ElevatedButton onClick={showModal}>Preview My CV</ElevatedButton>
        <ElevatedButton href="/my-cv.pdf" target="_blank">
          Download My CV
        </ElevatedButton>
      </div>
      <Modal ref={modalRef}>
        <PDFViewer />
      </Modal>
      <ComputerCanvas className="mb-6" />
      <h1 className={`${styles.sectionHeadText} mb-10`}>SKILLS</h1>
      <div className="flex flex-wrap gap-10">
        {skills.map((item: Skill, index: number) => (
          <SkillCard {...item} index={index} key={item.title} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(About, 'about');
