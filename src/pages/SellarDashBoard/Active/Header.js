import React from 'react';
import '../Shipping/Header.css';
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
              <Title level={5}>Active</Title>
            </div>
          </Col>
          <Col span={16}>
            <div className="buyer_header_right">
              <div className="active_select">
                <div className="active_select_item">
                  <p>Sort: </p>
                  <Select
                    defaultValue="Recently added"
                    style={{ width: 150 }}
                    onChange={handleChange}
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                      Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </div>
                <div className="active_select_item">
                  <p>Period:</p>
                  <Select defaultValue=" All" style={{ width: 70 }} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                      Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </div>
              </div>
              <div className="active_srch-bar">
                <Search
                  placeholder="input search text"
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
