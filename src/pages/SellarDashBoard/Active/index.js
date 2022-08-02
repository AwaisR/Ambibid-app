import React, { useState, useEffect } from 'react';
import Header from './Header';
import { Input, Image, Typography, Popover, Button, notification } from 'antd';

import ShipingItems from '../Shipping/ShipingItems';
const { Paragraph, Text } = Typography;
import { useSelector, useDispatch } from 'react-redux';
import { SellerActions } from '../../../store/SellerDashboard/action';
import EditIcon from '../../../assests/images/Icon awesome-edit.png';
const Active = () => {
  const [updatePrice, setUpdatePrice] = useState('');
  const state = useSelector((state) => state.SellerReducer);
  const { AlertMessage, ActiveItems, AddReservePrice } = state;
  const dispatch = useDispatch();
  const openNotification = () => {
    notification.open({
      message: 'Error',
      description: 'Please Enter a lower reserve price than your current price',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };
  useEffect(() => {
    let uid = localStorage.getItem('uid');
    dispatch(SellerActions.getActiveItems(uid));
  }, []);
  const handleChange = () => {
    setUpdatePrice(e.target.value);
  };
  const openNotifications = () => {
    notification.open({
      message: 'Success',
      description: 'Add Reserve price Success',
      onClose: () => {
        dispatch(SellerActions.removeNoti());
      },
    });
  };
  const handleSubmit = (price, id) => {
    let uid = localStorage.getItem('uid');
    let data = {
      uid: uid,
      itemId: id,
      reservePrice: price,
    };

    console.log('price', price);
    if (updatePrice > price) {
      openNotification();
    } else {
      dispatch(SellerActions.UpdateReservePrice(data));
    }
  };

  const content = (price, id) => (
    <div className="active_edit_popup">
      <h5>Lower Reserve Price</h5>
      <p>
        To increase the chances of selling your product please enter a lower reserve price than your
        current price
      </p>
      <Input
        placeholder="Enter Amount"
        name="reservePrice"
        onChange={(e) => setUpdatePrice(e.target.value)}
      />
      <Button onClick={() => handleSubmit(price, id)}>update</Button>
    </div>
  );
  const columns = [
    {
      title: '',
      dataIndex: 'photos',
      key: 'photos',
      render: (item) => (
        <div className="table_item_image">
          <Image preview={false} src={item && item[0]} />
        </div>
      ),
    },
    {
      title: 'Item',
      dataIndex: 'itemName',
      key: 'itemName',
      render: (text, dataObj, data) => (
        <div className="table_item_image">
          {/* {console.log('dataObj', dataObj)} */}
          {/* <Image preview={false} src={dataObj?.photos[0]} /> */}
          <p>{text}</p>
        </div>
      ),
    },
    {
      title: 'Category',
      dataIndex: 'Category',
      key: 'Category',
      render: (text) => (
        <div className="table_item">
          <Text>Jewellery</Text>
        </div>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Current bid',
      dataIndex: 'Current bid.',
      key: 'Current bid',
      render: (tags) => (
        <>
          <div className="table_tracking">
            <Text>109</Text>
          </div>
        </>
      ),
    },
    {
      title: 'Reserve price',
      dataIndex: 'reservePrice',
      key: 'reservePrice',
      render: (reservePrice, objData) => (
        <>
          <div className="table_tracking">
            <Text>
              {reservePrice}
              <Popover content={content(reservePrice, objData.id)} trigger="click">
                <Image src={EditIcon} preview={false} />
              </Popover>
            </Text>
          </div>
        </>
      ),
    },
    {
      title: 'Ending',
      dataIndex: 'Ending.',
      key: 'Ending',
      render: (tags) => (
        <>
          <div className="table_tracking">
            <Text>12d 8h</Text>
          </div>
        </>
      ),
    },
  ];
  return (
    <>
      {AddReservePrice && openNotifications()}
      <Header />
      <ShipingItems
        dataSource={ActiveItems}
        columns={columns}
        addClass="tracking-table active_table"
      />
    </>
  );
};
export default Active;
