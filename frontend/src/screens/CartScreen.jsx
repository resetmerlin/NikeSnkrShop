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

import { addItemToCart } from "../actions/cyberCartAction";
const CartScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const location = useLocation().search;

  const qty = new URLSearchParams(location).get("qty");

  const cyberCart = useSelector((state) => state.cyberCart);

  const { cyberCartItems } = cyberCart;

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
      {cyberCartItems.length === 0 ? (
        <Message>
          Your cart is empty ...
          <Link to="/snkrs" style={{ color: "white" }}>
            Go Back
          </Link>
        </Message>
      ) : (
        <div className="Cart-Screen">
          <span className="Cart-Screen__title title-m">Cart</span>
          <div className="Cart-Screen__info">
            <div className="Cart-Screen__info__wrap">
              <div className="Cart-Screen__info__frame">
                <span style={{ width: "15rem" }}>Product</span>
                <span style={{ width: "18rem" }}>name</span>

                <span>Price</span>
                <span>Quantity</span>
                <span>Delete</span>
              </div>
              {cyberCartItems.map((cartItems) => (
                <CartList key={cartItems._id} CartValue={cartItems}></CartList>
              ))}
            </div>

            <div className="Cart-Screen__info__delivery">
              <span className="Cart-Screen__info__delivery__title title-m">
                Delivery
              </span>
              <div className="Cart-Screen__info__delivery__price"></div>
            </div>
          </div>

          <div className="Cart-Screen__side-bar">
            <div className="Cart-Screen__side-bar__info">
              <div className="Cart-Screen__side-bar__info__wrap">
                <span className="Cart-Screen__side-bar__address-specific">
                  416 W 8th St
                </span>
                <span className="Cart-Screen__side-bar__address-city">
                  Los Angeles CA USA
                </span>
              </div>
              <span className="Cart-Screen__side-bar__date">
                Date: 2023-01-24
              </span>
            </div>

            <div className="Cart-Screen__side-bar__summary">
              <span className="Cart-Screen__side-bar__summary__title title-m">
                Order summary
              </span>
              <span className="Cart-Screen__side-bar__summary__subtotal">
                <span>SUBTOTAL</span>(
                {cyberCartItems.reduce(
                  (acc, item) => acc + Number(item.qty),
                  0
                )}
                ) Items
              </span>
              <span className="Cart-Screen__side-bar__summary__shipping">
                <span>SHIPPING</span>
                $3
              </span>
              <span className="Cart-Screen__side-bar__summary__tax">
                <span>TAX</span>
                $5
              </span>
              <span className="Cart-Screen__side-bar__summary__total-amount title-s">
                <span> Total</span>
                {cyberCartItems
                  .reduce(
                    (acc, item) => acc + Number(item.qty) * Number(item.price),
                    0
                  )
                  .toFixed(1)}{" "}
                won
              </span>

              <button
                className="Cart-Screen__side-bar__summary__check-out"
                type="button"
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartScreen;
