import {
  CYBER_ORDER_CREATE_REQUEST,
  CYBER_ORDER_CREATE_SUCCESS,
  CYBER_ORDER_CREATE_FAIL,
} from "../constants/orderConstants";

export const cyberCreateOrderReducers = (state = {}, action) => {
  switch (action.type) {
    case CYBER_ORDER_CREATE_REQUEST:
      return { loading: true };

    case CYBER_ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        order: action.payload,
        success: true,
      };

    case CYBER_ORDER_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
