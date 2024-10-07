import React, { useState } from "react";
import { Link } from "react-router-dom";

function ManageOrder() {
  const [orders, setOrders] = useState([]);

  //   useEffect(() => {
  //     // Lấy danh sách đơn hàng từ API
  //     axios
  //       .get("https://yourapi.com/orders")
  //       .then((response) => {
  //         setOrders(response.data);
  //       })
  //       .catch((error) => {
  //         console.error("Lỗi khi lấy danh sách đơn hàng:", error);
  //       });
  //   }, []);

  return (
    <div>
      <h2>Đơn hàng chưa xác nhận</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <Link to={`/manageconfirmorder/${order.id}`}>
              {order.customerName} - {order.total}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManageOrder;
