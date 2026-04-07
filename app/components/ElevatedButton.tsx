import Link from 'next/link';
import { cn } from '../utils/cn';

/**
 * Props for `ElevatedButton`. Renders a `Link` when `href` is provided,
 * otherwise a clickable `div` that fires `onClick`.
 */
type ElevatedButtonProps = {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  onClick?: () => void;
};

const wrapperClasses =
  'w-fit h-fit rounded-full hover:shadow-lg hover:shadow-cyan-400/30 transition-transform hover:-translate-y-0.5';

const buttonClasses =
  'px-8 py-4 bg-gradient-to-b from-cyan-400 to-violet-950 font-bold rounded-full shadow-inner shadow-black/80';

export const ElevatedButton = ({
  children,
  className,
  href,
  target,
  onClick,
}: ElevatedButtonProps) => {
  if (href) {
    return (
      <Link
        className={cn(wrapperClasses, className)}
        href={href}
        target={target}
      >
        <button className={buttonClasses}>{children}</button>
      </Link>
    );
  }

  return (
    <div className={cn(wrapperClasses, className)} onClick={onClick}>
      <button className={buttonClasses}>{children}</button>
    </div>
  );
};
