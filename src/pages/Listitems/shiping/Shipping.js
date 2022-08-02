import React, { useState, useEffect } from 'react';
import './shiping.css';
import { Typography, Select, Checkbox, Input, Form } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { handleProductFormDataChange } from '../../../store/product/action';
const { Title, Text } = Typography;
import axios from 'axios';
const { Option } = Select;

export default function Shipping() {
  const [shipping, setShipping] = useState([]);
  const {
    productReducer: { productFormData },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = (value, name) => {
    console.log(value, name);
    dispatch(handleProductFormDataChange({ name, value }));
  };

  const handleChangeInput = (e, name) => {
    dispatch(handleProductFormDataChange({ name, value: e.target.value }));
  };

  function onChangeCheck(e) {
    dispatch(handleProductFormDataChange({ name: e.target.name, value: e.target.checked }));
  }
  useEffect(() => {
    axios
      .post('https://us-central1-amibid-24a48.cloudfunctions.net/default-metadata-default', {
        data: {
          // uid: localStorage.getItem('token'),
          // // uid: '001',
          // limit: 10,
          // offset: 0,
        },
      })
      .then(
        (response) => {
          const status = response.data.result.status;
          const data = response.data.result.data;
          if (status === 200) {
            setShipping(data);
            // dispatch({ type: SellerConst.GET_SELLER_ITEM_SUCCESS, payload: data });
          }
        },
        (error) => {
          console.log('error', error);
        },
      );
  }, []);
  console.log('shipping', shipping);
  return (
    <div className="shiping-outer">
      <div className="shiping-heading">
        <Title level={5}>Shipping details</Title>
      </div>
      <Form>
        <div className="form_item">
          <div className="form_item_list form_item_selct">
            <Text>Who pays for the shipping?</Text>
            <Select
              defaultValue="Select Shipping"
              name="shippingPaidBy"
              onChange={(value) => handleChange(value, 'shippingPaidBy')}
              value={productFormData ? productFormData.shippingPaidBy : 'Select Shipping'}
            >
              {shipping &&
                shipping.shippingPaidByList &&
                shipping.shippingPaidByList.map((item) => <Option value={item}>{item}</Option>)}
            </Select>
            <Checkbox
              name="insureItem"
              onChange={onChangeCheck}
              value={productFormData?.insureItem}
            >
              I’ll be insuring the item
            </Checkbox>
          </div>
        </div>
        <div className="form_item">
          <div className="form_item_list">
            <Text>Nationwide shipping cost?</Text>
            <Input
              type="number"
              placeholder="Enter Cost"
              onChange={(e) => handleChangeInput(e, 'nationwideShippingCost')}
              value={productFormData?.nationwideShippingCost}
            />
            <Input
              type="number"
              placeholder="Estimated delivery days"
              onChange={(e) => handleChangeInput(e, 'nationwideShippingDeliveryDays')}
              value={productFormData?.nationwideShippingDeliveryDays}
            />
          </div>
        </div>
        <div className="form_item">
          <div className="form_item_list">
            <Text>Shipping to Europe cost?</Text>
            <Input
              type="number"
              placeholder="Enter amount"
              onChange={(e) => handleChangeInput(e, 'shippingToEuropeCost')}
              value={productFormData?.shippingToEuropeCost}
            />
            <Input
              type="number"
              placeholder="Estimated delivery days"
              onChange={(e) => handleChangeInput(e, 'shippingToEuropeDeliveryDays')}
              value={productFormData?.shippingToEuropeDeliveryDays}
            />
          </div>
        </div>
        <div className="form_item">
          <div className="form_item_list">
            <Text>Worldwide shipping cost?</Text>
            <Input
              type="number"
              placeholder="Enter amount"
              onChange={(e) => handleChangeInput(e, 'worldwideShippingCost')}
              value={productFormData?.worldwideShippingCost}
            />
            <Input
              type="number"
              placeholder="Estimated delivery days"
              onChange={(e) => handleChangeInput(e, 'worldwideShippingDeliveryDays')}
              value={productFormData?.worldwideShippingDeliveryDays}
            />
          </div>
        </div>
      </Form>
    </div>
  );
}
