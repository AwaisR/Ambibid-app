import React, { useEffect, useState } from 'react';
import './index.css';
import { countries } from './AllCountries';
import { Row, Col, Typography, Image, Input, Button, Modal, Select, notification } from 'antd';
const { Title, Text } = Typography;
const { Option } = Select;
import { MyAccountAction } from '../../../store/myAccount/action';
import { useSelector, useDispatch } from 'react-redux';

export default function ShipingAdress({ isModalVisible, handleOk, handleCancel, getShiping }) {
  const state = useSelector((state) => state.myAccountReducer);
  const { shippingSuccess } = state;
  let dispatch = useDispatch();
  const [shippingAdres, setShippingAdres] = useState({
    fullName: '',
    country: '',
    streetAddress: '',
    city: '',
    state: '',
    postCode: '',
    phoneCountry: '',
    phoneNumber: '',
  });
  const {
    fullName,
    country,
    streetAddress,
    city,
    // state,
    postCode,
    phoneCountry,
    phoneNumber,
  } = shippingAdres;
  function handleChange(value) {
    setShippingAdres({
      ...shippingAdres,
      country: value,
    });
  }
  const handleChangeValue = (e) => {
    setShippingAdres({
      ...shippingAdres,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitAdres = (e) => {
    e.preventDefault();
    let uid = localStorage.getItem('uid');
    const {
      fullName,
      country,
      streetAddress,
      city,
      state,
      postCode,
      phoneCountry,
      phoneNumber,
    } = shippingAdres;
    if (
      fullName &&
      country &&
      streetAddress &&
      city &&
      state &&
      postCode &&
      phoneCountry &&
      phoneNumber
    ) {
      handleOk();
      dispatch(MyAccountAction.addShippingAdress(shippingAdres, uid));
    }
    setShippingAdres({
      fullName: '',
      country: '',
      streetAddress: '',
      city: '',
      state: '',
      postCode: '',
      phoneCountry: '',
      phoneNumber: '',
    });
  };
  // useEffect(() => {
  // //   if (shippingSuccess) {
  // //     setShippingAdres({
  // //       fullName: '',
  // //       country: '',
  // //       streetAddress: '',
  // //       city: '',
  // //       state: '',
  // //       postCode: '',
  // //       phoneCountry: '',
  // //       phoneNumber: '',
  // //     });
  // //   }
  // // }, [shippingSuccess]);
  const openNotification = (type, msg) => {
    notification.open({
      message: type,
      description: msg,
      onClose: () => {
        dispatch(MyAccountAction.CloseErrorMsg());
      },
    });
  };
  return (
    <div>
      <Modal
        visible={isModalVisible}
        className="shiping_form_outer"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        {shippingSuccess && openNotification('shipping address', shippingSuccess)}
        <div className="model-header">
          <Title>Shipping details </Title>
        </div>
        <div className="model-items">
          <Text name="fullName">Full Name</Text>
          <Input
            name="fullName"
            value={fullName}
            placeholder="Enter the name the item is being sent to"
            onChange={handleChangeValue}
          />
        </div>
        <div className="model-items">
          <Text>Country</Text>
          <Select defaultValue="Please select your country" onChange={handleChange}>
            {countries.map((cont) => (
              <Option value={cont.name}>{cont.name}</Option>
            ))}
          </Select>
        </div>
        <div className="model-items">
          <Text>Street address</Text>
          <Input
            value={streetAddress}
            name="streetAddress"
            placeholder="Enter your street name and house number"
            onChange={handleChangeValue}
          />
        </div>
        <div className="model-items">
          <Text>City</Text>
          <Input
            value={city}
            name="city"
            placeholder="Enter your city"
            onChange={handleChangeValue}
          />
        </div>
        <div className="model-items">
          <Text>State/Province/County</Text>
          <Input
            value={shippingAdres.state}
            name="state"
            placeholder="Enter your state/province/county"
            onChange={handleChangeValue}
          />
        </div>
        <div className="model-items">
          <Text>Postcode</Text>
          <Input
            value={postCode}
            name="postCode"
            placeholder="Enter your postcode"
            onChange={handleChangeValue}
          />
        </div>
        <div className="model-items model-items_2">
          <Text>Phone number</Text>
          <Input
            value={phoneCountry}
            name="phoneCountry"
            placeholder="Country code"
            className="country_input"
            onChange={handleChangeValue}
          />
          <Input
            name="phoneNumber"
            value={phoneNumber}
            placeholder="Phone Number"
            onChange={handleChangeValue}
          />
        </div>
        <Button className="add_adrees_btn" onClick={handleSubmitAdres}>
          Add Address
        </Button>
      </Modal>
    </div>
  );
}
