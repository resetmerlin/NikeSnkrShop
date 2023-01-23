import React from "react";
import { Link } from "react-router-dom";

const ProductSideList = ({ products, currenProduct }) => {
  return (
    <>
      {currenProduct == products._id ? (
        <Link to={`/product/${products._id}`}>
          <div
            className="productScreen__right-image"
            style={{
              backgroundImage: `url(${products.image}) `,
              border: "3px solid black",
            }}
          ></div>
        </Link>
      ) : (
        <Link to={`/product/${products._id}`}>
          <div
            className="productScreen__right-image"
            style={{ backgroundImage: `url(${products.image})` }}
          ></div>
        </Link>
      )}
    </>
  );
};

export default ProductSideList;
