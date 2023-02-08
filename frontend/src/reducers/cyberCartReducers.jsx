import {
  CYBER_CART_ADD_ITEM,
  CYBER_CART_REMOVE_ITEM,
  CYBER_CART_SAVE_SHIPPING_ADDRESS,
  CYBER_CART_SAVE_PAYMENT_METHOD,
} from "../constants/cartConstants";

export const cyberCartReducers = (
  state = { cyberCartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case CYBER_CART_ADD_ITEM:
      const item = action.payload;

      const existItem = state.cyberCartItems.find(
        (x) => x.cyberProduct === item.cyberProduct
      );

      if (existItem) {
        return {
          ...state,
          cyberCartItems: state.cyberCartItems.map((x) =>
            x.cyberProduct === existItem.cyberProduct ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cyberCartItems: [...state.cyberCartItems, item],
        };
      }
    case CYBER_CART_REMOVE_ITEM:
      return {
        ...state,
        cyberCartItems: state.cyberCartItems.filter(
          (x) => x.cyberProduct !== action.payload
        ),
      };
    case CYBER_CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    default:
      return state;
  }
};
