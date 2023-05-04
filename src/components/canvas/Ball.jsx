import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';

import CanvasLoader from '../Loader';

const Tooltip = ({ text, visible }) => {
  return (
    <div
      className={`${
        visible ? 'visible' : 'invisible'
      } absolute bg-gray-800 text-white py-1 px-2 rounded text-sm transition-opacity duration-200 left-1/2 transform -translate-x-1/2`}
      style={{ bottom: '120%' }}
    >
      {text}
    </div>
  );
};

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow recieveShadow scale={props.scale || 2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          map={decal}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, technology }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [ballScale, setBallScale] = useState(2.75);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
    setBallScale(3);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
    setBallScale(2.75);
  };

  return (
    <div
      className='ball-canvas relative inline-block'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Canvas frameloop='demand' gl={{ preserveDrawingBuffer: true }}>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={icon} scale={ballScale} />
          <Preload all />
        </Suspense>
      </Canvas>
      <Tooltip text={technology} visible={tooltipVisible} />
    </div>
  );
};

export default BallCanvas;
