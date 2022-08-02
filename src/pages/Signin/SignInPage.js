import React from 'react';
import { Input, Tabs, Button, Layout, Menu, Card, Row, Col, Tag, Typography,notification } from 'antd';
import { Form } from 'antd';

import LoginPlatform from './LoginPlatform';
import { Link } from 'react-router-dom';

import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../../store/signUp/action';

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
export default function SignInPage() {
  let history = useHistory();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const state = useSelector((state) => state.userSignUp);
  const { ErrorMsg } = state;
  const onFinishSignIn = (values) => {
    dispatch(userActions.signInUser(values, history));
  };
  const onFinishCreateAccount = (values) => {
    dispatch(userActions.signUpUser(values, history));
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const openNotification = (msg,type,title) => {
    notification.open({
      message: type,
      description: msg,
      onClose: () => {
       dispatch(userActions.CloseErrorMsg())
      },
    });
  };
  return (
    <Layout className="site-layout-background">
      <Content style={{ overflow: 'initial' }}>
        <div className="">
          <div className="Signup">
            <div className="Signup-inner">
              {ErrorMsg && openNotification(ErrorMsg,"error","Error In Signin" )}
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
                        onFinish={onFinishCreateAccount}
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
                          <Input placeholder={t('email')} className="marg_btm" />
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
                            {t('account-creation')}
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
                        onFinish={onFinishSignIn}
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
      </Content>
    </Layout>
  );
}
