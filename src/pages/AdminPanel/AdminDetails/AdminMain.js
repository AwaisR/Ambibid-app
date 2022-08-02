import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Layout, Menu, Icon, Typography, Button } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { LeftOutlined } from '@ant-design/icons';
import SubCat from './Categories/SubCat';
const SubMenu = Menu.SubMenu;
const { Title } = Typography;
import './AdminMain.css';
import Coustomers from './Coustomers/index';
import Sales from './Sales/index';
import Submissions from './Submissions/index';
import RejectionNote from './Submissions/RejectionNote';
import Categories from './Categories/index';
import NewCat from './Categories/NewCat';
import SellerForm from './SellerForms/index';
import SupportCenter from './SupportCenter';
import NewSuport from './SupportCenter/NewSuport';
import Submishan from './SupportCenter/Submishan';
import NewCatForm from './SellerForms/NewCatForm';
import AddFeilds from './SellerForms/AddFeilds';
import Disputes from './Disputes/index';
import DisputesDetails from './Disputes/DisputesDetails';
import AdminSetting from './AdminSetting';
const AdminMain = () => {
  const [NavLinks, setNavLinks] = useState([
    'customer',
    'Submissions',
    'sales',
    'Categories',
    'Seller forms',
    'Support Centre',
    'Disputes',
    'Admin Setting',
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
          {NavLinks.map((title, i) => {
            return (
              <Menu.Item key={i + 1} onClick={() => setMobView(!mobView)}>
                <Link to={`/admin-details/${title}`}>
                  <span>{title}</span>
                </Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>

      <Layout className="dashborad_main">
        <Content>
          <Route exact path={`/admin-details/`} component={Coustomers} />
          <Route exact path={`/admin-details/customer`} component={Coustomers} />
          <Route exact path={`/admin-details/sales`} component={Sales} />
          <Route exact path={`/admin-details/Submissions`} component={Submissions} />
          <Route exact path={`/admin-details/rejection-note`} component={RejectionNote} />
          <Route exact path={`/admin-details/Categories`} component={Categories} />
          <Route exact path={`/admin-details/new-Cat`} component={NewCat} />
          <Route exact path={`/admin-details/new-Subcat`} component={SubCat} />
          <Route exact path={`/admin-details/Seller forms`} component={SellerForm} />
          <Route exact path={`/admin-details/new-Catform`} component={NewCatForm} />
          <Route exact path={`/admin-details/add-feilds`} component={AddFeilds} />
          <Route exact path={`/admin-details/add-feilds/:id`} component={AddFeilds} />
          <Route exact path={`/admin-details/Support Centre`} component={SupportCenter} />
          <Route exact path={`/admin-details/new-support`} component={NewSuport} />
          <Route exact path={`/admin-details/submishan/:id`} component={Submishan} />
          <Route exact path={`/admin-details/Disputes`} component={Disputes} />
          <Route exact path={`/admin-details/disputes-details/:id`} component={DisputesDetails} />
          <Route exact path={`/admin-details/Admin Setting`} component={AdminSetting} />

          {/* <Route exact path={`/my-account/Watchlist`} component={Watchlist} />
          <Route exact path={`/my-account/Settings`} component={Settings} />
          <Route exact path={`/my-account/Payment details`} component={Payment} />
          <Route exact path={`/my-account/Disputes`} component={Disputes} />
          <Route exact path={`/my-account/raise-disputes`} component={RaiseDisputes} />  */}
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminMain;
