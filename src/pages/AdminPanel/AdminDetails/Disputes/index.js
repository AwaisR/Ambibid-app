import React, { useState, useEffect } from 'react';
import Header from './Header';
import ShipingItems from '../../../myAccount/myorders/ShipingItems';
import { Typography, Image, Button, Spin } from 'antd';
import { Link } from 'react-router-dom';
const { Paragraph, Text } = Typography;
import axios from 'axios';
const Disputes = () => {
  const [disputes, setDisputes] = useState([]);
  const [loading, setLoading] = useState(true);
  const getDisputes = () => {
    axios
      .post('https://us-central1-amibid-24a48.cloudfunctions.net/admin2-adminGetDisputes-default', {
        data: {
          adminId: localStorage.getItem('adminId'),
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
            setLoading(false);
            setDisputes(data);
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
  };
  useEffect(() => {
    getDisputes();
  }, []);
  const columns = [
    {
      title: 'item',
      dataIndex: 'item',
      key: 'item',
      render: (item, obj) => (
        <div className="table_item_image">
          <Image preview={false} src={obj.item.photos[0]} />
          <p>{obj.item.itemName}</p>
        </div>
      ),
    },
    {
      title: 'Action required',
      dataIndex: 'Action required',
      key: 'Action required',
      render: (text) => (
        <div className="table_item">
          <Text>Respond to dispute</Text>
        </div>
      ),
    },
    {
      title: 'item',
      dataIndex: 'item.',
      key: 'item.',
      render: (tags, obj) => (
        <div className="table_tracking">
          <Text>{obj.item.status} </Text>
        </div>
      ),
    },
    {
      title: '',
      dataIndex: '.',
      key: '.',
      render: (tags) => (
        <div className="table_tracking">
          <Button className="redBtn" style={{ backgroundColor: '#FF3636' }}>
            Close
          </Button>
        </div>
      ),
    },
    {
      title: '',
      dataIndex: 'item',
      key: 'item',
      render: (tags, obj) => (
        <div className="table_tracking">
          <Link to={`/admin-details/disputes-details/:${obj.item.id}`}>
            <Button>Reply</Button>
          </Link>
        </div>
      ),
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
      <Header text="Disputes" />
      <ShipingItems columns={columns} dataSource={disputes} addClass="disputes-table" />
    </>
  );
};
export default Disputes;
