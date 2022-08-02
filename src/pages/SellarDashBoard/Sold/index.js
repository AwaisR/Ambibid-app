import React, { useState, useEffect } from 'react';
import Header from './Header';
import './index.css';
import ShipingItems from '../Shipping/ShipingItems';
import { Typography, Image } from 'antd';
import ShipingIcon from '../../../assests/images/Icon awesome-shipping-fast.png';
import InvoiceIcon from '../../../assests/images/Icon awesome-file-invoice.png';
import { useSelector, useDispatch } from 'react-redux';
import { SellerActions } from '../../../store/SellerDashboard/action';
const { Paragraph, Text } = Typography;
const Sold = () => {
  const state = useSelector((state) => state.SellerReducer);
  const { SoldItems } = state;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SellerActions.getSoldItems());
  }, []);
  const columns = [
    {
      title: 'Item',
      dataIndex: 'itemName',
      key: 'itemName',
      render: (itemName, obj) => (
        <div className="table_item_image">
          <Image preview={false} src={obj.photos[0]} />
          <p>{itemName}</p>
        </div>
      ),
    },
    {
      title: 'Delivery status',
      dataIndex: 'deliveryStatus',
      key: 'deliveryStatus',
      render: (deliveryStatus) => (
        <div className="table_item">
          <Text>{deliveryStatus}</Text>
        </div>
      ),
    },
    {
      title: 'Payment status',
      dataIndex: 'paymentStatus',
      key: 'paymentStatus',
      render: (paymentStatus) => (
        <div className="table_tracking">
          <Text>{paymentStatus}</Text>
        </div>
      ),
    },
    {
      title: 'Amount',
      dataIndex: 'Amount.',
      key: 'Amount.',
      render: (tags) => (
        <div className="table_tracking">
          <Text>200</Text>
        </div>
      ),
    },
    {
      title: 'Invoice',
      dataIndex: 'Invoice.',
      key: 'Invoice',
      render: (tags) => (
        <>
          <div className="table_tracking">
            <Image preview={false} src={InvoiceIcon} />
          </div>
        </>
      ),
    },
    {
      title: 'Shipping',
      dataIndex: 'Shipping.',
      key: 'Shipping',
      render: (tags) => (
        <>
          <div className="table_tracking">
            <Image preview={false} src={ShipingIcon} />
          </div>
        </>
      ),
    },
  ];
  return (
    <>
      <Header />
      <ShipingItems columns={columns} dataSource={SoldItems} addClass="sold-table" />
    </>
  );
};
export default Sold;
