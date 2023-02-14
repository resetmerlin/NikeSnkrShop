import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { registerAction } from "../actions/cyberUserAction";
const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const [name, setName] = useState("");
  const registerInfo = useSelector((state) => state.userRegister);

  const { userInfo, loading, error } = registerInfo;
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const redirect = [...searchParams].length > 0 ? [...searchParams][0][1] : "/";

  const submitRegisterHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password won't match");
    } else {
      dispatch(registerAction(name, email, password));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);
  return (
    <div className="loginScreen__wrap">
      {error && error.length > 30 ? (
        <>
          <span className="loginScreen__left__title">
            Fill the blank to register
          </span>
          <span className="loginScreen__left__side-title">try again</span>
        </>
      ) : error && error.length < 20 ? (
        <>
          <span className="loginScreen__left__title">{error}</span>
          <span className="loginScreen__left__side-title">try again</span>
        </>
      ) : (
        <>
          <span className="loginScreen__left__title">Sign in</span>
          <span className="loginScreen__left__side-title">
            Get tremendous Snkrs right now!
          </span>
        </>
      )}

      <form
        className="loginScreen__form register"
        onSubmit={submitRegisterHandler}
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="name">Name</label>
        <input
          type="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setconfirmPassword(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <Link
        to={redirect ? `/users/login?redirect=${redirect}` : "/users/login"}
        className="loginScreen__left__register register__ask"
      >
        You have an account? Sign in right now
      </Link>
    </div>
  );
};

export default RegisterForm;
