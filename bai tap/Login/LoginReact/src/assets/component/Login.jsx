import React, { useState } from "react";
import { Form, Input, Button, Typography, Modal } from "antd";
import "antd/dist/reset.css";
import "./Login.css";

const { Title } = Typography;

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalText, setModalText] = useState("");
  const [user, setUser] = useState(null);
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    if (!isLogin) {
      const newUser = {
        username: values.username,
        email: values.email,
        password: values.password,
      };

      localStorage.setItem("user", JSON.stringify(newUser));

      setModalTitle("Đăng ký thành công");
      setModalText("Tài khoản đã được lưu.");
      setUser(null);
      setIsModalOpen(true);

      form.resetFields();
      setIsLogin(true);
      return;
    }

    const savedUser = localStorage.getItem("user");
    const userData = savedUser ? JSON.parse(savedUser) : null;

    if (
      userData &&
      values.username === userData.username &&
      values.password === userData.password
    ) {
      setUser(userData);
      setModalTitle("Đăng nhập thành công");
      setModalText("Thông tin đã lưu.");
    } else {
      setUser(null);
      setModalTitle("Đăng nhập thất bại");
      setModalText("Tên đăng nhập hoặc mật khẩu không đúng.");
    }

    setIsModalOpen(true);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <Title level={2} className="login-logo">
          Ninstore
        </Title>

        <Title level={4} className="login-title">
          {isLogin ? "Đăng nhập" : "Đăng ký"}
        </Title>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          validateTrigger="onChange"
          requiredMark={false}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                whitespace: true,
                message: "Vui lòng nhập tên đăng nhập!",
              },
            ]}
          >
            <Input placeholder="Tên đăng nhập" size="large" />
          </Form.Item>

          {!isLogin && (
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập email!",
                },
                {
                  type: "email",
                  message: "Email không đúng định dạng!",
                },
              ]}
            >
              <Input placeholder="Email" size="large" />
            </Form.Item>
          )}

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu!",
              },
            ]}
          >
            <Input.Password placeholder="Mật khẩu" size="large" visibilityToggle/>
          </Form.Item>

          {!isLogin && (
            <Form.Item
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Vui lòng xác nhận mật khẩu!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (value === getFieldValue("password")) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      new Error("Mật khẩu xác nhận không khớp!"),
                    );
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Xác nhận mật khẩu" size="large" visibilityToggle/>
            </Form.Item>
          )}

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              {isLogin ? "Đăng nhập" : "Đăng ký"}
            </Button>
          </Form.Item>

          <Button
            size="large"
            block
            onClick={() => {
              setIsLogin(!isLogin);
              form.resetFields();
            }}
          >
            {isLogin ? "Chuyển sang Đăng ký" : "Chuyển sang Đăng nhập"}
          </Button>
        </Form>
      </div>

      <Modal
        title={modalTitle}
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okText="Đóng"
      >
        <p>{modalText}</p>

        {isLogin && user && (
          <>
            <p>Tên đăng nhập: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Mật khẩu: {user.password}</p>
          </>
        )}
      </Modal>
    </div>
  );
};
export default Login;