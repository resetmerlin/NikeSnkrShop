import React from "react";

const Lights = () => {
  return (
    <>
      <fog attach="fog" args={["black", 0, 60]} />
      <ambientLight intensity={0.2} />
      <directionalLight
        position={[0, 10, 0]}
        intensity={0.3}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      ></directionalLight>
    </>
  );
};

export default Lights;
