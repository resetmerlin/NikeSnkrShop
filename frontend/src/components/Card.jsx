import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <>
      {product.threeValue == 2 ? (
        <div className="Card">
          <Link to={`/product/${product._id}`}>
            <div className="Card__image__wrap">
              <img
                src={`${product.card}`}
                style={{ width: "29rem", margin: " -6rem -12rem" }}
                className="Card__image"
                alt=""
              />
            </div>

            <div className="shadow"></div>
            <div className="Card__wrap">
              <div className="Card__name">{`${product.name}`}</div>
              <div className="Card__rate">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
              </div>
              <div className="Card__price">$ {product.price}</div>
            </div>
          </Link>
        </div>
      ) : product.threeValue == 4 ? (
        <div className="Card">
          <Link to={`/product/${product._id}`}>
            <div className="Card__image__wrap">
              <img src={`${product.card}`} className="Card__image" alt="" />
            </div>
            <div className="shadow"></div>

            <div className="Card__wrap">
              <div className="Card__name">{`${product.name}`}</div>
              <div className="Card__rate">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
              </div>
              <div className="Card__price">$ {product.price}</div>
            </div>
          </Link>
        </div>
      ) : product.threeValue == 1 ? (
        <div className="Card">
          <Link to={`/product/${product._id}`}>
            <div className="Card__image__wrap">
              <img src={`${product.card}`} className="Card__image" alt="" />
            </div>
            <div className="shadow"></div>

            <div className="Card__wrap">
              <div className="Card__name">{`${product.name}`}</div>
              <div className="Card__rate">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
              </div>
              <div className="Card__price">$ {product.price}</div>
            </div>
          </Link>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Card;
