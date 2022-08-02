import React from 'react';
import { Row, Col, Typography } from 'antd';
const { Title } = Typography;
export default function ItemSpecify({ curentItemData }) {
  return (
    <div className="item-specify">
      <Row>
        <Col span={24} className="shipping_info">
          <p>
            <strong>{curentItemData?.itemSpecifics?.field1} </strong>
          </p>
        </Col>
        <Col span={24} className="shipping_info">
          <p>
            <strong>{curentItemData?.itemSpecifics?.field2} </strong>
          </p>
        </Col>
        <Col span={24} className="shipping_info">
          <p>
            <strong>{curentItemData?.itemSpecifics?.field3} </strong>
          </p>
        </Col>
        <Col span={24} className="shipping_info">
          <p>
            <strong>{curentItemData?.itemSpecifics?.field4}</strong>
          </p>
        </Col>
        {/* <Col span={24} className="shipping_info">
          <p>
            <strong>Manufacturer:</strong>Nissan MOT Expiry: 202112
          </p>
        </Col>
        <Col span={24} className="shipping_info">
          <p>
            <strong>Engine Size: </strong>1.5 Reg. Date: 20090807
          </p>
        </Col>
        <Col span={24} className="shipping_info">
          <p>
            <strong>Transmission:</strong> Manual Interior/Comfort Options: Air Conditioning,
            Climate Control, Cruise Control, Parking Sensors, Power-assisted Steering (PAS), Power
            Locks
          </p>
        </Col>
        <Col span={24} className="shipping_info">
          <p>
            <strong>Doors: </strong>5 Service History Available: Partial
          </p>
        </Col>
        <Col span={24} className="shipping_info">
          <p>
            <strong>Fuel: </strong>Diesel Seats: 5
          </p>
        </Col>
        <Col span={24} className="shipping_info">
          <p>
            <strong>Metallic Paint: </strong>Yes Body Type: SUV
          </p>
        </Col>
        <Col span={24} className="shipping_info">
          <p>
            <strong>Drivetrain: </strong> 2 WD
          </p>
        </Col> */}
      </Row>
    </div>
  );
}
