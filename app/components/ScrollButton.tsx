import { motion } from 'framer-motion';
import Link from 'next/link';

const ScrollButton = () => {
  return (
    <Link
      href="#about"
      className="absolute left-1/2 translate-x-[-50%] translate-y-[-50%] justify-self-center bottom-[5%] w-9 h-16 rounded-full border-4 border-gray-500 flex justify-center py-3 z-50"
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
        className="w-3 h-3 rounded-full bg-gray-500"
      />
    </Link>
  );
};

export default ScrollButton;
