import React from 'react';
import './index.css';
import { Row, Col, Typography, Image, Button, Input, Select, Checkbox } from 'antd';
const { Title, Text, Paragraph } = Typography;
const { Option } = Select;

const Settings = () => {
  const firstExample = {
    size: 30,
    value: 2.5,
    edit: false,
  };
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <>
      <div className="account_setting_outer">
        <Row>
          <Col span={24}>
            <div className="account_setting_form">
              <div className="settings-heading">
                <Title level={5}>Profile information</Title>
              </div>
              <form>
                <div className="setting-feild">
                  <Input placeholder="Seller profile name" />
                  <Input placeholder="First name" />
                  <Input placeholder="Last name" />
                  <Select defaultValue="Currency" onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                  <Select defaultValue="Language" onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                  <Button className="save_btn">Save</Button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </div>

      <div className="account_setting_outer">
        <Row>
          <Col span={24}>
            <div className="account_setting_form">
              <div className="settings-heading">
                <Title level={5}>Sign in & security</Title>
              </div>
              <form>
                <div className="setting-feild">
                  <Input placeholder="email@email.com" />
                  <Input placeholder="Password" />
                  <Button className="save_btn">Save</Button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </div>

      <div className="account_setting_outer">
        <Row>
          <Col span={24}>
            <div className="account_setting_form notification_form">
              <div className="settings-heading">
                <Title level={5}>Notification settings</Title>
              </div>
              <form>
                <div className="setting-feild">
                  <div className="setting-checkbox">
                    <Checkbox onChange={onChange}>
                      <strong className="check_box_heading">Wishlist notifications</strong>
                    </Checkbox>
                    <Text>Get notified so you never miss out on things you want to buy</Text>
                  </div>
                  <div className="setting-checkbox">
                    <Checkbox onChange={onChange}>
                      {' '}
                      <strong className="check_box_heading">My bids</strong>
                    </Checkbox>
                    <Text>Get notified so you never lose out on an auction</Text>
                  </div>
                  <div className="setting-checkbox">
                    <Checkbox onChange={onChange}>
                      <strong className="check_box_heading">My items for sale</strong>
                    </Checkbox>
                    <Text>Stay up to date about your items for sale</Text>
                  </div>
                  <div className="setting-checkbox">
                    <Checkbox onChange={onChange}>
                      <strong className="check_box_heading">Newsletter emails</strong>
                    </Checkbox>
                    <Text>Stay up to date about the Amibid marketplace</Text>
                  </div>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </div>

      <div className="account_setting_outer">
        <Row>
          <Col span={24}>
            <div className="account_setting_form">
              <div className="settings-heading">
                <Title level={5}>Sign in & security</Title>
              </div>
              <form>
                <div className="setting-feild">
                  <Input placeholder="email@email.com" />
                  <Input placeholder="Password" />
                  <Button className="save_btn">Save</Button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </div>
      <div className="account_setting_outer">
        <Row>
          <Col span={24}>
            <div className="account_setting_form">
              <div className="settings-heading">
                <Title level={5}>Deactivate my account</Title>
                <Text>
                  You can reactivate it by getting in touch with our customer support later.
                </Text>
              </div>
              <form>
                <div className="setting-feild">
                  <div className="setting-checkbox">
                    <Checkbox onChange={onChange}>
                      <strong className="check_box_heading">Are you sure you?</strong>
                    </Checkbox>
                  </div>
                  <Button className="save_btn">Deactivate account</Button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Settings;
