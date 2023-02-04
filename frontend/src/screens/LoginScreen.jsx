import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";

const LoginScreen = () => {
  return (
    <div className="loginScreen">
      <div className="loginScreen__left">
        <Link to="/" className="loginScreen__left__logo">
          <img src="../images/logopng.png" alt="login logo" />
          Nike Snkr shop
        </Link>

        <span className="loginScreen__left__title">Sign in</span>
        <span className="loginScreen__left__side-title">
          Get tremendous Snkrs right now!
        </span>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="loginScreen__form">
              <label htmlFor="email">Email</label>

              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />

              <label htmlFor="password">Password</label>

              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="loginScreen__right"></div>
    </div>
  );
};

export default LoginScreen;
