import React, { useEffect, useState } from 'react';
import './index.css';
import { currencyCode } from './Currency';
import { Row, Col, Typography, Image, Button, Input, Select, Checkbox, notification } from 'antd';
import axios from 'axios';
const { Title, Text, Paragraph } = Typography;
const { Option } = Select;

const Settings = () => {
  const [alert, setAlert] = useState('');
  const [profileInfo, setProfileInfo] = useState({});
  const [profileData, setProfileData] = useState({
    profileName: '',
    firstName: '',
    lastName: '',
    currency: '',
    language: '',
  });
  function handleChange(value) {
    setProfileData({
      ...profileData,
      currency: value,
    });
  }
  const handleChangelanguage = (value) => {
    setProfileData({
      ...profileData,
      language: value,
    });
  };
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  const hanldeChangeProfile = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };
  const openNotification = (msg, type, title) => {
    console.log('type', type);
    notification.open({
      message: type,
      description: msg,
      onClose: () => {
        setAlert('');
      },
    });
  };
  useEffect(() => {
    setProfileData({
      profileName: profileInfo.profileName,
      firstName: profileInfo.firstName,
      lastName: profileInfo.lastName,
      currency: profileInfo.currency,
      language: profileInfo.language,
    });
  }, [profileInfo]);
  useEffect(() => {
    axios
      .post('https://us-central1-amibid-24a48.cloudfunctions.net/default-userSignin-default', {
        data: {
          uid: localStorage.getItem('uid'),
          fcmToken: localStorage.getItem('token'),
        },
      })
      .then(
        (response) => {
          const status = response.data.result.status;
          const message = response.data.result.message;
          const data = response.data.result.data;
          if (status == 200) {
            setProfileInfo(data);
          }
          if (status == 400) {
            setAlert(message);
          }
        },
        (error) => {
          console.log('error', error);
        },
      );
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://us-central1-amibid-24a48.cloudfunctions.net/default-updateProfile-default', {
        data: {
          uid: localStorage.getItem('uid'),
          profileName,
          firstName,
          lastName,
          currency,
          language,
        },
      })
      .then(
        (response) => {
          const status = response.data.result.status;
          const message = response.data.result.message;
          const data = response.data.result.data;
          if (status == 200) {
            setAlert(message);
          }
          if (status == 400) {
            setAlert(message);
          }
        },
        (error) => {
          console.log('error', error);
        },
      );
  };
  const { profileName, firstName, lastName, currency, language } = profileData;
  return (
    <>
      <div className="account_setting_outer">
        <Row>
          <Col span={24}>
            <div className="account_setting_form">
              <div className="settings-heading">
                <Title level={5}>Profile information</Title>
              </div>
              {alert && openNotification(alert, 'profile Update')}
              <form>
                <div className="setting-feild">
                  <Input
                    placeholder="Seller profile name"
                    name="profileName"
                    value={profileName}
                    onChange={hanldeChangeProfile}
                  />
                  <Input
                    placeholder="First name"
                    name="firstName"
                    value={firstName}
                    onChange={hanldeChangeProfile}
                  />
                  <Input
                    placeholder="Last name"
                    name="lastName"
                    value={lastName}
                    onChange={hanldeChangeProfile}
                  />
                  <Select defaultValue="Currency" onChange={handleChange}>
                    {currencyCode.map((item) => (
                      <Option value={item}>{item}</Option>
                    ))}
                  </Select>
                  <Select defaultValue="Language" onChange={handleChangelanguage}>
                    <Option value="English">English</Option>
                    <Option value="Urdu">Urdu</Option>
                  </Select>
                  <Button className="save_btn" onClick={handleSubmit}>
                    Save
                  </Button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </div>

      {/* <div className="account_setting_outer">
        <Row>
          <Col span={24}>
            <div className="account_setting_form">
              <div className="settings-heading">
                <Title level={5}>Sign in & security</Title>
              </div>
              <form>
                <div className="setting-feild">
                  <Input placeholder="email@email.com" value={profileInfo.email} />
                  <Input placeholder="Password" />
                  <Button className="save_btn">Save</Button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </div> */}

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
                  <Input placeholder="email@email.com" value={profileInfo.email} />
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
