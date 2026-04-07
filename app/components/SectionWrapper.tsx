'use client';
import { motion } from 'framer-motion';
import { useWindowDimensions } from '../hooks/useWindowDimensions';
import { styles } from '../ui/styles';
import { cn } from '../utils/cn';

/**
 * Props for `SectionWrapper`. Wraps a section with framer-motion
 * viewport animation, a full-viewport background, and the shared
 * inner padding/max-width container from `styles.sectionWrapper`.
 */
type SectionWrapperProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export const SectionWrapper = ({
  id,
  children,
  className,
}: SectionWrapperProps) => {
  const { isSm } = useWindowDimensions();
  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: isSm ? 0.1 : 0.25 }}
      className={cn('min-h-screen bg-gray-950', className)}
    >
      <div className={styles.sectionWrapper}>{children}</div>
    </motion.div>
  );
};
