import React, { useState, useEffect } from "react";
import "./index.scss";
import { Button, Col, Form, Modal, Row, Input, Radio, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { useLocation } from "react-router-dom"; // Import useLocation
import axios from "axios";

function KoiFishForm() {
  const location = useLocation(); // Sử dụng useLocation để lấy giá trị từ state
  const { cost } = location.state || { cost: 0 }; // Lấy cost từ state, nếu không có thì mặc định là 0

  const [fishData, setFishData] = useState([
    {
      color: "",
      gender: "male",
      length: 0,
      weight: 0,
      breed: "",
      quantity: 1,
    },
  ]);
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [recipientInfo, setRecipientInfo] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [form] = useForm();

  // State to manage the display of summary
  const [showSummary, setShowSummary] = useState(false); // State to control summary display

  // Định nghĩa giá cố định
  const PRICE_PER_KG = 50000; // Giá theo kg (VND)
  const PRICE_PER_CM = 1000; // Giá theo chiều dài (VND)

  // Tính tổng chi phí
  const calculateTotalCost = () => {
    const fishTotalCost = fishData.reduce((total, fish) => {
      const weightCost = fish.weight * PRICE_PER_KG;
      const lengthCost = fish.length * PRICE_PER_CM;
      return total + (weightCost + lengthCost) * fish.quantity; // Tính cả số lượng
    }, 0);
    return fishTotalCost + Number(cost); // Cộng thêm cost từ Mapbox
  };

  const handleFishChange = (index, key, value) => {
    const updatedFishData = [...fishData];
    updatedFishData[index][key] = value;
    setFishData(updatedFishData);
  };

  const handleAddFish = () => {
    setFishData([
      ...fishData,
      {
        color: "",
        gender: "male",
        length: 0,
        weight: 0,
        breed: "",
        quantity: 1,
      },
    ]);
  };

  const handleConfirmDelete = () => {
    if (deleteIndex != null && fishData.length > 1) {
      const updatedFishData = fishData.filter((_, i) => i !== deleteIndex);
      setFishData(updatedFishData);
      setDeleteIndex(null);
      setIsOpen(false);
    }
  };

  const handleRemoveFish = (index) => {
    setDeleteIndex(index);
    setIsOpen(true);
  };

  const handleHidenModal = () => {
    setIsOpen(false);
  };

  const handleComplete = () => {
    setShowSummary(true); // Hiển thị thông tin tổng hợp khi nhấn "Hoàn Tất"
  };

  // Hàm gửi dữ liệu đến backend
  const handleSubmit = async () => {
    const data = {
      userInfo,
      recipientInfo,
      fishData,
      totalCost: calculateTotalCost(),
    };

    try {
      const response = await axios.post("/api/koiFishData", data);
      if (response.status === 200) {
        alert("Dữ liệu đã được gửi thành công!");
      }
    } catch (error) {
      console.error("Lỗi khi gửi dữ liệu:", error);
      alert("Đã xảy ra lỗi khi gửi dữ liệu!");
    }
  };

  return (
    <div className="koi_fish_form_wrapper">
      {/* Cột chứa form nhập thông tin */}

      <div className="koi_fish_form_container">
        <Form className="koi_fish_form" form={form}>
          {/* Thông tin người nuôi */}
          <h2 className="form_header">Thông tin người nuôi</h2>
          <Row className="user_info">
            <Col span={12}>
              <Form.Item label="Họ và Tên" name="name">
                <Input
                  type="text"
                  placeholder="Họ và Tên"
                  value={userInfo.name}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, name: e.target.value })
                  }
                />
              </Form.Item>
              <Form.Item label="Số điện thoại" name="phone">
                <Input
                  type="text"
                  placeholder="Số điện thoại"
                  value={userInfo.phone}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, phone: e.target.value })
                  }
                />
              </Form.Item>
              <Form.Item label="Địa chỉ" name="address">
                <Input
                  type="text"
                  placeholder="Địa chỉ"
                  value={userInfo.address}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, address: e.target.value })
                  }
                />
              </Form.Item>
            </Col>
          </Row>

          {/* Thông tin người nhận */}
          <h2 className="form_header">Thông tin người nhận</h2>
          <Row className="recipient_info">
            <Col span={12}>
              <Form.Item label="Họ và Tên" name="recipient-name">
                <Input
                  type="text"
                  placeholder="Họ và Tên"
                  value={recipientInfo.name}
                  onChange={(e) =>
                    setRecipientInfo({ ...recipientInfo, name: e.target.value })
                  }
                />
              </Form.Item>
              <Form.Item label="Số điện thoại" name="recipient-phone">
                <Input
                  type="text"
                  placeholder="Số điện thoại"
                  value={recipientInfo.phone}
                  onChange={(e) =>
                    setRecipientInfo({
                      ...recipientInfo,
                      phone: e.target.value,
                    })
                  }
                />
              </Form.Item>
              <Form.Item label="Địa chỉ" name="recipient-address">
                <Input
                  type="text"
                  placeholder="Địa chỉ"
                  value={recipientInfo.address}
                  onChange={(e) =>
                    setRecipientInfo({
                      ...recipientInfo,
                      address: e.target.value,
                    })
                  }
                />
              </Form.Item>
            </Col>
          </Row>

          {/* Thông tin cá Koi */}
          <h2 className="form_header">Thông tin cá Koi</h2>
          <Row className="wrapper">
            <Col span={24}>
              {fishData.map((fish, index) => (
                <div key={index} className="fish_form">
                  <h3>Cá Koi {index + 1}</h3>
                  <div className="border">
                    <Form.Item label="Màu sắc" name={`color-${index}`}>
                      <Input
                        type="text"
                        placeholder="Màu sắc"
                        value={fish.color}
                        onChange={(e) =>
                          handleFishChange(index, "color", e.target.value)
                        }
                      />
                    </Form.Item>
                    <Form.Item label="Giới tính" name={`gender-${index}`}>
                      <Radio.Group
                        value={fish.gender}
                        onChange={(e) =>
                          handleFishChange(index, "gender", e.target.value)
                        }
                      >
                        <Radio value="male">Đực</Radio>
                        <Radio value="female">Cái</Radio>
                      </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Kích thước (cm)" name={`length-${index}`}>
                      <Input
                        type="number"
                        placeholder="Kích thước (cm)"
                        value={fish.length}
                        onChange={(e) =>
                          handleFishChange(index, "length", e.target.value)
                        }
                      />
                    </Form.Item>
                    <Form.Item label="Cân nặng (kg)" name={`weight-${index}`}>
                      <Input
                        type="number"
                        placeholder="Cân nặng (kg)"
                        value={fish.weight}
                        onChange={(e) =>
                          handleFishChange(index, "weight", e.target.value)
                        }
                      />
                    </Form.Item>
                    <Form.Item label="Giống cá" name={`breed-${index}`}>
                      <Select
                        value={fish.breed}
                        onChange={(value) =>
                          handleFishChange(index, "breed", value)
                        }
                      >
                        <Select.Option value="Koi Kohaku">
                          Cá Koi Kohaku
                        </Select.Option>
                        <Select.Option value="Koi Sanke">
                          Cá Koi Sanke
                        </Select.Option>
                        <Select.Option value="Koi Showa">
                          Cá Koi Showa
                        </Select.Option>
                        <Select.Option value="Koi Tancho">
                          Cá Koi Tancho
                        </Select.Option>
                        <Select.Option value="Benigoi">
                          Cá Koi Benigoi
                        </Select.Option>
                        <Select.Option value="Chagoi">
                          Cá Koi Chagoi
                        </Select.Option>
                        <Select.Option value="Koi Utsuri">
                          Cá Koi Utsuri
                        </Select.Option>
                        <Select.Option value="Asagi">
                          Cá Koi Asagi
                        </Select.Option>
                        <Select.Option value="Koi Shusui">
                          Cá Koi Shusui
                        </Select.Option>
                        <Select.Option value="Koi Doitsu">
                          Cá Koi Doitsu
                        </Select.Option>
                      </Select>
                    </Form.Item>
                    <Form.Item label="Số lượng" name={`quantity-${index}`}>
                      <Input
                        type="number"
                        placeholder="Số lượng"
                        value={fish.quantity}
                        onChange={(e) =>
                          handleFishChange(index, "quantity", e.target.value)
                        }
                      />
                    </Form.Item>
                    <div className="fish_actions">
                      <Button type="primary" onClick={handleAddFish}>
                        Thêm cá
                      </Button>
                      {fishData.length > 1 && (
                        <Button
                          type="primary"
                          danger
                          onClick={() => handleRemoveFish(index)}
                        >
                          Xóa cá
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </Col>
          </Row>

          {/* Hiển thị tổng chi phí chỉ khi hợp lệ */}
          <div className="total_cost">
            <h3>
              Tổng chi phí vận chuyển: {calculateTotalCost().toLocaleString()}{" "}
              VND
            </h3>
          </div>

          {/* Modal xác nhận xóa */}
          <Modal
            title="Xác nhận"
            open={isOpen}
            onOk={handleConfirmDelete}
            onCancel={handleHidenModal}
          >
            <p>Bạn có chắc chắn muốn xóa cá Koi này không?</p>
          </Modal>

          {/* Nút hoàn tất */}
          <Button type="primary" onClick={handleComplete}>
            Hoàn Tất
          </Button>
        </Form>
      </div>

      {/* Phần hiển thị thông tin tổng hợp */}
      {showSummary && (
        <div className="summary">
          <h2>Tổng hợp thông tin</h2>
          <h3>Thông tin người nuôi:</h3>
          <p>Họ và Tên: {userInfo.name}</p>
          <p>Số điện thoại: {userInfo.phone}</p>
          <p>Địa chỉ: {userInfo.address}</p>

          <h3>Thông tin người nhận:</h3>
          <p>Họ và Tên: {recipientInfo.name}</p>
          <p>Số điện thoại: {recipientInfo.phone}</p>
          <p>Địa chỉ: {recipientInfo.address}</p>

          <h3>Giá tiền cá:</h3>
          <ul>
            {fishData.map((fish, index) => {
              const fishCost =
                (fish.weight * PRICE_PER_KG + fish.length * PRICE_PER_CM) *
                fish.quantity;
              return (
                <li key={index}>
                  {fish.breed} / {fish.quantity} con:{" "}
                  {fishCost.toLocaleString()} VND
                </li>
              );
            })}
          </ul>
          <h2>Giá tiền vận chuyển: {cost.toLocaleString()} VND</h2>
          <h3>Tổng giá: {calculateTotalCost().toLocaleString()} VND</h3>

          {/* Nút Thanh Toán */}
          <Button
            type="primary"
            className="payment_button"
            onClick={handleSubmit}
          >
            Thanh Toán
          </Button>
        </div>
      )}
    </div>
  );
}

export default KoiFishForm;
