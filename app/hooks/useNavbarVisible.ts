'use client';
import debounce from 'lodash/debounce';
import { useEffect, useRef, useState } from 'react';
import { useWindowDimensions } from './useWindowDimensions';

/**
 * Tracks whether the top navbar should be visible based on scroll direction.
 * Hides the navbar when scrolling down past one viewport height, shows it
 * again on any upward scroll. Scroll handling is debounced at 100ms.
 */
export const useNavbarVisible = (): boolean => {
  const { height } = useWindowDimensions();
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const prevScrollPosRef = useRef(0);

  useEffect(() => {
    const threshold = height - 1;

    const handleScroll = debounce(() => {
      const currentScrollPos = window.scrollY;
      const prev = prevScrollPosRef.current;

      if (prev < currentScrollPos && currentScrollPos > threshold) {
        setIsNavbarVisible(false);
      } else if (prev > currentScrollPos || currentScrollPos <= threshold) {
        setIsNavbarVisible(true);
      }

      prevScrollPosRef.current = currentScrollPos;
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel();
    };
  }, [height]);

  return isNavbarVisible;
};
