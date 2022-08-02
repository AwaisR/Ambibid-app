import React, { useState, useEffect } from 'react';
import ShipingItems from './ShipingItems';
import { Input, Image, Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MyAccountAction } from '../../../store/myAccount/action';
import Countdown from './Countdown';
import moment from 'moment';
const { Text } = Typography;
export default function Index() {
  const state = useSelector((state) => state.myAccountReducer);
  const [years, setYear] = useState('');
  const { myOrders } = state;
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(MyAccountAction.getMyOrder());
  }, []);
  const Getdate = (secs) => {
    if (secs) {
      const data = new Date(secs * 1000);
      const date = moment(data).format();
      setYear(date);
    }
  };
  const columns = [
    {
      dataIndex: 'itemName',
      key: 'itemName',
      render: (itemName, obj) => (
        // console.log('obj', obj),
        <div className="table_item_image">
          <div className="table_item_img">
            <Image preview={false} src={obj.photos[0]} />
          </div>
          <div className="table_item_info">
            <Text>{itemName}</Text>
            <Text>{obj.itemNumber}</Text>
            {/* <Text className="red_text">{obj.status} </Text> */}
            <Text>{obj.itemDescription}</Text>
          </div>
        </div>
      ),
    },

    {
      dataIndex: 'auctionEndTime',
      key: 'auctionEndTime',
      render: (auctionEndTime, obj) => (
        <>
          {Getdate(obj.paymentDeadline && obj.paymentDeadline._seconds)}
          <div className="table_tracking bids_table">
            <Text>{auctionEndTime && 'Time left to pay:'}</Text>
            <Text className="red_text">{auctionEndTime && <Countdown date={years} />}</Text>
          </div>
        </>
      ),
    },
    {
      dataIndex: 'salePrice',
      key: 'salePrice',
      render: (salePrice, obj) => (
        <>
          <div className="table_tracking bids_table_field">
            <div className="bids_btn">
              <Text className="btn_info">£{salePrice}</Text>
              <Button>
                <Link to={`/pay-items/:${obj.id}`}>Pay Now</Link>
              </Button>
            </div>
          </div>
        </>
      ),
    },
  ];

  let title = 'My orders';
  let text = 'Make your payments within 7 days or you may lose your purchase.';

  return (
    <div className="print_height">
      <>
        <ShipingItems
          tittle={title}
          text={text}
          columns={columns}
          dataSource={myOrders}
          addClass="my-order active_table"
        />
      </>
    </div>
  );
}
