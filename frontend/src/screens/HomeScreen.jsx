import React, { useEffect, useState } from "react";
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
import { Duplicated } from "../components/functions/ArrayFunction";
import { deleteArrayClicked } from "../components/functions/ArrayFunction";
const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //soon as HomeScreen load, it is gonna fire off@!!!!
    dispatch(cyberProductsAction());
  }, [dispatch]);
  const cyberProductList = useSelector((state) => state.cyberProductLists);
  const { loading, error, cyberProducts } = cyberProductList;

  const productColors = [];
  const individualColor = [];
  const colorPlainDoubleArray = [];

  for (const key in cyberProducts) {
    productColors.push(cyberProducts[key].colors);

    individualColor.push(productColors[key]);

    colorPlainDoubleArray.push(individualColor[key].split("/"));
  }
  let multipleColors = [];
  let productOnlyWithColor = [];
  let colorChoseLength = [];
  let copyOfCurrentColol = [];

  function handleNotChangeCheck(colorThatNotChange) {
    console.log(colorThatNotChange);
    return colorThatNotChange;
  }
  function hndleColorCheckboxChange(colorThatChose) {
    console.log(colorThatChose);
    colorChoseLength.push(colorThatChose.length);

    for (let f = 0; f < colorThatChose.length; f++) {
      for (let j = 0; j < colorPlainDoubleArray.length; j++) {
        if (hasCommonElement([colorThatChose[f]], colorPlainDoubleArray[j])) {
          console.log(`it found on ${j}`);

          let rearrangedColor = colorPlainDoubleArray
            .map((obj) => obj)
            .sort((a, b) =>
              a === colorPlainDoubleArray[j]
                ? -1
                : b === colorPlainDoubleArray[j]
                ? 1
                : 0
            );

          productOnlyWithColor = colorPlainDoubleArray.filter((array) =>
            array.includes(colorThatChose[f])
          );

          productOnlyWithColor.push(productOnlyWithColor.flat(1));
          console.log(productOnlyWithColor);

          if (multipleColors.length - 1 === multipleColors.length - 2) {
            multipleColors = multipleColors.filter(
              (color) => color !== productOnlyWithColor[f]
            );
            console.log(multipleColors);
          }

          function isDuplicated(string) {
            return string.filter((s) => s === colorThatChose[f - 1]).length > 1;
          }
          if (isDuplicated(multipleColors)) {
            multipleColors = multipleColors
              .flat(1)
              .filter((color) => color !== colorThatChose[f - 1]);
            console.log(multipleColors);
          }
        } else {
          if (colorChoseLength.length - 1 > colorThatChose.length) {
            // let latestColor = handleNotChangeCheck();

            multipleColors = multipleColors.filter(
              (color) => color !== colorThatChose
            );
            console.log(multipleColors);
          } else {
            console.log(
              `the ${colorThatChose[f]} doesn't found on ${j}index of colorPlainDoubleArray`
            );
          }
        }
      }
    }
  }

  function hasCommonElement(arr1, arr2) {
    return arr1.filter((item) => arr2.includes(item)).length > 0;
  }

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
  const [categorySort, setCategorySort] = useState(categorySortOptions[0]);
  return (
    <>
      <h1 className="title">Lastst Products</h1>
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
        onColorCheckboxChange={hndleColorCheckboxChange}
        onColorCheckboxUnChange={handleNotChangeCheck}
      ></SideCategory>
      {loading ? (
        <div className="row">
          <Loading />
        </div>
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <div className="row">
          {categorySort == categorySortOptions[0] ? (
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
    </>
  );
};

export default HomeScreen;
