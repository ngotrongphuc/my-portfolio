'use client';
import { motion } from 'framer-motion';

export const ScrollButton = () => {
  return (
    <button
      type="button"
      aria-label="Scroll to About section"
      onClick={() => document.getElementById('about')?.scrollIntoView()}
      className="absolute left-1/2 -translate-x-1/2 bottom-[5%] w-9 h-16 rounded-full border-4 border-gray-500 flex justify-center py-3 z-50"
    >
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
        className="w-3 h-3 rounded-full bg-gray-500"
      />
    </button>
  );
};
