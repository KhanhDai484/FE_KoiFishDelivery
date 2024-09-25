import React, { useState, useEffect } from "react";
import "./register.scss";
import axios from "axios";

const initFormValue = {
  userName: "",
  email: "",
  passWord: "",
  confirmPassword: "",
};

const isEmptyValue = (value) => {
  return !value || value.trim().length < 1;
};

const isEmailValid = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default function RegisterPage() {
  const [formValue, setFormValue] = useState(initFormValue);
  const [formError, setFormError] = useState({});

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2").then((data) => {
      console.log(">>> check data axios: ", data);
    });
  }, []);

  const validateForm = () => {
    const error = {};
    setFormError(error);

    if (isEmptyValue(formValue.userName)) {
      error["userName"] = "User Name is required";
    }

    if (isEmptyValue(formValue.email)) {
      error["email"] = "Email is required";
    } else {
      if (!isEmailValid(formValue.email)) {
        error["email"] = "Email is invalid";
      }
    }

    if (isEmptyValue(formValue.passWord)) {
      error["passWord"] = "PassWord is required";
    }
    if (isEmptyValue(formValue.confirmPassword)) {
      error["confirmPassword"] = "Confirm PassWord is required";
    } else if (formValue.confirmPassword !== formValue.passWord) {
      error["confirmPassword"] = "Confirm Password not match";
    }

    setFormError(error);

    return Object.keys(error).length === 0;
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // ngăn chặn việc reload lại trang

    if (validateForm()) {
      console.log("form value", formValue);
    } else {
      console.log("form invalid");
    }
  };

  console.log(formError);

  return (
    <div className="container">
      <div className="image-section">
        <img
          src="https://t3.ftcdn.net/jpg/07/90/47/04/360_F_790470441_nr4LrTJfxEewk01SuwHxz6LqvTDTApEV.jpg"
          alt="Koi Fish 1"
        />
        <img
          src="https://t4.ftcdn.net/jpg/07/10/14/33/360_F_710143350_ZpLIR1qa6r96U3UcXCDUZYMo9xTFJFJ8.jpg"
          alt="Koi Fish 2"
        />
      </div>

      <div className="register-form-container">
        <h1 className="title">Koi Fish Delivery</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="user-name" className="form-label">
              UserName
            </label>
            <input
              id="user-name"
              className="form-control"
              type="text"
              name="userName"
              value={formValue.userName}
              onChange={handleChange}
            />
          </div>
          {formError.userName && (
            <div className="error-feedback">{formError.userName}</div>
          )}

          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              className="form-control"
              type="text"
              name="email"
              value={formValue.email}
              onChange={handleChange}
            />
            {formError.email && (
              <div className="error-feedback">{formError.email}</div>
            )}
          </div>

          <div>
            <label htmlFor="pass-word" className="form-label">
              Password
            </label>
            <input
              id="pass-word"
              className="form-control"
              type="password"
              name="passWord"
              value={formValue.passWord}
              onChange={handleChange}
            />
            {formError.passWord && (
              <div className="error-feedback">{formError.passWord}</div>
            )}
          </div>
          <div>
            <label htmlFor="confirm-pass" className="form-label">
              Confirm Password
            </label>
            <input
              id="confirm-pass"
              className="form-control"
              type="password"
              name="confirmPassword"
              value={formValue.confirmPassword}
              onChange={handleChange}
            />
            {formError.confirmPassword && (
              <div className="error-feedback">{formError.confirmPassword}</div>
            )}
          </div>
          <button type="submit" className="submit-btn">
            Create Account
          </button>
        </form>

        {/* New section for Google signup and login link */}
        <div className="social-signup">
          <p>
            Already have an account?{" "}
            <a href="/login" className="login-link">
              Login
            </a>
          </p>

          <p className="or-color">Or</p>

          <button className="google-signup-btn">
            <img
              src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
              alt="Google Icon"
              className="google-icon"
            />
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
}
