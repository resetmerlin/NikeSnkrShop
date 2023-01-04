import React from "react";

const CartList = ({ cyberProduct }) => {
  return (
    <>
      <div className="row__list-group-item">
        <div className="list-item-image"></div>
        <div className="list-item-title">iPhone 11 Pro 256GB Memory</div>
        <div className="list-item-price">$599.99</div>

        <div className="list-item-qty">1</div>
        <i className="bx bxs-trash list-item-delete"></i>
      </div>
    </>
  );
};

export default CartList;
