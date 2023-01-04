import {
  CYBER_PRODUCT_LIST_REQUEST,
  CYBER_PRODUCT_LIST_SUCCESS,
  CYBER_PRODUCT_LIST_FAIL,
  CYBER_PRODUCT_DETAILS_REQUEST,
  CYBER_PRODUCT_DETAILS_SUCCESS,
  CYBER_PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";
import axios from "axios";
//action creator
//Redux thunk
export const cyberProductsAction = () => async (dispatch) => {
  try {
    dispatch({ type: CYBER_PRODUCT_LIST_REQUEST });

    const { data } = await axios.get("/api/cyberProducts");

    dispatch({
      type: CYBER_PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CYBER_PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.messge,
    });
  }
};

export const cyberProductsDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: CYBER_PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/cyberProducts/${id}`);

    dispatch({
      type: CYBER_PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CYBER_PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.messge,
    });
  }
};
