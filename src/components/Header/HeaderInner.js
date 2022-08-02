import React, { useState, useEffect } from 'react';
import { Menu, Layout, Row, Col, Form, Select, Input, AutoComplete } from 'antd';
import { UnorderedListOutlined, DownOutlined } from '@ant-design/icons';
import { Popover, Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './style.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import UserAccount from '../../assests/account.svg';
const { Option } = Select;
const { SubMenu } = Menu;
const Item = Menu.Item;

const { Header } = Layout;
export default function HeaderInner() {
  let location = useLocation();
  let history = useHistory();
  const name = localStorage.getItem('emailuSer');
  const displayName = localStorage.getItem('displayName');

  const { t, i18n } = useTranslation();
  const [options, setOptions] = useState([]);
  const [category, setCatgory] = useState([]);
  const [focus, setFocus] = useState(false);
  const sellerAccount = localStorage.getItem('sellerAccount');
  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value) => {
    console.log('onSelect', value);
  };
  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }

  function onSearch(val) {
    console.log('search:', val);
  }
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('uid');
    localStorage.removeItem('emailuSer');
    localStorage.removeItem('displayName');
    history.push('/');
  };
  useEffect(() => {
    axios
      .post('https://us-central1-amibid-24a48.cloudfunctions.net/default-getCategories-default', {
        data: {},
      })
      .then(
        (response) => {
          const status = response.data.result.status;
          const message = response.data.result.message;
          const data = response.data.result.data;
          if (status == 200) {
            // setLoading(false);
            setCatgory(data.categories);
          }
        },
        (error) => {
          console.log('error', error);
        },
      );
  }, []);
  const handleFocus = () => {};
  return (
    <div className="header">
      <section className="container-top blue-grid">
        <Row gutter={15} className="header-row">
          <Col
            xs={{ span: 12 }}
            sm={{ span: 12 }}
            md={{ span: 3 }}
            lg={{ span: 2 }}
            xl={{ span: 2 }}
            xxl={{ span: 2 }}
          >
            <div className="logo-section">
              <Link to="/homepage">
                <h1 className="logo">{t('amibid')}</h1>
              </Link>
            </div>
          </Col>
          <Col
            xs={{ span: 12 }}
            sm={{ span: 12 }}
            md={{ span: 3 }}
            lg={{ span: 3 }}
            xl={{ span: 3 }}
            xxl={{ span: 2 }}
          >
            <Link to="/catagories">
              <div className="catagories">
                <UnorderedListOutlined className="icons" />
                <h1 className="catagories-text">{t('categories')}</h1>
              </div>
            </Link>
          </Col>

          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 10 }}
            lg={{ span: 13 }}
            xl={{ span: 13 }}
            xxl={{ span: 14 }}
            className="search-option"
          >
            <Form
              name="complex-form "
              className={focus ? 'header_form active' : 'header_form'}
              onFinish={onFinish}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
            >
              <Form.Item>
                <div className="all_search" style={{ width: '10%' }}>
                  <Select
                    showSearch
                    style={{ width: '100% ', borderRadius: '5px 0 0px 5px' }}
                    className="dropdown-select"
                    placeholder={t('all')}
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {category &&
                      category.map((item, i) => (
                        <Option value={item.name} key={i}>
                          {item.name}
                        </Option>
                      ))}
                  </Select>
                </div>
                <div style={{ width: '90%' }}>
                  <AutoComplete
                    dropdownMatchSelectWidth={252}
                    options={options}
                    onSelect={onSelect}
                    onSearch={handleSearch}
                  >
                    <Input.Search
                      size="large"
                      placeholder=""
                      enterButton
                      style={{ marginLeft: '-2px' }}
                    />
                  </AutoComplete>
                </div>
              </Form.Item>
            </Form>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            xl={{ span: 6 }}
            xxl={{ span: 6 }}
            className="menu_right"
          >
            <Menu mode="horizontal">
              <Menu.Item className="tittle-drop" key="watchlist">
                <Link to="/my-account/Watchlist"> {t('watchlist')}</Link>
              </Menu.Item>
              <Menu.Item className="tittle-drop" key="sell">
                {!sellerAccount ? (
                  <Link to="/seller-login">{t('sell')}</Link>
                ) : (
                  <Link to="/sellar-dashboard">{t('sell')}</Link>
                )}
              </Menu.Item>
              {name || displayName ? (
                <SubMenu
                  key="sub2"
                  className="tittle-drop mar_left"
                  title={name ? `Hi ${name.split('@')[0]}` : displayName ? `Hi ${displayName}` : ''}
                  icon={<DownOutlined className="arrow_down" />}
                >
                  <Menu.Item key="9" className="profile_drop">
                    <Link to="/my-account/My bids">My Bids</Link>
                  </Menu.Item>
                  <Menu.Item key="10" className="profile_drop">
                    <Link to="/my-account">My Account</Link>
                  </Menu.Item>

                  <Menu.Item key="Sellar Account" className="profile_drop">
                    <Link to="/sellar-dashboard"> Sellar Account</Link>
                  </Menu.Item>
                  <Menu.Item key="Sign Out" className="profile_drop" onClick={handleLogout}>
                    Sign Out
                  </Menu.Item>
                </SubMenu>
              ) : (
                // <Menu.Item key="sign" className="user-account-head">
                //   {t('signIn')} &nbsp; <img src={UserAccount} className="user-account" />
                // </Menu.Item>
                <Menu.Item key="sign" className="user-account-head">
                  {t('signIn')} &nbsp; <img src={UserAccount} className="user-account" />
                </Menu.Item>
              )}
            </Menu>
          </Col>
        </Row>
      </section>
    </div>
  );
}
