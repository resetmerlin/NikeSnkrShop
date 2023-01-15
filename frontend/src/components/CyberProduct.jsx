import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { addItemToCart } from "../actions/cyberCartAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";

const CyberProduct = ({ cyberProduct }) => {
  const { id: productId } = useParams();

  return (
    <>
      <div className="row__column__wrap">
        <div className="cyberCard__image__wrap ">
          <Link to={`/cyberProduct/${cyberProduct._id}`}>
            <div
              className="cyberCard__image img"
              style={{ backgroundImage: `url(${cyberProduct.image})` }}
            ></div>
          </Link>
        </div>

        <div className="cyberCard__title">
          <Link to={`/cyberProduct/${cyberProduct._id}`}>
            <div className="cyberCard__title">{cyberProduct.name}</div>
          </Link>
        </div>
        <div className="cyberCard__text">
          <Link to={`/cyberProduct/${cyberProduct._id}`}>
            <div className="cyberCard__title" style={{ fontSize: `2.3rem` }}>
              {cyberProduct.price}원
            </div>
          </Link>
        </div>
        {/* <i className='bx bxs-star rating' ></i> */}
        {/* <i className='bx bxs-star rating' ></i>
          <i className='bx bxs-star rating' ></i>
          <i className='bx bxs-star rating' ></i>
          {Number.isInteger(cyberProduct.rating)? <i className='bx bxs-star-half' ></i>:           <i className='bx bxs-star rating' ></i>} */}

        <Rating value={cyberProduct.rating} reviews={cyberProduct.numReviews} />
      </div>
    </>
  );
};

export default CyberProduct;
