import { Html, useProgress } from '@react-three/drei';

export const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html as="div" center className="flex flex-col items-center justify-center">
      <span className="canvas-loader" />
      <p className="mt-10 text-sm font-extrabold text-gray-100">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};
