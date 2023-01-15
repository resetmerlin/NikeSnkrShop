import CartList from "../components/CartList";
import React, { useState, useEffect } from "react";
import {
  useParams,
  Link,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import { useNavigate } from "react-router";

import {
  addItemToCart,
  removeCartItemAction,
} from "../actions/cyberCartAction";
const CartScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const location = useLocation().search;

  const qty = new URLSearchParams(location).get("qty");

  const cyberCart = useSelector((state) => state.cyberCart);

  const { cyberCartItems } = cyberCart;

  console.log(cyberCartItems);
  useEffect(() => {
    if (id) {
      dispatch(addItemToCart(id, qty));
    }
  }, [dispatch, id, qty]);
  let navigate = useNavigate();

  const checkoutHandler = () => {
    navigate(`/login?redirect=${"/shipping"}`);
  };
  return (
    <>
      {" "}
      <h1 className="title">Order/Payment</h1>
      {cyberCartItems.length === 0 ? (
        <Message>
          Your cart is empty ...
          <Link to="/" style={{ color: "white" }}>
            Go Back
          </Link>
        </Message>
      ) : (
        <>
          <div className="row__cart">
            <div
              className="row__list-group-item "
              style={{
                height: "3rem",
                borderBottom: "1px solid black",
              }}
            >
              <div className="list-item-image"></div>
              <div className="list-item-title">Product name</div>

              <div className="list-item-price">Price</div>

              <div className="list-item-qty">Quantity</div>
              <div className="list-item-qty">Delete</div>
            </div>
            <div className="row">
              {cyberCartItems.map((cartItems) => (
                <CartList CartValue={cartItems}></CartList>
              ))}
            </div>
          </div>

          <div className="flexdirection-column font-size-m items-center fixed right-side-card">
            <div className="cyberCard__title title-font-size-big ">
              SUBTOTAL(
              {cyberCartItems.reduce((acc, item) => acc + Number(item.qty), 0)})
              Items
            </div>
            <div className="cyberCard__text">
              <div className="cyberCard__title font-size-s">
                Total{" "}
                {cyberCartItems
                  .reduce(
                    (acc, item) => acc + Number(item.qty) * Number(item.price),
                    0
                  )
                  .toFixed(1)}{" "}
                won
              </div>
            </div>
            <button
              className="cyberCard__title button-type-order margin-top-s font-size-small hover-effect-1 link-default-style "
              type="button"
              onClick={checkoutHandler}
              style={{ width: "47rem" }}
            >
              Proceed To Checkout
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default CartScreen;
