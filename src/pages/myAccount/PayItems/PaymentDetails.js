import React, { useState, useEffect } from 'react';
import { Row, Col, Typography, Image, Input, Button, Modal, Select, notification } from 'antd';
const { Title, Text } = Typography;
const { Option } = Select;
import { useSelector, useDispatch } from 'react-redux';
import { MyAccountAction } from '../../../store/myAccount/action';

export default function PaymentDetails({ isModalVisible, handleOk, handleCancel }) {
  const state = useSelector((state) => state.myAccountReducer);
  const { CardSucces } = state;
  let dispatch = useDispatch();
  const [paymentDetails, setPaymentDetails] = useState({
    number: '',
    exp_month: '',
    cvc: '',
    firstName: '',
    lastName: '',
  });
  const handleChangeValue = (e) => {
    setPaymentDetails({
      ...paymentDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleAddCArd = () => {
    let uid = localStorage.getItem('uid');
    const { number, exp_month, cvc } = paymentDetails;
    if (number && exp_month && cvc) {
      handleOk();
      dispatch(MyAccountAction.addCArd(paymentDetails, uid));
    }
    setPaymentDetails({
      number: '',
      exp_month: '',
      exp_year: '',
      cvc: '',
      firstName: '',
      lastName: '',
    });
  };
  const openNotification = (msg, type, title) => {
    notification.open({
      message: type,
      description: msg,
      onClose: () => {
        dispatch(MyAccountAction.getPaymentCArd());
        dispatch(MyAccountAction.CloseErrorMsg());
      },
    });
  };
  const { number, exp_month, cvc, firstName, lastName } = paymentDetails;
  return (
    <div>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        className="shiping_form_outer"
        onCancel={handleCancel}
        footer={null}
      >
        {CardSucces ? openNotification(CardSucces, 'Add card address') : ''}
        <div className="model-header">
          <Title>Payment details </Title>
        </div>
        <div className="model-items">
          <Text>Card number</Text>
          <Input
            name="number"
            value={number}
            onChange={handleChangeValue}
            placeholder="Enter the 16 digit number on your card"
          />
        </div>
        <div className="model-items">
          <Text>Expiry date</Text>
          <Input
            name="exp_month"
            value={exp_month}
            onChange={handleChangeValue}
            placeholder="Enter the expiry date"
            type="Date"
          />
        </div>
        <div className="model-items">
          <Text>Security code/CVC</Text>
          <Input
            name="cvc"
            value={cvc}
            onChange={handleChangeValue}
            placeholder="Enter the security code found on the back of your card"
          />
        </div>
        <div className="model-items">
          <Text>First name</Text>
          <Input
            value={firstName}
            name="firstName"
            onChange={handleChangeValue}
            placeholder="Enter your first name as on card"
          />
        </div>
        <div className="model-items">
          <Text>Last name</Text>
          <Input
            value={lastName}
            name="lastName"
            onChange={handleChangeValue}
            placeholder="Enter your last name as on card"
          />
        </div>

        <Button className="add_adrees_btn" onClick={handleAddCArd}>
          Add card
        </Button>
      </Modal>
    </div>
  );
}
