import React, { useState, useEffect } from "react";
import { loginAction } from "../actions/cyberUserAction";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginAction(email, password));
  };

  const userLoginInfo = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLoginInfo;
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  return (
    <div className="loginScreen__wrap">
      {error ? (
        <>
          <span className="loginScreen__left__title" style={{ color: "red" }}>
            {error}
          </span>
          <span
            className="loginScreen__left__side-title"
            style={{ color: "black" }}
          >
            Check your email and password
          </span>
        </>
      ) : (
        <>
          <span className="loginScreen__left__title">Sign in</span>
          <span className="loginScreen__left__side-title">
            Get tremendous Snkrs right now!
          </span>
        </>
      )}

      <form className="loginScreen__form" onSubmit={submitHandler}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <Link
        to={redirect ? `/register?redirect=${redirect}` : "/register"}
        className="loginScreen__left__register"
      >
        New customer? Register now
      </Link>
    </div>
  );
};

export default LoginForm;
