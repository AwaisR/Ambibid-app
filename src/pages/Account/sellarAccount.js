import React from 'react';
import './sellarAccount.css';
import { Link } from 'react-router-dom';
import { Row, Col, Typography, Layout, Form, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import AlertMsg from '../../components/Alerts/index';
const { Content } = Layout;
export default function SellarAccount() {
  const Userstate = useSelector((state) => state.userSignUp);
  const { SignUpSuccess } = Userstate;
  return (
    <Layout className="site-layout-background">
      {SignUpSuccess && <AlertMsg message={SignUpSuccess} type="success" title="Signup Success" />}
      <div className="bg_white">
        <div className="sellar_account">
          <Row>
            <Col span={24}>
              <h2>
                Looking to sell items too? <br />
                Create a seller account , it’ll only take a few seconds.
              </h2>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Link to="/seller-account">
                <Button>Create seller account</Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <a to="/">Maybe another time</a>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  );
}
