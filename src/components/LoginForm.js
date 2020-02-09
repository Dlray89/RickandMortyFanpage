import React from "react";
import { Link } from "react-router-dom";
import "./LoginForm.css";
import auth from "./auth.js";

import { Form, Formik, Field, ErrorMessage } from "formik";

const LoginForm = (props) => (
  <div>
    <div className="btnCont">
      <button className="navBtn">
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          Home
        </Link>
      </button>
      <button className="navBtn">
        <Link style={{ textDecoration: "none", color: "black" }} to="/sign-up">
          Sign-up
        </Link>
      </button>
    </div>

    <div className="LoginForm">
      <h1>Login</h1>

      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = "required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invaild Email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label>Email</label>
            <br />
            <Field type="email" name="email" autoComplete="username" />
            <ErrorMessage name="email" component="div" />
            <br />
            <label>Pasword</label>
            <br />
            <Field
              type="password"
              name="password"
              autoComplete="current-password"
            />
            <ErrorMessage name="password" component="div" />
            <br />
            <button
              onClick={() => {
                auth.login(() => {
                  props.history.push("/dashboard");
                });
              }}
              type="submit"
              disabled={isSubmitting}
            >
              {" "}
              submit{" "}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  </div>
);
export default LoginForm;
