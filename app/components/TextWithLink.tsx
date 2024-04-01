import Link from 'next/link';
import { urlPattern } from '../utils/regexPatterns';

const TextWithLink = ({ children }: { children: React.ReactNode }) => {
  if (typeof children !== 'string') {
    return children;
  }



  return children?.split(' ').map((word, index) => {
    if (urlPattern.test(word)) {
      return (
        <Link
          href={word}
          target="_blank"
          key={index}
          className="underline text-slate-400 break-all"
        >
          {word}
        </Link>
      );
    } else {
      return <span key={index}>{word} </span>;
    }
  });
};

export default TextWithLink;
