import React, { useState, useEffect } from 'react';
import { Layout, Typography, Input, Select, Button, Row, Col } from 'antd';
import { RightOutlined } from '@ant-design/icons';
const { Title, Paragraph } = Typography;
const { Option } = Select;
import axios from 'axios';
import './index.css';
const ListItems = () => {
  const [listItems, SetListItems] = useState([]);
  useEffect(() => {
    axios
      .post('https://us-central1-amibid-24a48.cloudfunctions.net/default-listItemDrafts-default', {
        data: {
          uid: localStorage.getItem('uid'),
          // uid: '001',
          limit: 10,
          offset: 0,
        },
      })
      .then(
        (response) => {
          const status = response.data.result.status;
          const message = response.data.result.message;
          const data = response.data.result.data;
          if (status == 200) {
            SetListItems(data);
          }
          // if (status == 400) {
          //   dispatch({
          //     type: MyAccountConst.ADD_CARD_SUCCESS,
          //     payload: message,
          //   });
          // }
        },
        (error) => {
          console.log('error', error);
        },
      );
  }, []);
  console.log('lstitems', listItems);
  return (
    <>
      <div className="payment_outer list_item">
        <div className="payment_form">
          <Title level={4}>Finish your listing and start selling today! </Title>
          <Paragraph>
            Please select an unfinished draft below or list a new item <br />
            by selecting the ‘List an item’ button
          </Paragraph>
          <div className="payment_form_selct">
            <div className="payment_item">
              <div className="payment_item_list">
                <Title level={5}>Golden earrings antique </Title>
              </div>
              <div className="payment_item_list">
                <Paragraph>
                  Last updated on 12/12/2021
                  <span>
                    <RightOutlined />
                  </span>
                </Paragraph>
              </div>
            </div>
            <p className="remove-data">remove</p>
            <div className="payment_item">
              <div className="payment_item_list">
                <Title level={5}>Golden earrings antique </Title>
              </div>
              <div className="payment_item_list">
                <Paragraph>
                  Last updated on 12/12/2021
                  <span>
                    <RightOutlined />
                  </span>
                </Paragraph>
              </div>
            </div>
            <p className="remove-data">remove</p>
            <div className="payment_item">
              <div className="payment_item_list">
                <Title level={5}>Golden earrings antique </Title>
              </div>
              <div className="payment_item_list">
                <Paragraph>
                  Last updated on 12/12/2021
                  <span>
                    <RightOutlined />
                  </span>
                </Paragraph>
              </div>
            </div>
            <p className="remove-data">remove</p>
          </div>
          <Button className="save_form_btn">List an item</Button>
        </div>
        <div>
          <div>
            <Title level={4}>Monthly overview </Title>
            <div>
              <Row>
                <Col span={8}>
                  <div>
                    <Title level={4}>0 </Title>
                    <Paragraph>Items sold this month</Paragraph>
                  </div>
                </Col>
                <Col span={8}>
                  <div>
                    <Title level={4}>£0 </Title>
                    <Paragraph>Earned this month</Paragraph>
                  </div>
                </Col>
                <Col span={8}>
                  <div>
                    <Title level={4}>0*</Title>
                    <Paragraph>Seller rating this month</Paragraph>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ListItems;
