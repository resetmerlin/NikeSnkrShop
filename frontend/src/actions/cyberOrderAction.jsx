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

export const getOrderDetailsAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CYBER_ORDER_DETAILS_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        // "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/orders/${id}`, config);

    dispatch({ type: CYBER_ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CYBER_ORDER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.messge,
    });
  }
};

export const payOrderAction =
  (orderId, paymentResult) => async (dispatch, getState) => {
    try {
      dispatch({ type: CYBER_ORDER_PAY_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.put(
        `/api/orders/${orderId}/pay`,
        paymentResult,
        config
      );

      dispatch({ type: CYBER_ORDER_PAY_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: CYBER_ORDER_PAY_FAIl,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.messge,
      });
    }
  };

export const MyOrderAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CYBER_ORDER_LIST_MY_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/orders/myorders`, config);

    dispatch({
      type: CYBER_ORDER_LIST_MY_SUCCESS,
      _id: userInfo._id,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CYBER_ORDER_LIST_MY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.messge,
    });
  }
};
