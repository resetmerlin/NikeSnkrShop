import React, { Suspense, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cyberProductsAction } from "../actions/cyberProductActions";

import Floor from "../components/Three/floor";
import Lights from "../components/Three/lights";
import { HomeScreen3d } from "../components/Three/nike/Com";
import { Canvas } from "@react-three/fiber";
import { Loader, OrbitControls } from "@react-three/drei";
import { NikeHome } from "../components/Three/nike/Nike-Home";
import Card from "../components/Card";
const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cyberProductsAction());
  }, [dispatch]);

  const cyberProductList = useSelector((state) => state.cyberProductLists);
  const { loading, error, cyberProducts } = cyberProductList;
  const CardList = cyberProducts.filter((items) => items.card);

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
            <NikeHome />
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
      {CardList.map((item) => {
        return <Card key={item._id} product={item} />;
      })}
    </>
  );
};

export default HomeScreen;
