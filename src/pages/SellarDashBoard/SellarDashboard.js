import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Layout, Menu, Icon, Typography, Button } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { LeftOutlined } from '@ant-design/icons';

const SubMenu = Menu.SubMenu;
const { Title } = Typography;
import './sellerdashboard.css';
import PaymentDetails from './PaymentDetaisl';
import Shipping from './Shipping/Index';
import Active from './Active/index';
import Sold from './Sold/index';
import Unsold from './Unsold/index';
import Disputes from './Disputes/index';
import DisputesDetails from './Disputes/DisputesDetails';
import Reviews from './Reviews/index';
import Payment from './PaymentSetting/index';
import ListItems from './ListItems/index';
const SellarDashboard = () => {
  const [NavLinks, setNavLinks] = useState([
    'List an item',
    'Shipping',
    'Active',
    'Sold',
    'Unsold',
    'Disputes',
    'My reviews',
    'Payment settings',
  ]);
  const [mobView, setMobView] = useState(false);
  return (
    <Layout className="seller_sidebar">
      <div className="sellar-sidebar-mob" onClick={() => setMobView(!mobView)}>
        <Button>
          <LeftOutlined />
          Dashboard
        </Button>
      </div>

      <Sider className={!mobView ? '' : 'seller_sidebar visible'}>
        <Menu theme="Light" defaultSelectedKeys={['1']} mode="inline">
          <h3>Seller Dashboard</h3>
          {NavLinks.map((title, i) => {
            return (
              <Menu.Item key={i + 1} onClick={() => setMobView(!mobView)}>
                <Link to={`/sellar-dashboard/${title}`}>
                  <span>{title}</span>
                </Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout className="dashborad_main">
        {/* <ListItems /> */}
        <Content>
          <Route exact path={`/sellar-dashboard/`} component={ListItems} />
          <Route exact path={`/sellar-dashboard/List an item`} component={ListItems} />
          <Route exact path={`/sellar-dashboard/Shipping`} component={Shipping} />
          <Route exact path={`/sellar-dashboard/Active`} component={Active} />
          <Route exact path={`/sellar-dashboard/Sold`} component={Sold} />
          <Route exact path={`/sellar-dashboard/Unsold`} component={Unsold} />
          <Route exact path={`/sellar-dashboard/Disputes`} component={Disputes} />
          <Route exact path={`/sellar-dashboard/Disputes-details`} component={DisputesDetails} />
          <Route exact path={`/sellar-dashboard/My reviews`} component={Reviews} />
          <Route exact path={`/sellar-dashboard/Payment settings`} component={Payment} />
        </Content>
      </Layout>
    </Layout>
  );
};
export default SellarDashboard;
