import React, { useEffect, useState } from 'react';
import './Header.css';
import { Button, Input, notification } from 'antd';
import axios from 'axios';
export default function NewCat() {
  const [cat, setCat] = useState('');
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
  const handleSubmit = (e) => {
    if (cat) {
      axios
        .post(
          'https://us-central1-amibid-24a48.cloudfunctions.net/admin1-adminAddCategory-default',
          {
            data: {
              adminId: localStorage.getItem('adminId'),
              name: cat,
            },
          },
        )
        .then(
          (response) => {
            const status = response.data.result.status;
            const message = response.data.result.message;
            const data = response.data.result.data;
            if (status === 200) {
              setCat('');
              openNotificationWithIcon('success', message);
              // openNotificationWithIcon('success', message);
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
      openNotificationWithIcon('error', 'please Enter catagory name');
    }
  };
  return (
    <div>
      <div className="buyer_header active_header ">
        <div className="new_cat_inner">
          <p>Create a new category</p>
          <Input
            placeholder="What is the name of this category?"
            value={cat}
            onChange={(e) => setCat(e.target.value)}
          />
          <Button onClick={handleSubmit}>Save</Button>
        </div>
      </div>
    </div>
  );
}
