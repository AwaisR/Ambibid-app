import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, QuestionCircleOutlined, ContactsOutlined } from '@ant-design/icons';
import './MainLayout.less';
import FacebookIcon from '../assests/fb.png';
import InstaIcon from '../assests/insta.png';
import TwitterIcon from '../assests/twitter.png';
// import { getToken, onMessageListener, requestFirebaseNotificationPermission } from '../firebase';

const { Footer, Sider } = Layout;

const rootRoutes = ['/', '/about', '/contact'];
const aboutSubRoutes = ['/about/me', '/about/company'];
import HeadersSection from '../components/Header/index';
import { withTranslation } from 'react-i18next';
const MainLayout = ({ children, t }) => {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: '', body: '' });
  const [isTokenFound, setTokenFound] = useState(false);

  // requestFirebaseNotificationPermission()
  //   .then((firebaseToken) => {
  //     // eslint-disable-next-line no-console
  //     console.log(firebaseToken);
  //   })
  //   .catch((err) => {
  //     return err;
  //   });
  // getToken(setTokenFound);

  // onMessageListener()
  //   .then((payload) => {
  //     setShow(true);
  //     setNotification({ title: payload.notification.title, body: payload.notification.body });
  //     console.log(payload);
  //   })
  //   .catch((err) => console.log('failed: ', err));

  return (
    <Layout>
      {/* {isTokenFound && <h1> Notification permission enabled 👍🏻 </h1>}
      {!isTokenFound && <h1> Need notification permission ❗️ </h1>} */}
      <HeadersSection />
      <Layout>
        {children}
        <Footer className="footer">
          <Row>
            <Col
              xs={{ span: 12 }}
              sm={{ span: 5, offset: 3 }}
              md={{ span: 5, offset: 3 }}
              lg={{ span: 5, offset: 3 }}
              xl={{ span: 5, offset: 3 }}
              xxl={{ span: 5, offset: 3 }}
            >
              <p style={{ color: '#FCA311', fontSize: 22, textAlign: 'justify' }}>{t('amibid')}</p>
              <p style={{ color: 'white', textAlign: 'justify' }}>
                <Link to="/about" style={{ color: 'white' }}>
                  {t('footer.about')}
                </Link>
              </p>
              <p style={{ color: 'white', textAlign: 'justify' }}>{t('footer.blog')}</p>
              <p style={{ color: 'white', textAlign: 'justify' }}>{t('footer.press')}</p>
              <p style={{ color: 'white', textAlign: 'justify' }}>
                <Link to="/terms-conditions" style={{ color: 'white' }}>
                  {t('footer.terms')}
                </Link>
              </p>
            </Col>
            <Col
              xs={{ span: 12 }}
              sm={{ span: 5 }}
              md={{ span: 5 }}
              lg={{ span: 5 }}
              xl={{ span: 5 }}
              xxl={{ span: 5 }}
            >
              <p style={{ color: '#FCA311', fontSize: 22, textAlign: 'justify' }}>
                {t('footer.selling')}
              </p>
              <p style={{ color: 'white', textAlign: 'justify' }}>{t('footer.Seller’s guide')}</p>
              <p style={{ color: 'white', textAlign: 'justify' }}>
                <Link to="/List-items" style={{ color: 'white' }}>
                  {t('footer.List an item')}
                </Link>
              </p>
              <p style={{ color: 'white', textAlign: 'justify' }}>
                <Link to="/contact-us" style={{ color: 'white' }}>
                  {t('footer.help')}
                </Link>
              </p>
            </Col>
            <Col
              xs={{ span: 12 }}
              sm={{ span: 5 }}
              md={{ span: 5 }}
              lg={{ span: 5 }}
              xl={{ span: 5 }}
              xxl={{ span: 5 }}
            >
              <p style={{ color: '#FCA311', fontSize: 22, textAlign: 'justify' }}>
                {t('footer.Buying')}
              </p>
              <p style={{ color: 'white', textAlign: 'justify' }}>
                <Link to="/catagories" style={{ color: 'white' }}>
                  {t('footer.Categories')}
                </Link>
              </p>
              <p style={{ color: 'white', textAlign: 'justify' }}>
                <Link to="/my-account/Watchlist" style={{ color: 'white' }}>
                  {t('footer.Watchlist')}
                </Link>
              </p>
              <p style={{ color: 'white', textAlign: 'justify' }}>{t('footer.Buyer’s guide')}</p>
            </Col>
            <Col
              xs={{ span: 12 }}
              sm={{ span: 5 }}
              md={{ span: 5 }}
              lg={{ span: 5 }}
              xl={{ span: 5 }}
              xxl={{ span: 5 }}
            >
              <p style={{ color: '#FCA311', fontSize: 22, textAlign: 'justify' }}>
                {t('footer.Account')}
              </p>
              <p style={{ color: 'white', textAlign: 'justify' }}>
                <Link to="/" style={{ color: 'white' }}>
                  {t('footer.Log in')}
                </Link>
              </p>
              <p style={{ color: 'white', textAlign: 'justify' }}>
                <Link to="/user-account" style={{ color: 'white' }}>
                  {t('footer.Register')}
                </Link>
              </p>
              <p style={{ color: 'white', textAlign: 'justify' }}>
                <Link to="/sellar-dashboard" style={{ color: 'white' }}>
                  {t('footer.Seller Dashboard')}
                </Link>
              </p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  width: 108,
                  marginTop: 10,
                }}
              >
                <img src={FacebookIcon} />
                <img src={InstaIcon} />
                <img src={TwitterIcon} />
              </div>
            </Col>
          </Row>
        </Footer>
      </Layout>
    </Layout>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
export default withTranslation()(MainLayout);
