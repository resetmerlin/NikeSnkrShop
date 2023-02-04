import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
const CyberProduct = ({ cyberProduct }) => {
  return (
    <>
      <div className="row__column__wrap">
        <div className="cyberCard__image__wrap ">
          <Link to={`/product/${cyberProduct._id}`}>
            <div
              className="cyberCard__image img"
              style={{ backgroundImage: `url(${cyberProduct.image})` }}
            ></div>
          </Link>
        </div>

        <div className="cyberCard__title">
          <Link to={`/product/${cyberProduct._id}`}>
            <div className="cyberCard__title">{cyberProduct.name}</div>
          </Link>
        </div>

        <Rating value={cyberProduct.rating} reviews={cyberProduct.numReviews} />
        <div className="cyberCard__text">
          <Link to={`/product/${cyberProduct._id}`}>
            <div className="cyberCard__title" style={{ fontSize: `2.6rem` }}>
              ${cyberProduct.price}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CyberProduct;
