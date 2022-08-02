import React, { useEffect } from 'react';
import Header from './Header';
import ShipingItems from '../Shipping/ShipingItems';
import './index.css';
import { Typography, Image, Button, Popover, notification } from 'antd';
import StatusIcon from '../../../assests/images/Icon material-speaker-notes.png';
import { useSelector, useDispatch } from 'react-redux';
import { SellerActions } from '../../../store/SellerDashboard/action';
const { Paragraph, Text, Title } = Typography;

const Unsold = () => {
  const state = useSelector((state) => state.SellerReducer);
  const { UnSoldItems, RelistError } = state;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SellerActions.getUnsoldItems());
  }, []);
  const openNotification = (message, description) => {
    notification.open({
      message: message,
      description: description,
      onClose: () => {
        dispatch(SellerActions.removeNoti());
      },
    });
  };
  const handleRelist = (id) => {
    dispatch(SellerActions.getRelistItems(id));
  };
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
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <div className="table_item">
          <Text>{status}</Text>
        </div>
      ),
    },
    {
      title: 'Expert’s note ',
      dataIndex: 'itemDescription',
      key: 'itemDescription',
      render: (itemDescription) => (
        <div className="table_tracking">
          <Text>
            {itemDescription.split('.')[0]}
            <Popover content={itemDescription} trigger="click" className="unsold-popover">
              <Image preview={false} src={StatusIcon} addClass="unsold-table" />
            </Popover>
          </Text>
        </div>
      ),
    },
    {
      title: 'Action required',
      dataIndex: 'id',
      key: 'id',
      render: (id) => (
        <div className="table_tracking">
          <Button onClick={() => handleRelist(id)}>Relist</Button>
        </div>
      ),
    },
  ];
  return (
    <>
      <Header />
      {RelistError && openNotification('Error', RelistError)}
      <ShipingItems columns={columns} dataSource={UnSoldItems} addClass="unsold-table" />
    </>
  );
};
export default Unsold;
