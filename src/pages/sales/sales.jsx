import React, { useEffect, useState } from "react";
import { Table, Select, message } from "antd";
import axios from "axios"; // Đảm bảo đã cài đặt axios

const SalesStaffPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/orders");
        const rawData = await response.json();
        console.log(rawData); // Xem cấu trúc của rawData
        setOrders(rawData); // Đặt dữ liệu vào state
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const changeOrderStatus = async (orderId, newStatus) => {
    try {
      await axios.put(`/api/orders/${orderId}`, { status: newStatus });
      setOrders((prev) =>
        prev.map((order) =>
          order.id === orderId ? { ...order, status: newStatus } : order
        )
      );
      message.success("Cập nhật trạng thái đơn hàng thành công!");
    } catch (error) {
      message.error("Cập nhật trạng thái đơn hàng thất bại!");
    }
  };

  const columns = [
    { title: "Order ID", dataIndex: "id", key: "id" },
    { title: "Customer", dataIndex: "customer", key: "customer" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text, record) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ marginRight: 8 }}>{text}</span>
          <Select
            defaultValue={text}
            style={{ width: 150 }}
            onChange={(value) => changeOrderStatus(record.id, value)}
          >
            <Select.Option value="Processing">Processing</Select.Option>
            <Select.Option value="Ready for Pickup">
              Ready for Pickup
            </Select.Option>
            <Select.Option value="Confirmed">Confirmed</Select.Option>
            <Select.Option value="Delivering">Delivering</Select.Option>
            <Select.Option value="Delivered">Delivered</Select.Option>
          </Select>
        </div>
      ),
    },
  ];

  return (
    <div>
      <h2>Sales Staff Page</h2>
      <Table dataSource={orders} columns={columns} rowKey="id" />
    </div>
  );
};

export default SalesStaffPage;
