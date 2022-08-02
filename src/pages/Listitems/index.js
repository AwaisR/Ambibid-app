import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import { Layout, Menu, Icon, Typography, Button } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { LeftOutlined } from '@ant-design/icons';
import PageLayout from '../../layout/PageLayout';
const SubMenu = Menu.SubMenu;
const { Title, Text } = Typography;
import catagories from './catagory/index';
import Photos from './photos/index.js';
import ItemSpecifcs from './ItemSpecifcs/index';
import Pricing from './price/Index';
import AmbibidServics from './AmbibidServices/index';
import Shipping from './shiping/index';
import { useLocation, useHistory } from 'react-router-dom';
import './index.css';
const index = () => {
  let location = useLocation();
  const { name } = useParams();
  const [activeState, setActiveState] = useState(null);
  const [NavLinks, setNavLinks] = useState([
    'Catagory',
    'Photos',
    'Item specifics',
    'Pricing',
    'Amibid services',
    'Shipping',
  ]);
  const [mobView, setMobView] = useState(false);
  useEffect(() => {
    setActiveState(location.pathname.split('/')[2]);
  }, [location]);
  return (
    <>
      <PageLayout>
        <Layout className="site-layout-background ">
          <Layout className="seller_sidebar list_item_side_bar">
            <div className="sellar-sidebar-mob" onClick={() => setMobView(!mobView)}>
              <Button>
                <LeftOutlined />
                Dashboard
              </Button>
            </div>

            <Sider className={!mobView ? '' : 'seller_sidebar visible'}>
              <Menu theme="Light" defaultSelectedKeys={['1']} mode="inline">
                <h3>List an item</h3>
                <ul className="list_sidebar">
                  {NavLinks.map((title, i) => {
                    return (
                      <li
                        className={activeState === title || null ? 'actives' : ''}
                        key={i + 1}
                        onClick={() => setMobView(!mobView)}
                      >
                        {title}
                      </li>
                    );
                  })}
                </ul>
              </Menu>
              <Button className="draft_btn">Save to drafts</Button>
            </Sider>

            <Layout className="list_item_main">
              <Content>
                <Route exact path={`/List-items/`} component={catagories} />
                <Route exact path={`/List-items/Catagory`} component={catagories} />
                <Route exact path={`/List-items/Photos`} component={Photos} />
                <Route exact path={`/List-items/Item specifics`} component={ItemSpecifcs} />
                <Route exact path={`/List-items/Pricing`} component={Pricing} />
                <Route exact path={`/List-items/Amibid services`} component={AmbibidServics} />
                <Route exact path={`/List-items/Shipping`} component={Shipping} />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </PageLayout>
    </>
  );
};
export default index;
