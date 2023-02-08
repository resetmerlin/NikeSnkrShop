import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Link, useLocation } from "react-router-dom";
import { logoutAction } from "../actions/cyberUserAction";
const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [loginHeader, setLoginHeader] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (location.pathname == "/users/login") {
      setLoginHeader("none");
    } else {
      setLoginHeader("");
    }
  }, [location.pathname, setLoginHeader]);
  const logoutHandler = () => {
    dispatch(logoutAction());
  };
  return (
    <header className="header" style={{ display: `${loginHeader}` }}>
      <div className="header__left">
        <Link to="/">
          <img
            src="../images/nike-logo-black.png"
            className="header__logo"
            alt=""
          />
        </Link>
      </div>

      <div className="header__center ">
        <span className="header__center__category">MEN</span>
        <span className="header__center__category">FEMALE</span>
        <Link to="/snkrs" className="header__center__category">
          ALL
        </Link>
      </div>
      <div className="header__right">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />

        {userInfo ? (
          <>
            <label htmlFor="navi-toggle" className="toggle-button">
              <span id="header__userName">{userInfo.name}</span>
              <i className="bx bxs-down-arrow"></i>
            </label>

            <nav className="nav">
              <Link to="/profile">profile</Link>
              <button onClick={logoutHandler}>Logout</button>
            </nav>
          </>
        ) : (
          <Link to="/users/login" className="a__login">
            <i className="bx bx-log-in logo"></i>
          </Link>
        )}

        <Link to="/cart" className="header__right__cart">
          <i className="bx bx-cart-alt"></i>
        </Link>
      </div>
    </header>
  );
};

export default Header;
