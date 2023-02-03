import {
  CYBER_USER_LOGIN_REQUEST,
  CYBER_USER_LOGIN_SUCCESS,
  CYBER_USER_LOGIN_FAIL,
} from "../constants/userConstants";
import axios from "axios";
import { application } from "express";
//action creator
//Redux thunk
export const loginAction = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: CYBER_USER_LOGIN_REQUEST });

    const { data } = await axios.post(`/api/${id}/login`);

    dispatch({
      type: CYBER_USER_LOGIN_SUCCESS,
      payload: {
        id,
        name: data.name,
        email: data.email,
        isAdmin: data.isAdmin,
      },
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (error) {
    dispatch({
      type: CYBER_USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.messge,
    });
  }
};
