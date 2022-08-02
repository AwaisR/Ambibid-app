import React, { useState, useEffect } from 'react';
import { Layout, Typography, Input, Button, Select, notification } from 'antd';
import { Link } from 'react-router-dom';
import './RaiseDisputes.css';
import { useSelector, useDispatch } from 'react-redux';
import { MyAccountAction } from '../../../store/myAccount/action';
import axios from 'axios';
const { Option } = Select;

const { Text, Title } = Typography;
const { TextArea } = Input;

const RaiseDisputes = () => {
  let dispatch = useDispatch();
  const state = useSelector((state) => state.myAccountReducer);
  const { NewDisputes } = state;
  const [disputesData, setDisputesData] = useState({
    itemId: '',
    message: '',
  });
  const handleChangeSelect = (value) => {
    setDisputesData({
      ...disputesData,
      itemId: value,
    });
  };
  useEffect(() => {
    dispatch(MyAccountAction.getNewDisputes());
  }, []);
  function handleChange(e) {
    setDisputesData({
      ...disputesData,
      message: e.target.value,
    });
  }
  const openNotification = (description) => {
    notification.open({
      message: 'Error',
      description: description,
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };
  const { itemId, message } = disputesData;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://us-central1-amibid-24a48.cloudfunctions.net/default-raiseDispute-default', {
        data: {
          uid: localStorage.getItem('uid'),
          // uid: '001',
          itemId,
          message,
        },
      })
      .then(
        (response) => {
          const status = response.data.result.status;
          const message = response.data.result.message;
          if (status == 200) {
            setDisputesData({
              itemId: '',
              message: '',
            });
            history.push('/Submited-disputes');
          }
          if (status == 400) {
            openNotification(message);
          }
        },
        (error) => {
          console.log('error', error);
        },
      );
  };
  return (
    <>
      <Layout>
        <div className="raise_disputes_outer">
          <div className="raise_disputes_main">
            <div className="raise_disputes_head">
              <Title level={5}>New dispute</Title>
              <Text>
                <span>Raising a dispute</span>
                Please be as clear in explaining your issue as possible. We aim to get in touch
                within the next 48 hours regarding this.
              </Text>
            </div>
            <div className="rasie_drop">
              <Select defaultValue="Select item*" onChange={handleChangeSelect}>
                {NewDisputes.map((item) => (
                  <Option value={item.id}>{item.itemName}</Option>
                ))}
              </Select>
            </div>
            <div className="rasie_textarea">
              <Text>Message</Text>
              <TextArea
                rows={8}
                name="message"
                placeholder="Give as much information about your dispute as possible to help us resolve it."
                onChange={handleChange}
                value={disputesData.message}
              />
              <span className="text_right">
                {2000 - disputesData.message.length} characters left
              </span>
            </div>
            <div className="rasie_btn">
              <Button onClick={handleSubmit}>Submit</Button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default RaiseDisputes;
