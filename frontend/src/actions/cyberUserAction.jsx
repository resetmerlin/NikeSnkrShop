import {
  CYBER_USER_LOGIN_REQUEST,
  CYBER_USER_LOGIN_SUCCESS,
  CYBER_USER_LOGIN_FAIL,
  CYBER_USER_LOGOUT,
  CYBER_USER_REGISTER_REQUEST,
  CYBER_USER_REGISTER_SUCCESS,
  CYBER_USER_REGISTER_FAIL,
} from "../constants/userConstants";
import axios from "axios";

//action creator
//Redux thunk
export const loginAction = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: CYBER_USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );

    dispatch({ type: CYBER_USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
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
export const logoutAction = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: CYBER_USER_LOGOUT });
};
export const registerAction = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: CYBER_USER_REGISTER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/users/register",
      { name, email, password },
      config
    );

    dispatch({ type: CYBER_USER_REGISTER_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: CYBER_USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.messge,
    });
  }
};
