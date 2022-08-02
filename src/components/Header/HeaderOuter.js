import React from 'react';
import { Row, Col, Menu, Select } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import flag from '../../assests/united-kingdom.png';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
const { Option } = Select;
const { SubMenu } = Menu;
export default function HeaderOuter() {
  const { t, i18n } = useTranslation('translation');
  function handleChange(value) {
    i18n.changeLanguage(`${value}`);
  }
  return (
    <div>
      <section className="container2 blue-grid">
        <Row gutter={40}>
          <Col span={24} className="pad-right">
            <Menu mode="horizontal" className="bottom-menu">
              <Menu.Item>
                <img src={flag} />
                <Select defaultValue="Eng" className="language-select" onChange={handleChange}>
                  <Option value="en">English</Option>
                  <Option value="sp">Spanish</Option>
                </Select>
              </Menu.Item>
              <Menu.Item key="GBP" icon={<DownOutlined />}>
                {t('gbp')}
              </Menu.Item>
              <Menu.Item key="about"> {t('about')}</Menu.Item>
              <Menu.Item key="blog"> {t('blog')}</Menu.Item>
              <Menu.Item key="help">
                <Link to="/support-center" style={{ color: 'white' }}>
                  {t('help')}
                </Link>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </section>
    </div>
  );
}
