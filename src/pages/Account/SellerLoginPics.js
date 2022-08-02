import React from 'react';
import { Image, Row, Col, Typography } from 'antd';
import Rectangle from '../../assests/images/Rectangle 1498.png';
import Rectangle1495 from '../../assests/images/Rectangle 1495.png';
import Rectangle1497 from '../../assests/images/Rectangle 1497.png';
import Rectangle1499 from '../../assests/images/Rectangle 1499.png';
const { Title, Text } = Typography;
const SellerLoginPics = () => {
  return (
    <>
      <div className="sellar_main_right">
        <Row>
          <Col span={24}>
            <div className="sellar_img_list">
              <Image preview={false} src={Rectangle} />
              <Image preview={false} src={Rectangle1495} />
            </div>
          </Col>
          <Col span={24}>
            <div className="sellar_img_list">
              <Image src={Rectangle1497} preview={false} />
              <Image preview={false} src={Rectangle1499} />
            </div>
          </Col>
        </Row>
        <div className="sellar_img_info">
          <Title level={5}>Register a free account and begin listing your items.</Title>
          <Text>
            Start selling today with Amibid. We specialise in antiques, collectibles and special
            items with the lowest transaction fees on the market. That means, more money for you.
          </Text>
        </div>
      </div>
    </>
  );
};
export default SellerLoginPics;
