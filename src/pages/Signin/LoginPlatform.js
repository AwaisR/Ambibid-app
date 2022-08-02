import React, { useEffect } from 'react';

import { Input, Tabs, Button, Layout, Menu, Card, Row, Col, Tag, Typography } from 'antd';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FaceBook from '../../assests/facebook.png';
import { useHistory } from 'react-router-dom';
import { userActions } from '../../store/signUp/action';
import { useSelector, useDispatch } from 'react-redux';

import firebase from '../../firebase';
const { TabPane } = Tabs;
const { Content } = Layout;
export default function LoginPlatform() {
  const { t, i18n } = useTranslation();
  let history = useHistory();
  const dispatch = useDispatch();
  var provider = new firebase.auth.GoogleAuthProvider();

  const handleGoogleLogin = () => {
    dispatch(userActions.googleSignUp(provider, history));
  };
  const handleFacebookLogin = () => {};
  return (
    <div>
      <Row>
        <Col xs={24}>
          <a className="access-hed">{t('quick-access')}</a>
        </Col>
      </Row>

      <Row>
        <Col xs={24}>
          <Tag className="login-plateform">
            <a onClick={handleGoogleLogin}>
              <GoogleOutlined className="google-icons" />
              {t('google-signup')}
            </a>
          </Tag>
        </Col>
        <Col xs={24}>
          <Tag className="login-plateform">
            <a href="#">
              <img src={FaceBook} className="facebook-icons" onClick={handleFacebookLogin} />
              {t('facebok-signup')}
              {/* <FacebookOutlined className="facebook-icons" />
              {t('facebok-signup')} */}
            </a>
          </Tag>
        </Col>
      </Row>
    </div>
  );
}
