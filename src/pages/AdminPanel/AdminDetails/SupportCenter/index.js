import React, { useEffect, useState } from 'react';
import Header from './Header';
import { Button, Input, Image, Typography, Table, notification } from 'antd';
import './index.css';
const { Text } = Typography;
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditIcon from '../../../../assests/images/Icon awesome-edit.png';
import DeleteIcon from '../../../../assests/images/Icon metro-bin.png';
// import EditIcon from '../../../assests/images/Icon awesome-edit.png';
const SupportCenter = () => {
  const [support, setSupport] = useState([]);
  const openNotificationWithIcon = (type, messages, onCloseMsg) => {
    notification[type]({
      message: type,
      description: messages,
      onClose: () => {},
    });
  };
  const getSupports = () => {
    axios
      .post(
        'https://us-central1-amibid-24a48.cloudfunctions.net/admin2-adminGetHelpQuestions-default',
        {
          data: {
            adminId: 'qVw1BvihwHD6nazAqMTC',
          },
        },
      )
      .then(
        (response) => {
          const status = response.data.result.status;
          const message = response.data.result.message;
          const data = response.data.result.data;
          if (status === 200) {
            console.log('data', data);
            setSupport(data);
            // openNotificationWithIcon('success', message);
          }
        },
        (error) => {
          console.log('error', error);
        },
      );
  };
  useEffect(() => {
    getSupports();
  }, []);
  const hanldeDelete = (id) => {
    axios
      .post(
        'https://us-central1-amibid-24a48.cloudfunctions.net/admin2-adminDeleteHelpQuestion-default',
        {
          data: {
            adminId: 'qVw1BvihwHD6nazAqMTC',
            helpQuestionId: id,
          },
        },
      )
      .then(
        (response) => {
          const status = response.data.result.status;
          const message = response.data.result.message;
          const data = response.data.result.data;
          if (status === 200) {
            getSupports();
            openNotificationWithIcon('success', message);
          }
          if (status === 400) {
            openNotificationWithIcon('success', message);
          }
        },
        (error) => {
          console.log('error', error);
        },
      );
  };
  const columns = [
    {
      title: 'Support Articles',
      key: 'question',
      dataIndex: 'question',
      render: (question) => (
        <div className="table_item_image">
          <div className="table_item_info">
            <Text>{question}</Text>
          </div>
        </div>
      ),
    },

    {
      title: (
        <Link to="/admin-details/new-support">
          <Button>Create new</Button>
        </Link>
      ),
      key: 'id',
      dataIndex: 'id',
      render: (id) => (
        <>
          <div className="table_tracking bids_table">
            <img src={EditIcon} />
            <img src={DeleteIcon} onClick={() => hanldeDelete(id)} />
          </div>
        </>
      ),
    },
  ];
  return (
    <>
      <Header />
      <Table
        dataSource={support}
        columns={columns}
        pagination={false}
        scroll={{ x: true }}
        className="table-costomer categories_data"
      />
    </>
  );
};
export default SupportCenter;
