import React from "react";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { UserAddOutlined } from "@ant-design/icons";
import "./index.scss";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <img
            src="https://i.pinimg.com/originals/e9/05/21/e90521b582d877cefd83467f8bf72db2.png"
            alt="Company Logo"
            width={60}
          />
        </Link>
      </div>

      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/">Công ty</Link>
          </li>
          <li>
            <Link to="/">Dịch vụ vận chuyển</Link>
          </li>
          <li>
            <Link to="/">Bảng giá</Link>
          </li>
          <li>
            <Link to="/">Chính sách</Link>
          </li>
          <li>
            <Link to="/">Blog chia sẻ</Link>
          </li>
          <li>
            <Link to="/">Tin tức</Link>
          </li>
          <li>
            <Link to="/">Câu hỏi thường gặp</Link>
          </li>
          <li>
            <Link to="/login">
              <UserOutlined />
            </Link>
          </li>
          <li>
            <Link to="/register">
              <UserAddOutlined />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
