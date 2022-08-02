import React from 'react';
import './style.css';
import { Steps, Popover, Layout, Row, Col, Form, Input, Button, Select } from 'antd';
import { countries } from './AllCountries';

const { Step } = Steps;
const { Content } = Layout;
const { Option } = Select;
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
export default function SellerAdressForm({ onFinish, onFinishFailed }) {
  const [form] = Form.useForm();
  return (
    <div>
      <div>
        <div className="quick_access">
          <Row>
            <Col span={24}>
              <h2>Please enter your address</h2>
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
                <Form.Item name="country" rules={[{ required: true }]}>
                  <Select placeholder="Select Country*" allowClear>
                    {countries.map((count) => (
                      <Option value={count.name}>{count.name}</Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  name="addressLine1"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Address Line 1!',
                    },
                  ]}
                >
                  <Input placeholder="Address Line 1*" />
                </Form.Item>
                <Form.Item
                  name="addressLine2"
                  rules={[
                    {
                      required: true,
                      message: 'Please input yourAddress Line 2!',
                    },
                  ]}
                >
                  <Input placeholder="Address Line 2*" />
                </Form.Item>
                <Form.Item
                  name="city"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Town/City*!',
                    },
                  ]}
                >
                  <Input placeholder="Town/City*" />
                </Form.Item>
                <Form.Item
                  name="state"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your State/Region!',
                    },
                  ]}
                >
                  <Input placeholder="State/Region*" />
                </Form.Item>
                <Form.Item
                  name="postalCode"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Postal Code*!',
                    },
                  ]}
                >
                  <Input placeholder="Postal Code*" />
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <Button htmlType="submit">Continue</Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
