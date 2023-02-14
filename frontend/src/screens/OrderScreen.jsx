import OrderList from "../components/OrderList";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PaypalButton from "../components/paypalButton";
import { getOrderDetailsAction } from "../actions/cyberOrderAction";
import Loading from "../components/Loading";
import { CYBER_ORDER_PAY_RESET } from "../constants/orderConstants";
const OrderScreen = () => {
  const { id: orderId } = useParams();
  //{id: orderId} 형식 공부 필요
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const orderPay = useSelector((state) => state.orderPay);

  const { order, loading, error } = orderDetails;
  const { loading: loadingPay, success: successPay } = orderPay;
  const [clientId, setClientId] = useState(null);
  const [paypalPaid, setPaypalPaid] = useState(false);

  function paypalCheck(paypalPaid) {
    if (paypalPaid) {
      setPaypalPaid(true);
      console.log(successPay);
    }
  }
  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get(`/api/config/paypal`);
      setClientId(clientId);
    };
    if (!order || order._id !== orderId) {
      if (!order || paypalPaid == false) {
        dispatch(getOrderDetailsAction(orderId));
        addPayPalScript();
      }
    }
  }, [order, orderId, successPay, dispatch, paypalPaid]);

  const date = new Date();
  const currentDate = new Intl.DateTimeFormat("en-kr", {
    dateStyle: "full",
  });
  const currency = "USD";
  return loading ? (
    <Loading />
  ) : (
    <div className="orderScreen">
      <div className="orderScreen__info">
        <span className="orderScreen__title">Order Information</span>

        <div className="orderScreen__info__wrap">
          <span className="orderScreen__info__title">Order Items</span>
          <div className="orderScreen__info__product-wrap">
            {order.orderItems.map((ordertItem) => (
              <OrderList key={ordertItem._id} value={ordertItem}></OrderList>
            ))}
          </div>
          <div className="orderScreen__info__small-wrap">
            <span className="orderScreen__info__title">User Information</span>
            <div className="orderScreen__info__default-wrap">
              <div className="orderScreen__info__default-content">
                <span className="orderScreen__info__side-info">Email</span>
                <span className="orderScreen__info__main-info">
                  {order.email}
                </span>
              </div>

              <div className="orderScreen__info__default-content">
                <span className="orderScreen__info__side-info">Name</span>
                <span className="orderScreen__info__main-info">
                  {order.name}
                </span>
              </div>

              <div className="orderScreen__info__default-content">
                <span className="orderScreen__info__side-info">Order Id</span>
                <span className="orderScreen__info__main-info">
                  {order._id}
                </span>
              </div>
            </div>
          </div>

          <div className="orderScreen__info__small-wrap">
            <span className="orderScreen__info__title">User address</span>

            <div className="orderScreen__info__default-wrap">
              <div className="orderScreen__info__default-content">
                <span className="orderScreen__info__side-info">
                  Postal code
                </span>
                <span className="orderScreen__info__main-info">
                  {order.shippingAddress.postalCode}
                </span>
              </div>

              <div className="orderScreen__info__default-content">
                <span className="orderScreen__info__side-info">Address</span>
                <span className="orderScreen__info__main-info">
                  {order.shippingAddress.address}
                </span>
              </div>
              <div className="orderScreen__info__default-content">
                <span className="orderScreen__info__side-info">
                  Specific Address
                </span>
                <span className="orderScreen__info__main-info">
                  {order.shippingAddress.specificAddress}
                </span>
              </div>
              <div className="orderScreen__info__default-content">
                <span className="orderScreen__info__side-info">
                  Reference Item
                </span>
                <span className="orderScreen__info__main-info">
                  {order.shippingAddress.referenceItem}
                </span>
              </div>
            </div>
          </div>

          <div className="orderScreen__info__small-wrap">
            <span className="orderScreen__info__title">Payment method</span>

            <div className="orderScreen__info__default-wrap">
              <div className="orderScreen__info__default-content">
                <span className="orderScreen__info__side-info">
                  Payment method
                </span>
                <span className="orderScreen__info__main-info">
                  {order.paymentMethod}
                </span>
              </div>
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
                  {order.shippingAddress.address},{" "}
                  {order.shippingAddress.specificAddress},{" "}
                  {order.shippingAddress.referenceItem}
                </span>
                <span className="Cart-Screen__side-bar__address-city">
                  {order.shippingAddress.postalCode}
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
                {order.orderItems.reduce(
                  (acc, item) => acc + Number(item.qty),
                  0
                )}
                ) Items
              </span>
              <span className="Cart-Screen__side-bar__summary__total-amount title-s">
                <span>Total Item Prices</span>${order.itemsPrice}
              </span>
              <span className="Cart-Screen__side-bar__summary__small-title">
                <span>SHIPPING</span>${order.shippingPrice}
              </span>
              <span className="Cart-Screen__side-bar__summary__small-title">
                <span>TAX</span>${order.taxPrice}
              </span>

              <span className="Cart-Screen__side-bar__summary__total-amount title-s">
                <span> Total</span>${order.totalPrice}
              </span>

              {!order ? (
                <span>Wait for Order details</span>
              ) : (
                <>
                  <span
                    className="orderScreen__info__title"
                    style={{ marginTop: "6rem" }}
                  >
                    Checkout
                  </span>
                  <span className="Cart-Screen__side-bar__summary__total-amount title-s">
                    <span>Paid</span>

                    {!paypalPaid ? "Not paid" : "Purchased Successfully"}
                  </span>
                  {!paypalPaid ? (
                    <div className="orderScreen__payment">
                      <PayPalScriptProvider
                        options={{
                          "client-id": `${clientId}`,
                          components: "buttons",
                          currency: "USD",
                        }}
                      >
                        <PaypalButton
                          currency={currency}
                          showSpinner={false}
                          totalPrice={order.totalPrice}
                          paymentCheck={paypalCheck}
                          orderId={orderId}
                        />
                      </PayPalScriptProvider>
                    </div>
                  ) : (
                    ""
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderScreen;
