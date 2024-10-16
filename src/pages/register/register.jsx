import React, { useState, useEffect } from "react";
import "./register.scss";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../config/firebase"; // Điều chỉnh đường dẫn import theo cấu trúc dự án của bạn

function RegisterPage() {
  const initFormValue = {
    userName: "",
    email: "",
    passWord: "",
    confirmPassword: "",
  };

  const handleGoogleSignUp = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log("User signed up with Google:", user);
        // Xử lý logic khi đăng ký thành công ở đây, ví dụ như lưu thông tin người dùng vào cơ sở dữ liệu của bạn
      })
      .catch((error) => {
        console.error("Error during Google sign up:", error);
      });
  };

  const isEmptyValue = (value) => {
    return !value || value.trim().length < 1;
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

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

  const handleSubmit = async (event) => {
    event.preventDefault(); // Ngăn chặn việc reload lại trang

    if (validateForm()) {
      const userData = {
        name: formValue.userName,
        email: formValue.email,
        password: formValue.passWord,
        confirmPassword: formValue.confirmPassword,
      };
      try {
        const response = await axios.post(
          "https://localhost:7139/api/Auth/register", // Địa chỉ API .NET
          userData, // Gửi dữ liệu form đến backend
          {
            headers: {
              "Content-Type": "application/json", // Đảm bảo định dạng JSON
            },
          }
        );
        console.log("Đăng ký thành công", response.data);
        // Bạn có thể thêm logic để xử lý khi đăng ký thành công, ví dụ như điều hướng người dùng đến trang khác
      } catch (error) {
        console.error("Lỗi trong quá trình đăng ký:", error);
        // Xử lý lỗi ở đây, ví dụ hiển thị thông báo lỗi cho người dùng
      }
    } else {
      console.log("Form không hợp lệ");
    }
  };

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

          <button className="google-signup-btn" onClick={handleGoogleSignUp}>
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

export default RegisterPage;
