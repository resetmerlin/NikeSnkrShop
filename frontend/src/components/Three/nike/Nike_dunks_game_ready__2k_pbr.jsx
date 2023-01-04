/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.2 public/nike_dunks_game_ready__2k_pbr.glb
Author: Meerschaum Digital (https://sketchfab.com/meerschaumdigital)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/nike-dunks-game-ready-2k-pbr-d88162d9ac244b0d9a3aaceaefe475fd
Title: Nike Dunks (Game Ready / 2K PBR)
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function NikeDunkLow(props) {
  const { nodes, materials } = useGLTF("/nike_dunks_game_ready__2k_pbr.glb");
  return (
    <>
      <fog attach="fog" args={["white", 0, 120]} />
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[-8, 16, -8]}
        intensity={0.3}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      ></directionalLight>
      <pointLight position={[0, 50, 20]} intensity={0.4} />
      <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            scale={28}
            rotation={[-2, 0.4, -2.4]}
            position={[-2.2, 0.6, 1]}
          >
            <mesh
              position={[0, 0, 0]}
              geometry={nodes.Nike_Dunks_Shoe_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/nike_dunks_game_ready__2k_pbr.glb");