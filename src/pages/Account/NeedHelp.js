import React from 'react';
import './style.css';
import { Row, Col, Image, Typography } from 'antd';
import humaaan from '../../assests/images/humaaan-5.png';
import humaaansStanding from '../../assests/images/humaaans-standing-3.png';
import humaaanSTanding from '../../assests/images/humaaans-standing-12.png';
import humaaans23 from '../../assests/images/humaaans-standing-23.png';
const { Title, Text } = Typography;

const NeedHelp = () => {
  return (
    <>
      <div className="needHelp_outer_main">
        <div className="NeedHelp_heading">
          <Title level={5}>Need some help selling an item?</Title>
        </div>
        <Row>
          <Col xl={8} lg={8} md={24}>
            <div className="needhelp_list">
              <Text>How to buy?</Text>
              <Text>What’s the difference between an auction and ‘buy now’</Text>
              <Text>How things work around here? via Type a message</Text>
            </div>
          </Col>
          <Col xl={8} lg={8} md={24}>
            <div className="needhelp_list">
              <Text>How to buy?</Text>
              <Text>What’s the difference between an auction and ‘buy now’</Text>
              <Text>How things work around here? via Type a message</Text>
            </div>
          </Col>
          <Col xl={8} lg={8} md={24}>
            <div className="needhelp_list">
              <Text>How to buy?</Text>
              <Text>What’s the difference between an auction and ‘buy now’</Text>
              <Text>How things work around here? via Type a message</Text>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default NeedHelp;
