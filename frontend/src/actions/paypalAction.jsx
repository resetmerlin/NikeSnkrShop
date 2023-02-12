import {
  PAYPAL_DETAILS_REQUEST,
  PAYPAL_DETAILS_SUCCESS,
  PAYPAL_DETAILS_FAIL,
} from "../constants/paypalConstants";
export const paypalDetailsAction = (paypal) => {
  try {
    dispatch({ type: PAYPAL_DETAILS_REQUEST });

    dispatch({
      type: PAYPAL_DETAILS_SUCCESS,
      payload: paypal,
    });
  } catch (error) {
    dispatch({
      type: PAYPAL_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.messge,
    });
  }
};
