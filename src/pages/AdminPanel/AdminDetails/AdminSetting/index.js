import React, { useEffect, useState } from 'react';
import Header from './Header';
import { Button, Input, Image, Typography, Table, notification, Modal } from 'antd';
import './index.css';
const { Text } = Typography;
import { Link } from 'react-router-dom';
import EditIcon from '../../../../assests/images/Icon awesome-edit.png';
import DeleteIcon from '../../../../assests/images/Icon metro-bin.png';
import NewCat from './NewCat';
import axios from 'axios';
// import EditIcon from '../../../assests/images/Icon awesome-edit.png';
const AdminSetting = () => {
  const [admin, setAdmin] = useState([]);
  const [createNew, setCreateNew] = useState(false);
  const [updateAdmin, setUpdateAdmin] = useState({
    id: '',
    email: '',
    password: '',
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = (item) => {
    setUpdateAdmin({
      id: item.id,
      email: item.email,
      password: item.password,
    });
    setIsModalVisible(true);
  };
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
  const getAdmin = () => {
    axios
      .post('https://us-central1-amibid-24a48.cloudfunctions.net/admin2-adminGetAdmins-default', {
        data: {
          adminId: localStorage.getItem('adminId'),
        },
      })
      .then(
        (response) => {
          const status = response.data.result.status;
          const message = response.data.result.message;
          const data = response.data.result.data;
          if (status === 200) {
            console.log('data', data);
            setAdmin(data);
            // openNotificationWithIcon('success', message);
          }
        },
        (error) => {
          console.log('error', error);
        },
      );
  };
  const handleOk = () => {
    axios
      .post('https://us-central1-amibid-24a48.cloudfunctions.net/admin2-adminUpdateAdmin-default', {
        data: {
          adminId: localStorage.getItem('adminId'),
          adminIdToUpdate: updateAdmin.id,
          password: updateAdmin.password,
        },
      })
      .then(
        (response) => {
          const status = response.data.result.status;
          const message = response.data.result.message;
          const data = response.data.result.data;
          if (status === 200) {
            getAdmin();
            setUpdateAdmin({
              id: '',
              email: '',
              password: '',
            });
            openNotificationWithIcon('success', message);
            setIsModalVisible(false);
          }
          if (status === 400) {
            openNotificationWithIcon('error', message);
          }
        },
        (error) => {
          console.log('error', error);
        },
      );
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const models = () => {
    return (
      <Modal
        title="Edit Categories"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          value={updateAdmin.email}
          onChange={(e) =>
            setUpdateAdmin({
              ...updateAdmin,
              email: e.target.value,
            })
          }
        />
        <Input
          style={{ marginTop: '30px' }}
          value={updateAdmin.password}
          onChange={(e) =>
            setUpdateAdmin({
              ...updateAdmin,
              password: e.target.value,
            })
          }
        />
      </Modal>
    );
  };

  const columns = [
    {
      title: 'Admins',
      key: 'email',
      dataIndex: 'email',
      render: (email) => (
        <div className="table_item_image">
          <div className="table_item_info">
            <Text>{email}</Text>
          </div>
        </div>
      ),
    },

    {
      title: <Button onClick={() => setCreateNew(true)}>Create new</Button>,
      key: 'id',
      dataIndex: 'id',
      render: (id, obj) => (
        <>
          <div className="table_tracking bids_table">
            <img src={EditIcon} onClick={() => showModal(obj)} />
            <img src={DeleteIcon} />
          </div>
        </>
      ),
    },
  ];
  useEffect(() => {
    getAdmin();
  }, []);
  return (
    <>
      {isModalVisible && models()}
      <Header />
      {!createNew ? (
        <Table
          dataSource={admin}
          columns={columns}
          pagination={false}
          scroll={{ x: true }}
          className="table-costomer categories_data"
        />
      ) : (
        <NewCat />
      )}
    </>
  );
};
export default AdminSetting;
