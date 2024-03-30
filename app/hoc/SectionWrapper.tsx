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
        <div className={styles.sectionWrapper}>
          <Component />
        </div>
      </motion.div>
    );
  };

export default SectionWrapper;
