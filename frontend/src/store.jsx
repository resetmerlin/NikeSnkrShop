import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  cyberProductReducers,
  cyberProductDetailReducers,
} from "./reducers/cyberProductReducers";
import { cyberCartReducers } from "./reducers/cyberCartReducers";
import { cyberUserLoginReducers } from "./reducers/cyberUserReducer";
const reducer = combineReducers({
  cyberProductLists: cyberProductReducers,
  cyberProductDetails: cyberProductDetailReducers,
  cyberCart: cyberCartReducers,
  cyberLogin: cyberUserLoginReducers,
});
const cartItemsFromStorage = localStorage.getItem("cyberCartItems")
  ? JSON.parse(localStorage.getItem("cyberCartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  cyberCart: {
    cyberCartItems: cartItemsFromStorage,
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
