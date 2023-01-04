import React from "react";
import { PointLight } from "three";

const Lights = () => {
  return (
    <>
      <fog attach="fog" args={["white", 0, 30]} />
      <ambientLight intensity={0.2} />
      <directionalLight
        position={[-8, 16, -8]}
        intensity={0}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      ></directionalLight>
      <pointLight position={[0, 50, 0]} intensity={0.6} />
    </>
  );
};

export default Lights;
