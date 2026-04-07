import type { Transition, Variants } from 'framer-motion';

type FadeDirection = 'left' | 'right' | 'up' | 'down' | '';

/**
 * Build framer-motion variants for a directional fade-in animation.
 * @param direction - Slide direction: `left`, `right`, `up`, `down`, or empty for no slide
 * @param type - Transition type passed to framer-motion (e.g. `spring`, `tween`)
 * @param delay - Delay before the animation starts (seconds)
 * @param duration - Animation duration (seconds)
 */
export const fadeIn = (
  direction: FadeDirection,
  type: Transition['type'],
  delay: number,
  duration: number,
): Variants => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});
