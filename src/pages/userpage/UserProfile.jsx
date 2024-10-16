import React from "react";

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <h3>Thông tin người dùng</h3>
      <p>Tên đăng nhập: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Vai trò: {user.role}</p>
      {/* Có thể thêm các thông tin khác nếu cần */}
    </div>
  );
};

export default UserProfile;
