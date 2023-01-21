import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Rating from "../components/Rating";
import Three from "../components/Three";
import { cyberProductsDetailsAction } from "../actions/cyberProductActions";
import Loading from "../components/Loading";
import Message from "../components/Message";

const ProductScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [qty, setQty] = useState(1);

  useEffect(() => {
    dispatch(cyberProductsDetailsAction(id));
  }, [dispatch, id]);

  const navigate = useNavigate(0);
  const cyberProductDetails = useSelector((state) => state.cyberProductDetails);
  const { loading, error, cyberProduct } = cyberProductDetails;

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };
  return (
    <>
      <div className="productScreen__top">
        <Link to="/snkrs">
          <i class="bx bx-arrow-back"></i>
        </Link>
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
            <span className="productScreen__product-rate">EXCELLENCE</span>
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
            src="https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_63c0eb0f3e94a.jpg?20230113142948"
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
      <div className="productScreen__right"></div>
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

      {/* <div className="ProductScreen__wrap">
        <Link to={"/snkrs"}>
          <i className="bx bx-arrow-back back"></i>
        </Link>
        <div className="row__column__wrap img-size-middle">
          <div className="cyberCard__image__wrap ">
            <Three model={cyberProduct.threeValue} />

            <div
              className="cyberCard__image img"
              // style={{ backgroundImage: `url(${cyberProduct.image})` }}
            ></div>
          </div>
        </div>
        <div className="flexdirection-column font-size-m items-center">
          <div className="cyberCard__title">
            <div className="cyberCard__title title-font-size-big ">
              {cyberProduct.name}
            </div>
          </div>

          <Rating
            value={cyberProduct.rating}
            reviews={cyberProduct.numReviews}
          />

          <div className="cyberCard__text">
            <div className="cyberCard__title">${cyberProduct.price}</div>
          </div>

          <div className="cyberCard__text margin-top-s">
            <div className="cyberCard__title  item-space-between">
              <span className="margin-right-s">Price:</span>
              <span>${cyberProduct.price}</span>
            </div>
            <div className="cyberCard__title">
              <span className="margin-right-s">Status:</span>
              <span>{cyberProduct.countInStock}</span>
            </div>
            <div className="cyberCard__text   display-flex default-center-flex">
              <span className="font-size-small margin-right-s">Select:</span>
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
            </div>

            <button
              className="cyberCard__title button-type-order margin-top-s font-size-small hover-effect-1 link-default-style "
              type="button"
              onClick={addToCartHandler}
            >
              {cyberProduct.countInStock == 0 ? (
                " Out of Stock"
              ) : (
                <Link to="/cart" className="font-size-small">
                  Order now
                </Link>
              )}
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ProductScreen;
