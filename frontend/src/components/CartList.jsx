import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  addItemToCart,
  removeCartItemAction,
} from "../actions/cyberCartAction";

const CartList = ({ CartValue }) => {
  const dispatch = useDispatch();
  const removeItemFromCart = (id) => {
    dispatch(removeCartItemAction(id));
  };
  return (
    <>
      <div className="Cart-Screen__info__products ">
        <div
          className="Cart-Screen__info__products__img"
          style={{ backgroundImage: `url(${CartValue.image})` }}
        ></div>
        <Link
          to={`/product/${CartValue.cyberProduct}`}
          className="Cart-Screen__info__products__name"
        >
          {CartValue.name}
        </Link>
        <div className="Cart-Screen__info__products__price">
          ${CartValue.price}
        </div>

        <form className="Cart-Screen__info__products__qty">
          <select
            value={CartValue.qty}
            onChange={(e) =>
              dispatch(
                addItemToCart(CartValue.cyberProduct, Number(e.target.value))
              )
            }
          >
            {[...Array(CartValue.countInStock).keys()].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </select>
        </form>

        <button
          className="Cart-Screen__info__products__delete"
          type="button"
          onClick={() => removeItemFromCart(CartValue.cyberProduct)}
        >
          {" "}
          <i className="bx bx-x"></i>{" "}
        </button>
      </div>
    </>
  );
};

export default CartList;
