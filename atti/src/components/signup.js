import React from "react";
import {
  Button,
  Card,
  Input,
  Layout,
  Row,
  Typography,
  Form,
  Select,
} from "antd";
import {
  UserOutlined,
  LoginOutlined,
  ArrowLeftOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { useRef, useEffect } from "react";
import { EyeTwoTone } from "@ant-design/icons";
import { useState } from "react";

import Otp from "./numberfield";
import { IconButton } from "@material-ui/core";
import Numberfield from "./numberfield";
import { useNavigate } from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;
const Option = { Select };
function isNumeric(n) {
  return !isNaN(parseInt(n)) && isFinite(n);
}
const Signup = () => {
  const getGradientStyle = () => {
    const gradientColorStart = "#00C9FF";
    const gradientColorEnd = "#92FE9D";
    return {
      background: `linear-gradient(to bottom, ${gradientColorStart}, ${gradientColorEnd})`,
    };
  };

  const navigate = useNavigate()
  const onSubmit = async (e) => {
    const response = await fetch('http://localhost:3001/api/users', {
      method: 'POST',
      headers: {

        'Content-Type': 'application/json',
      },
      body: JSON.stringify(e),
    });
    const responseData = await response.json();
    console.log(responseData);
    navigate("/login")

  }
  return (
    <Layout style={getGradientStyle()}>
      <Content>
        <img
          style={{
            position: "fixed",
            minWidth: "100%",
            minHeight: "100%",
          }}
          src="/giphy.gif"
        />

        <Row
          justify="center"
          style={{ height: "100%", display: "flex", alignItems: "center" }}
        >
          <div className="centered-card">
            <Card
              style={{

                borderRadius: "25px",
                backgroundColor: "rgba(235,235,225,0.9)",
                borderShadow: "5px",
              }}
            >
              <Typography
                style={{
                  fontWeight: "bold",
                  fontSize: "40px",
                  fontFamily: "Moirai One",
                  textAlign: "center"
                }}
              >
                ATTI-TALKS
              </Typography>
              <Typography style={{ marginTop: "5%", fontSize: "25px", marginLeft: "0px", fontWeight: "700", textAlign:"center" }}>Sign Up</Typography>
              <Form style={{ marginTop: "5%" }} onFinish={onSubmit} layout="vertical">
                <Form.Item
                  label="Username"
                  name="Name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter user name!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined />}
                    placeholder="Please enter username"
                  />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="Password"
                  rules={[
                    {
                      required: true,
                      message: "Please enter password!",
                    },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    style={{
                      borderRadius: "20px",
                      fontSize: "15px",
                      fontWeight: "500",
                      color: "white",
                      backgroundColor: "black",
                      // fontFamily: "Moirai One",
                    }}
                    className="login-button"
                    block
                    type="primary"
                    htmlType="submit"
                  >
                    Signup
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </div>
        </Row>
      </Content>
    </Layout>
  );
};

export default Signup;
