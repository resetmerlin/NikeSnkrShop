import {
  CYBER_ORDER_CREATE_REQUEST,
  CYBER_ORDER_CREATE_SUCCESS,
  CYBER_ORDER_CREATE_FAIL,
  CYBER_ORDER_DETAILS_REQUEST,
  CYBER_ORDER_DETAILS_SUCCESS,
  CYBER_ORDER_DETAILS_FAIL,
  CYBER_ORDER_PAY_REQUEST,
  CYBER_ORDER_PAY_SUCCESS,
  CYBER_ORDER_PAY_FAIl,
  CYBER_ORDER_PAY_RESET,
  CYBER_ORDER_LIST_MY_REQUEST,
  CYBER_ORDER_LIST_MY_SUCCESS,
  CYBER_ORDER_LIST_MY_FAIL,
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

export const cybergetOrderDetailsReducers = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case CYBER_ORDER_DETAILS_REQUEST:
      return { ...state, oading: true };

    case CYBER_ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };

    case CYBER_ORDER_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const cyberOrderPayReducers = (state = {}, action) => {
  switch (action.type) {
    case CYBER_ORDER_PAY_REQUEST:
      return { ...state, loading: true };

    case CYBER_ORDER_PAY_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case CYBER_ORDER_PAY_FAIl:
      return { loading: false, error: action.payload };
    case CYBER_ORDER_PAY_RESET:
      return {};
    default:
      return state;
  }
};

export const cyberMyOrderListReducers = (state = { orders: [] }, action) => {
  switch (action.type) {
    case CYBER_ORDER_LIST_MY_REQUEST:
      return { ...state, loading: true };

    case CYBER_ORDER_LIST_MY_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };

    case CYBER_ORDER_LIST_MY_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
