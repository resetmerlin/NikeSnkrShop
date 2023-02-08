/*

Auto-generated by: https://github.com/pmndrs/gltfjsx

Command: npx gltfjsx@6.1.2 public/nike_shoe_01.glb
Author: IanAbenaitwe (https://sketchfab.com/IanAbenaitwe)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/nike-shoe-01-b3284c944f0b45bca10cf6b37ee10c52
Title: Nike Shoe 01
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function NikeHome(props) {
  const { nodes, materials } = useGLTF("/nike_shoe_01.glb");
  return (
    <>
      <fog attach="fog" args={["black", 0, 80]} />
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
      <pointLight position={[0, 50, 0]} intensity={0.3} />
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group
              position={[-0, -1, -0.6]}
              rotation={[-2.1, -0.2, -0.6]}
              scale={1.2}
            >
              <mesh
                geometry={nodes.Object_7.geometry}
                material={materials.NikeShoe_01_MS_Cleaned_Positioned_Final_2}
              />
            </group>
          </group>
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/nike_shoe_01.glb");
