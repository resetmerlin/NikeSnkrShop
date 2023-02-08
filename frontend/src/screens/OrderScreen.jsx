import CartList from "../components/CartList";
import React, { useState, useEffect } from "react";

import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { addItemToCart } from "../actions/cyberCartAction";
import { createOrderAction } from "../actions/cyberOrderAction";

const OrderScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const location = useLocation().search;
  const qty = new URLSearchParams(location).get("qty");

  const checkLogin = useSelector((state) => state.userLogin);
  const cyberCart = useSelector((state) => state.cyberCart);
  const { userInfo } = checkLogin;
  const date = new Date();

  const { cyberCartItems, shippingAddress } = cyberCart;

  const [paymentMethod, setPaymentMethod] = useState("naverpay");
  const currentDate = new Intl.DateTimeFormat("en-kr", {
    dateStyle: "full",
  });
  const taxPrice = 5;
  const shippingPrice = 3;
  const itemsPrice = cyberCartItems
    .reduce((acc, item) => acc + Number(item.qty) * Number(item.price), 0)
    .toFixed(1);
  const totalPrice = itemsPrice - taxPrice - shippingPrice;
  const createOrder = useSelector((state) => state.createOrder);

  const { order, success, loading } = createOrder;
  return (
    <div className="orderScreen">
      <div className="orderScreen__info">
        <span className="orderScreen__title">Order Information</span>

        <div className="orderScreen__info__wrap">
          <span className="orderScreen__info__title">Order Items</span>
          <div className="orderScreen__info__product-wrap">
            {" "}
            {cyberCartItems.map((cartItems) => (
              <CartList key={cartItems._id} CartValue={cartItems}></CartList>
            ))}
          </div>
          <div className="orderScreen__info__small-wrap">
            <span className="orderScreen__info__title">User Information</span>
            <div className="orderScreen__info__default-wrap">
              <span className="orderScreen__info__side-info">Email</span>
              <span className="orderScreen__info__main-info">
                {userInfo.email}
              </span>
              <span className="orderScreen__info__side-info">Name</span>
              <span className="orderScreen__info__main-info">
                {userInfo.name}
              </span>
              <span className="orderScreen__info__side-info">Order Id</span>
              <span className="orderScreen__info__main-info">id</span>
            </div>
          </div>

          <div className="orderScreen__info__small-wrap">
            <span className="orderScreen__info__title">User address</span>
            <div className="orderScreen__info__default-wrap">
              <span className="orderScreen__info__side-info">Postal code</span>
              <span className="orderScreen__info__main-info">
                {shippingAddress.postalCode}
              </span>
              <span className="orderScreen__info__side-info">Address</span>
              <span className="orderScreen__info__main-info">
                {shippingAddress.address}
              </span>
              <span className="orderScreen__info__side-info">
                Specific Address
              </span>
              <span className="orderScreen__info__main-info">
                {shippingAddress.specificAddress}
              </span>

              <span className="orderScreen__info__side-info">
                Reference Item
              </span>
              <span className="orderScreen__info__main-info">
                {shippingAddress.referenceItem}
              </span>
            </div>
          </div>

          <div className="orderScreen__info__small-wrap">
            <span className="orderScreen__info__title">Payment method</span>
            <div className="orderScreen__info__default-wrap">
              <span className="orderScreen__info__side-info">
                Payment method
              </span>
              <span className="orderScreen__info__main-info">
                {paymentMethod}
              </span>
            </div>
          </div>

          <div className="Cart-Screen__side-bar orderScreen__side-bar">
            <span
              className="orderScreen__info__title"
              style={{ marginBottom: "1.5rem" }}
            >
              Summary
            </span>

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
              <span className="Cart-Screen__side-bar__summary__small-title">
                <span>SUBTOTAL</span>(
                {cyberCartItems.reduce(
                  (acc, item) => acc + Number(item.qty),
                  0
                )}
                ) Items
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderScreen;
