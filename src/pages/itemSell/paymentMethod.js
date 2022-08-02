import React, { useState, useEffect } from 'react';
import { Layout, Typography, Input, Select, Button } from 'antd';
import PageLayout from '../../layout/PageLayout';
import './index.css';
const { Title, Text } = Typography;
const { Option } = Select;
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { countries } from '../SellerAccount/AllCountries';
import { currencyCode } from './Currency';
import { PaymentActions } from '.././../store/payment/action';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
export default function paymentMethod() {
  const [country, setCountry] = useState('');
  const [currency, setCurrency] = useState('');
  const [swift, setSwift] = useState('');
  const [IBAN, setIBAN] = useState('');
  const [currencyValue, setCurrencyValue] = useState('');
  let dispatch = useDispatch();
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
  return (
    <div className="payment_outer">
      <PageLayout>
        <Layout className="site-layout-background">
          <div className="recive_payment_outer">
            <div className="recive_payment_form">
              <div className="form_heading">
                <Title level={2}>How do you want to receive your payments?</Title>
                <Text>
                  We’ll need a bit more information from you so you can start listing your items.
                  Don’t worry, it’ll only take a minute.
                </Text>
              </div>
              <div className="form_outer">
                <div className="form_list">
                  <Text>What is your residential country?</Text>
                  <Select defaultValue="Select Country*" onChange={handleChange}>
                    {countries.map((item) => (
                      <Option value={item.name}>{item.name}</Option>
                    ))}
                  </Select>
                </div>
                <div className="form_list">
                  <Text>Which currency would you like to be paid in?</Text>
                  <Select defaultValue="Select currency" onChange={handleChangeCurency}>
                    {currencyValue &&
                      currencyValue.map((item) => <Option value={item}>{item}</Option>)}
                  </Select>
                </div>
                <div className="form_list">
                  <Text>Please enter your IBAN</Text>
                  <Input placeholder="IBAN" onChange={handleChangeIBAN} />
                </div>
                <div className="form_list">
                  <Text>Please enter your Swift account number</Text>
                  <Input placeholder="Swift account number" onChange={handleSwift} />
                </div>
                <Link to="/selling-item">
                  <Button className="continue_btn" onClick={handleSubmit}>
                    Continue
                  </Button>
                </Link>
                <div className="bottom_text">
                  <Text>
                    <Link to="/selling-item">I 'll do it later</Link>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </PageLayout>
    </div>
  );
}
