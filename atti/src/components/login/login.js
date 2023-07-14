import React from "react";
import { Button, Card, Input, Layout, Row, Typography, Form } from "antd";
import { UserOutlined, LoginOutlined, LockOutlined } from "@ant-design/icons";

const { Header, Footer, Sider, Content } = Layout;

function Login() {
  const getGradientStyle = () => {
    const gradientColorStart = "#00C9FF";
    const gradientColorEnd = "#92FE9D";
    return {
      background: `linear-gradient(to bottom, ${gradientColorStart}, ${gradientColorEnd})`,
    };
  };
  return (
    <Layout style={getGradientStyle()}>
      <Content>
        <img
          style={{
            position: "fixed",
            right: 0,
            bottom: 0,
            minWidth: "100%",
            minHeight: "100%",
          }}
          src="/scribble.gif"
        />
        <Row
          justify="center"
          style={{ height: "100%", display: "flex", alignItems: "center" }}
        >
          <div className="centered-card">
            <Card
              style={{
                
                borderRadius: "25px",
                // lineHeight: "3.5rem",
                backgroundColor: "rgba(235,235,225,0.9)",
                borderShadow: "5px",
               
              }}
            >
              <Typography
                style={{
                  fontWeight: "bold",
                  fontSize: "40px",
                  fontFamily: "Moirai One",
                  textAlign: "center",
                }}
              >
                ATTI-TALKS
              </Typography>
              <Typography style={{marginTop:"5%",fontSize:"25px",marginLeft:"0px", fontWeight:"700", textAlign:"center"}}>Log In</Typography>

              <Form style={{marginTop:"5%"}} layout="vertical">
                <Form.Item
                  label="Username"
                  name="userName"
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
                  name="password"
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
                      fontSize:"15px",
                      fontWeight:"500",
                      color: "white",
                      backgroundColor: "black",
                      // fontFamily: "Moirai One",
                    }}
                    className="login-button"
                    block
                    type="primary"
                    htmlType="submit"
                  >
                    Login
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </div>
        </Row>
      </Content>
    </Layout>
  );
}

export default Login;
