import React, { useState, useEffect } from 'react';
import { Layout, Typography, Input, Select, Button, Row, Col } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import PageLayout from '../../layout/PageLayout';
import { Link } from 'react-router-dom';
import './seellingItem.css';
import moment from 'moment';
const { Title, Paragraph, Text } = Typography;
const { Option } = Select;
import axios from 'axios';
import './index.css';
export default function sellingItem() {
  const [draftsItems, setDraftsItems] = useState([]);
  useEffect(() => {
    getDrafts();
  }, []);
  const getDrafts = () => {
    axios
      .post('https://us-central1-amibid-24a48.cloudfunctions.net/default-listItemDrafts-default', {
        data: {
          uid: '001',
          limit: 10,
          offset: 0,
        },
      })
      .then(
        (response) => {
          const status = response.data.result.status;
          const data = response.data.result.data;
          if (status === 200) {
            setDraftsItems(data);
          }
        },
        (error) => {
          console.log('error', error);
        },
      );
  };
  const handleRemoveDraft = (id) => {
    axios
      .post('https://us-central1-amibid-24a48.cloudfunctions.net/default-removeDraft-default', {
        data: {
          uid: '001',
          itemId: id,
        },
      })
      .then(
        (response) => {
          const status = response.data.result.status;
          const data = response.data.result.data;
          if (status === 200) {
            getDrafts();
          }
        },
        (error) => {
          console.log('error', error);
        },
      );
  };
  const getDateYears = (secs) => {
    if (secs) {
      const data = new Date(secs * 1000);
      const date = moment(data).format('L');
      return date;
    }
  };
  return (
    <div className="selling_item">
      <PageLayout>
        <Layout className="site-layout-background ">
          <div className="payment_outer list_item">
            <div className="payment_form">
              <Title level={4}>Finish your listing and start selling today! </Title>
              <Paragraph>
                Please select an unfinished draft below or list a new item <br />
                by selecting the ‘List an item’ button
              </Paragraph>
              <div className="payment_form_selct">
                {draftsItems &&
                  draftsItems.map((item) => (
                    <>
                      <div className="payment_item">
                        <div className="payment_item_list">
                          <Title level={5}>{item.itemName}</Title>
                        </div>
                        <div className="payment_item_list">
                          <Paragraph>
                            Last updated on{' '}
                            {getDateYears(item.createdAt && item.createdAt._seconds)}
                            <span>
                              <RightOutlined />
                            </span>
                          </Paragraph>
                        </div>
                      </div>
                      <p className="remove-data" onClick={() => handleRemoveDraft(item.id)}>
                        remove
                      </p>
                    </>
                  ))}
              </div>
              <Button className="save_form_btn">
                <Link to="/List-items/Catagory">List a new item</Link>
              </Button>
              <div className="bottom_text">
                <Text>
                  <Link to="/sellar-dashboard">Go to Seller Dashboard</Link>
                </Text>
              </div>
            </div>
          </div>
        </Layout>
      </PageLayout>
    </div>
  );
}
