import { debounce } from 'lodash';
import { useEffect, useState } from 'react';
import useWindowDimensions from './useWindowDimensions';

export default function useNavbarVisible() {
  const { height } = useWindowDimensions();
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.scrollY;
    const scrollThreshold = height - 1; // Adjust this value to your preferred threshold

    // If the user has scrolled down beyond the threshold and the navbar is currently visible, hide it
    if (
      prevScrollPos < currentScrollPos &&
      currentScrollPos > scrollThreshold &&
      isNavbarVisible
    ) {
      setIsNavbarVisible(false);
    }
    // If the user has scrolled up or hasn't scrolled beyond the threshold and the navbar is hidden, show it
    else if (
      (prevScrollPos > currentScrollPos ||
        currentScrollPos <= scrollThreshold) &&
      !isNavbarVisible
    ) {
      setIsNavbarVisible(true);
    }
    // Update the previous scroll position
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, isNavbarVisible]);

  return isNavbarVisible;
}
