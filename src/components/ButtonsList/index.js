import React from 'react';
import { Row, Col, Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { create_Product_Item } from '../../store/product/action';
import { useHistory } from 'react-router-dom';
const { Text } = Typography;

import './index.css';
const BackCountinueBtn = ({ ship, ButtonName, route, selfShiping, returnBack }) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const {
    productReducer: { productFormData },
  } = useSelector((state) => state);

  const handleSubmitProduct = () => {
    dispatch(create_Product_Item(productFormData, history));
  };

  return (
    <div className="btn_outer">
      <div className="back_icon" onClick={returnBack}>
        <LeftOutlined /> Back
      </div>
      <div className="contine_btn">
        {ship && (
          <Text className="ship_btn_info">
            <Link to={`${selfShiping}`}>{ship}</Link>
          </Text>
        )}
        {ButtonName === 'Submit' ? (
          <Button onClick={handleSubmitProduct}>{ButtonName}</Button>
        ) : (
          <Button>
            <Link to={route}>{ButtonName}</Link>
          </Button>
        )}
      </div>
    </div>
  );
};
export default BackCountinueBtn;
