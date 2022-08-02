import React from 'react';
import './style.css';
import { Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import AlertMsg from '../../components/Alerts/index';
export default function EmailVarify() {
  const Userstate = useSelector((state) => state.userSignUp);
  const { SignUpSuccess } = Userstate;
  return (
    <div>
      <div className="quick_access">
        {SignUpSuccess && (
          <AlertMsg message={SignUpSuccess} type="success" title="Sellar Account Success" />
        )}
        <Row>
          <Col span={24}>
            <h2>Please check your email inbox</h2>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <p>
              We’ve sent you an email to verify your account. Please open the URL sent your inbox to
              complete your account setup.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
