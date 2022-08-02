import React, { useState, useEffect } from 'react';
import Header from './Header';
import { Button, Input, Image, Typography, Table, Spin } from 'antd';
import './index.css';
const { Text } = Typography;
import { Link } from 'react-router-dom';
import EditIcon from '../../../../assests/images/Icon awesome-edit.png';
import DeleteIcon from '../../../../assests/images/Icon metro-bin.png';
import axios from 'axios';
// import EditIcon from '../../../assests/images/Icon awesome-edit.png';
const SellerForm = () => {
  const [loading, setLoading] = useState(true);
  const [catgories, setCatgories] = useState([]);
  useEffect(() => {
    axios
      .post(
        'https://us-central1-amibid-24a48.cloudfunctions.net/admin1-adminGetCategories-default',
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
            setCatgories(data);
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
  const columnsubCat = [
    {
      title: 'Categories',
      key: 'name',
      dataIndex: 'name',
      render: (name) => (
        <div className="table_item_image">
          <div className="table_item_info">
            <Text>{name}</Text>
          </div>
        </div>
      ),
    },
    {
      title: 'Linked to category',
      key: 'id',
      dataIndex: 'id',
      render: (id) => (
        <div className="table_item_image">
          <div className="table_item_info">
            <Text>
              {catgories &&
                catgories.subCategories.map((item) => {
                  if (item.parentId === id) {
                    return <p style={{ marginRight: '15px' }}>{item.name}</p>;
                  }
                })}
            </Text>
          </div>
        </div>
      ),
    },
    {
      title: (
        <Link to="/admin-details/new-Catform">
          <Button>Create new</Button>
        </Link>
      ),
      key: 'id',
      dataIndex: 'id',
      render: (id) => (
        <>
          {catgories.subCategories &&
            catgories.subCategories.map((item) => {
              if (id === item.parentId) {
                return (
                  <div className="table_tracking bids_table">
                    <Link to={`/admin-details/add-feilds/${item.id}`}>
                      <img src={EditIcon} />
                    </Link>
                    <img src={DeleteIcon} />
                  </div>
                );

                // return <Option value={item.id}>{item.name}</Option>;
              }
            })}
        </>
      ),
    },
  ];

  return (
    <>
      {loading && (
        <Spin
          size="large"
          style={{ position: 'absolute', top: '50%', right: '50%', left: '50%', zIndex: '999' }}
        />
      )}
      <Header />
      <Table
        dataSource={catgories.categories}
        columns={columnsubCat}
        pagination={false}
        scroll={{ x: true }}
        className="table-costomer categories_data"
      />
    </>
  );
};
export default SellerForm;
