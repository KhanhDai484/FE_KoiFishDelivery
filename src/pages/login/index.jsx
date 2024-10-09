import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../config/firebase";
import { Form, Input } from "antd";

//import { H2 } from "storybook/internal/components";

function Login() {
  //dung hook navigation de chuyen giua cac trang
  const navigate = useNavigate();
  const handleLoginGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogin = async (values) => {
    console.log(values);

    try {
      //gui request den server
      const response = await api.post("login", values);
      const { token } = response.data;
      localStorage.setItem("token", token);
      //luu tam thong tin nguoi dung vao localStorage
      //muon lay thong tin nguoi dung : username, role, ... thi lay trong
      localStorage.setItem("user", JSON.stringify(response.data));
      //sau khi login xong se chuyen den trang HomePage
      navigate("/");
    } catch (err) {
      console.log(err);
      alert("Nhap sai...!!!");
    }
  };

  return (
    <div className="login">
      {/* <div className="login__logo">
        <Link to="/">
          <img
            src="https://cdn.pixabay.com/photo/2021/08/09/14/00/fish-6533428_960_720.png"
            alt="Logo"
          />
        </Link>
      </div> */}

      <div className="login__video">
        <div className="login__video-background"></div>
      </div>

      <div className="login__form-container">
        <h3>Login your account</h3>
        <br></br>

        <Form className="login__form" onFinish={handleLogin}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Vui lòng nhập tên!" }]}
          >
            <Input type="text" placeholder="Username" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <input type="password" placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <button type="submit">Login</button>
          </Form.Item>
        </Form>

        <button className="login__google" onClick={handleLoginGoogle}>
          <img
            src="https://storage.googleapis.com/support-kms-prod/ZAl1gIwyUsvfwxoW9ns47iJFioHXODBbIkrK"
            alt="Google Icon"
            width={30}
          />
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
}

export default Login;
