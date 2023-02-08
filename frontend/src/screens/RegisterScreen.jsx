import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
const RegisterScreen = () => {
  return (
    <div className="loginScreen">
      <div className="loginScreen__left">
        <Link to="/" className="loginScreen__left__logo">
          <img src="../images/logopng.png" alt="login logo" />
          Nike Snkr shop
        </Link>

        <RegisterForm />
      </div>
      <div className="loginScreen__right"></div>
    </div>
  );
};

export default RegisterScreen;
