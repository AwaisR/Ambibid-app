import React from 'react';
import './style.css';
import { Steps, Popover, Layout, Row, Col, Form, Input, Button } from 'antd';
const { Step } = Steps;
const { Content } = Layout;
const layout = {
  wrapperCol: {
    span: 24,
  },
};
const tailLayout = {
  wrapperCol: {
    span: 24,
  },
};
export default function SellerDetailForm({ onFinish, onFinishFailed }) {
  return (
    <div>
      <div className="quick_access">
        <Row>
          <Col span={24}>
            <h2>Let’s setup your Amibid seller’s account</h2>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <p>
              We’ll need a bit more information from you so you can start listing your items. Don’t
              worry, it’ll only take a minute.
            </p>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form
              {...layout}
              name="basic"
              className="access_form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="profileName"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Seller profile name!',
                  },
                ]}
              >
                <Input placeholder="Seller profile name*" />
              </Form.Item>

              <Form.Item
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: 'Please input your First Name!',
                  },
                ]}
              >
                <Input placeholder="First Name*" />
              </Form.Item>
              <Form.Item
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Last Name!',
                  },
                ]}
              >
                <Input placeholder="Last Name*" />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button htmlType="submit">Continue</Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}
