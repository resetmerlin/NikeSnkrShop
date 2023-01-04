import {
  CYBER_PRODUCT_LIST_REQUEST,
  CYBER_PRODUCT_LIST_SUCCESS,
  CYBER_PRODUCT_LIST_FAIL,
  CYBER_PRODUCT_DETAILS_REQUEST,
  CYBER_PRODUCT_DETAILS_SUCCESS,
  CYBER_PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";

export const cyberProductReducers = (state = { cyberProducts: [] }, action) => {
  switch (action.type) {
    case CYBER_PRODUCT_LIST_REQUEST:
      return { loading: true, cyberProducts: [] };

    case CYBER_PRODUCT_LIST_SUCCESS:
      return { loading: false, cyberProducts: action.payload };
    case CYBER_PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const cyberProductDetailReducers = (
  state = { cyberProduct: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case CYBER_PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };

    case CYBER_PRODUCT_DETAILS_SUCCESS:
      return { loading: false, cyberProduct: action.payload };
    case CYBER_PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
