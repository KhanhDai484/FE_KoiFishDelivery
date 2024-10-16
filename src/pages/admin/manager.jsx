import React, { useState } from "react";
import { Table, Button, Form, Select } from "antd";

const AdminPage = () => {
  const [users, setUsers] = useState([
    { id: 1, username: "user1", role: "customer" },
    { id: 2, username: "user2", role: "customer" },
    // Thêm người dùng khác ở đây
  ]);

  const handleRoleChange = (userId, newRole) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId ? { ...user, role: newRole } : user
      )
    );
  };

  const columns = [
    { title: "Username", dataIndex: "username", key: "username" },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (text, record) => (
        <Select
          defaultValue={text}
          onChange={(value) => handleRoleChange(record.id, value)}
        >
          <Select.Option value="customer">Customer</Select.Option>
          <Select.Option value="sales staff">Sales Staff</Select.Option>
          <Select.Option value="delivery staff">Delivery Staff</Select.Option>
        </Select>
      ),
    },
  ];

  return (
    <div>
      <h2>Manager Page</h2>
      <Table dataSource={users} columns={columns} rowKey="id" />
    </div>
  );
};

export default AdminPage;
