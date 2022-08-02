import React, { useEffect, useState } from 'react';
import Header from './Header';
import { Button, Input, Image, Typography, notification } from 'antd';
import ShipingItems from '../myorders/ShipingItems';
const { Paragraph, Text } = Typography;
import { Link } from 'react-router-dom';
import EditIcon from '../../../assests/images/Icon awesome-edit.png';
import { useSelector, useDispatch } from 'react-redux';
import { MyAccountAction } from '../../../store/myAccount/action';
import axios from 'axios';
const index = () => {
  let dispatch = useDispatch();
  const [bids, setBids] = useState('');
  const state = useSelector((state) => state.myAccountReducer);
  const { watchListItem } = state;
  useEffect(() => {
    dispatch(MyAccountAction.GetWatchList());
  }, []);
  const openNotification = (message, description) => {
    notification.open({
      message: message,
      description: description,
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };
  const handleRemoveItem = (id) => {
    axios
      .post(
        'https://us-central1-amibid-24a48.cloudfunctions.net/default-removeItemFromWatchList-default',
        {
          data: {
            uid: localStorage.getItem('uid'),
            // uid: '001',
            itemId: id,
          },
        },
      )
      .then(
        (response) => {
          const status = response.data.result.status;
          const message = response.data.result.message;
          const data = response.data.result.data;
          if (status == 200) {
            openNotification('Success', message);
            dispatch(MyAccountAction.GetWatchList());
          }
          if (status == 400) {
            openNotification('Error', message);
          }
        },
        (error) => {
          console.log('error', error);
        },
      );
  };
  const hanldeSubmit = (id) => {
    if (bids)
      axios
        .post('https://us-central1-amibid-24a48.cloudfunctions.net/default-placeBidItem-default', {
          data: {
            uid: localStorage.getItem('uid'),
            // uid: '001',
            itemId: id,
            bidAmount: bids,
          },
        })
        .then(
          (response) => {
            const status = response.data.result.status;
            const message = response.data.result.message;
            const data = response.data.result.data;
            if (status == 200) {
              openNotification('Success', message);
              setBids('');
            }
            if (status == 400) {
              openNotification('Error', message);
            }
          },
          (error) => {
            console.log('error', error);
          },
        );
  };
  const columns = [
    {
      dataIndex: 'itemName',
      key: 'itemName',
      render: (itemName, obj) => (
        <div className="table_item_image">
          <div className="table_item_img">
            <Image preview={false} src={obj.photos[0]} />
          </div>
          <div className="table_item_info">
            <Text>{itemName}</Text>
            <Text>Item No.{obj.itemNumber}</Text>
            {/* <Text className="red_text">{obj.status}</Text> */}
          </div>
        </div>
      ),
    },

    {
      dataIndex: 'price',
      key: 'price',
      render: (price, obj) => (
        <>
          <div className="table_tracking bids_table">
            <Text>£{price}</Text>
            {/* <Text className="red_text">1d 2h left (Mon, 14:21)</Text> */}
            {/* <Text>3 bids </Text> */}
          </div>
        </>
      ),
    },
    {
      dataIndex: 'id',
      key: 'id',
      render: (tags, obj) => (
        <>
          <div className="table_tracking bids_table_field">
            <div className="bids_btn">
              <Input placeholder="Enter your max bid" onChange={(e) => setBids(e.target.value)} />
              <Button onClick={() => hanldeSubmit(obj.id)}>Place Bid</Button>
            </div>
          </div>
        </>
      ),
    },
    {
      dataIndex: 'id',
      key: 'id',
      render: (id, obj) => (
        <>
          <div className="table_tracking bids_table_field">
            <div className="bids_btn">
              <span onClick={() => handleRemoveItem(id)}>Remove item from Watchlist</span>
            </div>
          </div>
        </>
      ),
    },
  ];
  return (
    <>
      <Header />
      <ShipingItems
        dataSource={watchListItem}
        columns={columns}
        addClass="watchlist active_table"
      />
    </>
  );
};
export default index;
