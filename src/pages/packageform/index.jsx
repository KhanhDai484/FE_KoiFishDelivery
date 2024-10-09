import React, { useState } from "react";
import "./index.scss";
import { Button, Col, Form, Modal, Row, Select, Input, Radio } from "antd";
import { useForm } from "antd/es/form/Form";

function KoiFishForm() {
  const [fishData, setFishData] = useState([
    { color: "", gender: "male", length: 0, weight: 0, breed: "", quantity: 1 },
  ]);
  const [userInfo, setUserInfo] = useState({ name: "", phone: "" });
  const [isOpen, setIsOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [form] = useForm();

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

  return (
    <Form className="koi_fish_form" form={form}>
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
        </Col>
      </Row>

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
                    <Select.Option value="Koi Ogon">Cá Koi Ogon</Select.Option>
                    <Select.Option value="Koi Chagoi">
                      Cá Koi Chagoi
                    </Select.Option>
                    <Select.Option value="Koi Bướm">Cá Koi Bướm</Select.Option>
                    <Select.Option value="Koi Shusui">
                      Cá Koi Shusui
                    </Select.Option>
                    <Select.Option value="Koi Tancho">
                      Cá Koi Tancho
                    </Select.Option>
                    <Select.Option value="Koi Utsuri">
                      Cá Koi Utsuri
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
              </div>
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
          ))}
        </Col>
      </Row>

      <Modal
        title="Xóa cá"
        open={isOpen}
        onOk={handleConfirmDelete}
        onCancel={handleHidenModal}
      >
        <p>Bạn chắc chắn muốn xóa cá này không?</p>
      </Modal>
    </Form>
  );
}

export default KoiFishForm;
