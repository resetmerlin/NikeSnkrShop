import { useEffect } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

const paypalBtnWrapper = () => {
  const amount = "2";
  const currency = "USD";
  const style = { layout: "vertical" };
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  return <div>paypalBtnWrapper</div>;
};

export default paypalBtnWrapper;
