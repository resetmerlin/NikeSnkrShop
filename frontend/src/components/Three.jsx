import React, { Suspense, useRef, useState } from "react";
import { useLoader, Canvas, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh, Scene } from "three";
import { Nike } from "./Three/nike/Nike_air_jordans_1_retro_mid_fog_canvas_scan";
import { NikeDunkLow } from "./Three/nike/Nike_dunks_game_ready__2k_pbr";
import { NikeSb } from "./Three/nike/Nike_sb_photoscan";
import { NikePegasus } from "./Three/nike/Nike_shoe_01";
import { NikePhantom } from "./Three/nike/Nike_fotball_shoe";
import { NikeSkor } from "./Three/nike/Nike_air_max_skor";
import Lights from "./Three/lights";
import Floor from "./Three/floor";
import { softShadows, Loader, OrbitControls } from "@react-three/drei";
const Three = ({ model }) => {
  const [open, setOpen] = useState(false);
  const aspect = window.innerWidth / window.innerHeight;
  return (
    <>
      <Canvas
        colormangement="true"
        shadowmap="true "
        camera={{ position: [-5, 4, 4], fov: 50 }}
      >
        <Suspense fallback={null}>
          {model === 1 ? (
            <Nike open={open} setOpen={setOpen} />
          ) : model === 2 ? (
            <NikeSb open={open} setOpen={setOpen} />
          ) : model == 3 ? (
            <NikePhantom open={open} setOpen={setOpen} />
          ) : model == 4 ? (
            <NikePegasus />
          ) : model == 5 ? (
            <NikeSkor open={open} setOpen={setOpen} />
          ) : model == 6 ? (
            <NikeDunkLow open={open} setOpen={setOpen} />
          ) : (
            <h1>3d error load</h1>
          )}

          <Floor />
        </Suspense>
        <OrbitControls />
      </Canvas>
      <Loader />
    </>
  );
};

export default Three;
