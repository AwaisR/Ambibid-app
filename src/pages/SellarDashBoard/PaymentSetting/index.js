import React, { useState, useEffect } from 'react';
import { Typography, Input, Select, Button, notification } from 'antd';
import { countries } from './AllCountries';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { PaymentActions } from '../../../store/payment/action';
const { Title, Paragraph } = Typography;
const { Option } = Select;

import './index.css';
const Payment = () => {
  const [data, setData] = useState({
    IBAN: '',
    SWIFT: '',
  });
  const [country, setCountry] = useState('');
  const [currency, setCurrency] = useState('');
  const [swift, setSwift] = useState('');
  const [IBAN, setIBAN] = useState('');
  const [currencyValue, setCurrencyValue] = useState('');
  let dispatch = useDispatch();
  const state = useSelector((state) => state.userPaymentReducer);
  const { AddPayment } = state;
  function handleChange(value) {
    setCountry(value);
  }
  const handleChangeIBAN = (e) => {
    setIBAN(e.target.value);
  };
  const handleChangeCurency = (value) => {
    setCurrency(value);
  };
  const handleSwift = (e) => {
    setSwift(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      uid: localStorage.getItem('uid'),
      country,
      currency,
      swift,
      IBAN,
    };
    dispatch(PaymentActions.PayementAction(data));
  };
  useEffect(() => {
    setSwift('');
    setIBAN('');
  }, [AddPayment]);
  useEffect(() => {
    axios
      .post('https://us-central1-amibid-24a48.cloudfunctions.net/default-metadata-default', {
        data: {},
      })
      .then(
        (response) => {
          const status = response.data.result;
          setCurrencyValue(status.data.currencies);
          console.log(status);
        },
        (error) => {
          console.log('error', error);
        },
      );
  }, []);
  const openNotification = (data) => {
    notification.open({
      message: 'Success',
      description: data,
      onClose: () => {
        dispatch(PaymentActions.removeNoti());
      },
    });
  };
  return (
    <>
      {AddPayment && openNotification(AddPayment)}
      <div className="payment_outer">
        <div className="payment_form">
          <Title level={4}>Seller payment account settings</Title>
          <Paragraph>
            All payments are made by Amibid to the seller on a fortnightly basis.
          </Paragraph>
          <div className="payment_form_selct">
            <Select defaultValue="Select Country*" onChange={handleChange}>
              {countries.map((item) => (
                <Option value={item.name}>{item.name}</Option>
              ))}
            </Select>
            <Select defaultValue="Select currency" onChange={handleChangeCurency}>
              {currencyValue && currencyValue.map((item) => <Option value={item}>{item}</Option>)}
            </Select>
            <Input placeholder="IBAN" value={IBAN} onChange={handleChangeIBAN} />
            <Input placeholder="SWIFT/Account number" value={swift} onChange={handleSwift} />
          </div>
          <Button className="save_form_btn" onClick={handleSubmit}>
            {data.SWIFT && data.IBAN ? 'Edit' : 'Save'}
          </Button>
        </div>
      </div>
    </>
  );
};
export default Payment;
