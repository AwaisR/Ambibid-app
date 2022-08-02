import React from 'react';
import './style.css';
import { Row, Col, Image, Typography } from 'antd';
import humaaan from '../../assests/images/humaaan-5.png';
import humaaansStanding from '../../assests/images/humaaans-standing-3.png';
import humaaanSTanding from '../../assests/images/humaaans-standing-12.png';
import humaaans23 from '../../assests/images/humaaans-standing-23.png';
const { Title, Text } = Typography;

const PaymentMethod = () => {
  return (
    <>
      <div className="paymentMethod_outer_main">
        <Row>
          <Col lg={6} md={12} sm={24}>
            <div className="paymentMethod_item">
              <div className="item_image">
                <Image src={humaaan} preview={false} />
              </div>
              <div className="item_info">
                <Title level={5}>Register</Title>
                <Text>
                  Start selling today with Amibid. We specialise in
                  <br /> antiques, collectibles and special items with the <br />
                  lowest transaction fees on the market.
                  <br /> That means, more money for you.
                </Text>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={24}>
            <div className="paymentMethod_item">
              <div className="item_image">
                <Image src={humaaansStanding} preview={false} />
              </div>
              <div className="item_info">
                <Title level={5}>List Items</Title>
                <Text>
                  Start selling today <br />
                  with Amibid. We specialise in
                  <br /> antiques, collectibles and special items
                  <br /> with the lowest transaction fees.
                </Text>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={24}>
            <div className="paymentMethod_item">
              <div className="item_image">
                <Image src={humaaanSTanding} preview={false} />
              </div>
              <div className="item_info">
                <Title level={5}>Get Notified</Title>
                <Text>
                  Start selling today with Amibid.
                  <br /> We specialise in <br />
                  antiques, collectibles and special items <br />
                  with the lowest transaction fees on the market. That means, more money for you.
                </Text>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={24}>
            <div className="paymentMethod_item">
              <div className="item_image">
                <Image src={humaaans23} preview={false} />
              </div>
              <div className="item_info">
                <Title level={5}>Get Paid</Title>
                <Text>
                  Start selling today with Amibid.
                  <br /> We specialise in antiques, collectibles <br />
                  and special items with the lowest transaction <br />
                  fees on the market.
                  <br /> That means, more money for you.
                </Text>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default PaymentMethod;
