import React, { useState } from "react";
import "./index.scss";
import { Col, Form, Modal, Row } from "antd";
import { useForm } from "antd/es/form/Form";

function PackageForm() {
  const [products, setProducts] = useState([
    { name: "", weight: 0, length: 0, width: 0, height: 0, quantity: 1 },
  ]);
  const [orderCode, setOrderCode] = useState("");
  const [totalWeight, setTotalWeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleProductChange = (index, key, value) => {
    const updatedProducts = [...products];
    updatedProducts[index][key] = value;
    setProducts(updatedProducts);

    // Update total weight khi product thay doi
    let total = 0;
    updatedProducts.forEach((product) => {
      total += product.weight * product.quantity;
    });
    setTotalWeight(total);
  };

  const handleAddProducts = () => {
    setProducts([
      ...products,
      { name: "", weight: 0, length: 0, width: 0, height: 0, quantity: 1 },
    ]);
  };

  const handleRemoveProduct = (index) => {
    if (products.length > 1) {
      const updatedProducts = products.filter((_, i) => i !== index);
      setProducts(updatedProducts);
      // Update total weight khi product thay doi
      let total = 0;
      updatedProducts.forEach((product) => {
        total += product.weight * product.quantity;
      });
      setTotalWeight(total);
    }
  };

  return (
    <Form className="package_form">
      <h2 className="package_form_header">Thông tin kiện hàng</h2>
      <Row className="wrapper">
        <Col span={12}>
          {products.map((product, index) => (
            <div key={index} className="product_form">
              <h3>Sản Phẩm {index + 1}</h3>
              <div className="border">
                <div className="name_kg_quantity">
                  <Form.Item label="Tên hàng hóa" name={`name -${index}`}>
                    <input
                      className="border"
                      type="text"
                      placeholder="Tên hàng hóa"
                      value={product.name}
                      onChange={(e) =>
                        handleProductChange(index, "name", e.target.value)
                      }
                    />
                  </Form.Item>

                  <Form.Item label="Khối lượng (kg)" name={`weight -${index}`}>
                    <input
                      className="border"
                      type="number"
                      placeholder="Khối lượng (kg)"
                      value={product.weight}
                      onChange={(e) =>
                        handleProductChange(index, "weight", e.target.value)
                      }
                    />
                  </Form.Item>
                  <Form.Item label="Số lượng" name={`quantity -${index}`}>
                    <input
                      className="border"
                      type="number"
                      placeholder="Số lượng"
                      value={product.quantity}
                      onChange={(e) =>
                        handleProductChange(index, "quantity", e.target.value)
                      }
                    />
                  </Form.Item>
                </div>
                <div className="length_width_height">
                  <Form.Item label="Dài (cm)" name={`length -${index}`}>
                    <input
                      className="border"
                      type="number"
                      placeholder="Dài (cm)"
                      value={product.length}
                      onChange={(e) =>
                        handleProductChange(index, "length", e.target.value)
                      }
                    />
                  </Form.Item>
                  <Form.Item label="Rộng (cm)" name={`width -${index}`}>
                    <input
                      className="border"
                      type="number"
                      placeholder="Rộng (cm)"
                      value={product.width}
                      onChange={(e) =>
                        handleProductChange(index, "width", e.target.value)
                      }
                    />
                  </Form.Item>
                  <Form.Item label="Cao (cm)" name={`height -${index}`}>
                    <input
                      className="border"
                      type="number"
                      placeholder="Cao (cm)"
                      value={product.height}
                      onChange={(e) =>
                        handleProductChange(index, "height", e.target.value)
                      }
                    />
                  </Form.Item>
                </div>
              </div>

              <div className="product_actions">
                <button type="primary" onClick={handleAddProducts}>
                  Thêm sản phẩm
                </button>
                {/* products.length > 1 : khi ma products <1 thi khong xuat hien button nay */}
                {products.length > 1 && (
                  <button
                    type="primary"
                    onClick={() => handleRemoveProduct(index)}
                  >
                    Xóa sản phẩm
                  </button>
                )}
                <Modal title="Xóa sản phẩm" open={isOpen}>
                  <p>Bạn chắc chắn muốn xóa !!!</p>
                </Modal>
              </div>
            </div>
          ))}
        </Col>
        <Col span={9}>
          <div className="additional_form">
            <h3>Thông Tin Chi Tiết</h3>
            <Form.Item label="Mã vận đơn" name="mã vận đơn">
              <input
                className="border"
                type="text"
                placeholder="Mã vận đơn"
                value={orderCode}
                onChange={(e) => setOrderCode(e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Giá trị hàng hóa" name="giá trị hàng hóa">
              <input
                className="border"
                type="text"
                placeholder="Giá trị hàng hóa"
                value={orderCode}
                onChange={(e) => setOrderCode(e.target.value)}
              />
            </Form.Item>
            <div className="summary">
              <h4>Tổng khối lượng: {totalWeight} kg</h4>
              <button>Xác nhận</button>
            </div>
          </div>
        </Col>
      </Row>
    </Form>
  );
}

export default PackageForm;
