import React, { useEffect, useState } from 'react';
import Header from './Header';
import { Button, Input, Image, Typography, notification } from 'antd';
import ShipingItems from '../myorders/ShipingItems';
import './bids.css';
const { Text } = Typography;
import { Link } from 'react-router-dom';
import EditIcon from '../../../assests/images/Icon awesome-edit.png';
import axios from 'axios';
import Countdown from './Countdown';
import moment from 'moment';
const MyBids = () => {
  const [bids, setBids] = useState([]);
  const [year, setYears] = useState('');
  const [bidAmount, setBidAmount] = useState('');
  const getBids = () => {
    axios
      .post('https://us-central1-amibid-24a48.cloudfunctions.net/default-getMyBids-default', {
        data: {
          uid: localStorage.getItem('uid'),
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
            setBids(data);
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
    getBids();
  }, []);
  const openNotificationWithIcon = (type, messages, onCloseMsg) => {
    notification[type]({
      message: type,
      description: messages,
      onClose: () => {
        console.log('working');
        // onCloseMsg;
        // dispatch(userActions.CloseErrorMsg());
      },
    });
  };
  const Getdate = (secs) => {
    if (secs) {
      const data = new Date(secs * 1000);
      const date = moment(data).format();
      setYears(date);
    }
  };
  const handleSubmit = (id, currentBid) => {
    if (currentBid < bidAmount) {
      axios
        .post('https://us-central1-amibid-24a48.cloudfunctions.net/default-placeBidItem-default', {
          data: {
            uid: localStorage.getItem('uid'),
            // uid: '001',
            itemId: id,
            bidAmount: bidAmount,
          },
        })
        .then(
          (response) => {
            const status = response.data.result.status;
            const message = response.data.result.message;
            const data = response.data.result.data;
            if (status == 200) {
              setBidAmount('');
              openNotificationWithIcon('success', message);
              getBids();
            }
            if (status === 400) {
              setBidAmount('');
              openNotificationWithIcon('error', message);
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
    } else {
      openNotificationWithIcon('error', 'please Enter bid more then current bids');
    }
  };
  const content = (
    <div className="active_edit_popup">
      <h5>Lower Reserve Price</h5>
      <p>
        To increase the chances of selling your product please enter a lower reserve price than your
        current price
      </p>
      <Input placeholder="Enter Amount" />
      <Button>update</Button>
    </div>
  );

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
            <Text>Item No. {obj.itemNumber}</Text>
            <Text
              className={obj.bidStatus === 'You are the highest bidder' ? '' : 'red_text'}
              style={{ color: obj.bidStatus === 'You are the highest bidder' ? 'green' : 'red' }}
            >
              {obj.bidStatus}{' '}
            </Text>
          </div>
        </div>
      ),
    },

    {
      dataIndex: 'id',
      key: 'id',
      render: (tags, obj) => (
        <>
          {Getdate(obj.auctionEndTime && obj.auctionEndTime._seconds)}
          <div className="table_tracking bids_table">
            <Text>£{obj.currentBid}</Text>
            <Text className="red_text">{obj.listAsAuction && <Countdown date={year} />}</Text>
            <Text>{obj.itemBidRecords.length} bids </Text>
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
              <Input
                placeholder="Enter your max bid"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
              />
              <Button onClick={() => handleSubmit(id, obj.currentBid)}>Place Bid</Button>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <Header />
      <ShipingItems dataSource={bids} columns={columns} addClass="bids-table active_table" />
    </>
  );
};
export default MyBids;
