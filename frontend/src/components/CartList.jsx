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
      <div className="row__list-group-item">
        <div
          className="list-item-image"
          style={{ backgroundImage: `url(${CartValue.image})` }}
        ></div>
        <Link
          to={`/cyberProduct/${CartValue.cyberProduct}`}
          className="list-item-title"
        >
          {CartValue.name}
        </Link>
        <div className="list-item-price">{CartValue.price}</div>

        <form className="list-item-qty">
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

        <div className="list-item-delete ">
          <button
            type="button"
            onClick={() => removeItemFromCart(CartValue.cyberProduct)}
          >
            {" "}
            <i className="bx bxs-trash"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default CartList;
