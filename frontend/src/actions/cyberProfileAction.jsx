import {
  CYBER_USER_DETAILS_REQUEST,
  CYBER_USER_DETAILS_SUCCESS,
  CYBER_USER_DETAILS_FAIL,
  CYBER_USER_UPDATE_PROFILE_REQUEST,
  CYBER_USER_UPDATE_PROFILE_SUCCESS,
  CYBER_USER_UPDATE_PROFILE_FAIL,
  CYBER_USER_UPDATE_PROFILE_RESET,
} from "../constants/userConstants";
import axios from "axios";

//action creator
//Redux thunk
export const userDetailsAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CYBER_USER_DETAILS_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/users/${id}`, config);

    dispatch({ type: CYBER_USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CYBER_USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.messge,
    });
  }
};

export const updateProfileAction = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: CYBER_USER_UPDATE_PROFILE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/users/profile`, user, config);

    dispatch({ type: CYBER_USER_UPDATE_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CYBER_USER_UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.messge,
    });
  }
};
