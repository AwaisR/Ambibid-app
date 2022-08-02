import React from 'react';
import '../Shipping/Header.css';
import { Row, Col, Select } from 'antd';
import ReactStars from 'react-rating-stars-component';
const { Option } = Select;

const Header = ({ componentRef }) => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const firstExample = {
    size: 30,
    value: 2.5,
    edit: false,
  };
  return (
    <>
      <div className="buyer_header review_header">
        <Row>
          <Col sm={24} lg={12} xl={12}>
            <div className="buyer_header_left">
              <h5>My review</h5>
              <p>4.6/5 rating | 2 reviews</p>
              <ReactStars {...firstExample} />
            </div>
          </Col>
          <Col sm={24} lg={12} xl={12}>
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
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Header;
