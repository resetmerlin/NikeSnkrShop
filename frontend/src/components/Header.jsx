import React, { useEffect, useState } from "react";
import { Route, Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const [loginHeader, setLoginHeader] = useState("");
  useEffect(() => {
    if (location.pathname == "/users/login") {
      setLoginHeader("none");
    } else {
      setLoginHeader("");
    }
  }, [location.pathname, setLoginHeader]);

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
        <Link to="/cart">
          <i className="bx bx-cart-alt"></i>
        </Link>
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />

        <label htmlFor="navi-toggle" className="toggle-button">
          <Link to="/users/login" className="a__login">
            <i className="bx bx-log-in logo"></i>
          </Link>
          <i className="bx bxs-down-arrow"></i>
        </label>

        <nav className="nav">
          <ul className="nav__links">
            <li className="nav__links__list">
              <Link to="/register">register</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
