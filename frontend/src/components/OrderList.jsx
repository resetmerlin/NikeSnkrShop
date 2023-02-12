import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  addItemToCart,
  removeCartItemAction,
} from "../actions/cyberCartAction";

const OrderList = ({ value }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="Cart-Screen__info__products ">
        <div
          className="Cart-Screen__info__products__img"
          style={{ backgroundImage: `url(${value.image})` }}
        ></div>
        <Link
          to={`/product/${value.cyberProduct}`}
          className="Cart-Screen__info__products__name"
        >
          {value.name}
        </Link>
        <div className="Cart-Screen__info__products__price">${value.price}</div>

        <form className="Cart-Screen__info__products__qty">
          <select
            value={value.qty}
            onChange={(e) =>
              dispatch(
                addItemToCart(value.cyberProduct, Number(e.target.value))
              )
            }
          >
            {[...Array(value.countInStock).keys()].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </select>
        </form>
      </div>
    </>
  );
};

export default OrderList;
