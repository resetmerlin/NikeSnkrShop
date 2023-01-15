import {
  CYBER_CART_ADD_ITEM,
  CYBER_CART_REMOVE_ITEM,
  CYBER_CART_SAVE_SHIPPING_ADDRESS,
  CYBER_CART_SAVE_PAYMENT_METHOD,
} from "../constants/cartConstants";

import axios from "axios";
//action creator
//Redux thunk
export const addItemToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/cyberProducts/${id}`);

  dispatch({
    type: CYBER_CART_ADD_ITEM,
    payload: {
      cyberProduct: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  localStorage.setItem(
    "cyberCartItems",
    JSON.stringify(getState().cyberCart.cyberCartItems)
  );
};

export const removeCartItemAction = (id) => async (dispatch, getState) => {
  dispatch({
    type: CYBER_CART_REMOVE_ITEM,
    payload: id,
  });
  localStorage.setItem(
    "cyberCartItems",
    JSON.stringify(getState().cyberCart.cyberCartItems)
  );
};
