import React, { useState } from "react";
import { Table } from "antd";

const DeliveryStaffPage = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: "Customer 1", status: "Out for Delivery" },
    { id: 2, customer: "Customer 2", status: "Delivered" },
    // Thêm đơn hàng khác ở đây
  ]);

  const columns = [
    { title: "Customer", dataIndex: "customer", key: "customer" },
    { title: "Status", dataIndex: "status", key: "status" },
  ];

  return (
    <div>
      <h2>Delivery Staff Page</h2>
      <Table dataSource={orders} columns={columns} rowKey="id" />
    </div>
  );
};

export default DeliveryStaffPage;
