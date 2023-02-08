import {
  CYBER_USER_LOGIN_REQUEST,
  CYBER_USER_LOGIN_SUCCESS,
  CYBER_USER_LOGIN_FAIL,
  CYBER_USER_LOGOUT,
  CYBER_USER_REGISTER_REQUEST,
  CYBER_USER_REGISTER_SUCCESS,
  CYBER_USER_REGISTER_FAIL,
  CYBER_USER_DETAILS_REQUEST,
  CYBER_USER_DETAILS_SUCCESS,
  CYBER_USER_DETAILS_FAIL,
  CYBER_USER_UPDATE_PROFILE_REQUEST,
  CYBER_USER_UPDATE_PROFILE_SUCCESS,
  CYBER_USER_UPDATE_PROFILE_FAIL,
  CYBER_USER_UPDATE_PROFILE_RESET,
} from "../constants/userConstants";

export const cyberUserLoginReducers = (state = {}, action) => {
  switch (action.type) {
    case CYBER_USER_LOGIN_REQUEST:
      return { loading: true, ...state };

    case CYBER_USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };

    case CYBER_USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case CYBER_USER_LOGOUT:
      return {};

    default:
      return state;
  }
};
export const cyberUserRegisterReducers = (state = {}, action) => {
  switch (action.type) {
    case CYBER_USER_REGISTER_REQUEST:
      return { loading: true, ...state };

    case CYBER_USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };

    case CYBER_USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export const cyberUserDetailsReducers = (state = { user: {} }, action) => {
  switch (action.type) {
    case CYBER_USER_DETAILS_REQUEST:
      return { loading: true, ...state };

    case CYBER_USER_DETAILS_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };

    case CYBER_USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export const cyberUserUpdateReducers = (state = {}, action) => {
  switch (action.type) {
    case CYBER_USER_UPDATE_PROFILE_REQUEST:
      return { loading: true };

    case CYBER_USER_UPDATE_PROFILE_SUCCESS:
      return {
        loading: false,
        success: true,
        userInfo: action.payload,
      };

    case CYBER_USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
