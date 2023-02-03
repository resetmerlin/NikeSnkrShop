import {
  CYBER_USER_LOGIN_REQUEST,
  CYBER_USER_LOGIN_SUCCESS,
  CYBER_USER_LOGIN_FAIL,
  CYBER_USER_LOGOUT,
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
