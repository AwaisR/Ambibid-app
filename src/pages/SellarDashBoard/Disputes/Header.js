import React from 'react';
import '../Shipping/Header.css';
import { Typography, Row, Col } from 'antd';
const { Title } = Typography;
const Header = ({ text }) => {
  return (
    <>
      <div className="buyer_header disputed_header">
        <Row>
          <Col span={24}>
            <div className="buyer_header_left">
              <Title level={5}>{text}</Title>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Header;
