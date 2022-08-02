import React from 'react';
 import './Header.css';
import { Typography, Input, Space, Button, Row, Col, Select } from 'antd';
const { Title, Text } = Typography;
const { Search } = Input;
const { Option } = Select;
const Header = ({ componentRef }) => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const onSearch = (value) => console.log(value);
  return (
    <>
      <div className="buyer_header active_header">
        <Row>
          <Col span={8}>
            <div className="buyer_header_left">
              <Title level={5}>Categories</Title>
            </div>
          </Col>
          <Col span={16}>
            <div className="buyer_header_right">
              <div className="active_select">
              </div>
              <div className="active_srch-bar">
                <Search
                  placeholder="Search"
                  onSearch={onSearch}
                  style={{ width: '100%' }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Header;
