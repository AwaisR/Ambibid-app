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
export default function SellarContactNo({ onFinish, onFinishFailed }) {
  const [form] = Form.useForm();

  return (
    <div>
      <div>
        <div className="quick_access">
          <Row>
            <Col span={24}>
              <h2>Please enter your phone number</h2>
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
                <Form.Item name="phoneCountry" rules={[{ required: true }]}>
                  <Select placeholder="Choose country code*">
                    {countries.map((count) => (
                      <Option value={count.code}>{count.code}</Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Phone Number!',
                    },
                  ]}
                >
                  <Input placeholder="Phone Number*" />
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
