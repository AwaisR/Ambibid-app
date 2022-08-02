import React, { useState, useEffect } from 'react';
import PageLayout from '../../layout/PageLayout';
import { Steps, Popover, Layout, Row, Col, Form, Input, Button } from 'antd';
import SellerDetailForm from './SellerDetailForm';
import SellerAdressForm from './SellerAdressForm';
import SellarContactNo from './SellarContactNo';
import EmailVarify from './EmailVarify';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../../store/signUp/action';
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
const customDot = (dot, { status, index }) => {
  return dot;
};
export default function SellarAccount() {
  const [steps, setSteps] = useState(0);
  const dispatch = useDispatch();
  const [sellarAccounts, setSellarAcounts] = useState('');
  const onFinish = (values) => {
    setSellarAcounts((prevVal) => {
      return { ...prevVal, ...values };
    });
    setSteps(steps + 1);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  if (steps == 3) {
    const email = localStorage.getItem('email');
    const uid = localStorage.getItem('uid');
    const data = {
      ...sellarAccounts,
      email: email,
      uid: uid,
    };
    dispatch(userActions.sellarAccounts(data));
  }
  const renderComponent = () => {
    switch (steps) {
      case 0:
        return <SellerDetailForm onFinish={onFinish} onFinishFailed={onFinishFailed} />;
        break;
      case 1:
        return <SellerAdressForm onFinish={onFinish} onFinishFailed={onFinishFailed} />;
        break;
      case 2:
        return <SellarContactNo onFinish={onFinish} onFinishFailed={onFinishFailed} />;
        break;
      case 3:
        return <EmailVarify />;
        break;
      default:
        break;
    }
  };
  console.log('sellarAccounts', sellarAccounts);
  return (
    <PageLayout>
      <Layout className="site-layout-background">
        <div className="bg_white">
          {renderComponent()}
          <div className="steper">
            <Steps current={steps} progressDot={customDot}>
              <Step />
              <Step />
              <Step />
              <Step />
            </Steps>
          </div>
        </div>
      </Layout>
    </PageLayout>
  );
}
