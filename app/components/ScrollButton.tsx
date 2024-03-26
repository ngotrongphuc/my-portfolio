import { motion } from 'framer-motion';
import Link from 'next/link';

const ScrollButton = () => {
  return (
    <Link
      href="#about"
      className="absolute left-0 right-0 justify-self-center bottom-24 w-9 h-16 rounded-full border-4 border-gray-600 flex justify-center py-3 z-50"
    >
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
        }}
        className="w-3 h-3 rounded-full bg-gray-600"
      />
    </Link>
  );
};

export default ScrollButton;
