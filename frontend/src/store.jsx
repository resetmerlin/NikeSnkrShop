import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  cyberProductReducers,
  cyberProductDetailReducers,
} from "./reducers/cyberProductReducers";
import { cyberCartReducers } from "./reducers/cyberCartReducers";
import {
  cyberUserLoginReducers,
  cyberUserRegisterReducers,
  cyberUserDetailsReducers,
  cyberUserUpdateReducers,
} from "./reducers/cyberUserReducer";
import { cyberCreateOrderReducers } from "./reducers/cyberOrderReducers";
const reducer = combineReducers({
  cyberProductLists: cyberProductReducers,
  cyberProductDetails: cyberProductDetailReducers,
  cyberCart: cyberCartReducers,
  userLogin: cyberUserLoginReducers,
  userRegister: cyberUserRegisterReducers,
  userDetails: cyberUserDetailsReducers,
  userUpdateProfile: cyberUserUpdateReducers,
  createOrder: cyberCreateOrderReducers,
});
const cartItemsFromStorage = localStorage.getItem("cyberCartItems")
  ? JSON.parse(localStorage.getItem("cyberCartItems"))
  : [];
const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : [];
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  cyberCart: {
    cyberCartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: {
    userInfo: userInfoFromStorage,
  },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
