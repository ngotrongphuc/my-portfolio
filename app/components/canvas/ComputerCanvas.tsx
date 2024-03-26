import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Environment, OrbitControls, Preload } from '@react-three/drei';
import { Suspense } from 'react';
import CanvasLoader from '../CanvasLoader';

const Computer = ({ isMobile = false }) => {
  const computer = useLoader(GLTFLoader, '/computer-model/scene.gltf');

  return (
    <group>
      <primitive
        scale={0.6}
        position={[0, 0, 0]}
        rotation={[0, -1, 0]}
        object={computer.scene}
      />
    </group>
  );
};

const ComputerCanvas = (props: any) => {
  return (
    <div {...props} className={`${props.className} w-[1200px] h-[800px]`}>
      <Canvas
        className="cursor-pointer bg-green-200"
        frameloop="demand"
        camera={{
          position: [0, 0, 10],
          rotation: [-0.5, 0, 0],
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
          // enableZoom={false}
          // enablePan={false}
          // maxPolarAngle={Math.PI / 2.5}
          // minPolarAngle={Math.PI / 2.5}
          />
          {/* <Environment preset="forest" /> */}
          {/* <ambientLight intensity={10} /> */}
          {/* <hemisphereLight intensity={1} groundColor={'black'}/> */}
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
