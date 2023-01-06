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
  const arrayColor = [];

  for (const key in cyberProducts) {
    productColors.push(cyberProducts[key].colors);

    individualColor.push(productColors[key]);

    arrayColor.push(individualColor[key].split("/"));
  }
  console.log(arrayColor[0]);
  // for (let key = 0; key < cyberProducts.length; key++) {
  //   productColors.push(cyberProducts[cyberProducts[key].threeValue].colors);

  //   individualColor.push(productColors[key]);

  //   arrayColor.push(individualColor[key].split("/"));
  // }
  const multipleColors = [];
  function hndleColorCheckboxChange(checkboxColor) {
    console.log(checkboxColor);

    // for (const key in arrayColor) {
    //   for (let i = 0; i < arrayColor[key].length; i++) {
    //     if (arrayColor[key][i] === checkboxColor[0]) {
    //       multipleColors.push(`${key},${checkboxColor[0]}`);
    //       console.log(multipleColors);
    //     } else if (arrayColor[key][i] !== checkboxColor[0]) {
    //       // console.log([arrayColor[key][i]]);
    //       // console.log(checkboxColor[i]);
    //       console.log(false);
    //     }
    //   }
    // }
    // Example
    for (let j = 0; j < arrayColor.length; j++) {
      console.log(hasCommonElement(checkboxColor, arrayColor[j]));
      if (hasCommonElement(checkboxColor, arrayColor[j])) {
        console.log(`it found on ${arrayColor[j]}`);
      } else {
        console.log(`it doesn't found on ${arrayColor[j]}`);
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
        colors={arrayColor}
        onColorCheckboxChange={hndleColorCheckboxChange}
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
