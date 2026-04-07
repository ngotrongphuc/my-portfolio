'use client';
import { OrbitControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { cn } from '../../utils/cn';
import { ModelCanvas } from './ModelCanvas';

const Space = () => {
  const space = useLoader(GLTFLoader, '/space-model/scene.gltf');
  return (
    <primitive
      scale={1}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
      object={space.scene}
    />
  );
};

export const SpaceCanvas = ({ className }: { className?: string }) => (
  <ModelCanvas
    className={cn(className)}
    camera={{
      position: [0, 0, 100],
      rotation: [0, 0, 0],
      fov: 50,
      near: 0.1,
      far: 2000,
    }}
    shadows
    gl={{ preserveDrawingBuffer: true }}
  >
    <Space />
    <OrbitControls
      enableZoom={false}
      enablePan={false}
      enableRotate={false}
      maxPolarAngle={Math.PI / 2.5}
      minPolarAngle={Math.PI / 2.5}
      autoRotate
      autoRotateSpeed={0.5}
    />
  </ModelCanvas>
);
