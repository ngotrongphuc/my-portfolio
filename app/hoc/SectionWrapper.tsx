'use client';
import { motion } from 'framer-motion';
import useWindowDimensions from '../hooks/useWindowDimensions';
import styles from '../ui/styles';

const SectionWrapper = (Component: React.FunctionComponent, idName: string) =>
  function HOC() {
    const { isSm } = useWindowDimensions();
    return (
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: isSm ? 0.1 : 0.25 }}
        className="min-h-screen bg-gray-950"
        id={idName}
      >
        <div className="flex mx-auto p-4 xs:p-6 max-w-full md:max-w-[95%] lg:max-w-[90%] xl:max-w-[85%] 2xl:max-w-7xl">
          <Component />
        </div>
      </motion.div>
    );
  };

export default SectionWrapper;
