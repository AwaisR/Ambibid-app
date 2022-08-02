import React from 'react';
import './index.css';
import PageLayout from '../../layout/PageLayout';
import { Row, Col, Typography, Button, Image, Layout, Input } from 'antd';

const { Title, Text } = Typography;
const { TextArea } = Input;

const ContactForm = () => {
  return (
    <>
      <PageLayout>
        <Layout className="site-layout-background">
          <div className="support-center-outer">
            <div className="support-center_con buy_contact_form">
              <Title level={2}>We’re here to help.</Title>
              <Row>
                <Col span={24}>
                  <div>
                    <Input placeholder="Email address" />
                    <TextArea rows={12} />
                  </div>
                  <Button>Send</Button>
                  <Text>
                    Our customer support team aims to get back to you as soon as possible. Please
                    allow for up to 24 hours for us to look in to your enquiry.
                  </Text>
                </Col>
              </Row>
            </div>
          </div>
        </Layout>
      </PageLayout>
    </>
  );
};
export default ContactForm;
