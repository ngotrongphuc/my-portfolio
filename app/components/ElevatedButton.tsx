const ElevatedButton = ({
  children,
  className,
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
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
