import React from 'react';
import PageLayout from '../../layout/PageLayout';
import { Row, Col, Form, Layout, Input, Button, notification } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './index.css';
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
export default function Index() {
  let history = useHistory();
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
  const onFinish = (values) => {
    axios
      .post('https://us-central1-amibid-24a48.cloudfunctions.net/admin1-adminLogin-default', {
        data: {
          email: values.username,
          password: values.password,
        },
      })
      .then(
        (response) => {
          const status = response.data.result.status;
          const message = response.data.result.message;
          const data = response.data.result.data;
          if (status === 200) {
            localStorage.setItem('adminId', data.id);
            history.push('/admin-details');
            // openNotificationWithIcon('success', message);
          }
          if (status === 400) {
            openNotificationWithIcon('error', message);
            // openNotificationWithIcon('error', message);
          }
        },
        (error) => {
          console.log('error', error);
        },
      );
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <PageLayout>
      <Layout className="site-layout-background">
        <div className="bg_white">
          <div className="forget_pasw">
            <Row>
              <Col span={24} className="forget_head ">
                <p>
                  If you don’t have access,
                  <br />
                  get in touch via email.
                </p>
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
                  name="username"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input placeholder="Email address" />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password placeholder="Password" />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Sign in
                  </Button>
                </Form.Item>
                <Row>
                  <Col span={24}>
                    <p>
                      By having an Amibid Admin account, you agree to the Amibid privacy policy and
                      terms and conditions
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
