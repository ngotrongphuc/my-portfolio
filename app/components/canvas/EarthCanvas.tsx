import { OrbitControls, Preload } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import CanvasLoader from '../CanvasLoader';

const Earth = ({ isMobile = false }) => {
  const earth = useLoader(GLTFLoader, '/earth-model/scene.gltf');

  return (
    <group>
      <primitive
        scale={3.75}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        object={earth.scene}
      />
    </group>
  );
};

const EarthCanvas = (props: any) => {
  return (
    <div {...props} className={`${props.className}`}>
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
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default EarthCanvas;
