import Link from 'next/link';

const TextWithLink = ({ children }: { children: React.ReactNode }) => {
  if (typeof children !== 'string') {
    return children;
  }

  const urlPattern =
    /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;

  return children?.split(' ').map((word, index) => {
    if (urlPattern.test(word)) {
      return (
        <Link
          href={word}
          target="_blank"
          key={index}
          className="underline text-slate-400"
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
