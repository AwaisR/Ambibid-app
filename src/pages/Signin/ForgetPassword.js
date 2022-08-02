import React from 'react';
import PageLayout from '../../layout/PageLayout';
import { Row, Col, Form, Layout, Input, Button, notification } from 'antd';
import './forgetpassword.css';
import firebase from '../../firebase';
require('firebase/auth');
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
export default function ForgetPassword() {
  const openNotificationWithIcon = (type, messages, onCloseMsg) => {
    notification[type]({
      message: type,
      description: messages,
      onClose: () => {
        // onCloseMsg;
        // dispatch(userActions.CloseErrorMsg());
      },
    });
  };
  const onFinish = async (values) => {
    const config = {
      url: 'https://amibidapp.netlify.app/',
      // url: process.env.REACT_APP_FORGET_PASSOWRD_REDIRECT,
      handleCodeInApp: true,
    };
    firebase
      .auth()
      .sendPasswordResetEmail(values.Email, config)
      .then(function (user) {
        console.log('user', user);
        openNotificationWithIcon('success', 'please check your email to reset password');
      })
      .catch(function (e) {
        openNotificationWithIcon('error', e.message);

        console.log(e.message);
      });
  };

  const onFinishFailed = (errorInfo) => {};
  return (
    <PageLayout>
      <Layout className="site-layout-background">
        <div className="bg_white">
          <div className="forget_pasw">
            <Row>
              <Col span={24} className="forget_head">
                <h3>Forgot your password? Let’s reset it.</h3>
              </Col>
            </Row>
            <Row>
              <Form
                {...layout}
                name="basic"
                className="forget_data"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  name="Email"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Email!',
                    },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
                <Row>
                  <Col span={24}>
                    <p>
                      We will send you an email with a reset link. Please check your email folders
                      once you’ve hit ‘reset password’.
                    </p>
                  </Col>
                </Row>
              </Form>
            </Row>
          </div>
        </div>
      </Layout>
    </PageLayout>
  );
}
