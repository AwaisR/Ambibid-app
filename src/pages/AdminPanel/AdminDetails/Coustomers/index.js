import React, { useEffect, useState } from 'react';
import Header from './Header';
import { Button, Input, Image, Typography, Table } from 'antd';
import './Coustomers.css';
const { Text } = Typography;
import { Link } from 'react-router-dom';
import axios from 'axios';
// import EditIcon from '../../../assests/images/Icon awesome-edit.png';

const Coustomers = () => {
  const [customer, setCustomer] = useState([]);
  useEffect(() => {
    axios
      .post('https://us-central1-amibid-24a48.cloudfunctions.net/admin1-adminGetUsers-default', {
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
            console.log('data', data);
            setCustomer(data);
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
      title: 'Email address',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'First name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
  ];

  return (
    <>
      <Header />
      <Table
        dataSource={customer}
        columns={columns}
        pagination={false}
        scroll={{ x: true }}
        className="table-costomer"
      />
      {/* <ShipingItems dataSource={dataSource} columns={columns}  /> */}
    </>
  );
};
export default Coustomers;
