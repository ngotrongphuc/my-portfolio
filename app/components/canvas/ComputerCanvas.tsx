import { OrbitControls, Preload } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import CanvasLoader from '../CanvasLoader';

const Computer = ({ isMobile = false }) => {
  const computer = useLoader(GLTFLoader, '/computer-model/scene.gltf');

  return (
    <group>
      <primitive
        scale={0.7}
        position={[1, -1.5, 0]}
        rotation={[0, -1.5, -0.1]}
        object={computer.scene}
      />
    </group>
  );
};

const ComputerCanvas = (props: any) => {
  return (
    <div {...props} className={`${props.className} w-[99%] aspect-[2/1]`}>
      <Canvas
        frameloop="demand"
        camera={{
          position: [0, 0, 10],
          rotation: [0, 0, 0],
          fov: 50,
          near: 0.1,
          far: 2000,
        }}
        shadows
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
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
            shadow-mapsize={1024}
          />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputerCanvas;
