import React, { useEffect, useState, setState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CyberProduct from "../components/CyberProduct";
import { cyberProductsAction } from "../actions/cyberProductActions";
import Loading from "../components/Loading";
import Message from "../components/Message";
import SideCategory from "../components/SideCategory";

const categorySortOptions = [
  "Sort by: Default",

  "Price low to high",

  "Price high to low",

  "Order by rating",
];

const SnkrScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //soon as SnkrScreenload, it is gonna fire off@!!!!

    dispatch(cyberProductsAction());
  }, [dispatch]);

  const cyberProductList = useSelector((state) => state.cyberProductLists);

  const { loading, error, cyberProducts } = cyberProductList;

  const [filteredColor, setfilteredColor] = useState(cyberProducts);

  const [colorChoseState, setColorChoseState] = useState(false);

  const [categorySort, setCategorySort] = useState(categorySortOptions[0]);

  const colorPlainDoubleArray = [];

  const sortByDefault = cyberProducts

    .sort((a, b) => a.threeValue - b.threeValue)

    .map((x) => x);

  const sortByRating = cyberProducts

    .sort((a, b) => b.rating - a.rating)

    .map((x) => x);

  const sortBySmall = cyberProducts

    .sort((a, b) => a.price - b.price)

    .map((x) => x);

  const sortByBig = cyberProducts

    .sort((a, b) => b.price - a.price)

    .map((x) => x);

  for (const key in cyberProducts) {
    colorPlainDoubleArray.push(cyberProducts[key].colors);
  }

  function handleColorChange(colorThatChose) {
    setColorChoseState(true);

    console.log(colorThatChose);

    if (colorThatChose.length === 0) {
      setfilteredColor(cyberProducts);

      setColorChoseState(false);
    } else {
      setfilteredColor(
        cyberProducts.filter((color) => {
          let sameColors = color.colors.filter((item) =>
            colorThatChose.includes(item)
          );

          return sameColors.length > 0;
        })
      );
    }
  }

  console.log(filteredColor);

  return (
    <>
      <h1 className="main__title">Lastst Products</h1>

      <form className="Category-sort-box">
        <select
          value={categorySort}
          className="Category-sort-box__list"
          onChange={(e) => setCategorySort(e.target.value)}
        >
          {categorySortOptions.map((value) => {
            return (
              <option value={value} key={value}>
                {value}
              </option>
            );
          })}
        </select>
      </form>

      <SideCategory
        colors={colorPlainDoubleArray}
        onColorCheckboxChange={handleColorChange}
      ></SideCategory>
      <div className="main__wrap">
        {loading ? (
          <div className="row">
            <Loading />
          </div>
        ) : error ? (
          <Message>{error}</Message>
        ) : (
          <div className="row">
            {colorChoseState === true ? (
              filteredColor.map((cyberProduct) => {
                return (
                  <div className="row__column " key={cyberProduct._id}>
                    <CyberProduct cyberProduct={cyberProduct}></CyberProduct>
                  </div>
                );
              })
            ) : categorySort == categorySortOptions[0] ? (
              sortByDefault.map((cyberProduct) => {
                return (
                  <div className="row__column " key={cyberProduct._id}>
                    <CyberProduct cyberProduct={cyberProduct}></CyberProduct>
                  </div>
                );
              })
            ) : categorySort == categorySortOptions[1] ? (
              sortBySmall.map((cyberProduct) => {
                return (
                  <div className="row__column " key={cyberProduct._id}>
                    <CyberProduct cyberProduct={cyberProduct}></CyberProduct>
                  </div>
                );
              })
            ) : categorySort == categorySortOptions[2] ? (
              sortByBig.map((cyberProduct) => {
                return (
                  <div className="row__column " key={cyberProduct._id}>
                    <CyberProduct cyberProduct={cyberProduct}></CyberProduct>
                  </div>
                );
              })
            ) : categorySort == categorySortOptions[3] ? (
              sortByRating.map((cyberProduct) => {
                return (
                  <div className="row__column " key={cyberProduct._id}>
                    <CyberProduct cyberProduct={cyberProduct}></CyberProduct>
                  </div>
                );
              })
            ) : (
              <h1>Error Occured while displaying products</h1>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default SnkrScreen;
