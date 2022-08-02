import React, { useState, useEffect } from 'react';
import PageLayout from '../../../layout/PageLayout';
import { Row, Col, Typography, Image, Input, Button, Modal, Checkbox, notification } from 'antd';
import PlusIcons from '../../../assests/images/Icon material-add-circle.png';
const { Title, Text } = Typography;
import ShipingAdress from './ShipingAdress';
import PaymentDetails from './PaymentDetails';
import { Link, useParams, useHistory } from 'react-router-dom';
import { MyAccountAction } from '../../../store/myAccount/action';
import { useSelector, useDispatch } from 'react-redux';
import CheckboxComp from './CheckBox';
import './index.css';
import axios from 'axios';
const PayItems = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const state = useSelector((state) => state.myAccountReducer);
  const [summeryData, setSummeryData] = useState();
  const { myOrders, cardDetails } = state;
  useEffect(() => {
    if (!myOrders.length) dispatch(MyAccountAction.getMyOrder());
  }, []);
  const { id } = useParams();
  let history = useHistory();
  let filterdId = id.split(':')[1];
  useEffect(() => {
    const FilteredData = myOrders.find((item) => item.id === filterdId);
    setSummeryData(FilteredData);
  }, [id, myOrders]);
  const { AllShipingAdress, AllPaymentsCard, shippingSuccess, PayMentShipping } = state;
  const [isModalVisiblePayement, setIsModalVisiblePayement] = useState(false);
  let dispatch = useDispatch();
  const showModal = () => {
    setIsModalVisible(true);
  };
  const showModalPayement = () => {
    setIsModalVisiblePayement(true);
  };
  const getShiping = () => {
    dispatch(MyAccountAction.getShippingAdres());
  };
  const handleOk = () => {
    setIsModalVisible(false);
    setIsModalVisiblePayement(false);
  };

  function onChange(e, select) {
    dispatch(MyAccountAction.AllCheckedCard());
    const { checked } = e.target;
    const data = {
      select,
      check: checked,
    };
    if (checked) {
      dispatch(MyAccountAction.CheckedBoxCard(data));
    } else {
      dispatch(MyAccountAction.CheckedBoxCard(data));
    }
  }
  useEffect(() => {
    dispatch(MyAccountAction.getShippingAdres());
    dispatch(MyAccountAction.getPaymentCArd());
  }, []);
  const handleRemoveShiping = (id) => {
    dispatch(MyAccountAction.removeShipping(id));
  };
  const handlePayItems = (e) => {
    e.preventDefault();
    if (cardDetails && PayMentShipping) {
      axios
        .post(
          'https://us-central1-amibid-24a48.cloudfunctions.net/default-paymentSuccessful-default',
          {
            data: {
              uid: localStorage.getItem('uid'),
              // uid: '001',
              itemId: filterdId,
              addressId: PayMentShipping.id,
              stripeCardId: cardDetails.stripeCardId,
            },
          },
        )
        .then(
          (response) => {
            const status = response.data.result.status;
            const message = response.data.result.message;
            const data = response.data.result.data;
            if (status == 200) {
              history.push('/payment-success');
            }
            if (status == 400) {
              openNotificationWithIcon('error', message);
            }
          },
          (error) => {
            console.log('error', error);
          },
        );
    } else {
      openNotificationWithIcon('error', 'enter shipping & card details');
    }
  };
  const openNotificationWithIcon = (type, messages, onCloseMsg) => {
    notification[type]({
      message: type,
      description: messages,
      onClose: () => {
        console.log('working');
        // onCloseMsg;
        // dispatch(userActions.CloseErrorMsg());
      },
    });
  };

  return (
    <>
      <PageLayout>
        <div className="payment_item-outer">
          <Row className="shipping-outer">
            <Col lg={8} md={8} sm={24} xs={24}>
              <Title level={5} className="payment_item_head">
                Shipping address
              </Title>
              {!AllShipingAdress.length ? (
                <div className="shipping-item-outer">
                  <div className="shopping_item_add">
                    <Image src={PlusIcons} preview={false} onClick={showModal} />
                    <Text>Add a new address</Text>
                  </div>
                </div>
              ) : (
                ''
              )}
              {AllShipingAdress.map((item) => (
                <div
                  className={item.checked ? `shipping-item-outer active` : 'shipping-item-outer'}
                >
                  <div className="adress-data-outer">
                    <div className="adress-data">
                      <div className="shipping-adress">
                        <CheckboxComp item={item} />

                        <span onClick={(e) => handleRemoveShiping(item.id)}>remove </span>
                      </div>
                      <div className="shipping-content">
                        <Text>{item.fullName}</Text>
                        <Text>{item.streetAddress}</Text>
                        <Text> {item.country} </Text>
                        <Text>{item.phoneCountry}</Text>
                        <Text>{item.postCode} </Text>
                        <Text>{item.state} </Text>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <ShipingAdress
                isModalVisible={isModalVisible}
                handleOk={handleOk}
                handleCancel={handleOk}
                getShiping={getShiping}
              />
              {AllShipingAdress.length ? <Text onClick={showModal}>Add a new address</Text> : ''}
            </Col>
            <Col lg={8} md={8} sm={24} xs={24}>
              <Title level={5} className="payment_item_head">
                Payment details
              </Title>

              {!AllPaymentsCard.length ? (
                <div className="shipping-item-outer">
                  <div className="shopping_item_add">
                    <Image src={PlusIcons} preview={false} onClick={showModalPayement} />
                    <Text>Add your card details </Text>
                  </div>
                </div>
              ) : (
                AllPaymentsCard.map((item) => (
                  <div
                    className={item.checked ? `shipping-item-outer active` : 'shipping-item-outer'}
                  >
                    <div className="adress-data-outer">
                      <div className="adress-data adressStyle">
                        <div className="shipping-adress">
                          <Checkbox onChange={(e) => onChange(e, item)} checked={item.checked} />
                          <Text>remove </Text>
                        </div>
                        <div className="textLeft">
                          <Text>{item.firstName + ' ' + item.lastName} </Text>
                          <Text>{item.card.brand} debit card</Text>
                          <Text> *** *** **** {item.card.last4} </Text>
                          <Text>Expires {item.card.exp_month + '/' + item.card.exp_year}</Text>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
              {AllPaymentsCard.length ? (
                <Text onClick={showModalPayement}>Add a new card</Text>
              ) : (
                ''
              )}
              <PaymentDetails
                isModalVisible={isModalVisiblePayement}
                handleOk={handleOk}
                handleCancel={handleOk}
              />
            </Col>
            <Col lg={8} md={8} sm={24} xs={24}>
              <Title level={5} className="payment_item_head">
                Order summary
              </Title>
              <div className="order-summary-outer">
                <div className="order-summary-item">
                  <Title level={5}>{summeryData && summeryData.itemName}</Title>
                  <Text>Item no:{summeryData && summeryData.itemNumber}</Text>
                </div>
                <div className="shiping-adress">
                  <div className="shiping-adress-header">
                    <Text>Enter Shipping adress</Text>
                  </div>
                  <div className="shiping-adress-data">
                    <p>{PayMentShipping && PayMentShipping.fullName}</p>
                    <p>{PayMentShipping && PayMentShipping.phoneCountry}</p>

                    <p>{PayMentShipping && PayMentShipping.streetAddress}</p>
                    <p>{PayMentShipping && PayMentShipping.state}</p>
                    <p>{PayMentShipping && PayMentShipping.country}</p>
                  </div>
                </div>
                <div className="shiping-adress">
                  <div className="shiping-adress-header">
                    <Text>Enter Card Details</Text>
                  </div>
                  <div className="shiping-adress-data">
                    <p>
                      {cardDetails && cardDetails.firstName + ' '}
                      {' ' + cardDetails && cardDetails.lastName}
                    </p>
                    <p>
                      {cardDetails && cardDetails.card?.brand}{' '}
                      {cardDetails && cardDetails.card?.brand && '  debit card'}
                    </p>

                    <p>
                      {cardDetails &&
                        cardDetails.card?.exp_month + '/' + cardDetails &&
                        cardDetails &&
                        cardDetails.card?.exp_year &&
                        'Expires  '}
                      {cardDetails &&
                        cardDetails.card?.exp_month + '/' + cardDetails &&
                        cardDetails.card?.exp_year}
                    </p>
                  </div>
                </div>
                <div className="shipping-field">
                  <Text>Add voucher:</Text>
                  <Input placeholder="Enter code" />
                </div>
                <div className="shipping-data">
                  <Text>{summeryData && summeryData.itemName}</Text>
                  <Text>£{summeryData && summeryData.salePrice}</Text>
                </div>
                <div className="shipping-data">
                  <Text>Postage fee</Text>
                  <Text>£{summeryData && summeryData.postagePrice}</Text>
                </div>
                <div className="shipping-data">
                  <Text>Order total</Text>
                  <Text>£{summeryData && summeryData.orderTotal}</Text>
                </div>
                <Button className="pay_btn" onClick={handlePayItems}>
                  {/* Pay */}
                  {/* to="/payment-success" */}
                  <Link>Pay</Link>
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </PageLayout>
    </>
  );
};
export default PayItems;
