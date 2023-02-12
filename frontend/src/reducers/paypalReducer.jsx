import {
  PAYPAL_DETAILS_REQUEST,
  PAYPAL_DETAILS_SUCCESS,
  PAYPAL_DETAILS_FAIL,
} from "../constants/paypalConstants";

export const paypalReducers = (state = {}, action) => {
  switch (action.type) {
    case PAYPAL_DETAILS_REQUEST:
      return { loading: true, ...state };

    case PAYPAL_DETAILS_SUCCESS:
      return {
        loading: false,
        paypalData: action.payload,
      };

    case PAYPAL_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
