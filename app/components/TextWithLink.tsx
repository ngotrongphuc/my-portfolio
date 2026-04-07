import Link from 'next/link';
import { urlPattern } from '../utils/regexPatterns';

/**
 * Renders a string with any URL tokens converted to external `Link`s.
 * If `children` is not a string, it's returned untouched.
 */
export const TextWithLink = ({ children }: { children: React.ReactNode }) => {
  if (typeof children !== 'string') {
    return children;
  }

  return children.split(' ').map((word, index) => {
    if (urlPattern.test(word)) {
      return (
        <Link
          href={word}
          target="_blank"
          key={index}
          className="underline text-blue-500 break-all"
        >
          Website
        </Link>
      );
    }
    return <span key={index}>{word} </span>;
  });
};
