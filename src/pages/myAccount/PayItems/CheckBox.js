import React, { useState } from 'react';
import { Row, Col, Typography, Image, Input, Button, Modal, Checkbox } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { MyAccountAction } from '../../../store/myAccount/action';
const CheckboxComp = ({ item }) => {
  let dispatch = useDispatch();
  const onChange = (e, items) => {
    dispatch(MyAccountAction.AllChecked());
    const { checked } = e.target;
    if (checked) {
      const data = {
        items,
        checked,
      };
      dispatch(MyAccountAction.CheckedBox(data));
      dispatch(MyAccountAction.addShippingAdressOuter(items));
    } else {
      const data = {
        items,
        checked,
      };
      dispatch(MyAccountAction.CheckedBox(data));
      dispatch(MyAccountAction.addShippingAdressOuter(''));
    }
  };
  return (
    <>
      <Checkbox onChange={(e) => onChange(e, item)} checked={item.checked} />
    </>
  );
};
export default CheckboxComp;
