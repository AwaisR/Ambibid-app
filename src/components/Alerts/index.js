import React from 'react';
import { Button, notification, Space } from 'antd';
import userActions from '../../store/signUp/action';
import { useSelector, useDispatch } from 'react-redux';
const AlertMsg = ({ message, type, title }) => {
  let dispatch = useDispatch();
  const openNotificationWithIcon = (type, messages, onCloseMsg) => {
    notification[type]({
      message: title,
      description: message,
      onClose: () => {
        // onCloseMsg;
        dispatch(userActions.CloseErrorMsg());
      },
    });
  };

  return <div>{openNotificationWithIcon(type)}</div>;
};
export default AlertMsg;
