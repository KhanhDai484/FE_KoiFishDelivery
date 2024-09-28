import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { UserOutlined, UserAddOutlined } from "@ant-design/icons";
import "./index.scss";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle navigation to sections
  const handleNavigation = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/"); // Nếu không phải ở trang Home, chuyển về trang Home
    }
    setTimeout(() => {
      const headerOffset = 60; // Khoảng cách từ đầu trang đến đầu tiêu đề (có thể điều chỉnh)
      const element = document.getElementById(sectionId);
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      // Cuộn tới vị trí tiêu đề nội dung
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }, 100); // Đợi 1 chút để đảm bảo trang đã tải trước khi cuộn
  };
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
            <a onClick={() => handleNavigation("introduction")}>
              Giới thiệu về dịch vụ
            </a>
          </li>
          <li>
            <a onClick={() => handleNavigation("process")}>
              Quy trình vận chuyển
            </a>
          </li>
          <li>
            <a onClick={() => handleNavigation("pricing")}>Báo giá</a>
          </li>
          <li>
            <a onClick={() => handleNavigation("policy")}>Chính sách</a>
          </li>
          <li>
            <a onClick={() => handleNavigation("blog")}>Blog chia sẻ</a>
          </li>
          <li>
            <a onClick={() => handleNavigation("news")}>Tin tức</a>
          </li>
          <li>
            <a onClick={() => handleNavigation("faq")}>FAQ</a>
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
