import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./map.scss";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZHVvbmctMjAwNCIsImEiOiJjbTFyb2JrankwZGZyMmtwcW1jcGo4aHRkIn0.Xiyab8_pOXp8iG_Fi_rV_g";
// Thay bằng access token của bạn

function CalculateRoute() {
  const [map, setMap] = useState(null);
  const [directions, setDirections] = useState(null);
  const [distance, setDistance] = useState(null); // Lưu khoảng cách
  const [cost, setCost] = useState(null); // Lưu giá tiền
  const [estimatedDeliveryDate, setEstimatedDeliveryDate] = useState(""); // Ngày giao hàng dự kiến

  const navigate = useNavigate(); // Khai báo useNavigate

  useEffect(() => {
    const initializeMap = () => {
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v12",
        zoom: 9,
      });

      // Initialize Mapbox Directions plugin
      const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: "metric", // Đơn vị km
        profile: "mapbox/driving", // Có thể đổi thành 'walking', 'cycling', v.v.
      });

      // Add directions control to the map
      map.addControl(directions, "top-left");

      // Lắng nghe sự kiện khi tuyến đường được tính toán xong
      directions.on("route", (e) => {
        const route = e.route[0];
        const distanceKm = route.distance / 1000; // Chuyển đổi mét sang km
        let cost;
        if (distanceKm <= 50) {
          cost = 100000; // Phí cố định dưới 50km
        } else {
          cost = 100000 + (distanceKm - 50) * 2000; // tăng 2k/1km cho đơn trên 50km
        }

        // Tính ngày giao hàng dự kiến
        const today = new Date();
        const deliveryDays = Math.ceil(distanceKm / 50); // Giả sử mỗi 100 km thêm 1 ngày
        const deliveryDate = new Date(today);
        deliveryDate.setDate(today.getDate() + deliveryDays);

        // Định dạng ngày giao hàng dự kiến
        const formattedDate = deliveryDate.toISOString().split("T")[0];

        setDistance(distanceKm.toFixed(2)); // Lưu khoảng cách (2 số thập phân)
        setCost(cost.toFixed(0)); // Lưu giá tiền
        setEstimatedDeliveryDate(formattedDate); // Lưu ngày giao hàng dự kiến
      });

      // Lưu map và directions vào state
      setMap(map);
      setDirections(directions);
    };

    if (!map) initializeMap();

    return () => {
      if (map) map.remove(); // Cleanup on unmount
    };
  }, [map]);

  const handleNextPage = () => {
    // Lấy địa chỉ từ Mapbox Directions
    const startAddress = directions.getOrigin().place_name; // Địa chỉ bắt đầu
    const destinationAddress = directions.getDestination().place_name; // Địa chỉ đến

    // Chuyển sang trang PackageForm và truyền giá trị cost, destinationAddress và estimatedDeliveryDate
    navigate("/packageform", {
      state: { cost, startAddress, destinationAddress, estimatedDeliveryDate },
    });
  };

  return (
    <div>
      <h1>Calculate Route</h1>

      {/* Thông báo về phí vận chuyển */}
      <div style={{ marginTop: "20px", color: "green" }}>
        <p>
          <strong>Phí cố định:</strong> 100.000 đồng cho mọi chuyến đi dưới
          50km.
        </p>
        <p>
          <strong>Sau 50km:</strong> Cộng thêm 2000 đồng cho mỗi km vượt quá
          50km.
        </p>
      </div>

      {/* Hiển thị khoảng cách, giá tiền và ngày giao hàng dự kiến */}
      {distance && cost && (
        <div>
          <p>Khoảng cách: {distance} km</p>
          <p>Giá tiền vận chuyển: {cost} VND</p>
          <p>Ngày giao dự kiến: {estimatedDeliveryDate}</p>
        </div>
      )}

      {/* Map container */}
      <div id="map" style={{ width: "100%", height: "500px" }}></div>
      {/* Nút để chuyển sang trang tiếp theo */}
      <button className="continue-button" onClick={handleNextPage}>
        Tiếp tục
      </button>
    </div>
  );
}

export default CalculateRoute;
