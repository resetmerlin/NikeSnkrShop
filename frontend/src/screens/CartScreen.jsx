import CartList from "../components/CartList";
import React, { useState, useEffect } from "react";
import {
  useParams,
  Link,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cyberProductsAction } from "../actions/cyberProductActions";

const CartScreen = () => {
  const dispatch = useDispatch(0);
  const { id } = useParams();
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const params = setSearchParams("q");
  console.log(params);
  console.log(id);
  console.log(location);
  useEffect(() => {
    dispatch(cyberProductsAction(id));
  }, [dispatch, id]);

  const cyberCart = useSelector((state) => state.cyberCart);
  const { cyberCartItems } = cyberCart;
  return (
    <>
      {" "}
      <h1 className="title">Cart items</h1>
      <div className="row width-half">
        <CartList></CartList>
      </div>
    </>
  );
};

export default CartScreen;
