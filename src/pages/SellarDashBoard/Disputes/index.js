import React, { useState, useEffect } from 'react';
import Header from './Header';
import ShipingItems from '../Shipping/ShipingItems';
import { Typography, Image, Button } from 'antd';
import { Link } from 'react-router-dom';
const { Paragraph, Text } = Typography;
import { useSelector, useDispatch } from 'react-redux';
import { SellerActions } from '../../../store/SellerDashboard/action';
const Disputes = () => {
  let dispatch = useDispatch();
  const state = useSelector((state) => state.SellerReducer);
  const { SellerDisputes } = state;

  useEffect(() => {
    dispatch(SellerActions.getSellerDisputes());
  }, []);
  const columns = [
    {
      title: 'Item',
      dataIndex: 'itemName',
      key: 'itemName',
      render: (ItemName, obj) => (
        <div className="table_item_image">
          <Image
            preview={false}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
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
      key: 'status.',
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
          <Link to="/sellar-dashboard/disputes-details">
            <Button>Reply</Button>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <>
      <Header text="Disputes" />
      <ShipingItems columns={columns} dataSource={SellerDisputes} addClass="disputes-table" />
    </>
  );
};
export default Disputes;
