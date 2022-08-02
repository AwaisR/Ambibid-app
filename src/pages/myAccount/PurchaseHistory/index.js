import React, { useEffect } from 'react';
import Header from './Header';
import './index.css';
import ShipingItems from '../myorders/ShipingItems';
import { Typography, Image, Button } from 'antd';
import ShipingIcon from '../../../assests/images/Icon awesome-shipping-fast.png';
import InvoiceIcon from '../../../assests/images/Icon awesome-file-invoice.png';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MyAccountAction } from '../../../store/myAccount/action';
const { Text } = Typography;
const Sold = () => {
  let dispatch = useDispatch();
  const state = useSelector((state) => state.myAccountReducer);
  const { PurchaseHistory } = state;
  useEffect(() => {
    dispatch(MyAccountAction.getPurChaseHistory());
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
      title: 'Date paid',
      dataIndex: 'Date paid',
      key: 'Date paid',
      render: (text) => (
        <div className="table_item">
          <Text>10/02/2021</Text>
        </div>
      ),
    },
    {
      title: 'Amount',
      dataIndex: 'reservePrice.',
      key: 'reservePrice.',
      render: (reservePrice, obj) => (
        <div className="table_tracking">
          <Text>£{obj.price}</Text>
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
    {
      dataIndex: 'id.',
      key: 'id',
      render: (id, obj) => (
        <>
          <div className="table_tracking leave_btn">
            <Button>
              <Link to={`/my-account/replies:${obj.id}`}>Leave a review</Link>
            </Button>
          </div>
        </>
      ),
    },
  ];
  return (
    <>
      <Header />
      <ShipingItems columns={columns} dataSource={PurchaseHistory} addClass="purchase-history" />
    </>
  );
};
export default Sold;
