import React from "react";

const Card = () => {
  const productImage = [
    "nike-jordan.jpeg",
    "nike-olive.jpeg",
    "nike-skor.png",
    "nike-pegasus.jpeg",
  ];
  return (
    <>

      <div className="Card">
      <img src="../images/card/Nike-Pegasus.png" className="Card__image"alt="" />

        <div className="Card__wrap">

          <div className="Card__name">Nike Jordan 1</div>
          <div className="Card__rate">
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
          </div>
          <div className="Card__price">$159</div>
          <i class="bx bx-plus"></i>
        </div>
      </div>
    </>
  );
};

export default Card;
