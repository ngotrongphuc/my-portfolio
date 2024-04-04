import Link from 'next/link';

const ElevatedButton = ({
  children,
  className,
  href = '',
  target,
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  onClick?: () => void;
}) => {
  return href ? (
    <Link
      className={`w-fit rounded-full hover:shadow-lg hover:shadow-cyan-400/30 transition-transform hover:-translate-y-0.5 ${className}`}
      href={href}
      target={target}
    >
      <button className="px-8 py-4 bg-gradient-to-b from-cyan-400 to-violet-950 font-bold rounded-full shadow-inner shadow-black/80">
        {children}
      </button>
    </Link>
  ) : (
    <div
      className={`w-fit rounded-full hover:shadow-lg hover:shadow-cyan-400/30 transition-transform hover:-translate-y-0.5 ${className}`}
      onClick={onClick}
    >
      <button className="px-8 py-4 bg-gradient-to-b from-cyan-400 to-violet-950 font-bold rounded-full shadow-inner shadow-black/80">
        {children}
      </button>
    </div>
  );
};

export default ElevatedButton;
