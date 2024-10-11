import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF, Html } from '@react-three/drei';
import * as THREE from 'three';

const Model = ({ path }) => {
  const { scene } = useGLTF(path);
  return <primitive object={scene} />;
};

const ThreeScene = ({ assetPath }) => {
  const controlRef = useRef();

  return (
    <Canvas
      className="w-full h-full"
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 15, 10]} angle={0.3} />

      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      {/* Model */}
      <Model path={assetPath} />

      {/* Controls */}
      <OrbitControls
        ref={controlRef}
        enableZoom={true} // Enable zoom for better interaction
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
      />
    </Canvas>
  );
};

export default ThreeScene;
