import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  cyberProductReducers,
  cyberProductDetailReducers,
} from "./reducers/cyberProductReducers";
import { cyberCartReducers } from "./reducers/cyberCartReducers";
const reducer = combineReducers({
  cyberProductLists: cyberProductReducers,
  cyberProductDetails: cyberProductDetailReducers,
  cyberCart: cyberCartReducers,
});
// const cartItemsFromStorage = localStorage.getItem("cartItems")
//   ? JSON.parse(localStorage.getItem("cartItems"))
//   : [];
const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
