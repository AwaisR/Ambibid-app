import React from 'react';
import './index.css';
import PageLayout from '../../layout/PageLayout';
import { Row, Col, Typography, Button, Image, Layout } from 'antd';
import HumainPic from '../../assests/images/A-Human-Sitting.png';
import { Link } from 'react-router-dom';
const { Title, Text } = Typography;

const index = () => {
  return (
    <>
      <PageLayout>
        <Layout className="site-layout-background">
          <div className="support-center-outer">
            <div className="support-center_con">
              <Title level={2}>We’re here to help.</Title>
              <Row>
                <Col span={12}>
                  <div className="support-list">
                    <Link to="/buy-items">
                      <Title level={4}>Buying.</Title>
                      <Text>How to buy?</Text>
                      <Text>What’s the difference between an auction and ‘buy now’</Text>
                      <Text>How things work around here?</Text>
                      <Text>How to buy?</Text>
                      <Text>What’s the difference between an auction and ‘buy now’</Text>
                      <Text>How things work around here?</Text>
                    </Link>
                  </div>

                  <div className="support-list">
                    <Link to="/buy-items">
                      <Title level={4}>Buying</Title>
                      <Text>How to buy?</Text>
                      <Text>What’s the difference between an auction and ‘buy now’</Text>
                      <Text>How things work around here?</Text>
                      <Text>How to buy?</Text>
                      <Text>What’s the difference between an auction and ‘buy now’</Text>
                      <Text>How things work around here?</Text>
                    </Link>
                  </div>
                  <div className="support-list">
                    <Link to="/buy-items">
                      <Title level={4}>Shipping</Title>
                      <Text>How to buy?</Text>
                      <Text>What’s the difference between an auction and ‘buy now’</Text>
                      <Text>How things work around here?</Text>
                    </Link>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="support-list">
                    <Link to="/buy-items">
                      <Title level={4}>Selling</Title>
                      <Text>How to buy?</Text>
                      <Text>What’s the difference between an auction and ‘buy now’</Text>
                      <Text>How things work around here?</Text>
                      <Text>How to buy?</Text>
                      <Text>What’s the difference between an auction and ‘buy now’</Text>
                      <Text>How things work around here?</Text>
                      <Text>How to buy?</Text>
                      <Text>What’s the difference between an auction and ‘buy now’</Text>
                      <Text>How things work around here?</Text>
                      <Text>How to buy?</Text>
                      <Text>What’s the difference between an auction and ‘buy now’</Text>
                      <Text>How things work around here?</Text>
                      <Text>How to buy?</Text>
                      <Text>What’s the difference between an auction and ‘buy now’</Text>
                      <Text>How things work around here?</Text>
                    </Link>
                  </div>
                  <div className="support-list-image">
                    <Image src={HumainPic} preview={false} />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Layout>
        <div className="support_end_outer">
          <Title level={5}>Still need help? Get in touch</Title>
          <Button className="contact_btn">
            <Link to="contact-us">Contact us</Link>
          </Button>
        </div>
      </PageLayout>
    </>
  );
};
export default index;
