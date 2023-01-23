import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  console.log(product);
  return (
    <>
      {product.threeValue == 2 ? (
        <div className="Card">
          <Link to={`/product/${product._id}`}>
            <img
              src={`${product.card}`}
              style={{ width: "33rem" }}
              className="Card__image"
              alt=""
            />
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
              <div className="Card__price">{`${product.price}`}</div>
              <i className="bx bx-plus"></i>
            </div>
          </Link>
        </div>
      ) : product.threeValue == 5 ? (
        <div className="Card">
          <Link to={`/product/${product._id}`}>
            <img
              src={`${product.card}`}
              style={{ width: "38rem", height: "26rem" }}
              className="Card__image"
              alt=""
            />
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
              <div className="Card__price">{`${product.price}`}</div>
              <i className="bx bx-plus"></i>
            </div>
          </Link>
        </div>
      ) : product.threeValue == 4 ? (
        <div className="Card">
          <Link to={`/product/${product._id}`}>
            <img
              src={`${product.card}`}
              style={{ left: "-22%" }}
              className="Card__image"
              alt=""
            />
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
              <div className="Card__price">{`${product.price}`}</div>
              <i className="bx bx-plus"></i>
            </div>
          </Link>
        </div>
      ) : (
        <div className="Card">
          <Link to={`/product/${product._id}`}>
            <img src={`${product.card}`} className="Card__image" alt="" />
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
              <div className="Card__price">{`${product.price}`}</div>
              <i className="bx bx-plus"></i>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default Card;
