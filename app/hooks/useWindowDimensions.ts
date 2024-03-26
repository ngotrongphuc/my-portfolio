'use client';
import { useState, useEffect } from 'react';
import { Breakpoints } from '../utils/types';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  let isSm = false,
    isMd = false,
    isLg = false,
    isXl = false,
    is2Xl = false;

  if (width <= Breakpoints.sm) {
    isSm = true;
  } else if (width <= Breakpoints.md) {
    isMd = true;
  } else if (width <= Breakpoints.lg) {
    isLg = true;
  } else if (width <= Breakpoints.xl) {
    isXl = true;
  } else if (width <= Breakpoints['2xl']) {
    is2Xl = true;
  }

  return {
    width,
    height,
    isSm,
    isMd,
    isLg,
    isXl,
    is2Xl,
  };
}

export default function useWindowDimensions() {
  // the will first run on server and thus doesn't have window object
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
    isSm: false,
    isMd: false,
    isLg: false,
    isXl: false,
    is2Xl: false,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
