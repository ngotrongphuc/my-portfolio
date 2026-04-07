'use client';
import { useEffect, useState } from 'react';
import { Breakpoints } from '../utils/types';

type WindowDimensions = {
  width: number;
  height: number;
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  isXl: boolean;
  is2Xl: boolean;
};

const emptyDimensions: WindowDimensions = {
  width: 0,
  height: 0,
  isSm: false,
  isMd: false,
  isLg: false,
  isXl: false,
  is2Xl: false,
};

const getWindowDimensions = (): WindowDimensions => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
    isSm: width <= Breakpoints.sm,
    isMd: width > Breakpoints.sm && width <= Breakpoints.md,
    isLg: width > Breakpoints.md && width <= Breakpoints.lg,
    isXl: width > Breakpoints.lg && width <= Breakpoints.xl,
    is2Xl: width > Breakpoints.xl && width <= Breakpoints['2xl'],
  };
};

/**
 * Reactive window size hook with Tailwind-aligned breakpoint flags.
 * Returns an all-false snapshot on the server, then the real size on mount.
 */
export const useWindowDimensions = (): WindowDimensions => {
  const [dimensions, setDimensions] = useState<WindowDimensions>(() =>
    typeof window === 'undefined' ? emptyDimensions : getWindowDimensions(),
  );

  useEffect(() => {
    const handleResize = () => setDimensions(getWindowDimensions());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return dimensions;
};
