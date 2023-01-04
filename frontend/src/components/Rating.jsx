import React, { useState } from "react";
import PropTypes from "prop-types";
const Rating = ({ value, reviews }) => {
  const returnRateRendering = () => {
    const result = [];

    if (value % 2 == 0) {
      for (let j = 0; j < value; j++) {
        result.push(<i key={j} className="bx bxs-star rating"></i>);
      }
    } else {
      for (let j = 0; j < value; j++) {
        result.push(<i key={j} className="bx bxs-star rating"></i>);
      }
      result.pop();
      result.push(<i className="bx bxs-star-half"></i>);
    }
    return result;
  };

  return (
    <div className="cyberCard__text">
      {returnRateRendering()}
      <span className="cyberCard__text__review">{reviews}</span>
    </div>
  );
};

export default Rating;
