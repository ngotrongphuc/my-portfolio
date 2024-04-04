import { OrbitControls, Preload } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import CanvasLoader from '../CanvasLoader';

const Space = ({ isMobile = false }) => {
  const space = useLoader(GLTFLoader, '/space-model/scene.gltf');

  return (
    <group>
      <primitive
        scale={1}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        object={space.scene}
      />
    </group>
  );
};

const SpaceCanvas = (props: any) => {
  return (
    <div {...props} className={`${props.className}`}>
      <Canvas
        frameloop="demand"
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
        <Suspense fallback={<CanvasLoader />}>
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
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default SpaceCanvas;
