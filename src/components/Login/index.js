import React from "react";
import { Row, Col, Button, Typography } from "antd";
import firebase, { auth } from "../../firebase/config";
import { addDocument, generateKeywords } from "../../firebase/services";

const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export default function Login() {
  const handleLogin = async (provider) => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

    if (additionalUserInfo?.isNewUser) {
      addDocument("users", {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
        keywords: generateKeywords(user.displayName?.toLowerCase()),
      });
    }
  };

  return (
    <div
      style={{
        background:
          "url(https://dnuni.fpt.edu.vn/wp-content/uploads/2021/11/FPTUDN-3-1598x900.png) top/cover no-repeat",
        height: "100vh",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          // display: "none",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          "background-color": "rgba(0, 0, 0, 0.6)",
        }}
      >
        <Row justify="center" style={{ height: "100vh",
        "display": "flex",
        "alignItems": "center",
       }}>
          <Col span={8} style={{}}>
            <Title style={{ textAlign: "center", color: "#fff", fontSize: "30px" }} level={3}>
              FPT Hub Chat
            </Title>
            <Button
              style={{ width: "100%", marginBottom: 5 }}
              onClick={() => handleLogin(googleProvider)}
            >
              Đăng nhập bằng Google
            </Button>
            {/* <Button
            style={{ width: '100%' }}
            onClick={() => handleLogin(fbProvider)}
          >
            Đăng nhập bằng Facebook
          </Button> */}
          </Col>
        </Row>
      </div>
    </div>
  );
}
