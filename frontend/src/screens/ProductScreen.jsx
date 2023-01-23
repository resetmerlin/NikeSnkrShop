import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Rating from "../components/Rating";
import Three from "../components/Three";
import { cyberProductsDetailsAction } from "../actions/cyberProductActions";
import { cyberProductsAction } from "../actions/cyberProductActions";

import ProductSideList from "../components/ProductSideList";
const ProductScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [qty, setQty] = useState(1);

  useEffect(() => {
    dispatch(cyberProductsDetailsAction(id));
    dispatch(cyberProductsAction());
  }, [dispatch, id]);

  const navigate = useNavigate(0);
  const cyberProductDetails = useSelector((state) => state.cyberProductDetails);
  const { loading, error, cyberProduct } = cyberProductDetails;
  const cyberProductList = useSelector((state) => state.cyberProductLists);
  const { cyberProducts } = cyberProductList;
  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };
  const nextProductHandler = () => {
    for (let nike = 0; nike < cyberProducts.length; nike++) {
      if (cyberProducts[nike]._id === cyberProduct._id) {
        navigate(`/product/${cyberProducts[nike + 1]._id}`);
      }
    }
  };
  return (
    <>
      <div className="productScreen__top">
        <Link to="/snkrs">
          <i className="bx bx-arrow-back"></i>
        </Link>

        <span className="productScreen__top-number">
          /0{cyberProduct.threeValue}
        </span>
      </div>
      <div className="productScreen__middle">
        <div className="productScreen__middle-split">
          <div className="productScreen__middle__side-top">
            <span className="productScreen__product-name">
              {" "}
              {cyberProduct.name}
            </span>

            <span className="productScreen__product-price">
              ${cyberProduct.price}
            </span>
          </div>
          <div className="productScreen__middle__side-down">
            <span className="productScreen__product-status">
              CURRENT STOCKS: {cyberProduct.countInStock}
            </span>
            <span className="productScreen__product-rate">
              <Rating
                value={cyberProduct.rating}
                reviews={cyberProduct.numReviews}
              />
            </span>
            <span
              className="productScreen__product-select"
              style={{ display: "flex" }}
            >
              SELECT:
              {cyberProduct.countInStock > 0 ? (
                <form>
                  <select value={qty} onChange={(e) => setQty(e.target.value)}>
                    {[...Array(cyberProduct.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </form>
              ) : (
                <h1>Wait for new stock</h1>
              )}
            </span>
          </div>
          <img
            className="productScreen__model-image"
            src="https://wallpaper.dog/large/7924.jpg"
          />
        </div>
        <div className="productScreen__middle-split">
          {" "}
          <div className="productScreen__middle__3d-wrap">
            <div className="productScreen__middle__3d-wrap--3d">
              {" "}
              <Three model={cyberProduct.threeValue} />
            </div>
            <div className="productScreen__middle__3d-wrap--img">
              <div
                className="productScreen__middle__3d-wrap--img__wrap"
                style={{ backgroundImage: `url(${cyberProduct.image})` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="productScreen__right">
        <div className="productScreen__right__user">
          <i className="bx bxs-user-circle"></i>
          <span>User name</span>
        </div>
        <div className="productScreen__right__wrap">
          {cyberProducts.map((product) => {
            return (
              <ProductSideList
                key={product._id}
                products={product}
                currenProduct={cyberProduct._id}
              ></ProductSideList>
            );
          })}
        </div>
        <button onClick={nextProductHandler}>
          <div className="productScreen__right__home">
            <i className="bx bxs-down-arrow"></i>
          </div>
        </button>
      </div>
      <div className="productScreen__down">
        <button
          className="productScreen__down__cart"
          type="button"
          onClick={addToCartHandler}
        >
          {cyberProduct.countInStock == 0 ? (
            " Out of Stock"
          ) : (
            <Link className="productScreen__down__Link" to="/cart">
              Order now
            </Link>
          )}
        </button>
        <Link className="productScreen__down__fav">
          {" "}
          <div>FAVORITE</div>
        </Link>
      </div>
    </>
  );
};

export default ProductScreen;
