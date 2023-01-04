import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CyberProduct from "../components/CyberProduct";
import { cyberProductsAction } from "../actions/cyberProductActions";
import Loading from "../components/Loading";
import Message from "../components/Message";
const HomeScreen = () => {
  const dispatch = useDispatch();

  const cyberProductList = useSelector((state) => state.cyberProductLists);
  const { loading, error, cyberProducts } = cyberProductList;
  useEffect(() => {
    //soon as HomeScreen load, it is gonna fire off@!!!!
    dispatch(cyberProductsAction());
  }, [dispatch]);

  return (
    <>
      <h1 className="title">Lastst Products</h1>
      {loading ? (
        <div className="row">
          <Loading />
        </div>
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <div className="row">
          {cyberProducts.map((cyberProduct) => {
            return (
              <div className="row__column " key={cyberProduct._id}>
                {/* React's key prop gives you the ability to control component instances. */}
                <CyberProduct cyberProduct={cyberProduct}></CyberProduct>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default HomeScreen;
