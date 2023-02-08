import {
  CYBER_ORDER_CREATE_REQUEST,
  CYBER_ORDER_CREATE_SUCCESS,
  CYBER_ORDER_CREATE_FAIL,
} from "../constants/orderConstants";
import axios from "axios";
export const createOrderAction = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: CYBER_ORDER_CREATE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post("/api/orders", order, config);

    dispatch({ type: CYBER_ORDER_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CYBER_ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.messge,
    });
  }
};
