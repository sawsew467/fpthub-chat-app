import React from "react";
import { Row, Col } from "antd";
import UserInfo from "./UserInfo";
import RoomList from "./RoomList";
import styled from "styled-components";

const SidebarStyled = styled.div`
  background: #f27122;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default function Sidebar() {
  return (
    <SidebarStyled style={{ height: "100%" }}>
      <Row style={{ height: "100%" }}>
        <Col span={24} style={{ height: "57px" }}>
          <UserInfo />
        </Col>
        <Col span={24} style={{ height: "calc(100% - 57px)" }}>
          <RoomList />
        </Col>
      </Row>
    </SidebarStyled>
  );
}
