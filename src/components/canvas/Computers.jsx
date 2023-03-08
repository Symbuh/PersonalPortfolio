import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

// My first 3js React3Fiber Canvas
const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  console.log('computer', computer);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -3.25, 1.5]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  <Canvas
    frameLoop='demand'
    shadows
    camera={{ position: [20, 3, 5], fov: 25 }}
    gl={{ preserveDrawingBuffer: true }}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Computers />
    </Suspense>
    <Preload all />
  </Canvas>;
};

export default Computers;
