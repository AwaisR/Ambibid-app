import React, { useEffect, useState } from 'react';
import Header from './Header';
import { Button, Input, Image, Typography, Table, Spin } from 'antd';
import './index.css';
const { Text } = Typography;
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';
// import EditIcon from '../../../assests/images/Icon awesome-edit.png';
const Sales = () => {
  const [sale, setSale] = useState([]);
  const [loading, setLoading] = useState(true);
  const Years = (secs) => {
    if (secs) {
      const data = new Date(secs * 1000);
      const date = moment(data).format('L');
      return date;
    }
  };
  useEffect(() => {
    axios
      .post('https://us-central1-amibid-24a48.cloudfunctions.net/admin1-adminGetSales-default', {
        data: {
          adminId: localStorage.getItem('adminId'),
        },
      })
      .then(
        (response) => {
          const status = response.data.result.status;
          const message = response.data.result.message;
          const data = response.data.result.data;
          if (status === 200) {
            setLoading(false);
            setSale(data);
            // openNotificationWithIcon('success', message);
          }
        },
        (error) => {
          console.log('error', error);
        },
      );
  }, []);
  const columns = [
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (createdAt, obj) => <div>{Years(createdAt._seconds)}</div>,
    },
    {
      title: 'Amount',
      dataIndex: 'stripeResponse',
      key: 'stripeResponse',
      render: (item, obj) => <div>{item.amount}</div>,
    },
    {
      title: 'Item #',
      dataIndex: 'itemId',
      key: 'itemId',
      render: (item, obj) => <div>{item}</div>,
    },
    {
      title: 'User_Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Stripe_Transaction_ID',
      dataIndex: 'stripeResponse',
      key: 'stripeResponse',
      render: (item, obj) => <div>{item.id}</div>,
    },
  ];
  return (
    <>
      {loading && (
        <Spin
          size="large"
          style={{ position: 'absolute', top: '50%', right: '50%', left: '50%', zIndex: '999' }}
        />
      )}
      <Header />
      <Table
        dataSource={sale}
        columns={columns}
        pagination={false}
        scroll={{ x: true }}
        className="sales_table"
      />
    </>
  );
};
export default Sales;
