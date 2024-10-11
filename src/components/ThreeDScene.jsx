import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const RotatingModel = ({ url }) => {
  const { scene } = useGLTF(url);

  // Rotate the model
  useFrame(() => {
    scene.rotation.y += 0.01; // Adjust the rotation speed as needed
  });

  // Scale up the model if needed
  scene.scale.set(1, 1, 1); // Adjust the scaling factor as needed

  return <primitive object={scene} />;
};

const ThreeDScene = () => {
  return (
    <Canvas style={{ width: '100%', height: '20rem' }} camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={1} />
      <OrbitControls />
      <RotatingModel url="/models/botols.glb" />
    </Canvas>
  );
};

export default ThreeDScene;
