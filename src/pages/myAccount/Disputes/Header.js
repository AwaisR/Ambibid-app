import React from 'react';
import '../myorders/Header.css';
import { Typography, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
const { Title, Text } = Typography;
const Header = ({ text }) => {
  return (
    <>
      <div className="buyer_header disputed_header">
        <Row>
          <Col span={24}>
            <div className="buyer_header_left">
              <Title level={5}>{text}</Title>
              <Text>
                <Link to="/my-account/raise-disputes">Raise a dispute</Link>
              </Text>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Header;
