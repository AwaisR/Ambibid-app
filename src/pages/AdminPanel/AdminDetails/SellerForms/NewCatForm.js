import React, { useState, useEffect } from 'react';
import { Button, Input, Select, Spin, notification } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { handleSellerFormData } from '../../../../store/product/action';
import { useDispatch } from 'react-redux';
export default function NewCatForm() {
  const [loading, setLoading] = useState(true);
  const [catgories, setCatgories] = useState([]);
  const [catId, setCatId] = useState('');
  const [subCatId, setSubCatId] = useState('');
  const dispatch = useDispatch();
  const { Option } = Select;
  function handleChange(value) {
    setCatId(value);
  }
  const handleChangeSubCat = (value) => {
    dispatch(handleSellerFormData(value));
  };
  useEffect(() => {
    axios
      .post(
        'https://us-central1-amibid-24a48.cloudfunctions.net/admin1-adminGetCategories-default',
        {
          data: {
            adminId: localStorage.getItem('adminId'),
            // uid: '001',
            limit: 10,
            offset: 0,
          },
        },
      )
      .then(
        (response) => {
          const status = response.data.result.status;
          const message = response.data.result.message;
          const data = response.data.result.data;
          if (status == 200) {
            setLoading(false);
            setCatgories(data);
          }
          // if (status == 400) {
          //   dispatch({
          //     type: MyAccountConst.ADD_CARD_SUCCESS,
          //     payload: message,
          //   });
          // }
        },
        (error) => {
          console.log('error', error);
        },
      );
  }, []);
  return (
    <div>
      {loading && (
        <Spin
          size="large"
          style={{ position: 'absolute', top: '50%', right: '50%', left: '50%', zIndex: '999' }}
        />
      )}
      <div className="buyer_header active_header">
        <div className="seller_form_iner">
          <p>Select a category for your form</p>

          <Select defaultValue="Select Category" onChange={handleChange}>
            {catgories &&
              catgories.categories &&
              catgories.categories.map((item) => <Option value={item.id}>{item.name}</Option>)}
          </Select>

          <p className="marg_top">Select a sub-category for your form</p>
          <Select
            defaultValue="Select Sub-category"
            className="bg_orange"
            onChange={handleChangeSubCat}
          >
            {catId
              ? catgories &&
                catgories.subCategories &&
                catgories.subCategories.map((item) => {
                  if (catId === item.parentId) {
                    return <Option value={item.id}>{item.name}</Option>;
                  }
                })
              : ''}
          </Select>
        </div>
        <div className="seller_btn">
          <Link to="/admin-details/Seller forms">Back</Link>
          <Link to="/admin-details/add-feilds">
            <Button className="save_btn">Save</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
