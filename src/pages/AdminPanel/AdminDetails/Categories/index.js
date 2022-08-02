import React, { useEffect, useState } from 'react';
import Header from './Header';
import { Button, Input, Image, Typography, Table, Modal, notification, Select } from 'antd';
import './index.css';
const { Text } = Typography;
import { Link } from 'react-router-dom';
import axios from 'axios';
import EditIcon from '../../../../assests/images/Icon awesome-edit.png';
import DeleteIcon from '../../../../assests/images/Icon metro-bin.png';
// import EditIcon from '../../../assests/images/Icon awesome-edit.png';
const { Option } = Select;
const Categories = () => {
  const [catagory, setCatagory] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalSubVisible, setIsModalSubVisible] = useState(false);
  const [updateCat, setUpdateCat] = useState({
    categoryId: '',
    name: '',
  });
  const [updateSubCat, setUpdateSubCat] = useState({
    id: '',
    name: '',
    parentId: '',
    subCatName: '',
  });
  function handleChange(value) {
    setUpdateSubCat({
      ...updateSubCat,
      parentId: value,
    });
    console.log(`selected ${value}`);
  }
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

  const showModal = (item) => {
    console.log('item', item);
    setUpdateCat({
      id: item.id,
      name: item.name,
      parentId: item.parentId,
    });
    setIsModalVisible(true);
  };
  const showModalSub = (item) => {
    console.log('itemm', item);
    setUpdateSubCat({
      id: item.id,
      name: item.name,
      parentId: item.parentId,
      subCatName: item.parent.name,
    });
    setIsModalSubVisible(true);
  };
  const getCatgories = () => {
    axios
      .post(
        'https://us-central1-amibid-24a48.cloudfunctions.net/admin1-adminGetCategories-default',
        {
          data: {
            adminId: localStorage.getItem('adminId'),
          },
        },
      )
      .then(
        (response) => {
          const status = response.data.result.status;
          const data = response.data.result.data;
          if (status === 200) {
            console.log('data', data);
            setCatagory(data);
          }
        },
        (error) => {
          console.log('error', error);
        },
      );
  };
  const handleOk = () => {
    axios
      .post(
        'https://us-central1-amibid-24a48.cloudfunctions.net/admin1-adminUpdateCategory-default',
        {
          data: {
            adminId: localStorage.getItem('adminId'),
            categoryId: updateCat.id,
            name: updateCat.name,
          },
        },
      )
      .then(
        (response) => {
          const status = response.data.result.status;
          const message = response.data.result.message;
          const data = response.data.result.data;
          if (status === 200) {
            getCatgories();
            setUpdateCat({
              id: '',
              name: '',
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
  const handleOkSubCat = () => {
    axios
      .post(
        'https://us-central1-amibid-24a48.cloudfunctions.net/admin1-adminUpdateSubCategory-default',
        {
          data: {
            adminId: localStorage.getItem('adminId'),
            categoryId: updateSubCat.id,
            name: updateSubCat.name,
            parentId: updateSubCat.parentId,
          },
        },
      )
      .then(
        (response) => {
          const status = response.data.result.status;
          const message = response.data.result.message;
          const data = response.data.result.data;
          if (status === 200) {
            getCatgories();
            setUpdateSubCat({
              id: '',
              name: '',
              parentId: '',
            });
            openNotificationWithIcon('success', message);
            setIsModalSubVisible(false);
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
    setIsModalSubVisible(false);
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
          value={updateCat.name}
          onChange={(e) =>
            setUpdateCat({
              ...updateCat,
              name: e.target.value,
            })
          }
        />
      </Modal>
    );
  };
  const modelsSubCat = () => {
    return (
      <Modal
        title="Edit Sub Categories"
        visible={isModalSubVisible}
        onOk={handleOkSubCat}
        onCancel={handleCancel}
      >
        <Input
          value={updateSubCat.name}
          onChange={(e) =>
            setUpdateSubCat({
              ...updateCat,
              name: e.target.value,
            })
          }
        />
        <Select defaultValue={updateSubCat.subCatName} onChange={handleChange}>
          {catagory &&
            catagory.categories &&
            catagory.categories.map((item) => <Option value={item.id}>{item.name}</Option>)}
        </Select>
      </Modal>
    );
  };

  useEffect(() => {
    getCatgories();
  }, []);
  const columns = [
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
      title: (
        <Link to="/admin-details/new-Cat">
          <Button>Create new</Button>
        </Link>
      ),
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
  const columnsubCat = [
    {
      title: 'sub-categories',
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
      key: 'name',
      dataIndex: 'name',
      render: (name, obj) => (
        <div className="table_item_image">
          <div className="table_item_info">
            <Text>{obj.parent.name}</Text>
          </div>
        </div>
      ),
    },
    {
      title: (
        <Link to="/admin-details/new-Subcat">
          <Button>Create new</Button>
        </Link>
      ),
      key: 'id',
      dataIndex: 'id',
      render: (id, obj) => (
        <>
          <div className="table_tracking bids_table">
            <img src={EditIcon} onClick={() => showModalSub(obj)} />
            <img src={DeleteIcon} />
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      {isModalVisible && models()}
      {isModalSubVisible && modelsSubCat()}
      <Header />
      <Table
        dataSource={catagory.categories}
        columns={columns}
        pagination={false}
        scroll={{ x: true }}
        className="table-costomer categories_data"
      />
      <Table
        dataSource={catagory.subCategories}
        columns={columnsubCat}
        pagination={false}
        scroll={{ x: true }}
        className="table-costomer categories_data"
      />
    </>
  );
};
export default Categories;
