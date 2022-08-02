import React, { useState, useEffect } from 'react';
import { Typography, Space, Select, Button, Form, notification } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { handleProductFormDataChange } from '../../../store/product/action';
import axios from 'axios';
import './catagory.css';
const { Option } = Select;
const { Text, Title } = Typography;
export default function index({ history }) {
  console.log('history', history);
  const {
    productReducer: { productFormData },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [catagories, setCatagories] = useState([]);
  const handleChange = (value, name) => {
    if (value && name) {
      dispatch(handleProductFormDataChange({ name, value }));
    }
  };
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
      .post('https://us-central1-amibid-24a48.cloudfunctions.net/default-getCategories-default', {
        data: {},
      })
      .then(
        (response) => {
          const status = response.data.result;
          setCatagories(status.data.categories);
          console.log(status);
        },
        (error) => {
          console.log('error', error);
        },
      );
  }, []);

  return (
    <div className="catagerios_item_outer">
      <div className="catagerios_item">
        <Title level={5}>Which category does your item belong in?</Title>
        <div className="form_outer">
          <div className="form_list">
            <Text>Which category best fits your item?</Text>
            <Select
              placeholder="Select Category"
              // defaultValue="Select Category"
              name="category"
              onChange={(value) => handleChange(value, 'category')}
              value={productFormData?.category}
            >
              {catagories && catagories.map((item) => <Option value={item.id}>{item.name}</Option>)}
            </Select>
          </div>
          <div className="form_list bg_orange">
            <Text>Which sub-category best fits your item?</Text>
            <Select
              defaultValue="Select Sub-category"
              className="bg_orange"
              onChange={(value) => handleChange(value, 'subCategoryId')}
              value={productFormData?.subCategoryId}
              on
            >
              {/* <Option>jhddhd</Option>; */}
              {catagories &&
                catagories.map((item) =>
                  item.subCategories.map((cat) => {
                    if (productFormData.category) {
                      if (cat.parentId === productFormData?.category) {
                        return <Option value={cat.id}>{cat.name}</Option>;
                      }
                    }
                  }),
                )}
            </Select>
          </div>
        </div>
      </div>

      <Button
        className="con_btn"
        onClick={() =>
          productFormData?.category && productFormData?.subCategoryId
            ? history.push('/List-items/Photos')
            : openNotificationWithIcon('error', 'Please Select values')
        }
      >
        {/* <Link
          to={`${
            productFormData?.category && productFormData?.subCategoryId && '/List-items/Photos'
          }`}
        > */}
        Continue
        {/* </Link> */}
      </Button>
    </div>
  );
}
