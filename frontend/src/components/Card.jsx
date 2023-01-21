import React from "react";

const Card = ({ product }) => {
  return (
    <>
      <div className="Card">
        <img src={`${product.card}`} className="Card__image" alt="" />
        <div className="shadow"></div>

        <div className="Card__wrap">
          <div className="Card__name">{`${product.name}`}</div>
          <div className="Card__rate">
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
          </div>
          <div className="Card__price">{`${product.price}`}</div>
          <i class="bx bx-plus"></i>
        </div>
      </div>
    </>
  );
};

export default Card;
