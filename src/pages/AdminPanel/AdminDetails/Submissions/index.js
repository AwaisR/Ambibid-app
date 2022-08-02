import React, { useState, useEffect } from 'react';
import ShipingItems from './ShipingItems';
import { Input, Image, Button, Typography, Spin } from 'antd';
import { Link } from 'react-router-dom';
const { Text } = Typography;
import Header from './Header';
import SideIcon from '../../../../assests/images/sideIcon.png';
import SubsmishanDetails from './SubsDetails';
import axios from 'axios';
export default function Index() {
  const [subsDetails, setSubDetails] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filterData, setFiltredData] = useState('');
  const [submishansData, setSubmishanData] = useState([]);
  const handleSubDetails = (id) => {
    const data = submishansData.find((item) => item.id === id);
    setFiltredData(data);
    setSubDetails(true);
  };
  const columns = [
    {
      key: 'itemName',
      dataIndex: 'itemName',
      render: (itemName) => (
        <div className="table_item_image">
          <div className="table_item_info">
            <Text>{itemName}</Text>
          </div>
        </div>
      ),
    },

    {
      key: 'id',
      dataIndex: 'id',
      render: (id) => (
        <>
          <div className="table_tracking bids_table">
            <Text>Item No.{id}</Text>
          </div>
        </>
      ),
    },
    {
      key: 'id',
      dataIndex: 'id',
      render: (id) => (
        <>
          <div className="table_tracking bids_table_field">
            <div className="bids_btn">
              {/* <Link to="/submishan-details:id"><img src={SideIcon} /></Link> */}
              <img src={SideIcon} onClick={() => handleSubDetails(id)} />
            </div>
          </div>
        </>
      ),
    },
  ];
  useEffect(() => {
    axios
      .post(
        'https://us-central1-amibid-24a48.cloudfunctions.net/admin1-adminGetSubmissions-default',
        {
          data: {
            adminId: localStorage.getItem('adminId'),
            // uid: '001',
            limit: 10,
            offset: 0,
          },
        },
      )
      .then(
        (response) => {
          const status = response.data.result.status;
          const message = response.data.result.message;
          const data = response.data.result.data;
          if (status == 200) {
            setLoading(false);
            setSubmishanData(data);
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
  }, []);

  return (
    <div className="print_height">
      <>
        {!subsDetails ? (
          <>
            {loading && (
              <Spin
                size="large"
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '50%',
                  left: '50%',
                  zIndex: '999',
                }}
              />
            )}
            <Header />
            <ShipingItems
              columns={columns}
              dataSource={submishansData}
              addClass="my-order active_table"
            />
          </>
        ) : (
          <SubsmishanDetails data={filterData} />
        )}
      </>
    </div>
  );
}
