import React, { useEffect, useState } from 'react';
import { Button, Input, Select, notification } from 'antd';
import axios from 'axios';
import Item from 'antd/lib/list/Item';
export default function SubCat() {
  const [catagory, setCatagory] = useState([]);
  const [subcat, setSubCat] = useState({
    name: '',
    parentId: '',
  });
  const openNotificationWithIcon = (type, messages, onCloseMsg) => {
    notification[type]({
      message: type,
      description: messages,
      onClose: () => {
        // onCloseMsg;
        // dispatch(userActions.CloseErrorMsg());
      },
    });
  };
  useEffect(() => {
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
          const message = response.data.result.message;
          const data = response.data.result.data;
          if (status === 200) {
            console.log('data', data);
            setCatagory(data);
            // openNotificationWithIcon('success', message);
          }
        },
        (error) => {
          console.log('error', error);
        },
      );
  }, []);
  const { Option } = Select;
  function handleChange(e) {
    setSubCat({
      ...subcat,
      name: e.target.value,
    });
  }
  const handleChangeSelect = (value) => {
    setSubCat({
      ...subcat,
      parentId: value,
    });
  };
  const handleSubmit = () => {
    if (subcat.name && subcat.parentId) {
      axios
        .post(
          'https://us-central1-amibid-24a48.cloudfunctions.net/admin1-adminAddSubCategory-default',
          {
            data: {
              adminId: localStorage.getItem('adminId'),
              name: subcat.name,
              parentId: subcat.parentId,
            },
          },
        )
        .then(
          (response) => {
            const status = response.data.result.status;
            const message = response.data.result.message;
            const data = response.data.result.data;
            if (status === 200) {
              openNotificationWithIcon('success', message);
            }
            if (status === 400) {
              openNotificationWithIcon('error', message);
            }
          },
          (error) => {
            console.log('error', error);
          },
        );
    } else {
      openNotificationWithIcon('error', 'Enter the specific feild');
    }
  };
  return (
    <div>
      <div className="buyer_header active_header">
        <div className="new_cat_inner">
          <p>Create a new Sub-category</p>
          <Input
            placeholder="What is the name of this sub-category?"
            onChange={handleChange}
            value={subcat.name}
          />
          <p>Link your sub-category to a category*</p>
          <Select onChange={handleChangeSelect}>
            {catagory &&
              catagory.categories &&
              catagory.categories.map((item) => <Option value={item.id}>{item.name}</Option>)}
          </Select>
          <Button className="save_btn" onClick={handleSubmit}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
