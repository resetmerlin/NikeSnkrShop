import CartList from "../components/CartList";
import React, { useState, useEffect } from "react";

import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { addItemToCart } from "../actions/cyberCartAction";
import { createOrderAction } from "../actions/cyberOrderAction";
const CartScreen = () => {
  //React hook
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation().search;
  const { id } = useParams();
  const qty = new URLSearchParams(location).get("qty");

  const checkLogin = useSelector((state) => state.userLogin);
  const cyberCart = useSelector((state) => state.cyberCart);
  const createOrder = useSelector((state) => state.createOrder);

  const { userInfo } = checkLogin;

  const { cyberCartItems, shippingAddress } = cyberCart;
  const { order, success, loading } = createOrder;

  const taxPrice = 5;
  const shippingPrice = 3;
  const itemsPrice = cyberCartItems
    .reduce((acc, item) => acc + Number(item.qty) * Number(item.price), 0)
    .toFixed(1);
  const totalPrice = itemsPrice - taxPrice - shippingPrice;
  const paymentMethod = "paypal";
  const date = new Date();
  const currentDate = new Intl.DateTimeFormat("en-kr", {
    dateStyle: "full",
  });

  useEffect(() => {
    if (userInfo) {
      if (id) {
        dispatch(addItemToCart(id, qty));
      }
    } else {
      navigate("/users/login");
    }
  }, [dispatch, id, qty]);
  //Buttons

  const checkoutHandler = (e) => {
    e.preventDefault();

    dispatch(
      createOrderAction({
        orderItems: cyberCart.cyberCartItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        email: userInfo.email,
        name: userInfo.name,
      })
    );
    if (success) {
      navigate(`/order/${order._id}`);
    }
  };

  return (
    <>
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

          <div className="Cart-Screen__info__wrap__down">
            <span className="title-m">Address</span>
            <div className=" Cart-Screen__side-title">
              <span> Postal code: {shippingAddress.postalCode}</span>
              <span> Address: {shippingAddress.address}</span>
              <span>
                Specific Address:
                {shippingAddress.specificAddress}
              </span>
              <span>Reference Item: {shippingAddress.referenceItem}</span>
            </div>
            <button
              className="Cart-Screen__button"
              onClick={() => {
                navigate("/profile");
              }}
            >
              Change Address
            </button>
          </div>
        </div>

        <div className="Cart-Screen__side-bar">
          <div className="Cart-Screen__side-bar__info">
            <div className="Cart-Screen__side-bar__info__wrap">
              <span className="Cart-Screen__side-bar__address-specific">
                {shippingAddress.address}, {shippingAddress.specificAddress},{" "}
                {shippingAddress.referenceItem}
              </span>
              <span className="Cart-Screen__side-bar__address-city">
                {shippingAddress.postalCode}
              </span>
            </div>
            <span
              className="Cart-Screen__side-bar__date"
              style={{ fontSize: "1.5rem" }}
            >
              Date: {currentDate.format(date)}
            </span>
          </div>

          <div className="Cart-Screen__side-bar__summary">
            <span className="Cart-Screen__side-bar__summary__title title-m">
              Order summary
            </span>
            <span className="Cart-Screen__side-bar__summary__small-title">
              <span>SUBTOTAL</span>(
              {cyberCartItems.reduce((acc, item) => acc + Number(item.qty), 0)})
              Items
            </span>
            <span className="Cart-Screen__side-bar__summary__total-amount title-s">
              <span>Total Item Prices</span>${itemsPrice}
            </span>
            <span className="Cart-Screen__side-bar__summary__small-title">
              <span>SHIPPING</span>${shippingPrice}
            </span>
            <span className="Cart-Screen__side-bar__summary__small-title">
              <span>TAX</span>${taxPrice}
            </span>

            <span className="Cart-Screen__side-bar__summary__total-amount title-s">
              <span> Total</span>${totalPrice}
            </span>
            <form onSubmit={checkoutHandler}>
              <span className="Cart-Screen__side-bar__summary__small-title">
                <span>Payment method</span>
                <span>{paymentMethod}</span>
              </span>
              <button
                className="Cart-Screen__side-bar__summary__check-out"
                type="submit"
              >
                Proceed To Checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;
