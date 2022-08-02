import React, { useState, useEffect } from 'react';
import Header from './Header';
import ShipingItems from '../myorders/ShipingItems';
import { Typography, Image, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MyAccountAction } from '../../../store/myAccount/action';
const { Paragraph, Text } = Typography;

const Disputes = () => {
  let dispatch = useDispatch();
  const state = useSelector((state) => state.myAccountReducer);
  const { Disputes } = state;
  useEffect(() => {
    dispatch(MyAccountAction.getDisputes());
  }, []);
  const columns = [
    {
      title: 'Item',
      dataIndex: 'itemName',
      key: 'itemName',
      render: (itemName, obj) => (
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
      title: 'Status',
      dataIndex: 'status.',
      key: 'Status.',
      render: (tags, obj) => (
        <div className="table_tracking">
          <Text>{obj.item.status} </Text>
        </div>
      ),
    },
    {
      title: '',
      dataIndex: 'status',
      key: 'status',
      render: (tags, obj) => (
        <div className="table_tracking">
          <Link to={`/my-account/disputes-details/:${obj.itemDispute.id}`}>
            <Button>Reply</Button>
          </Link>
        </div>
      ),
    },
  ];
  return (
    <>
      <Header text="Disputes" />
      <ShipingItems columns={columns} dataSource={Disputes} addClass="disputes-table" />
    </>
  );
};
export default Disputes;
