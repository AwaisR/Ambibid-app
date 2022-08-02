import React, { useEffect, useState } from 'react';
import './Header.css';
import { Button, Input, notification } from 'antd';
import axios from 'axios';
export default function NewCat() {
  const [newadmin, setNewAdmin] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setNewAdmin({
      ...newadmin,
      [e.target.name]: e.target.value,
    });
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
  const handleSubmit = () => {
    if (newadmin.email && newadmin.password) {
      axios
        .post('https://us-central1-amibid-24a48.cloudfunctions.net/admin2-adminAddAdmin-default', {
          data: {
            adminId: localStorage.getItem('adminId'),
            email: newadmin.email,
            password: newadmin.password,
          },
        })
        .then(
          (response) => {
            const status = response.data.result.status;
            const message = response.data.result.message;
            const data = response.data.result.data;
            if (status === 200) {
              setNewAdmin({
                email: '',
                password: '',
              });
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
      openNotificationWithIcon('error', 'Enter specific field');
    }
  };
  return (
    <div>
      <div className="buyer_header active_header ">
        <div className="admin-setting">
          <p>Enter Email Address</p>
          <Input
            placeholder="Enter email address"
            name="email"
            value={newadmin.email}
            onChange={handleChange}
          />
          <p>Enter Password</p>
          <Input
            placeholder="Enter email address"
            name="password"
            value={newadmin.password}
            onChange={handleChange}
          />
          <Button onClick={handleSubmit}>Create</Button>
        </div>
      </div>
    </div>
  );
}
