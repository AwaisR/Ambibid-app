import React, { useEffect } from 'react';
import './accountDetails.css';
import { Row, Col, Layout, Typography, Form, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../../store/signUp/action';
import { useLocation } from 'react-router-dom';

const { Paragraph } = Typography;
const layout = {
  wrapperCol: {
    span: 24,
  },
};
const { Content } = Layout;
const tailLayout = {
  wrapperCol: {
    span: 24,
  },
};
export default function AccountDetails({ ChangePageType }) {
  const dispatch = useDispatch();
  let location = useLocation();
  const Userstate = useSelector((state) => state.userSignUp);
  const onFinish = (values) => {
    dispatch(userActions.userAccountCreate(values, location.state));
    // ChangePageType('Sellar');
  };
  useEffect(() => {
    if (Userstate.signUp) ChangePageType('Sellar');
  }, [Userstate]);
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Layout className="site-layout-background">
      <div className="bg_white">
        <div className="quick_access">
          <Row>
            <Col span={24}>
              <h2>Welcome to your Amibid account</h2>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <p>
                We want to be able to give you the best service possible, that’s why we need a
                little more information about you
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
                  name="PhoneNumber"
                  rules={[
                    {
                      required: true,
                      message: 'Please Enter your Phone Number!',
                    },
                  ]}
                >
                  <Input placeholder="Phone Number*" />
                </Form.Item>

                <Form.Item
                  name="FirstName"
                  rules={[
                    {
                      required: true,
                      message: 'Please Enter your First Name!',
                    },
                  ]}
                >
                  <Input placeholder="First Name*" />
                </Form.Item>
                <Form.Item
                  name="LastName"
                  rules={[
                    {
                      required: true,
                      message: 'Please Enter your Last Name!',
                    },
                  ]}
                >
                  <Input placeholder="LastName*" />
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <Button htmlType="submit">Continue</Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  );
}
