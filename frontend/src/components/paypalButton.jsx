import { useEffect } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { payOrderAction } from "../actions/cyberOrderAction";
import { useDispatch, useSelector } from "react-redux";

const PaypalButton = ({
  currency,
  showSpinner,
  totalPrice,
  paymentCheck,
  orderId,
}) => {
  const dispatching = useDispatch();

  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const amount = String(totalPrice);
  const style = { layout: "vertical" };
  const handleSuccess = (data) => {
    dispatching(payOrderAction(orderId, data));
    paymentCheck(data);
  };

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);
  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: currency,
                  value: amount,
                },
              },
            ],
          });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(handleSuccess(data));
        }}
      />
    </>
  );
};

export default PaypalButton;
