import {
  CYBER_CART_ADD_ITEM,
  CYBER_CART_REMOVE_ITEM,
  CYBER_CART_SAVE_SHIPPING_ADDRESS,
  CYBER_CART_SAVE_PAYMENT_METHOD,
} from "../constants/cartConstants";

export const cyberCartReducers = (state = { cyberCartItems: [] }, action) => {
  switch (action.type) {
    case CYBER_CART_ADD_ITEM:
      const item = action.payload;

      const existItem = state.cyberCartItems.find(
        (x) => x.cyberProduct === item.cyberProduct
      );

      if (existItem) {
        return {
          ...state,
          cartItems: state.cyberCartItems.map((x) =>
            x.cyberProduct === existItem.cyberProduct ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cyberCartItems, item],
        };
      }

    default:
      return state;
  }
};
