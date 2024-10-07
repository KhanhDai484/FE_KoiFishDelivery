import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

function ManageConfirmOrder() {
  const { id } = useSearchParams();
  const [order, setOrder] = useState(null);

  //   useEffect(() => {
  //     // Lấy chi tiết đơn hàng từ API
  //     axios.get(`https://yourapi.com/orders/${id}`)
  //       .then(response => {
  //         setOrder(response.data);
  //       })
  //       .catch(error => {
  //         console.error('Lỗi khi lấy chi tiết đơn hàng:', error);
  //       });
  //   }, [id]);

  const handleConfirm = () => {
    // Xác nhận đơn hàng và cập nhật trạng thái
    axios
      .put(`https://yourapi.com/orders/${id}/confirm`)
      .then(() => {
        alert("Đơn hàng đã được xác nhận!");
        // Cập nhật trang web shipper bằng cách gọi API tương ứng
        axios.post("https://yourapi.com/shipper/update", {
          orderId: id,
          status: "Confirmed",
        });
      })
      .catch((error) => {
        console.error("Lỗi khi xác nhận đơn hàng:", error);
      });
  };

  if (!order) return <div>Đang tải...</div>;
  return (
    <div>
      <h2>Chi tiết đơn hàng</h2>
      <p>
        <strong>Khách hàng:</strong> {order.customerName}
      </p>
      <p>
        <strong>Tổng tiền:</strong> {order.total}
      </p>
      <p>
        <strong>Trạng thái:</strong> {order.status}
      </p>
      {order.status !== "Confirmed" && (
        <button onClick={handleConfirm}>Xác nhận đơn hàng</button>
      )}
    </div>
  );
}

export default ManageConfirmOrder;
