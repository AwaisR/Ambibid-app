import React, { useState } from 'react';

import PageLayout from '../../../layout/PageLayout';
import { Row, Col, Typography, Image, Input, Button, Modal, Checkbox } from 'antd';
import PlusIcons from '../../../assests/images/Icon material-add-circle.png';
const { Title, Text } = Typography;
import ShipingAdress from './ShipingAdress';
import PaymentDetails from './PaymentDetails';
import { Link } from 'react-router-dom';
import './index.css';
import './AddCard.css';
const AddCard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisiblePayement, setIsModalVisiblePayement] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const showModalPayement = () => {
    setIsModalVisiblePayement(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setIsModalVisiblePayement(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsModalVisiblePayement(false);
  };
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <>
      <PageLayout>
        <div className="Addcard-outer">
          <Row className="Addcard-outer">
            <Col lg={24} md={24} sm={24} xs={24}>
              <div className="Addcard_header">
                <h5>Payment details</h5>
              </div>
              <div className="Addcard-item-outer">
                <div className="Addcard_item_add">
                  <Image src={PlusIcons} preview={false} onClick={showModal} />
                  <Text>Add a new address</Text>
                </div>
                <ShipingAdress
                  isModalVisible={isModalVisible}
                  handleOk={handleOk}
                  handleCancel={handleOk}
                />
              </div>
              <div className="Addcard-data-outer">
                <div className="Addcard-data">
                  <div>
                    {/* <Checkbox onChange={onChange} /> */}
                    <Text>Joe Bloggs</Text>
                  </div>
                  <Text>Visa debit card</Text>
                  <Text>**** **** **** 8239</Text>
                  <Text className="mrgTop_text">Expires 12/10/2022</Text>
                  <Text className="remove_text">remove </Text>
                </div>
                <Text>Add a new address</Text>
              </div>
            </Col>
            <Col lg={24} md={24} sm={24} xs={24}>
              <div className="Addcard_header">
                <h5>Address details</h5>
              </div>
              <div className="Addcard-item-outer">
                <div className="Addcard_item_add">
                  <Image src={PlusIcons} preview={false} onClick={showModalPayement} />
                  <Text>Add your card details </Text>
                </div>
              </div>
              <div className="Addcard-data-outer">
                <div className="Addcard-data">
                  <div>
                    <Checkbox onChange={onChange} />
                    <Text>Joe Bloggs</Text>
                  </div>
                  <Text>Visa debit card</Text>
                  <Text> *** *** **** 8239 </Text>
                  <Text>Expires 12/10/2022</Text>
                  <Text>remove </Text>
                </div>
                <Text>Add a new card</Text>
              </div>
              <PaymentDetails
                isModalVisible={isModalVisiblePayement}
                handleOk={handleOk}
                handleCancel={handleOk}
              />
            </Col>
          </Row>
        </div>
      </PageLayout>
    </>
  );
};
export default AddCard;
