import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Environment, OrbitControls, Preload } from '@react-three/drei';
import { Suspense, useEffect, useState } from 'react';
import CanvasLoader from '../CanvasLoader';

const Moon = ({ isMobile = false }) => {
  const moon = useLoader(GLTFLoader, '/moon-model/scene.gltf');

  return (
    <group>
      <primitive
        scale={4.15}
        position={[0, 0, 0]}
        rotation={[0, 1, 0]}
        object={moon.scene}
      />
    </group>
  );
};

const MoonCanvas = (props: any) => {
  return (
    <div {...props} className={`${props.className} size-80`}>
      <Canvas
        className="cursor-pointer rounded-full"
        frameloop="demand"
        camera={{
          position: [0, 0, 10],
          rotation: [0, 0, 0],
          fov: 50,
          near: 0.1,
          far: 2000,
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <Moon />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2.5}
            minPolarAngle={Math.PI / 2.5}
            autoRotate
            autoRotateSpeed={1}
          />
          <hemisphereLight intensity={5} groundColor={'black'} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default MoonCanvas;
