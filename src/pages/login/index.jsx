import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../config/firebase";
import { Form } from "antd";
function Login() {
  const handleLoginGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogin = () => {};

  return (
    <div className="login">
      <iframe
        className="login__video"
        src="https://i.pinimg.com/originals/c9/bb/4c/c9bb4cf31417f2a8d59c5931d34ca67f.gif"
        width="100%"
        height="100%"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div>
        <div className="wrapper">
          <div className="login__logo">
            <Link to="/">
              <img
                src="https://cdn.pixabay.com/photo/2021/08/09/14/00/fish-6533428_960_720.png"
                alt=""
                width={150}
              />
            </Link>
          </div>
          <div className="line"></div>
          <div className="login__form">
            <h3>Login your account</h3>
            <Form>
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Vui long nhap ten!",
                  },
                ]}
              >
                <input type="text" placeholder="Username" />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Vui long nhap mat khau!",
                  },
                ]}
              >
                <input type="password" placeholder="Password" />
              </Form.Item>
              <Form.Item type="primary" htmlStyle="submit">
                <button>Login</button>
              </Form.Item>
            </Form>

            <button className="login__google" onClick={handleLoginGoogle}>
              <img
                src="https://storage.googleapis.com/support-kms-prod/ZAl1gIwyUsvfwxoW9ns47iJFioHXODBbIkrK"
                alt=""
                width={30}
              ></img>
              <span>Login with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
