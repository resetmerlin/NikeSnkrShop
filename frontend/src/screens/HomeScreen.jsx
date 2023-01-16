import React, { Suspense, useState, setState } from "react";
import Floor from "../components/Three/floor";
import Lights from "../components/Three/lights";
import { HomeScreen3d } from "../components/Three/nike/Com";
import { Canvas } from "@react-three/fiber";
import { Loader, OrbitControls } from "@react-three/drei";
import Card from "../components/Card";
const HomeScreen = () => {
  return (
    <>
      <div className="HomeScreen__background">
        <span className="HomeScreen__background__logo">NIKE</span>
      </div>
      <div className="HomeScreen__left">
        <span className="HomeScreen__left__big-text">JUST</span>
        <span className="HomeScreen__left__big-text">DO</span>
        <span className="HomeScreen__left__big-text">IT</span>

        <span className="HomeScreen__left__small-text">
          You will experience outstanding
        </span>
        <span className="HomeScreen__left__small-text">
          Nike Resell shop ever{" "}
        </span>
        <span className="HomeScreen__left__small-text">seen before.</span>
      </div>
      <div className="HomeScreen__center">
        <Canvas
          colormangement="true"
          shadowmap="true "
          camera={{ position: [-5, 4, 4], fov: 50 }}
        >
          <Suspense fallback={null}>
            <Lights />
            <HomeScreen3d />
            <Floor />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
      <div className="HomeScreen__right">
        <span className="HomeScreen__right__product-name">NIKE ZOOM AIR</span>
        <span className="HomeScreen__right__product-price">$260</span>

        <span className="HomeScreen__right__product-description">
          GET IT NOW
        </span>
      </div>

      <div className="HomeScreen__down">
        <Card /> <Card />
      </div>
    </>
  );
};

export default HomeScreen;
