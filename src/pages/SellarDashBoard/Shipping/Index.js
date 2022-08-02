import React, { useState, useEffect } from 'react';
import ShipingItems from './ShipingItems';
import { Input, Image, Tag, Space, Button } from 'antd';
import PrintLabel from './PrintLabel';
import PrintIcon from '../../../assests/images/printIcon.png';
import { useSelector, useDispatch } from 'react-redux';
import { SellerActions } from '../../../store/SellerDashboard/action';
import AlertMsg from '../../../components/Alerts/index';
export default function Index() {
  const [print, setPrint] = useState({
    itemId: '',
    table: '',
  });
  const [updateTrackingBuyer, setUpdateTrackingBuyer] = useState({
    trackingNumber: '',
    companyName: '',
    itemId: '',
  });
  const state = useSelector((state) => state.SellerReducer);
  const { ShipToBuyer, ShipToFulmint, ShipFromFulmint, AlertMessage } = state;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SellerActions.GetShipToBuyer());
    dispatch(SellerActions.ShipingToFulMint());
    dispatch(SellerActions.ShipingFromFulMint());
  }, []);
  const handleSubmit = (tableName) => {
    const data = {
      ...updateTrackingBuyer,
      uid: localStorage.getItem('uid'),
      tableName: tableName,
    };
    dispatch(SellerActions.UpdateBuyerTracking(data));
  };
  const columns = [
    {
      title: '',
      dataIndex: 'photos',
      key: 'photos',
      render: (item) => (
        <div className="table_item_image">
          <Image preview={false} src={item[0]} />
        </div>
      ),
    },
    {
      title: 'Item',
      dataIndex: 'itemName',
      key: 'itemName',
      render: (item) => (
        <div className="table_item_image">
          <p>{item}</p>
        </div>
      ),
    },
    {
      title: 'Action required',
      dataIndex: 'status',
      key: 'status',
      render: (item) => (
        <div className="table_item">
          <p>{item}</p>
        </div>
      ),
    },
    {
      title: 'Tracking info.',
      dataIndex: 'id',
      key: 'id',
      render: (item) => (
        <div className="table_tracking">
          <Input
            placeholder="Enter tracking number"
            name="trackingNumber"
            type="number"
            value={updateTrackingBuyer.trackingNumber}
            onChange={(e) =>
              setUpdateTrackingBuyer({
                ...updateTrackingBuyer,
                trackingNumber: e.target.value,
                itemId: item,
              })
            }
          />
          <Input
            placeholder="Company name"
            name="companyName"
            type="text"
            value={updateTrackingBuyer.companyName}
            onChange={(e) =>
              setUpdateTrackingBuyer({
                ...updateTrackingBuyer,
                companyName: e.target.value,
                itemId: item,
              })
            }
          />
          <Button
            onClick={() => handleSubmit('Buyer')}
            disabled={
              updateTrackingBuyer.trackingNumber === '' || updateTrackingBuyer.companyName === ''
                ? true
                : false
            }
          >
            update
          </Button>
        </div>
      ),
    },
    {
      title: 'Print label',
      dataIndex: 'id',
      key: 'id',
      render: (item) => (
        <>
          <img src={PrintIcon} onClick={() => setPrint({ itemId: item, table: 'Buyer' })} />
        </>
      ),
    },
  ];
  const columnsToFulmint = [
    {
      title: '',
      dataIndex: 'photos',
      key: 'photos',
      render: (item) => (
        <div className="table_item_image">
          <Image preview={false} src={item[0]} />
        </div>
      ),
    },
    {
      title: 'Item',
      dataIndex: 'itemName',
      key: 'itemName',
      render: (item) => (
        <div className="table_item_image">
          <p>{item}</p>
        </div>
      ),
    },
    {
      title: 'Action required',
      dataIndex: 'status',
      key: 'status',
      render: (item) => (
        <div className="table_item">
          <p>{item}</p>
        </div>
      ),
    },
    {
      title: 'Tracking info.',
      dataIndex: 'id',
      key: 'id',
      render: (item) => (
        <div className="table_tracking">
          <Input
            placeholder="Enter tracking number"
            name="trackingNumber"
            type="number"
            value={updateTrackingBuyer.trackingNumber}
            onChange={(e) =>
              setUpdateTrackingBuyer({
                ...updateTrackingBuyer,
                trackingNumber: e.target.value,
                itemId: item,
              })
            }
          />
          <Input
            placeholder="Company name"
            name="companyName"
            type="text"
            value={updateTrackingBuyer.companyName}
            onChange={(e) =>
              setUpdateTrackingBuyer({
                ...updateTrackingBuyer,
                companyName: e.target.value,
                itemId: item,
              })
            }
          />
          <Button
            onClick={() => handleSubmit('ToFulmint')}
            disabled={
              updateTrackingBuyer.trackingNumber === '' || updateTrackingBuyer.companyName === ''
                ? true
                : false
            }
          >
            update
          </Button>
        </div>
      ),
    },
    {
      title: 'Print label',
      dataIndex: 'id',
      key: 'id',
      render: (item) => (
        <>
          <img src={PrintIcon} onClick={() => setPrint({ itemId: item, table: 'ToFulmint' })} />
        </>
      ),
    },
  ];

  const columnsFulfilment = [
    {
      title: '',
      dataIndex: 'photos',
      key: 'photos',
      render: (item) => (
        <div className="table_item_image">
          <Image preview={false} src={item[0]} />
        </div>
      ),
    },
    {
      title: 'item',
      dataIndex: 'itemName',
      key: 'itemName',
      render: (text) => (
        <div className="table_item_image">
          {/* <Image preview={false} src={item.photos[0]} /> */}
          <p>{text}</p>
        </div>
      ),
    },

    {
      title: 'Status',
      dataIndex: 'Status',
      key: 'Status',
      render: (text) =>
        ShipFromFulmint &&
        ShipFromFulmint.map((item) => (
          <div className="table_item">
            <p>{item.status}</p>
          </div>
        )),
    },
    {
      title: 'View tracking.',
      dataIndex: 'View tracking',
      key: 'View tracking.',
      render: (tags) => (
        <div className="table_tracking">
          <Button>View</Button>
        </div>
      ),
    },
  ];
  const onCloseMsg = () => {
    console.log('yesssssssssss am working');
  };
  let title = 'Item sold - Ship to buyer';
  let text =
    'Once you’ve updated your items shipping details, the item will be accessible via the ‘Sold’ tab of the Seller dashboard.';
  let shippingTitle = 'Shipping to Amibid fulfilment center';
  let shipingText =
    'Once you have updated the tracking information for your item, it will appear below until it is received and processed.';
  let fulfilmentTitle = 'Shipped from Amibid fulfilment center';
  let fulfilmentDesc = 'Once your item becomes listed, it can be accessed via the ‘Active’ tab.';
  return (
    <div className="print_height">
      {AlertMessage && <AlertMsg message={AlertMessage} type="error" title="Update Track info" />}
      {!print.itemId ? (
        <>
          <ShipingItems tittle={title} text={text} columns={columns} dataSource={ShipToBuyer} />
          <ShipingItems
            tittle={shippingTitle}
            text={shipingText}
            columns={columnsToFulmint}
            dataSource={ShipToFulmint}
          />
          <ShipingItems
            tittle={fulfilmentTitle}
            text={fulfilmentDesc}
            columns={columnsFulfilment}
            dataSource={ShipFromFulmint}
            addClass="tracking-table"
          />
        </>
      ) : (
        <PrintLabel print={print} ShipToBuyer={ShipToBuyer} ShipToFulmint={ShipToFulmint} />
      )}
    </div>
  );
}
