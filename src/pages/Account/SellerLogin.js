import React from 'react';
import './sellarAccount.css';
import { Input, Tabs, Button, Layout, Menu, Card, Row, Col, Tag, Typography } from 'antd';
import { Form, Checkbox } from 'antd';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import LoginPlatform from './LoginPlatform';
import { Link } from 'react-router-dom';
import View from '../../assests/view.svg';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PaymentMethod from './PaymentMethod.js';
import NeedHelp from './NeedHelp.js';
import StillHelp from './StillHelp.js';
import SellerLoginPics from './SellerLoginPics';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 24,
  },
};
const tailLayout = {
  wrapperCol: {
    span: 24,
  },
};
const { TabPane } = Tabs;
const { Content } = Layout;

const { Paragraph } = Typography;
function callback(key) {
  console.log(key);
}
export default function SellerLogin() {
  let history = useHistory();
  const { t, i18n } = useTranslation();
  const onFinish = (values) => {
    console.log('Success:', values);
    history.push('/homepage');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Layout className="site-layout-background">
      <Content style={{ overflow: 'initial', background: 'transparent' }}>
        <div className="sellar_main_bg">
          <div className="sellar_main_outer">
            <Row>
              <Col lg={10} md={24}>
                <div className="sellar_main_left">
                  <div className="Signup">
                    <div className="Signup-inner">
                      <div className="input">
                        <Tabs defaultActiveKey="1" onChange={callback}>
                          {/* --register_form-- */}
                          <TabPane tab={t('register')} key="1">
                            <div className="Input-Section">
                              <Form
                                {...layout}
                                name="basic"
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
                                      message: t('emailError'),
                                    },
                                  ]}
                                >
                                  <Input placeholder={t('email')} />
                                </Form.Item>

                                <Form.Item
                                  name="password"
                                  rules={[
                                    {
                                      required: true,
                                      message: t('passwordError'),
                                    },
                                  ]}
                                >
                                  <Input.Password placeholder={t('password')} />
                                </Form.Item>
                                <Form.Item {...tailLayout}>
                                  <Button type="primary" htmlType="submit">
                                    <Link to="/seller-account">{t('account-creation')}</Link>
                                  </Button>
                                  <Paragraph className="sign_text">{t('signText')}</Paragraph>
                                  <LoginPlatform />
                                </Form.Item>
                              </Form>
                            </div>
                          </TabPane>
                          {/* --login_form-- */}
                          <TabPane tab={t('signin')} key="2">
                            <div className="Input-Section">
                              <Form
                                {...layout}
                                name="basic"
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
                                      message: t('email-error'),
                                    },
                                  ]}
                                >
                                  <Input placeholder={t('email')} className="marg_btm" />
                                </Form.Item>

                                <Form.Item
                                  name="password"
                                  rules={[
                                    {
                                      required: true,
                                      message: t('password-error'),
                                    },
                                  ]}
                                >
                                  <Input.Password placeholder={t('password')} />
                                </Form.Item>
                                <Form.Item {...tailLayout}>
                                  <Button type="primary" htmlType="submit">
                                    {t('signInS')}
                                  </Button>
                                  <Paragraph className="sign_text">
                                    <Link to="/forget-password">
                                      <a>{t('forgetPassowrd')}</a>
                                    </Link>
                                  </Paragraph>
                                  <LoginPlatform />
                                </Form.Item>
                              </Form>
                            </div>
                          </TabPane>
                        </Tabs>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={14} md={24}>
                <SellerLoginPics />
              </Col>
            </Row>
          </div>
        </div>

        <div className="paymentMethod_outer_bg">
          <PaymentMethod />
        </div>
        <div className="paymentMethod_outer_bg">
          <NeedHelp />
        </div>
        <div className="still_outer_bg">
          <StillHelp />
        </div>
      </Content>
    </Layout>
  );
}
