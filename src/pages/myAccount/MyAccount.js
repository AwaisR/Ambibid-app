import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Layout, Menu, Icon, Typography, Button } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { LeftOutlined } from '@ant-design/icons';

const SubMenu = Menu.SubMenu;
const { Title } = Typography;
import './myaccount.css';
import PaymentDetails from './PaymentDetaisl';
import MyOrders from './myorders/index';
import MyBids from './MyBids/index';
import PurchaseHistory from './PurchaseHistory/index';
import Watchlist from './Watchlist/index';
import DisputesDetails from './Disputes/DisputesDetails';
import Disputes from './Disputes/index';
import RaiseDisputes from './Disputes/RaiseDisputes';
import Settings from './Settings/index';
import LeaveReply from './PurchaseHistory/LeaveReply';
import Payment from './PaymentSetting/index';
import ListItems from './ListItems/index';
const SellarDashboard = () => {
  const [NavLinks, setNavLinks] = useState([
    'My bids',
    'My orders',
    'Purchase history',
    'Watchlist',
    'Settings',
    'Payment details',
    'Disputes',
  ]);
  const [mobView, setMobView] = useState(false);
  return (
    <Layout className="seller_sidebar my_account_bar">
      <div className="sellar-sidebar-mob" onClick={() => setMobView(!mobView)}>
        <Button>
          <LeftOutlined />
          Dashboard
        </Button>
      </div>
      <Sider className={!mobView ? '' : 'seller_sidebar  visible'}>
        <Menu theme="Light" defaultSelectedKeys={['1']} mode="inline">
          <h3>My Account</h3>
          {NavLinks.map((title, i) => {
            return (
              <Menu.Item key={i + 1} onClick={() => setMobView(!mobView)}>
                <Link to={`/my-account/${title}`}>
                  <span>{title}</span>
                </Link>
              </Menu.Item>
            );
          })}
        </Menu>
        <div className="sidebar_info_btn">
          <p>Got something to sell?</p>
          <Button>
            <Link to="/sell-items">List an item</Link>
          </Button>
        </div>
      </Sider>

      <Layout className="dashborad_main">
        <Content>
          <Route exact path={`/my-account/`} component={MyBids} />
          <Route exact path={`/my-account/My bids`} component={MyBids} />
          <Route exact path={`/my-account/My orders`} component={MyOrders} />
          <Route exact path={`/my-account/Purchase history`} component={PurchaseHistory} />
          <Route exact path={`/my-account/Watchlist`} component={Watchlist} />
          <Route exact path={`/my-account/Settings`} component={Settings} />
          <Route exact path={`/my-account/Payment details`} component={Payment} />
          <Route exact path={`/my-account/Disputes`} component={Disputes} />
          <Route exact path={`/my-account/replies:id`} component={LeaveReply} />
          <Route exact path={`/my-account/raise-disputes`} component={RaiseDisputes} />
          <Route exact path={`/my-account/disputes-details/:id`} component={DisputesDetails} />
        </Content>
      </Layout>
    </Layout>
  );
};
export default SellarDashboard;
