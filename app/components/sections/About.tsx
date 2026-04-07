'use client';
import dynamic from 'next/dynamic';
import { useRef } from 'react';
import { styles } from '../../ui/styles';
import { cn } from '../../utils/cn';
import { CV_FILE_ID, INTRODUCTION } from '../../utils/constants';
import { ModalRefType } from '../../utils/types';
import { ElevatedButton } from '../ElevatedButton';
import { Modal } from '../Modal';
import { PDFViewer } from '../PDFViewer';
import { SectionWrapper } from '../SectionWrapper';

const ComputerCanvas = dynamic(
  () => import('../canvas/ComputerCanvas').then((mod) => mod.ComputerCanvas),
  {
    ssr: false,
    loading: () => <div className="w-[99%] aspect-[2/1]" />,
  },
);

export const About = () => {
  const modalRef = useRef<ModalRefType>(null);

  return (
    <SectionWrapper id="about">
      <section>
        <h1 className={cn(styles.sectionHeadText, 'mb-4')}>INTRODUCTION</h1>
        <p className={cn(styles.sectionSubText, 'mb-10')}>{INTRODUCTION}</p>
        <div className="flex flex-wrap flex-col xs:flex-row items-center xs:items-start space-y-8 xs:space-y-0 space-x-0 xs:space-x-8">
          <ElevatedButton onClick={() => modalRef.current?.show()}>
            Preview My CV
          </ElevatedButton>
          <ElevatedButton
            href={`https://drive.google.com/uc?export=download&id=${CV_FILE_ID}`}
            target="_blank"
          >
            Download My CV
          </ElevatedButton>
        </div>
        <Modal ref={modalRef}>
          <PDFViewer />
        </Modal>
        <ComputerCanvas className="mb-6" />
      </section>
    </SectionWrapper>
  );
};
