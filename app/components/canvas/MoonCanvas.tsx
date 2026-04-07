'use client';
import { OrbitControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { ModelCanvas } from './ModelCanvas';

const Moon = () => {
  const moon = useLoader(GLTFLoader, '/moon-model/scene.gltf');
  return (
    <primitive
      scale={4.15}
      position={[0, 0, 0]}
      rotation={[0, 1, 0]}
      object={moon.scene}
    />
  );
};

export const MoonCanvas = ({ className }: { className?: string }) => (
  <ModelCanvas
    className={className}
    canvasClassName="cursor-pointer rounded-full"
  >
    <Moon />
    <OrbitControls
      enableZoom={false}
      enablePan={false}
      maxPolarAngle={Math.PI / 2.5}
      minPolarAngle={Math.PI / 2.5}
      autoRotate
      autoRotateSpeed={1}
    />
    <hemisphereLight intensity={5} groundColor="black" />
  </ModelCanvas>
);
