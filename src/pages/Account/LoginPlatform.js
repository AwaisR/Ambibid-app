import React from 'react';

import { Input, Tabs, Button, Layout, Menu, Card, Row, Col, Tag, Typography } from 'antd';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FaceBook from '../../assests/facebook.png';
const { TabPane } = Tabs;
const { Content } = Layout;
export default function LoginPlatform() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Row>
        <Col xs={24}>
          <Link to="/user-account">
            <a className="access-hed">{t('quick-access')}</a>
          </Link>
        </Col>
      </Row>

      <Row>
        <Col xs={24}>
          <Tag className="login-plateform">
            <a href="#">
              <GoogleOutlined className="google-icons" />
              {t('google-signup')}
            </a>
          </Tag>
        </Col>
        <Col xs={24}>
          <Tag className="login-plateform">
            <a href="#">
              <img src={FaceBook} className="facebook-icons" />
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
