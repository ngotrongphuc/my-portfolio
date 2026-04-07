'use client';
import { Preload } from '@react-three/drei';
import { Canvas, type CanvasProps } from '@react-three/fiber';
import { Suspense, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import { CanvasLoader } from '../CanvasLoader';

/**
 * Props for `ModelCanvas`. A thin wrapper around R3F `Canvas` that
 * encapsulates the Suspense loader, Preload, and default camera used
 * by every 3D scene in the portfolio.
 *
 * `className` sizes the outer wrapper (a real DOM box). `canvasClassName`
 * decorates the inner R3F canvas (e.g. `rounded-full cursor-pointer`) —
 * the two must be separate because R3F applies inline `width/height: 100%`
 * to the canvas wrapper, which would override any Tailwind size class.
 */
type ModelCanvasProps = {
  children: ReactNode;
  className?: string;
  canvasClassName?: string;
  camera?: CanvasProps['camera'];
  shadows?: CanvasProps['shadows'];
  gl?: CanvasProps['gl'];
};

const defaultCamera: CanvasProps['camera'] = {
  position: [0, 0, 10],
  rotation: [0, 0, 0],
  fov: 50,
  near: 0.1,
  far: 2000,
};

export const ModelCanvas = ({
  children,
  className,
  canvasClassName,
  camera = defaultCamera,
  shadows,
  gl,
}: ModelCanvasProps) => (
  <div className={className}>
    <Canvas
      className={cn(canvasClassName)}
      frameloop="demand"
      camera={camera}
      shadows={shadows}
      gl={gl}
    >
      <Suspense fallback={<CanvasLoader />}>
        {children}
        <Preload all />
      </Suspense>
    </Canvas>
  </div>
);
