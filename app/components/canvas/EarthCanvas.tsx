'use client';
import { OrbitControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { ModelCanvas } from './ModelCanvas';

const Earth = () => {
  const earth = useLoader(GLTFLoader, '/earth-model/scene.gltf');
  return (
    <primitive
      scale={3.75}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
      object={earth.scene}
    />
  );
};

export const EarthCanvas = ({ className }: { className?: string }) => (
  <ModelCanvas
    className={className}
    canvasClassName="cursor-pointer rounded-full"
  >
    <Earth />
    <OrbitControls
      enableZoom={false}
      enablePan={false}
      maxPolarAngle={Math.PI / 2.5}
      minPolarAngle={Math.PI / 2.5}
      autoRotate
      autoRotateSpeed={1}
    />
    <ambientLight intensity={2} />
  </ModelCanvas>
);
