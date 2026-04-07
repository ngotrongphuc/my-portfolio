'use client';
import { OrbitControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { cn } from '../../utils/cn';
import { ModelCanvas } from './ModelCanvas';

const Computer = () => {
  const computer = useLoader(GLTFLoader, '/computer-model/scene.gltf');
  return (
    <primitive
      scale={0.7}
      position={[1, -1.5, 0]}
      rotation={[0, -1.5, -0.1]}
      object={computer.scene}
    />
  );
};

export const ComputerCanvas = ({ className }: { className?: string }) => (
  <ModelCanvas
    className={cn('w-[99%] aspect-[2/1]', className)}
    shadows
    gl={{ preserveDrawingBuffer: true }}
  >
    <Computer />
    <OrbitControls
      enableZoom={false}
      enablePan={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
    />
    <pointLight intensity={1} position={[5, 5, 10]} decay={0} />
    <spotLight
      intensity={10}
      position={[0, 10, 0]}
      decay={0}
      angle={1}
      penumbra={1}
      castShadow
      shadow-mapSize={1024}
    />
  </ModelCanvas>
);
